import * as React from "react"

import { chakra, useStyleConfig } from "@chakra-ui/react"
import theme, { BREAKPOINTS } from "../../@chakra-ui/gatsby-plugin/theme"

import ArrowLight from "../../svgs/light-arrow"
import { Download } from "../../svgs/index"
import styled from "@emotion/styled"

type ButtonObjectProps = {
    lineBorderColor: string
    header?: boolean
    as?: React.ElementType
}

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

const ButtonStyled = chakra("button")

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

const Border = styled("svg")`
    position: absolute;
    left: -1px;
    top: -1px;
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    fill: none;
    z-index: 1;
    polyline {
        stroke-width: 2px;
        stroke-dasharray: 40 480;
        stroke-dashoffset: 40;
        transition: all 0.8s ease-in-out;
        width: 100%;
    }
`

const BorderLine = styled("polyline")``

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
    const colors = theme.components.MyButton.variants[variant].borderColor
    const lineBorderColor = theme.colors[colors] ?? "#fff"
    const styles = useStyleConfig("MyButton", {
        header,
        variant,
        lineBorderColor,
    })
    return (
        <>
            <ButtonStyled
                as={as}
                href={href}
                onClick={click ? () => click() : null}
                type={as === "a" ? null : type}
                disabled={disabled}
                sx={styles}
            >
                <Border viewBox="0 0 180 60" preserveAspectRatio="none">
                    <BorderLine points="179,1 179,59 1,59 1,1 179,1" />
                </Border>
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
