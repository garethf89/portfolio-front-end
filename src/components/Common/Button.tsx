import { BREAKPOINTS, MyTheme } from "../../gatsby-plugin-theme-ui/index"

import ArrowLight from "../../svgs/light-arrow"
import { Download } from "../../svgs/index"
import React from "react"
import { Button as TButton } from "@theme-ui/components"
import styled from "@emotion/styled"
import { useThemeUI } from "theme-ui"

type ButtonObjectProps = {
    lineBorderColor: string
    header?: boolean
    as?: React.ElementType
}

type ButtonElementProps = React.ComponentProps<"button"> &
    React.ComponentProps<"a"> &
    ButtonObjectProps

const ButtonIcon = styled.span<ButtonObjectProps>`
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 1em 0.75rem;
    border-left: 1px solid ${props => props.lineBorderColor};

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        padding: 1em;
    }
`

const ButtonContent = styled.span`
    padding: 1rem 1.25rem;
    display: block;
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        padding: 1rem 1.25rem 1.7rem;
    }
`

const ButtonStyled = styled(TButton)<ButtonElementProps>`
    text-align: left;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    width: auto;
    border-width: 1px;
    border-style: solid;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 300;
    padding: 0;
    padding-right: 3rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    display: inline-block;

    .bg-line {
        fill: #5ca4ea;
        stroke: #91c9ff;
        transition: all 0.8s ease-in-out;
    }

    .border {
        position: absolute;
        left: -1px;
        top: -1px;
        height: calc(100% + 2px);
        width: calc(100% + 2px);
        fill: none;
        z-index: 1;

        &__line {
            stroke: ${props => props.lineBorderColor};
            stroke-width: 2px;
            stroke-dasharray: 40 480;
            stroke-dashoffset: 40;
            transition: all 0.8s ease-in-out;
            width: 100%;
        }
    }

    &:visited,
    &:active,
    &:focus {
        outline: 0;
    }

    &:focus,
    &:hover {
        .border__line {
            stroke-dashoffset: -480;
        }
    }

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        min-width: ${props => (props.header ? "314px" : "0")};
        padding-right: 5rem;
    }
`

const ButtonIcons = {
    Arrow: ArrowLight,
    Download: Download,
}

const renderButton = (icon: ButtonTypes) => {
    const ButtonToUse = ButtonIcons[icon]

    return <ButtonToUse />
}

export type ButtonTypes = "Download" | "Arrow"

interface ButtonProps {
    icon?: ButtonTypes
    type?: "button" | "submit" | "reset"
    children: React.ReactElement | string
    color?: string
    header?: boolean
    disabled?: boolean
    click?: () => void
    href?: string
    as?: React.ElementType
    variant: string
    download?: boolean
}

const Button = ({
    as = "button",
    icon,
    children,
    type = "button",
    header,
    disabled,
    href,
    variant,
    click,
}: ButtonProps): React.ReactElement => {
    const context = useThemeUI()
    const { theme } = context

    const colors = (theme as MyTheme).buttons[variant].borderColor
    const lineBorderColor =
        ((theme as MyTheme).colors[colors] as string) ?? "#fff"

    return (
        <>
            <ButtonStyled
                as={as}
                href={href}
                onClick={click ? () => click() : null}
                type={type}
                header={header}
                disabled={disabled}
                variant={variant}
                lineBorderColor={lineBorderColor}
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
                    <ButtonIcon lineBorderColor={lineBorderColor}>
                        {renderButton(icon)}
                    </ButtonIcon>
                )}
            </ButtonStyled>
        </>
    )
}
Button.displayName = "Button"
export default Button
