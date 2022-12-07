import * as React from "react"
import Link, { LinkProps as NextLinkProps } from "next/link"

type LinkProps = {
    to: string
    children?: React.ReactNode
    dark?: string
} & NextLinkProps

const FadeLink = ({
    children,
    to,
    ...props
}: LinkProps): React.ReactElement => {
    return (
        <Link href={to} {...props}>
            {children}
        </Link>
    )
}

export default FadeLink
