import FadeLink from "../Link/Link"
import { LinkProps as NextLinkProps } from "next/link"
import * as React from "react"
import { css } from "@styled-system/css"

type NavigationLinkProps = {
    button?: boolean
    internal?: boolean
    click?: () => void
    hover?: () => void
    children?: React.ReactNode
} & NextLinkProps

const linkStyles = css({
    fontSize: "16px",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-block",
    color: "#ffffff",
    opacity: 1,
    transition: "opacity 0.5s ease-in-out",
    position: "relative",
    outline: 0,
    background: "transparent",
    border: "none",
    padding: 0,
    lineHeight: 1.3,
    fontWeight: 300,
    letterSpacing: "2px",
    cursor: "pointer",
    "& span": {
        position: "relative",
    },
    "& span::after": {
        transition: "all 0.5s ease-in-out",
        content: '" "',
        background: "#ffffff",
        position: "absolute",
        bottom: "-4px",
        left: "0",
        width: "0%",
        height: "1px",
    },
    "&:focus, &:hover": {
        opacity: 0.8,
        "& span::after": {
            width: "100%",
        },
    },
})

const NavigationLink = ({
    children,
    button,
    href,
    click,
    hover,
    internal = false,
}: NavigationLinkProps): React.ReactElement => {
    if (button) {
        return (
            <button className={linkStyles} onMouseEnter={hover} onClick={click}>
                {children}
            </button>
        )
    }

    return internal ? (
        <FadeLink href={href} className={linkStyles}>
            {children}
        </FadeLink>
    ) : (
        <a href={href as string} className={linkStyles}>
            {children}
        </a>
    )
}

export default NavigationLink
