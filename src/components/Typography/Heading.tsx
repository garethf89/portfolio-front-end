import * as CSS from "csstype"

import React, { Ref } from "react"
import { StyledDefaultProps, styledSystem } from "../../system/StyledSystem"

import { BREAKPOINTS } from "../../gatsby-plugin-theme-ui"
import { StyledProps } from "../../../@types/types"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

/* stylelint-disable */
const common = props => css`
    font-family: ${props.theme.fonts.body};
    line-height: 1.2;
    a {
        text-decoration: none;
        color: inherit;
    }
`

const H1 = styled.h1<StyledProps>`
    font-size: 42px;
    line-height: 1.2;
    font-weight: 200;
    ${common}
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        font-size: 52px;
    }
`

const H2 = styled.h2`
    font-size: 38px;
    line-height: 1;
    font-weight: 200;
    ${common}
    margin-bottom:  ${props => props.theme.space.common[4]};
    margin-top: 0;
`

const H3 = styled.h3<StyledProps>`
    font-size: 30px;
    line-height: 1.3;
    font-weight: 200;
    ${common}
`
const H4 = styled.h4`
    font-size: 30px;
    line-height: 1;
    font-weight: 200;
    ${common}
`
const H5 = styled.h5`
    font-size: 24px;
    line-height: 1.2;
    font-weight: 200;
    ${common}
`

const H6 = styled.h6`
    font-size: 18px;
    line-height: 1;
    font-weight: 200;
    ${common}
`

const Variants = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
}

const Default = styled.p`
    ${common}
`

export type HeadingProps = {
    level?: string
    text?: string
    className?: string
    children?: React.ReactNode
    override?: string
    ref?: Ref<HTMLElement>
} & React.ComponentProps<"h1"> &
    StyledDefaultProps &
    CSS.Properties

const Heading: React.FC<HeadingProps> = ({
    children,
    override,
    level,
    text,
    ...props
}) => {
    const C = level && Variants[level] ? Variants[level] : Default

    const RenderedHeading = (systemProps: unknown) => (
        <C as={override} {...systemProps}>
            {text}
            {children}
        </C>
    )

    const defaultProps = {
        ...props,
    }

    const StyledHeading = styledSystem({
        Component: RenderedHeading,
        StyleProps: defaultProps,
    })

    return StyledHeading
}

Heading.defaultProps = {
    display: "block",
}

export default Heading
