import * as React from "react"

import Arrow from "../../svgs/arrow"
import FadeLink from "../Link/Link"
import { css } from "@styled-system/css"

interface BackLinkProps {
    text?: string
}

const BackLink: React.FC<BackLinkProps> = ({
    text = "Back",
}): React.ReactElement => {
    return (
        <FadeLink
            href="/"
            className={css({
                display: "flex",
                alignItems: "center",
                gap: "1",
                color: "inherit",
                textDecoration: "none",
                fontWeight: 700,
                cursor: "pointer",
            })}
        >
            <Arrow css={{ height: 7 }} />
            {text}
        </FadeLink>
    )
}
export default BackLink
