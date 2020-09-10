import React, { ElementType, forwardRef, useMemo } from "react"
import {
    color,
    compose,
    flexbox,
    layout,
    position,
    space,
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

const propForward = () => {
    return {
        shouldForwardProp: prop => {
            return !systemProps.includes(prop) && !allowedProps.includes(prop)
        },
    }
}

// Add some defaults
export const SSC = styled("div")(propForward())

export const styledSystem = <Props extends {}>(customSystems = []) => <
    T extends ElementType
>(
    Component: T
) => {
    const ForwardedComponent = forwardRef<HTMLElement, Props>(
        ({ ...props }, ref) => {
            const useSystems = useMemo(() => systems, [])

            const SystemBase = forwardRef<HTMLElement, any>(
                ({ __use, children, ...props }, ref) => {
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
                    return React.createElement(__use, filteredProps, children)
                }
            )

            const SystemComponent = styled(SystemBase, shouldForwardProp)(
                customSystems.length ? customSystems.map(s => s(props)) : null,
                useSystems
            )

            return (
                <SystemComponent __use={Component} {...props} ref={ref}>
                    {props.children}
                </SystemComponent>
            )
        }
    )

    return ForwardedComponent
}
