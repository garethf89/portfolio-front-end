import * as React from "react"
import Link, { LinkProps as NextLinkProps } from "next/link"

type LinkProps = NextLinkProps &
    React.HTMLAttributes<HTMLAnchorElement> & {
        children?: React.ReactNode
        dark?: string
    }

const FadeLink = ({
    children,
    href,
    ...props
}: LinkProps): React.ReactElement => {
    return (
        <Link href={href ?? "/"} {...props}>
            {children}
        </Link>
    )
}

export default FadeLink
