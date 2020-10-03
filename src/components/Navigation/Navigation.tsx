import { BREAKPOINTS } from "../../gatsby-plugin-theme-ui"
import ColorPicker from "./ColorPicker"
import NavigationLink from "./NavigationLink"
import React from "react"
import styled from "@emotion/styled"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const NavigationStyles = styled.nav`
    display: none;
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        display: block;
    }
`

const NavList = styled.ul`
    margin: 0;
    text-align: center;
    list-style-type: none;
    height: 100%;
    display: flex;
    justify-content: right;
    padding-right: 3rem;
`

const NavLi = styled.li`
    display: inline-block;
    width: auto;
    padding-left: 2rem;
`

const Navigation = () => {
    const { menuLinks } = useSiteMetadata()

    return (
        <NavigationStyles>
            <NavList>
                {menuLinks.map(link => (
                    <NavLi key={link.name}>
                        <NavigationLink to={link.slug}>
                            <span>{link.name}</span>
                        </NavigationLink>
                    </NavLi>
                ))}
                <NavLi>
                    <ColorPicker />
                </NavLi>
            </NavList>
        </NavigationStyles>
    )
}

export default Navigation
