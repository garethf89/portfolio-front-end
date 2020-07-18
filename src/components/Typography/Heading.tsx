import { FlexboxProps, SpaceProps } from "styled-system"

import React from "react"
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

type HeadingProps = {
    level: string
    text?: string
    className?: string
    children?: any
    override?: string
} & SpaceProps &
    FlexboxProps

const Heading = ({
    level,
    text,
    className,
    children,
    override,
    ...props
}: HeadingProps) => {
    if (level === "h1") {
        return (
            <H1 as={override} className={className} {...props}>
                {text}
                {children}
            </H1>
        )
    }

    if (level === "h2") {
        return (
            <H2 as={override} className={className}>
                {text}
                {children}
            </H2>
        )
    }

    if (level === "h3") {
        return (
            <H3 as={override} className={className} {...props}>
                {text}
                {children}
            </H3>
        )
    }

    if (level === "h4") {
        return (
            <H4 as={override} className={className} {...props}>
                {text}
                {children}
            </H4>
        )
    }
    if (level === "h5") {
        return (
            <H5 as={override} className={className} {...props}>
                {text}
                {children}
            </H5>
        )
    }

    return (
        <p className={className}>
            {text}
            {children}
        </p>
    )
}

export default Heading
