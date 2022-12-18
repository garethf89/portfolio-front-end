import * as React from "react"

import FadeLink from "../Link/Link"
import styled from "@emotion/styled"

const LinkElement = styled(FadeLink)`
    font-weight: 400;
    display: inline;
    position: relative;
    overflow: visible;
    &::after {
        content: " ";
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 1px;
        width: 100%;
        background: ${props => props.theme.colors["text"]};
    }
`

type InlineLinkProps = {
    children: React.ReactNode
    to: string
}

const Inlinelink = ({ children, to }: InlineLinkProps): React.ReactElement => (
    <>
        <LinkElement href={to}>{children}</LinkElement>
    </>
)

export default Inlinelink
