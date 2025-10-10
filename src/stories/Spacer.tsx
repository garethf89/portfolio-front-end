import * as React from "react"
import { css, cx } from "@styled-system/css"

interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

export const Spacer = ({
    children,
    className,
    ...props
}: SpacerProps): React.ReactElement => (
    <div
        className={cx(
            css({
                marginBottom: "2rem",
            }),
            className
        )}
        {...props}
    >
        {children}
    </div>
)
