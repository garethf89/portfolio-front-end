import HTMLReactParser, { domToReact } from "html-react-parser"
import React, { CSSProperties, SVGAttributes } from "react"
import { SystemsTypeProperties, styledSystem } from "../../system/StyledSystem"

import { iconSystem } from "./iconSystem"

interface IconPropsType extends SystemsTypeProperties {
    "data-icon"?: boolean
    iconSize?: "small" | "medium" | "large"
    iconSvg?: string
    title?: string
}

export type IconProps = IconPropsType &
    SVGAttributes<Record<string, string>> &
    CSSProperties

export const IconExternal = ({
    iconSvg,
    title,
    ...props
}: IconProps): React.ReactElement => {
    let attr = {}

    const htmlToReactWithReplace = (icon: string, styledProps: unknown) => {
        const replace = domNode => {
            attr = { ...domNode.attribs }
            if (attr["xmlns:xlink"]) {
                delete attr["xmlns:xlink"]
            }
            if (domNode.name === "svg") {
                return (
                    <svg {...attr} {...styledProps}>
                        {title && <title>{title}</title>}
                        {domToReact(domNode.children)}
                    </svg>
                )
            }
        }
        return HTMLReactParser(icon, { replace })
    }

    // Render from SVG Text or an Icon component
    const Render = ({ ...styledProps }) => (
        <>{htmlToReactWithReplace(iconSvg, styledProps)}</>
    )

    const defaultProps = {
        ...props,
        ...attr,
        role: "img",
        display: "inline-block",
        verticalAlign: "middle",
        "data-icon": true,
    }

    const IconSystem = styledSystem({
        Component: Render,
        customSystems: [iconSystem],
        StyleProps: defaultProps,
    })

    return IconSystem
}

export default IconExternal
