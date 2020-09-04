import { color, layout, space, typography } from "styled-system"

import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const baseStyle = props => css`
    position: relative;
    margin: 0 auto auto;
    width: 100%;
    padding: ${props.vPadding ? "5rem" : "0"} 1.5rem;
    text-align: left;
    max-width: ${props.theme.sizes.maxWidth};
    @media (min-width: ${props.theme.breakpoint.medium}) {
        flex-direction: row;
        padding-left: 3rem;
        padding-right: 3rem;
        max-width: calc(${props.theme.sizes.maxWidth});
    }
`

const BoxElement = styled.section(baseStyle, space, color, layout, typography)

const Box = ({ children, ...props }) => (
    <BoxElement {...props}>{children}</BoxElement>
)

export default Box
