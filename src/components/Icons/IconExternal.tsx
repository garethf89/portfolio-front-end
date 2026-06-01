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
                let processed = code.replace(
                    /cls-/g,
                    `cls-${nanoid()}-${title}`
                )
                processed = processed.replace(
                    /<svg([^>]*)>/,
                    (_match, attrs) => {
                        const viewBoxMatch = attrs.match(/viewBox="([^"]*)"/)
                        const widthMatch = attrs.match(/width="([^"]*)"/)
                        const heightMatch = attrs.match(/height="([^"]*)"/)
                        let newAttrs = attrs
                            .replace(/\s*width="[^"]*"/, "")
                            .replace(/\s*height="[^"]*"/, "")
                        if (!viewBoxMatch && widthMatch && heightMatch) {
                            newAttrs += ` viewBox="0 0 ${widthMatch[1]} ${heightMatch[1]}"`
                        }
                        return `<svg${newAttrs}>`
                    }
                )
                return processed
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
