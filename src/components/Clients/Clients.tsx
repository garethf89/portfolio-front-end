import { useColorMode } from "@chakra-ui/react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { AssetFields } from "contentful"
import * as React from "react"
import { ILogoFields } from "../../../@types/generated/contentful"
import {
    BREAKPOINTS,
    COLORS,
    SPACE,
} from "../../@chakra-ui/gatsby-plugin/theme"
import { useIsDark } from "../../hooks/useIsDark"
import Image from "../Common/Image"
import Container from "../Global/Container/Container"
import IconExternal from "../Icons/IconExternal"
import Heading from "../Typography/Heading"

type ClientsProps = {
    mode: string
    dark: boolean
}

const ClientsContainer = styled(Container)`
    margin-top: 2rem;
`

const LogoWrapper = styled.div`
    position: relative;
    max-width: 800px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: 5px;
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        flex-wrap: nowrap;
    }
`

const LogoCommon = (props: ClientsProps) => css`
    flex: 1;
    flex-basis: 19%;
    margin-right: 5%;
    filter: ${props.mode === "dark" ? "none" : "grayscale(1)"};
    opacity: ${props.mode === "dark" ? "1" : "0.4"};
    max-width: 75px;
    height: auto;
    transition: opacity 0.15s ease-in;
    &:hover {
        opacity: 1;
    }
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        max-width: 120px;
    }
    path {
        fill: ${props.dark ? COLORS.white : ""};
    }
`

const Logo = styled(Image)`
    ${LogoCommon}
`

const IconLogo = styled(IconExternal, {
    shouldForwardProp: prop => prop !== "dark",
})`
    ${LogoCommon}
`

interface ClientProps {
    data: ILogoFields[]
}

type SVGAssetFields = AssetFields & { svg?: { content: string } }

const Clients = ({ data }: ClientProps): React.ReactElement<ClientProps> => {
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
                    {data.map((logo: ILogoFields, i: number) => {
                        const logoFields = logo.logo as SVGAssetFields
                        const svg =
                            logoFields.file.contentType === "image/svg+xml"
                        const isDark = useIsDark(logo?.dark)
                        return (
                            <React.Fragment key={i}>
                                {svg ? (
                                    <IconLogo
                                        mode={colorMode}
                                        width="100px"
                                        iconSvg={logoFields.svg.content}
                                        dark={isDark}
                                        key={i}
                                    />
                                ) : (
                                    <Logo
                                        mode={colorMode}
                                        alt={logo.name}
                                        loading="lazy"
                                        image={logo.logo}
                                        dark={isDark}
                                        key={i}
                                        objectFit="contain"
                                    />
                                )}
                            </React.Fragment>
                        )
                    })}
                </LogoWrapper>
            </ClientsContainer>
        </>
    )
}

export default Clients
