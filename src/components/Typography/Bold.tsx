import * as React from "react"
import { css } from "@styled-system/css"

type BoldProps = {
    children: React.ReactNode
}

const Bold = ({ children }: BoldProps): React.ReactElement => (
    <>
        <strong
            className={css({
                fontWeight: "bold",
                color: "sectionText",
            })}
        >
            {children}
        </strong>
        <br />
    </>
)

export default Bold
