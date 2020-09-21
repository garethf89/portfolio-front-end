import Heading, { HeadingProps } from "../Typography/Heading"

import Container from "../Global/Container/Container"
import FadeLink from "../Link/Link"
import LinkedInIcon from "../../svgs/linkedin"
import React from "react"
import { StyledComponentProps } from "../../../@types/types"
import styled from "@emotion/styled"

const FooterCopyright = styled.p`
    margin: 1rem 0 0;
    color: ${(props: StyledComponentProps) =>
        props.theme.colors.sectionTextSecondary};
`

const FooterOuter = styled.footer`
    background: ${(props: StyledComponentProps) => props.theme.colors.footerBg};
    color: ${(props: StyledComponentProps) => props.theme.colors.sectionText};
`

const FooterLink = styled.a`
    color: ${(props: StyledComponentProps) => props.theme.colors.sectionText};
`

const FooterContent = styled.div``

const FooterHeading = styled(Heading)<HeadingProps>`
    margin-bottom: 2rem;
    text-align: left;

    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.small}) {
        margin: 0;
        align-self: center;
    }
`

const FooterContainer = styled(Container)`
    padding-top: 2rem;
    padding-bottom: 2rem;
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`

const Footer = (): React.ReactElement<any> => {
    const year = new Date().getFullYear()
    return (
        <FooterOuter>
            <FooterContainer useflex justifyContent="space-between">
                <FooterHeading level="h3" marginTop="25px">
                    <FadeLink to="/contact">Contact Me</FadeLink>
                </FooterHeading>
                <FooterContent>
                    <FooterLink
                        rel="noopener"
                        aria-label="LinkedIn"
                        href="//uk.linkedin.com/in/garethferguson1"
                    >
                        <LinkedInIcon
                            iconSize="small"
                            width="30px"
                            height="30px"
                        />
                    </FooterLink>
                    <FooterCopyright>Gareth Ferguson {year}</FooterCopyright>
                </FooterContent>
            </FooterContainer>
        </FooterOuter>
    )
}

export default Footer
