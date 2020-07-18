import Container from "../Global/Container/Container"
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import theme from "../../gatsby-plugin-theme-ui"

const HeaderStyles = styled.header`
    font-size: 2rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 2;
    padding: 3rem 0;
`

interface HeaderProps {
    siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
    <HeaderStyles>
        <Container
            useflex
            justifyContent="space-between"
            maxWidth={`calc(${theme.sizes["maxWidth"]} + 9rem)`}
        >
            <Logo siteTitle={siteTitle} />
            <Navigation />
        </Container>
    </HeaderStyles>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
