import * as React from "react"
import { css, cx } from "@styled-system/css"

interface ContainerBreakProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

const ContainerBreak = ({
    children,
    className,
    ...props
}: ContainerBreakProps): React.ReactElement => (
    <div
        className={cx(
            css({
                width: "100vw",
                position: "relative",
                left: "50%",
                right: "50%",
                marginLeft: "-50vw",
                marginRight: "-50vw",
            }),
            className
        )}
        {...props}
    >
        {children}
    </div>
)

export default ContainerBreak
