import React, { useState } from "react"

import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import IconExternal from "../Icons/IconExternal"
import { StyledComponentProps } from "../../../@types/types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { supportsWebP } from "../../helpers/support/webp"

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
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.small}) {
        flex-wrap: nowrap;
    }
`

const LogoCommon = props => css`
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
    @media (min-width: ${props.theme.breakpoint.small}) {
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
    return (
        <>
            <ClientsContainer vPadding>
                <Heading
                    level="h3"
                    override="h2"
                    textAlign="center"
                    marginBottom="3rem"
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
