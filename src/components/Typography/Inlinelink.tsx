import * as React from "react"
import { css } from "@styled-system/css"

import FadeLink from "../Link/Link"

type InlineLinkProps = {
    children: React.ReactNode
    href: string
}

const Inlinelink = ({
    children,
    href,
}: InlineLinkProps): React.ReactElement => (
    <>
        <FadeLink
            href={href}
            className={css({
                fontWeight: "400",
                display: "inline",
                position: "relative",
                overflow: "visible",
                "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: "0",
                    height: "1px",
                    width: "100%",
                    background: "text",
                },
            })}
        >
            {children}
        </FadeLink>
    </>
)

export default Inlinelink
