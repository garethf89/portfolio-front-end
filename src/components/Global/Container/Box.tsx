import { color, layout, space, typography } from "styled-system"

import { BREAKPOINTS } from "../../../gatsby-plugin-theme-ui"
import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const baseStyle = props => css`
    position: relative;
    margin: 0 auto auto;
    width: 100%;
    padding: ${props.vPadding ? props.theme.space.common[4] : "0"}
        ${props.theme.space.common[1]};
    text-align: left;
    max-width: ${props.theme.sizes.maxWidth};
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        flex-direction: row;
        padding-left: ${props.theme.space.common[3]};
        padding-right: ${props.theme.space.common[3]};
        max-width: calc(${props.theme.sizes.maxWidth});
    }
`

const BoxElement = styled.section(baseStyle, space, color, layout, typography)

type BoxType = {
    children: React.ReactNode
}

const Box = ({ children, ...props }: BoxType): React.ReactElement => (
    <BoxElement {...props}>{children}</BoxElement>
)

export default Box
