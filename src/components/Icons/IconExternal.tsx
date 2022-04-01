import { Icon as ChakraIcon } from "@chakra-ui/react"
import styled from "@emotion/styled"
import HTMLReactParser, { domToReact } from "html-react-parser"
import * as React from "react"
import { SystemsTypeProperties } from "./Icon"

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
    let attr = {}

    const htmlToReactWithReplace = (icon: string, styledProps: unknown) => {
        const replace = domNode => {
            attr = { ...domNode.attribs }
            if (attr["xmlns:xlink"]) {
                delete attr["xmlns:xlink"]
            }
            if (domNode.name === "svg") {
                return (
                    <ChakraIcon {...attr} style={{}} {...styledProps}>
                        {title && <title>{title}</title>}
                        {domToReact(domNode.children)}
                    </ChakraIcon>
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

    const SystemComponent = styled(Render)``
    return <SystemComponent {...defaultProps} />
}

export default IconExternal
