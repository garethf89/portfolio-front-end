import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const HeaderStyles = styled.header`
    font-size: 2rem;
`

const Header = ({ siteTitle }) => (
    <HeaderStyles>
        <header>
            <h1>
                <Link to="/">{siteTitle}</Link>
            </h1>
        </header>
    </HeaderStyles>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
