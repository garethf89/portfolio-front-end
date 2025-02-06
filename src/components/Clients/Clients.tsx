"use client"

import styled from "@emotion/styled"
import * as React from "react"
import Image from "../Common/Image"
import Container from "../Global/Container/Container"
import IconExternal from "../Icons/IconExternal"
import Heading from "../Typography/Heading"
import { nanoid } from "nanoid"
import { HomePageLogosCollection } from "@schema"
import { CustomImageAsset, IconsProcessed } from "@types"
import { BREAKPOINTS } from "@theme"
import { css } from "@styled-system/css"
import { useIsDark } from "../../hooks"
import type { SystemStyleObject } from "@styled-system/types"

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

    @media (min-width: ${BREAKPOINTS.sm}) {
        flex-wrap: nowrap;
        grid-template-columns: repeat(5, 1fr);
    }
`

type LogoProps = React.PropsWithChildren<{
    css?: SystemStyleObject
    dark?: boolean
}>

const LogoStyles = ({ dark }: LogoProps) => {
    return css.raw({
        filter: dark ? "none" : "grayscale(1)",
        opacity: dark ? "1" : "0.4",
        maxWidth: "75px",
        height: "auto",
        transition: "opacity 0.15s ease-in",
        minHeight: "50px",
        margin: "0 auto",
        marginBottom: ["2rem", 0],
        position: "relative",
        _hover: {
            opacity: 1,
        },
        "& path": {
            fill: dark ? "svgFill" : "",
        },
    })
}

const Logo = ({ css: cssProp, children, dark }: LogoProps) => {
    return <div className={css(LogoStyles({ dark }), cssProp)}>{children}</div>
}

interface ClientProps {
    data: HomePageLogosCollection["items"]
    icons: IconsProcessed[]
}

const Clients = ({
    data,
    icons,
}: ClientProps): React.ReactElement<ClientProps> => {
    return (
        <ClientsContainer vPadding>
            <Heading
                level="h3"
                override="h2"
                textAlign="center"
                marginBottom={`var(--spacing-10)`}
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
                                <IconExternal
                                    title={logo.name ?? ""}
                                    src={iconSvg.url}
                                    width={logoFields.width ?? ""}
                                    height={logoFields.height ?? ""}
                                    styles={LogoStyles({ dark: isDark })}
                                />
                            </div>
                        )
                    }

                    return (
                        <div key={`client-${nanoid()}`}>
                            <Logo
                                dark={isDark}
                                key={`client-${i}`}
                                css={{ maxHeight: "50px" }}
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
    )
}

export default Clients
