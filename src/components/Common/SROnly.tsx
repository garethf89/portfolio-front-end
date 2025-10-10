import * as React from "react"
import { css, cx } from "@styled-system/css"

interface SROnlyProps extends React.HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode
}

export const SROnly = ({
    children,
    className,
    ...props
}: SROnlyProps): React.ReactElement => {
    return (
        <span
            className={cx(
                css({
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    margin: "-1px",
                    padding: "0",
                    border: "0",
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                }),
                className
            )}
            {...props}
        >
            {children}
        </span>
    )
}
