import * as React from "react"

import { useEffect, useState } from "react"

import { BREAKPOINTS } from "../../@chakra-ui/theme"
import { ColorPicker, MobileMenu } from "@components"
import NavigationLink from "./NavigationLink"
import debounce from "../../helpers/debounce"
import { isWindow } from "../../helpers/isWindow"
import styled from "@emotion/styled"
import config from "../../config/site"

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

    const { menuLinks } = config

    const checkMobile = () => {
        if (isWindow && window.innerWidth >= parseInt(BREAKPOINTS.MEDIUM, 16)) {
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
        if (isWindow()) {
            checkMobile()
            window.addEventListener("resize", throttled)
        }

        return function cleanup() {
            if (isWindow) {
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
                {menuLinks.map((link, i) => {
                    const internal = /^\/(?!\/)/.test(link.slug)
                    return (
                        <NavLi key={link.name + i}>
                            <NavigationLink
                                internal={internal}
                                href={link.slug}
                            >
                                <span>{link.name}</span>
                            </NavigationLink>
                        </NavLi>
                    )
                })}
                <NavLi key={"color-nav"}>
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
