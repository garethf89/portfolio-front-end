import * as React from "react"

import { IconProps } from "@chakra-ui/react"
import styled from "@emotion/styled"

export type SystemsTypeProperties = React.HTMLAttributes<HTMLDivElement> &
    IconProps

export interface IconPropsType extends SystemsTypeProperties {
    "data-icon"?: boolean
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

    const SystemComponent = styled(Component)``
    return <SystemComponent {...defaultProps} />
}
