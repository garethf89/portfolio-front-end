import * as React from "react"
import Box, { BoxProps } from "./Box"
import Flex, { FlexProps } from "./Flex"

type ContainerProps = {
    children: React.ReactNode
    useflex?: boolean
    vPadding?: boolean
    as?: string
} & BoxProps &
    FlexProps

const Container = ({
    useflex,
    ...props
}: ContainerProps): React.ReactElement => {
    if (useflex) {
        return <Flex {...props}>{props.children}</Flex>
    }

    return <Box {...props}>{props.children}</Box>
}

export default Container
