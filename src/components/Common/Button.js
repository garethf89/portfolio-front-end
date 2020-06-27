import { useColorMode, useThemeUI } from "theme-ui"

import { Download } from "../../svgs/index"
import React from "react"
import styled from "@emotion/styled"

const DownloadIcon = styled(Download)`
    width: 1.25rem;
    height: auto;
    @media (min-width: ${props => props.theme.responsive.medium}) {
        width: 2rem;
        height: 27px;
    }
`

const ButtonIcon = styled.span`
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 1em 0.75rem;
    border-left: 1px solid ${props => props.colors.border};
    @media (min-width: ${props => props.theme.responsive.medium}) {
        padding: 1em;
    }
`

const ButtonContent = styled.span`
    padding: 1rem 1.25rem;
    display: block;
    @media (min-width: ${props => props.theme.responsive.medium}) {
        padding: 1rem 1.25rem 1.8rem;
    }
`

const ButtonStyled = styled.button`
    display: block;
    text-align: left;
    text-decoration: none;
    border: 1px solid ${props => props.colors.border};
    background: ${props => props.colors.background};
    position: relative;
    color: ${props => props.colors.color};
    overflow: hidden;
    width: auto;
    font-family: ${props => props.theme.fonts.body};
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 300;
    padding: 0;
    padding-right: 3rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    .bg-line {
        fill: #5ca4ea;
        stroke: #91c9ff;
        transition: all 0.8s ease-in-out;
    }

    .border {
        position: absolute;
        left: -2px;
        top: -1px;
        height: calc(100% + 2px);
        width: calc(100% + 5px);
        fill: none;
        z-index: 1;

        &__line {
            stroke: #fff;
            stroke-width: 2px;
            stroke-dasharray: 40 480;
            stroke-dashoffset: 40;
            transition: all 0.8s ease-in-out;
            width: 100%;
        }
    }

    &:active,
    &:focus {
        outline: 0;
    }

    &:focus,
    &:hover {
        background: rgba(0, 0, 0, 0.6);
        .border__line {
            stroke-dashoffset: -480;
        }
    }

    @media (min-width: ${props => props.theme.responsive.medium}) {
        min-width: 314px;
        padding-right: 5rem;
    }
`

const ButtonIcons = {
    Download: <DownloadIcon />,
}

const renderButton = icon => {
    return ButtonIcons[icon]
}

const Button = ({ icon, children, type = "button", color, click }) => {
    const context = useThemeUI()
    const { theme } = context
    const [colorMode] = useColorMode()
    const colorTheme = { ...theme.button[colorMode] }
    return (
        <ButtonStyled
            onClick={click ? e => click(e) : null}
            type={type}
            colors={colorTheme}
        >
            <svg
                viewBox="0 0 180 60"
                className="border"
                preserveAspectRatio="none"
            >
                <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    className="border__line"
                />
            </svg>
            <ButtonContent>{children}</ButtonContent>
            {icon && (
                <ButtonIcon colors={colorTheme}>
                    {renderButton(icon)}
                </ButtonIcon>
            )}
        </ButtonStyled>
    )
}

export default Button
