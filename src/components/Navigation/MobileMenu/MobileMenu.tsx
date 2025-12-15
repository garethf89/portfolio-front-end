import { useEffect, useState } from "react"
import * as React from "react"

import debounce from "../../../helpers/debounce"
import { isWindow } from "../../../helpers/isWindow"
import { css, cva } from "@styled-system/css"

type MobileMenuProps = {
    onClick: () => void
}

const mobileHamburgerStyles = css({
    cursor: "pointer",
    display: "inline-block",
    transform: " scale(0.5)",
})

export const mobileLineStyles = cva({
    base: {
        width: "3rem",
        height: "5px",
        backgroundColor: "#fff",
        display: "block",
        margin: "8px 0.5rem 8px auto",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",

        _hover: {
            cursor: "pointer",
        },
    },
    variants: {
        active: {
            true: {},
            false: {},
        },
        line: {
            first: {
                // Will be combined with active variant
            },
            second: {
                // Will be combined with active variant
            },
            third: {
                // Will be combined with active variant
            },
        },
    },
    compoundVariants: [
        {
            line: "first",
            active: true,
            css: {
                transform: "translateY(13px) rotate(45deg)",
            },
        },
        {
            line: "first",
            active: false,
            css: {
                transform: "translateY(0) rotate(0)",
            },
        },
        {
            line: "second",
            active: true,
            css: {
                opacity: "0",
            },
        },
        {
            line: "second",
            active: false,
            css: {
                opacity: "1",
            },
        },
        {
            line: "third",
            active: true,
            css: {
                transform: "translateY(-13px) rotate(-45deg)",
            },
        },
        {
            line: "third",
            active: false,
            css: {
                transform: "translateY(0) rotate(0)",
            },
        },
    ],
})

const MobileMenu = ({ onClick }: MobileMenuProps): React.ReactElement => {
    const [active, setActive] = useState(false)
    const click = () => {
        setActive(!active)
        onClick()
    }
    const throttled = debounce(() => {
        setActive(false)
    }, 200)

    useEffect(() => {
        if (isWindow()) {
            window.addEventListener("resize", throttled)
        }

        return function cleanup() {
            if (isWindow()) {
                window.removeEventListener("resize", throttled)
            }
        }
    }, [])
    return (
        <div className={mobileHamburgerStyles} onClick={click}>
            <span className={mobileLineStyles({ active, line: "first" })} />
            <span className={mobileLineStyles({ active, line: "second" })} />
            <span className={mobileLineStyles({ active, line: "third" })} />
        </div>
    )
}

export default MobileMenu
