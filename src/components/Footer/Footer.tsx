import * as React from "react"

import { BREAKPOINTS, SPACE } from "../../@chakra-ui/theme"
import Heading, { HeadingProps } from "../Typography/Heading"

import FadeLink from "../Link/Link"
import Flex from "../Global/Container/Flex"
import GitHubIcon from "../../svgs/github"
import LinkedInIcon from "../../svgs/linkedin"
import styled from "@emotion/styled"

const FooterCopyright = styled.p`
    margin: 1rem 0 0;
    color: ${props => props.theme.colors.sectionTextSecondary};
`

const FooterOuter = styled.footer`
    background: ${props => props.theme.colors.footerBg};
    color: ${props => props.theme.colors.sectionText};
`

const FooterLink = styled.a`
    color: ${props => props.theme.colors.sectionText};
    margin-right: 1rem;
    &:last-of-type {
        margin-right: 0;
    }
`

const FooterContent = styled.div``

const FooterHeading = styled(Heading)<HeadingProps>`
    margin-bottom: ${SPACE.common[3]};
    text-align: left;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        margin: 0;
        align-self: center;
    }
`

const FooterContainer = styled(Flex)`
    padding-top: 2rem;
    padding-bottom: 2rem;
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`

const Footer = (): React.ReactElement<HTMLDivElement> => {
    const year = new Date().getFullYear()
    return (
        <FooterOuter>
            <FooterContainer justifyContent="space-between">
                <FooterHeading level="h3" marginTop="25px">
                    <FadeLink href="/contact">Contact Me</FadeLink>
                </FooterHeading>
                <FooterContent>
                    <FooterLink
                        rel="noopener"
                        aria-label="LinkedIn"
                        href="//uk.linkedin.com/in/garethferguson1"
                    >
                        <LinkedInIcon boxSize={8} />
                    </FooterLink>
                    <FooterLink
                        rel="noopener"
                        aria-label="Github"
                        href="//github.com/garethf89"
                    >
                        <GitHubIcon boxSize={8} />
                    </FooterLink>
                    <FooterCopyright>Gareth Ferguson {year}</FooterCopyright>
                </FooterContent>
            </FooterContainer>
        </FooterOuter>
    )
}

export default Footer
