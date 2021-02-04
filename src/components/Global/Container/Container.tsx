import {
    ColorProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
    TypographyProps,
} from "styled-system"

import Box from "./Box"
import Flex from "./Flex"
import * as React from "react";

type ContainerProps = {
    children: React.ReactNode
    useflex?: boolean
    vPadding?: boolean
    as?: string
} & SpaceProps &
    TypographyProps &
    ColorProps &
    LayoutProps &
    FlexboxProps

const Container = (props: ContainerProps): React.ReactElement => {
    if (props.useflex) {
        return <Flex {...props}>{props.children}</Flex>
    }

    return <Box {...props}>{props.children}</Box>
}

export default Container
