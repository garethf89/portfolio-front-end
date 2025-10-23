import * as React from "react"
import { css } from "@styled-system/css"

type BoldProps = {
    children: React.ReactNode
}

const Bold = ({ children }: BoldProps): React.ReactElement => (
    <>
        <span
            className={css({
                color: "sectionText",
            })}
        >
            {children}
        </span>
        <br />
    </>
)

export default Bold
