import * as React from "react"
import { IconProps } from "./Icon"
import SVG from "react-inlinesvg"
import { nanoid } from "nanoid"
import { css, Styles } from "@styled-system/css"

export type IconPropsType = IconProps & {
    src: string
    title: string
    css?: Styles
}

export const IconExternal = ({
    src,
    title,
    css: cssProp = {},
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
                cssProp
            )}
            {...props}
        >
            {title && <title>{title}</title>}
        </SVG>
    )
}

export default IconExternal
