import Container from "../Global/Container"
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const HeaderStyles = styled.header`
    font-size: 2rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 2;
    padding: 3rem 0;
`

const HomeContainer = styled(Container)`
    max-width: calc(
        ${(props: StyledComponentProps) => props.theme.sizes.maxWidth} + 9rem
    );
    display: flex;
    justify-content: space-between;
`

interface HeaderProps {
    siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
    <HeaderStyles>
        <HomeContainer>
            <Logo siteTitle />
            <Navigation />
        </HomeContainer>
    </HeaderStyles>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
