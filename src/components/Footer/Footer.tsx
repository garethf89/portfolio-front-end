import Heading, { HeadingProps } from "../Typography/Heading"

import Container from "../Global/Container/Container"
import { Link } from "gatsby"
import LinkedInIcon from "../../svgs/linkedin"
import React from "react"
import styled from "@emotion/styled"

const FooterCopyright = styled.p`
    margin: 1rem 0 0;
    color: ${(props: StyledComponentProps) =>
        props.theme.colors.sectionTextSecondary};
`

const FooterOuter = styled.footer`
    background: ${(props: StyledComponentProps) =>
        props.theme.colors.sectionBackground};
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

const Footer = (): React.ReactElement<any> => {
    const year = new Date().getFullYear()
    return (
        <FooterOuter>
            <Container p="2.5rem 1.5rem" useflex justifyContent="space-between">
            <FooterHeading level="h3" marginTop="25px">
                    <Link to="/contact">Contact Me</Link>
                </FooterHeading>
                <FooterContent>
                    <FooterLink
                        rel="noopener"
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
            </Container>
        </FooterOuter>
    )
}

export default Footer
