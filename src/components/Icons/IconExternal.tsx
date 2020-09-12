import HTMLReactParser, { domToReact } from "html-react-parser"
import React, { CSSProperties, SVGAttributes } from "react"
import {
    SSC,
    StyledDefaultProps,
    styledSystem,
} from "../../system/StyledSystem"

import { iconSystem } from "./iconSystem"

interface IconPropsType {
    "data-icon"?: boolean;
    iconSize?: "small" | "medium" | "large";
    iconSrc?: React.ReactElement;
    iconSvg?: string;
    title?: string;
}

export type IconProps = IconPropsType & SVGAttributes<any> & CSSProperties

export const IconExternal = ({ iconSvg, title, ...props }: IconProps) => {
    let attr = {}

    const htmlToReactWithReplace = (icon: string) => {
        const replace = domNode => {
            attr = { ...domNode.attribs }
            if (domNode.name === "svg") {
                return (
                    <>
                        {title && <title>{title}</title>}
                        {domToReact(domNode.children)}
                    </>
                )
            }
        }
        return HTMLReactParser(icon, { replace })
    }

    // Render from SVG Text or an Icon component
    const Render = htmlToReactWithReplace(iconSvg)

    const IconSystem = styledSystem<IconProps & StyledDefaultProps>([
        iconSystem,
    ])(SSC)

    IconSystem.defaultProps = {
        role: "img",
        display: "inline-block",
        verticalAlign: "middle",
        "data-icon": true,
    }

    return (
        <IconSystem as="svg" {...attr} {...props}>
            {Render}
        </IconSystem>
    )
}

export default IconExternal
