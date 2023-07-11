import { chakra } from "@chakra-ui/react"
import styled from "@emotion/styled"
import * as React from "react"
import { SystemsTypeProperties } from "./Icon"
import SVG from "react-inlinesvg"
import { nanoid } from "nanoid"

interface IconPropsType extends SystemsTypeProperties {
    "data-icon"?: boolean
    iconSvg?: string
    title?: string
}

export const IconExternal = ({
    iconSvg,
    title,
    ...props
}: IconPropsType): React.ReactElement => {
    const defaultProps = {
        ...props,
        role: "img",
        display: "inline-block",
        verticalAlign: "middle",
        "data-icon": true,
    }

    // Render from SVG Text or an Icon component
    const Render = ({ ...styledProps }) => {
        const SVGChakra = chakra(SVG)
        return (
            <SVGChakra
                uniquifyIDs={true}
                src={iconSvg}
                title={title}
                preProcessor={code => {
                    return code.replace(/cls-/g, `cls-${nanoid()}-${title}`)
                }}
                {...styledProps}
            >
                {title && <title>{title}</title>}
            </SVGChakra>
        )
    }

    const SystemComponent = styled(Render)``
    return <SystemComponent {...defaultProps} />
}

export default IconExternal
