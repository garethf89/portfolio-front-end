"use client"

import { useColorMode } from "@chakra-ui/react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import * as React from "react"
import { BREAKPOINTS, COLORS, SPACE } from "../../@chakra-ui/theme"
import { useIsDark } from "../../hooks/useIsDark"
import Image from "../Common/Image"
import Container from "../Global/Container/Container"
import IconExternal from "../Icons/IconExternal"
import Heading from "../Typography/Heading"
import { nanoid } from "nanoid"
import { HomePageLogosCollection } from "@schema"
import { CustomImageAsset, IconsProcessed } from "@types"

type ClientsProps = {
    mode: string
    dark: boolean
}

const ClientsContainer = styled(Container)`
    margin-top: 2rem;
`

const LogoWrapper = styled.div`
    position: relative;
    max-width: 700px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: 5px;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        flex-wrap: nowrap;
        grid-template-columns: repeat(5, 1fr);
    }
`

const LogoCommon = (props: ClientsProps) => css`
    margin-bottom: 2rem;
    filter: ${props.mode === "dark" ? "none" : "grayscale(1)"};
    opacity: ${props.mode === "dark" ? "1" : "0.4"};
    max-width: 75px;
    height: auto;
    transition: opacity 0.15s ease-in;
    min-height: 50px;
    margin: 0 auto;
    position: relative;

    &:hover {
        opacity: 1;
    }
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        margin-bottom: 0;
    }
    path {
        fill: ${props.dark ? COLORS.white : ""};
    }
`

const Logo = styled.div`
    ${LogoCommon}
    width: 100%;
`

const IconLogo = styled(IconExternal, {
    shouldForwardProp: prop => prop !== "dark",
})`
    ${LogoCommon}
    position:relative;
`

interface ClientProps {
    data: HomePageLogosCollection["items"]
    icons: IconsProcessed[]
}

const Clients = ({
    data,
    icons,
}: ClientProps): React.ReactElement<ClientProps> => {
    const { colorMode } = useColorMode()
    return (
        <>
            <ClientsContainer vPadding>
                <Heading
                    level="h3"
                    override="h2"
                    textAlign="center"
                    marginBottom={`${SPACE.common[3]}`}
                >
                    Clients I have worked with
                </Heading>
                <LogoWrapper>
                    {data.map((logo, i: number) => {
                        const logoFields = logo?.logo as CustomImageAsset

                        if (!logoFields || !logo) {
                            return <></>
                        }

                        const svg = logoFields.contentType === "image/svg+xml"
                        const isDark = useIsDark(!!logo.dark)

                        if (svg) {
                            const iconSvg = icons.find(
                                icon => icon.url === logoFields.url
                            )

                            if (!iconSvg) {
                                return <></>
                            }

                            return (
                                <div key={`client-${nanoid()}`}>
                                    <IconLogo
                                        mode={colorMode}
                                        dark={isDark}
                                        title={logo.name ?? ""}
                                        iconSvg={iconSvg.url}
                                        width={logoFields.width ?? ""}
                                        height={logoFields.height ?? ""}
                                    />
                                </div>
                            )
                        }

                        return (
                            <div key={`client-${nanoid()}`}>
                                <Logo
                                    mode={colorMode}
                                    dark={isDark}
                                    key={`client-${i}`}
                                    style={{ maxHeight: "50px" }}
                                >
                                    <Image
                                        image={logoFields}
                                        alt={logo.name ?? ""}
                                        style={{
                                            objectFit: "contain",
                                            height: "100%",
                                        }}
                                        fill
                                    />
                                </Logo>
                            </div>
                        )
                    })}
                </LogoWrapper>
            </ClientsContainer>
        </>
    )
}

export default Clients
