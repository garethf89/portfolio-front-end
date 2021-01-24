import React, { useEffect, useState } from "react"

import { BREAKPOINTS } from "../../gatsby-plugin-theme-ui"
import ColorPicker from "./ColorPicker"
import MobileMenu from "./MobileMenu/MobileMenu"
import NavigationLink from "./NavigationLink"
import debounce from "../../helpers/debounce"
import { gatsbyWindow } from "../../helpers/gatsbyWindow"
import styled from "@emotion/styled"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const NavigationStyles = styled.nav``

const NavMobile = styled.div`
    display: block;
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        display: none;
    }
`

type NavULProps = { active: boolean; animate: boolean }

const NavList = styled.ul<NavULProps>`
    margin: 0;
    padding: 0;
    text-align: center;
    list-style-type: none;
    height: 100%;
    display: ${props => (props.active ? "flex" : "none")};
    background: ${props => props.theme.colors.sectionBackground};
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    flex-direction: column;
    justify-content: center;
    animation: ${props => (props.animate ? "fadeOut" : "fadeIn")} 0.5s;
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        animation: none;
        position: static;
        display: block;
        flex-direction: row;
        justify-content: right;
    }
`

const NavLi = styled.li`
    display: inline-block;
    width: auto;
    padding-bottom: 2rem;
    &:last-of-type {
        padding-bottom: 0;
    }
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        padding-left: 2rem;
    }
`

const Navigation = (): React.ReactElement => {
    const [mobile, setMobile] = useState(false)
    const [active, setActive] = useState(false)
    const [animate, setAnimate] = useState(false)

    const { menuLinks } = useSiteMetadata()

    const checkMobile = () => {
        if (
            gatsbyWindow &&
            window.innerWidth >= parseInt(BREAKPOINTS.MEDIUM, 16)
        ) {
            setMobile(false)
        } else {
            setMobile(true)
        }
        setActive(false)
    }

    const throttled = debounce(() => {
        checkMobile()
    }, 200)

    useEffect(() => {
        if (gatsbyWindow()) {
            checkMobile()
            window.addEventListener("resize", throttled)
        }

        return function cleanup() {
            if (gatsbyWindow) {
                window.removeEventListener("resize", throttled)
            }
        }
    }, [])

    const toggle = (direction: boolean) => {
        if (direction) {
            setAnimate(false)
            setActive(direction)
        } else {
            setAnimate(true)
            setTimeout(() => setActive(direction), 500)
        }
    }

    return (
        <NavigationStyles>
            <NavList animate={animate} active={active}>
                {menuLinks.map(link => {
                    const internal = /^\/(?!\/)/.test(link.slug)
                    return (
                        <NavLi key={link.name}>
                            <NavigationLink internal={internal} to={link.slug}>
                                <span>{link.name}</span>
                            </NavigationLink>
                        </NavLi>
                    )
                })}
                <NavLi>
                    <ColorPicker />
                </NavLi>
            </NavList>
            {mobile && (
                <NavMobile>
                    <MobileMenu
                        scale={0.5}
                        onClick={() => {
                            toggle(!active)
                        }}
                    />
                </NavMobile>
            )}
        </NavigationStyles>
    )
}

export default Navigation
