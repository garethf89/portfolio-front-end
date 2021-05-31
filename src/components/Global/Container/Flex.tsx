import * as React from "react"

import { FlexProps as ChakraFlexProps, chakra } from "@chakra-ui/react"

import { SPACE } from "../../../@chakra-ui/gatsby-plugin/theme"
import { useTheme } from "@emotion/react"

const FlexElement = chakra("section", {
    baseStyle: {
        position: "relative",
        margin: "0 auto auto",
        width: "100%",
        textAlign: "left",
        display: "flex",
    },
})

type FlexProps = {
    vPadding?: boolean
    children: React.ReactNode
} & ChakraFlexProps

const Flex = ({ children, ...props }: FlexProps): React.ReactElement => {
    const theme = useTheme()
    return (
        <FlexElement
            flexDirection={["column", "column", "row"]}
            maxW={theme.sizes.container.xl}
            paddingY={props.vPadding ? SPACE.common[4] : "0"}
            paddingX={[SPACE.common[1], SPACE.common[1], SPACE.common[3]]}
            as="section"
            {...props}
        >
            {children}
        </FlexElement>
    )
}
export default Flex
