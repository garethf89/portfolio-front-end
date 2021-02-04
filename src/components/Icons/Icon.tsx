import { SystemsTypeProperties, styledSystem } from "../../system/StyledSystem"

import * as React from "react";
import { iconSystem } from "./iconSystem"

export interface IconPropsType extends SystemsTypeProperties {
    "data-icon"?: boolean
    iconSize?: "xs" | "small" | "medium" | "large"
    iconSrc?: React.ReactElement
    iconSvg?: string
}

interface IconPropsTypeComponent extends IconPropsType {
    Component: React.ComponentType
}

export default ({
    Component,
    ...iconProps
}: IconPropsTypeComponent): React.ReactElement => {
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
