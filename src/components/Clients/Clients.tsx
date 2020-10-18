import React, { useState } from "react"

import { BREAKPOINTS } from "../../gatsby-plugin-theme-ui/index"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import IconExternal from "../Icons/IconExternal"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { supportsWebP } from "../../helpers/support/webp"
import { useThemeUI } from "theme-ui"

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
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        flex-wrap: nowrap;
    }
`

const LogoCommon = () => css`
    flex: 1;
    flex-basis: 19%;
    margin-right: 5%;
    filter: grayscale(1);
    opacity: 0.4;
    max-width: 75px;
    height: auto;
    transition: opacity 0.15s ease-in;
    &:hover {
        opacity: 1;
    }
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        max-width: 120px;
    }
`

const Logo = styled.img`
    ${LogoCommon}
`

const IconLogo = styled(IconExternal)`
    ${LogoCommon}
`

type ILogoType = {
    name: string
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
    const context = useThemeUI()
    const { theme } = context

    return (
        <>
            <ClientsContainer vPadding>
                <Heading
                    level="h3"
                    override="h2"
                    textAlign="center"
                    marginBottom={`${theme.space.common[3]}`}
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

                        return (
                            <React.Fragment key={i}>
                                {svg ? (
                                    <IconLogo
                                        width="100px"
                                        iconSvg={imageSrc as string}
                                        key={i}
                                    />
                                ) : (
                                    <Logo
                                        alt={logo.name}
                                        srcSet={`${imageSrc.small} 1x, ${imageSrc.large} 2x`}
                                        src={imageSrc.large}
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
