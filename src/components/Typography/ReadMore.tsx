import * as React from "react"
import { css } from "@styled-system/css"
import Arrow from "../../svgs/light-arrow"

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
            textTransform: "uppercase",
            fontWeight: "600",
            display: "inline",
            position: "relative",
            overflow: "visible",
            color: "linkBlue",
            transition: "opacity 0.25s",
            "&:hover": { opacity: 0.75 },
            "&:active, &:visited": {
                color: "linkBlue",
            },
        })}
        {...props}
    >
        {children}
        <Arrow
            aria-hidden="true"
            css={{
                verticalAlign: "middle",
                marginLeft: "0.5rem",
            }}
        />
    </FadeLink>
)

export default ReadMore
