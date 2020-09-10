import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"

const duration: number = 0.25

type LinkProps = {
    to: string
    children?: any
    dark?: string
} & React.LinkHTMLAttributes<any>

const FadeLink = ({ children, to, ...props }: LinkProps): AniLink => {
    return (
        <AniLink fade to={to} duration={duration} {...props}>
            {children}
        </AniLink>
    )
}

export default FadeLink
