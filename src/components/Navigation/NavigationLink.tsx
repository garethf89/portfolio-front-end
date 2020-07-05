import { GatsbyLinkProps, Link } from "gatsby"

import React from "react"
import styled from "@emotion/styled"

const StyledLink = styled(props => <Link {...props} />)`
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    color: ${(props: StyledComponentProps) => props.theme.colors.navText};
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
        background: ${(props: StyledComponentProps) =>
            props.theme.colors.navText};
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

const StyledButton = StyledLink.withComponent("button")

interface NavigationLinkProps extends GatsbyLinkProps<any> {
    button?: boolean
    click?: () => void
    hover?: () => void
}

const NavigationLink = ({
    children,
    button,
    to,
    click,
    hover,
}: NavigationLinkProps) => {
    if (button) {
        return (
            <StyledButton onMouseEnter={hover} onClick={click}>
                {children}
            </StyledButton>
        )
    }
    return <StyledLink to={to}>{children}</StyledLink>
}

export default NavigationLink
