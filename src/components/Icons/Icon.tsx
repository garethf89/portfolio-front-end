import * as React from "react"
import { Props as InlineSVGProps } from "react-inlinesvg"
import type { SystemStyleObject } from "@styled-system/types"
import { css } from "@styled-system/css"

export type IconProps = InlineSVGProps

export type IconPropsType = {
    "data-icon"?: boolean
    css?: SystemStyleObject
}

type IconPropsTypeComponent = React.PropsWithChildren<IconPropsType> &
    React.SVGProps<SVGSVGElement>

export default ({
    css: cssProp,
    children,
    ...props
}: IconPropsTypeComponent): React.ReactElement => {
    const defaultProps = {
        role: "img",
        "data-icon": true,
    }

    const defaultStyles = {
        display: "inline-block",
        verticalAlign: "middle",
        height: 8,
        width: 8,
    }

    return (
        <svg
            {...defaultProps}
            {...props}
            className={css(defaultStyles, cssProp)}
        >
            {children}
        </svg>
    )
}
