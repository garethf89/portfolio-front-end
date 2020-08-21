import React, { CSSProperties, HTMLAttributes } from "react"
import { StyledDefaultProps, styledSystem } from "../../system/StyledSystem"

import { StyledProps } from "../../types/types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

/* stylelint-disable */
const common = (props: StyledComponentProps) => css`
    font-family: ${props.theme.fonts.body};
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
    @media (min-width: ${(props: StyledComponentProps) =>
        props.theme.breakpoint.medium}) {
      font-size: 52px;
    }
`

const H2 = styled.h2`
    font-size: 38px;
    line-height: 1;
    font-weight: 200;
    ${common}
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
    font-size: 30px;
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
}

const Default = styled.p`
    ${common}
`

export type HeadingProps = {
    level?: string
    text?: string
    className?: string
    children?: any
    override?: string
} & HTMLAttributes<any> &
    CSSProperties &
    StyledDefaultProps

const Heading: React.FC<HeadingProps> = ({
    children,
    override,
    level,
    text,
    ...props
}) => {
    const C: React.ElementType =
        level && Variants[level] ? Variants[level] : Default

    const StyledHeading = styledSystem<HeadingProps>()(C)

    return (
        <StyledHeading as={override} {...props}>
            {text}
            {children}
        </StyledHeading>
    )
}

Heading.defaultProps = {
    display: "block",
}

export default Heading
