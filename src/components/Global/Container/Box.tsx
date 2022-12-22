import * as React from "react"

import { chakra, useTheme } from "@chakra-ui/react"

import { SPACE } from "../../../@chakra-ui//theme"

const BoxElement = chakra("section", {
    baseStyle: {
        position: "relative",
        margin: "0 auto auto",
        width: "100%",
        textAlign: "left",
    },
})

type BoxType = {
    children: React.ReactNode
    vPadding?: boolean
}

const Box = ({ children, vPadding, ...props }: BoxType): React.ReactElement => {
    const theme = useTheme()
    return (
        <BoxElement
            maxW={theme.sizes.container.xl}
            paddingY={vPadding ? SPACE.common[4] : "0"}
            paddingX={[SPACE.common[1], SPACE.common[1], SPACE.common[3]]}
            {...props}
        >
            {children}
        </BoxElement>
    )
}

export default Box
