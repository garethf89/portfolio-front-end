import * as React from "react"
import { css } from "@styled-system/css"

import FadeLink from "../Link/Link"

interface ReadMoreProps {
    children?: React.ReactNode
    href: string
}

const ReadMore = ({
    children,
    href,
    ...props
}: ReadMoreProps): React.ReactElement => (
    <FadeLink
        href={href}
        className={css({
            fontWeight: "400",
            display: "inline",
            position: "relative",
            overflow: "visible",
            color: "#ffffff",
            "&:active, &:visited": {
                color: "#ffffff",
            },
        })}
        {...props}
    >
        {children}
    </FadeLink>
)

export default ReadMore
