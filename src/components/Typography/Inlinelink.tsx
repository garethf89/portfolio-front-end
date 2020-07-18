import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const LinkElement = styled(Link)`
    font-weight: 400;
    display: inline;
    position: relative;
    overflow: visible;
    &:after {
        content: " ";
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 1px;
        width: 100%;
        background: ${(props: StyledComponentProps) => props.theme.colors.text};
    }
`

const Inlinelink = ({ children, to }) => (
    <>
        <LinkElement to={to}>{children}</LinkElement>
    </>
)

export default Inlinelink
