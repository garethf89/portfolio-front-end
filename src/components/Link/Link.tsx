import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

const duration = 0.25

interface IProps {
    children: React.ReactNode
    node?: React.ReactNode
    url: string
}

const exitTransition = {
    length: duration,
    zIndex: 2,
    trigger: ({ node }: IProps) => {
        exitTransition.exitTrigger(node)
        if (node) (node as HTMLElement).style.top = -window.pageYOffset + "px"
        window.scrollTo({ top: -window.pageYOffset })
    },
    exitTrigger: container => {
        container.setAttribute(
            "style",
            `animation: fadeOut ${duration}s ease forwards;`
        )
    },
}

const entryTransition = {
    zIndex: 1,
    trigger: () => {
        entryTransition.entryTrigger()
    },
    entryTrigger: () => container => {
        container.setAttribute(
            "style",
            `animation: fadeIn ${duration}s ease forwards;`
        )
    },
}

type LinkProps = {
    to: string
    children?: React.ReactNode
    dark?: string
} & React.LinkHTMLAttributes<HTMLLinkElement>

const FadeLink = ({ children, to, ...props }: LinkProps): TransitionLink => {
    return (
        <TransitionLink
            exit={exitTransition}
            entry={entryTransition}
            to={to}
            {...props}
        >
            {children}
        </TransitionLink>
    )
}

export default FadeLink
