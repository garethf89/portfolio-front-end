import * as CSS from "csstype"

import { forwardRef } from "react";
import * as React from "react";
import {
    color,
    compose,
    flexbox,
    layout,
    position,
    space,
    styleFn,
    system,
    typography,
} from "styled-system"

import isPropValid from "@emotion/is-prop-valid"
import { pickBy } from "lodash-es"
import shouldForwardProp from "@styled-system/should-forward-prop"
import styled from "@emotion/styled"

const custom = system({
    transform: true,
})

const systems = compose(
    color,
    flexbox,
    layout,
    position,
    space,
    typography,
    custom
)

export const systemProps = systems.propNames

const allowedProps = ["as", "transform"]
const blacklist = ["display", "opacity"]

export type StyledDefaultProps = {
    as?: string
}

export type SystemsTypeProperties = React.HTMLAttributes<HTMLDivElement> &
    CSS.Properties

interface SystemExpectedProps {
    Component: React.ComponentType
    customSystems?: Array<styleFn>
    StyleProps: SystemsTypeProperties
}

export const styledSystem = ({
    Component,
    customSystems = [],
    StyleProps,
}: SystemExpectedProps): React.ReactElement => {
    if (!Component) {
        return
    }
    const SystemBase = forwardRef<HTMLElement, unknown>(
        ({ children, ...props }, ref) => {
            const filteredProps = pickBy(props, (val, key) => {
                if (allowedProps.includes(key)) {
                    return true
                }
                if (blacklist.includes(key)) {
                    return false
                }
                return isPropValid(key)
            })
            filteredProps.ref = ref

            return React.createElement(Component, filteredProps)
        }
    )

    const SystemComponent = styled(SystemBase, shouldForwardProp)(
        customSystems.length ? customSystems.map(s => s(StyleProps)) : null,
        systems
    )
    return <SystemComponent {...StyleProps} />
}
