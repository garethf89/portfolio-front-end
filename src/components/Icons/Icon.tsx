import React, { CSSProperties, SVGAttributes } from "react"
import { StyledDefaultProps, styledSystem } from "../../system/StyledSystem"

import { iconSystem } from "./iconSystem"

interface IconPropsType {
    "data-icon"?: boolean;
    iconSize?: "small" | "medium" | "large";
    iconSrc?: React.ReactElement;
    iconSvg?: string;
}

type IconProps = IconPropsType & SVGAttributes<any> & CSSProperties

const Icon = (component: React.FC, props: IconProps = {}) => {
    const IconSystem = styledSystem<IconProps & StyledDefaultProps>([
        iconSystem,
    ])(component)

    IconSystem.defaultProps = {
        ...props,
        role: "img",
        display: "inline-block",
        verticalAlign: "middle",
        "data-icon": true,
    }

    return IconSystem
}

export default Icon
