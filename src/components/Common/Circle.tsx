import * as React from "react"
import { css, cx } from "@styled-system/css"

interface CircleProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const Circle = ({
    children,
    className,
    ...props
}: CircleProps): React.ReactElement => {
    return (
        <div
            className={cx(
                css({
                    display: "inline-block",
                    "& img": {
                        borderRadius: "50%",
                    },
                }),
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default Circle
