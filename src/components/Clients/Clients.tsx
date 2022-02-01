import { useColorMode } from "@chakra-ui/react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import * as React from "react"
import { useState } from "react"
import {
  BREAKPOINTS,
  COLORS,
  SPACE
} from "../../@chakra-ui/gatsby-plugin/theme"
import { supportsWebP } from "../../helpers/support/webp"
import { useIsDark } from "../../hooks/useIsDark"
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

const Logo = styled.img`
    ${LogoCommon}
`

const IconLogo = styled(IconExternal, {
    shouldForwardProp: prop => prop !== "dark",
})`
    ${LogoCommon}
`

type ILogoType = {
    name: string
    dark: boolean
    logo: {
        svg: {
            content: string
        }
        file: {
            contentType: string
        }
        icon1x: {
            src: string
            srcWebp: string
        }
        icon2x: {
            src: string
            srcWebp: string
        }
    }
}

interface ClientProps {
    data: ILogoType[]
}

const Clients = ({ data }: ClientProps): React.ReactElement<ClientProps> => {
    const [webP] = useState(() => supportsWebP)
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
                    {data.map((logo: ILogoType, i: number) => {
                        const svg =
                            logo.logo.file.contentType === "image/svg+xml"

                        const imageSrc = svg
                            ? logo.logo.svg.content
                            : {
                                  small: webP
                                      ? logo.logo.icon1x.srcWebp
                                      : logo.logo.icon1x.src,
                                  large: webP
                                      ? logo.logo.icon2x.srcWebp
                                      : logo.logo.icon2x.src,
                              }
                        const isDark = useIsDark(logo.dark)
                        return (
                            <React.Fragment key={i}>
                                {svg ? (
                                    <IconLogo
                                        mode={colorMode}
                                        width="100px"
                                        iconSvg={imageSrc as string}
                                        dark={isDark}
                                        key={i}
                                    />
                                ) : (
                                    <Logo
                                        mode={colorMode}
                                        alt={logo.name}
                                        loading="lazy"
                                        srcSet={`${imageSrc.small} 1x, ${imageSrc.large} 2x`}
                                        src={imageSrc.large}
                                        dark={isDark}
                                        key={i}
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
