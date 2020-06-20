import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
/* stylelint-disable */
const common = props => css`
    font-family: ${props.theme.fonts.body};
    a {
        text-decoration: none;
        color: inherit;
    }
`

const H1 = styled.h1`
    font-size: 52px;
    line-height: 1.2;
    font-weight: 200;
    ${common}
`
const H2 = styled.h2`
    font-size: 38px;
    line-height: 1;
    font-weight: 200;
    ${common}
`

const H3 = styled.h3`
    font-size: 30px;
    line-height: 1;
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

const Heading = ({ level, text, className, children, override }) => {
    if (level === "h1") {
        return (
            <H1 as={override} level={level} className={className}>
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
            <H3 as={override} className={className}>
                {text}
                {children}
            </H3>
        )
    }

    if (level === "h4") {
        return (
            <H4 as={override} className={className}>
                {text}
                {children}
            </H4>
        )
    }
    if (level === "h5") {
        return (
            <H5 as={override} className={className}>
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
