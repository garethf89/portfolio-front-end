import * as React from "react"

import { useEffect, useState } from "react"

import { ColorPicker, MobileMenu } from "@components"
import NavigationLink from "./NavigationLink"
import debounce from "../../helpers/debounce"
import { isWindow } from "../../helpers/isWindow"
import config from "../../config/site"
import { css } from "@styled-system/css"

const mobileNavStyles = css({
    display: "block",
    md: { display: "none" },
})

const navListStyles = css.raw({
    margin: 0,
    padding: 0,
    textAlign: "center",
    listStyleType: "none",
    height: "100%",
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    flexDirection: "column",
    justifyContent: "center",
    background: "sectionBackground",
    md: {
        animation: "none",
        position: "static",
        display: "block",
        flexDirection: "row",
        justifyContent: "right",
    },
})

const navListItemStyles = css({
    display: "inline-block",
    width: "auto",
    paddingBottom: 8,
    "&:last-of-type": {
        paddingBottom: 0,
    },
    md: {
        paddingLeft: 8,
    },
})

const Navigation = (): React.ReactElement => {
    const [active, setActive] = useState(false)
    const [animate, setAnimate] = useState(false)

    const { menuLinks } = config

    const checkMobile = () => {
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
            if (isWindow()) {
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
        <nav>
            <ul
                className={css(
                    navListStyles,
                    css.raw({
                        display: active ? "flex" : "none",
                        animation: animate ? "fadeOut" : "fadeIn",
                    })
                )}
            >
                {menuLinks.map((link, i) => {
                    const internal = /^\/(?!\/)/.test(link.slug)
                    return (
                        <li key={link.name + i} className={navListItemStyles}>
                            <NavigationLink
                                internal={internal}
                                href={link.slug}
                            >
                                <span>{link.name}</span>
                            </NavigationLink>
                        </li>
                    )
                })}
                <li key={"color-nav"} className={navListItemStyles}>
                    <ColorPicker />
                </li>
            </ul>
            <div className={mobileNavStyles}>
                <MobileMenu
                    scale={0.5}
                    onClick={() => {
                        toggle(!active)
                    }}
                />
            </div>
        </nav>
    )
}

export default Navigation
