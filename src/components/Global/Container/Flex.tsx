import { color, flexbox, layout, space, typography } from "styled-system"

import { BREAKPOINTS } from "../../../gatsby-plugin-theme-ui"
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const baseStyle = props => css`
    position: relative;
    margin: 0 auto auto;
    width: 100%;
    display: flex;
    padding: ${props.vPadding ? props.theme.space.common[4] : "0"}
        ${props.theme.space.common[1]};
    text-align: left;
    max-width: ${props.theme.sizes.maxWidth};
    flex-direction: column;
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        flex-direction: row;
    }
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        padding: ${props.vPadding ? props.theme.space.common[4] : "0"}
            ${props.theme.space.common[3]};
    }
`

const FlexElement = styled.section(
    baseStyle,
    flexbox,
    space,
    color,
    layout,
    typography
)

type FlexProps = {
    children: React.ReactNode
}

const Flex = ({ children, ...props }: FlexProps): React.ReactElement => (
    <FlexElement {...props}>{children}</FlexElement>
)

export default Flex
