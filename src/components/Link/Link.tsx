import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"

const duration: number = 0.25

type LinkProps = {
    to: string
    children: any
}

const FadeLink = ({ children, to, ...props }: LinkProps) => {
    return (
        <AniLink fade to={to} duration={duration} {...props}>
            {children}
        </AniLink>
    )
}

export default FadeLink
