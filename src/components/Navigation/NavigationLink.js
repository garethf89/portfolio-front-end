import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const StyledLink = styled(props => <Link {...props} />)`
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.colors.navText};
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

    &::after {
        transition: all 0.5s ease-in-out;
        content: " ";
        background: ${props => props.theme.colors.navText};
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0%;
        height: 1px;
    }

    &:focus,
    &:hover {
        opacity: 0.8;
        &::after {
            width: 100%;
        }
    }
`

const StyledButton = StyledLink.withComponent("button")

const NavigationLink = ({ children, button, click }) => {
    if (button) {
        return <StyledButton onClick={click}>{children}</StyledButton>
    }
    return <StyledLink>{children}</StyledLink>
}

export default NavigationLink
