import React from "react"
import { iconSystem } from "./iconSystem"
import { styledSystem } from "../../system/StyledSystem"

export interface IconPropsType {
    "data-icon"?: boolean
    iconSize?: "xs" | "small" | "medium" | "large"
    iconSrc?: React.ReactElement
    iconSvg?: string
}

interface Test extends IconPropsType {
    Component: React.ComponentType
}

export default ({ Component, ...iconProps }: Test): React.ReactElement => {
    const defaultProps = {
        ...iconProps,
        role: "img",
        display: "inline-block",
        verticalAlign: "middle",
        "data-icon": true,
    }

    const Icon = styledSystem({
        Component: Component,
        customSystems: [iconSystem],
        StyleProps: defaultProps,
    })

    return Icon
}
