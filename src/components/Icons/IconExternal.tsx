import * as React from "react"
import { IconProps } from "./Icon"
import SVG from "react-inlinesvg"
import { nanoid } from "nanoid"
import { css } from "@styled-system/css"
import type { SystemStyleObject } from "@styled-system/types"

export type IconPropsType = IconProps & {
    src: string
    title: string
    styles?: SystemStyleObject
}

export const IconExternal = ({
    src,
    title,
    styles = {},
    ...props
}: IconPropsType): React.ReactElement => {
    return (
        <SVG
            uniquifyIDs={true}
            src={src}
            title={title}
            data-icon="true"
            role="img"
            preProcessor={code => {
                return code.replace(/cls-/g, `cls-${nanoid()}-${title}`)
            }}
            className={css(
                {
                    display: "inline-block",
                    verticalAlign: "middle",
                },
                styles
            )}
            {...props}
        >
            {title && <title>{title}</title>}
        </SVG>
    )
}

export default IconExternal
