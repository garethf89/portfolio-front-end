import * as React from "react"
import { LinkProps as NextLinkProps } from "next/link"
import { Link } from "next-view-transitions"

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
