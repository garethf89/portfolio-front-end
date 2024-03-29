import FadeLink from "../Link/Link"
import { LinkProps as NextLinkProps } from "next/link"
import * as React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const StyledLink = props => css`
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    color: ${props.theme.colors.navText};
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    position: relative;
    outline: 0;
    background: transparent;
    border: none;
    padding: 0;
    line-height: 1.3;
    font-weight: 300;
    letter-spacing: 2px;
    cursor: pointer;

    span {
        position: relative;
    }

    span::after {
        transition: all 0.5s ease-in-out;
        content: " ";
        background: ${props.theme.colors.navText};
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0%;
        height: 1px;
    }
    &:focus,
    &:hover {
        opacity: 0.8;
        span::after {
            width: 100%;
        }
    }
`

const StyledInternal = styled(props => <FadeLink {...props} />)`
    ${StyledLink}
`

const StyledExternal = styled.a`
    ${StyledLink}
`

const StyledButton = StyledInternal.withComponent("button")

type NavigationLinkProps = {
    button?: boolean
    internal?: boolean
    click?: () => void
    hover?: () => void
    children?: React.ReactNode
} & NextLinkProps

const NavigationLink = ({
    children,
    button,
    href,
    click,
    hover,
    internal = false,
}: NavigationLinkProps): React.ReactElement => {
    if (button) {
        return (
            <StyledButton onMouseEnter={hover} onClick={click}>
                {children}
            </StyledButton>
        )
    }
    return internal ? (
        <StyledInternal href={href}>{children}</StyledInternal>
    ) : (
        <StyledExternal href={href as string}>{children}</StyledExternal>
    )
}

export default NavigationLink
