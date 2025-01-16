import * as React from "react"
import { Download } from "../../svgs/index"
import ArrowLight from "../../svgs/light-arrow"
import { css, cva } from "@styled-system/css"
import { ButtonObjectProps, ButtonProps, ButtonTypes } from "./Button.types"

const ButtonIcon = ({
    children,
    variant = "primary",
}: React.PropsWithChildren<ButtonObjectProps>): React.ReactElement => {
    return (
        <span
            className={css({
                display: "block",
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                padding: ["1em 0.75rem", "1em"],
                borderLeft: `1px solid`,
                borderLeftColor:
                    variant === "primary"
                        ? "buttonBorderPrimary" + "!important"
                        : "buttonBorderSecondary" + "!important",
            })}
        >
            {children}
        </span>
    )
}

const ButtonContent = ({ children }) => (
    <span
        className={css({
            padding: ["1rem 1.25rem", "1rem 1.25rem 1.7rem"],
            display: "block",
        })}
    >
        {children}
    </span>
)

const ButtonIcons = {
    Arrow: ArrowLight,
    Download: Download,
}

const renderButton = (icon: ButtonTypes) => {
    const ButtonToUse = ButtonIcons[icon]

    return <ButtonToUse />
}

const Border = ({ ...props }: React.ComponentProps<"svg">) => {
    return (
        <svg
            {...props}
            className={css({
                position: "absolute",
                left: "-1px",
                top: "-1px",
                height: "calc(100% + 2px)",
                width: " calc(100% + 2px)",
                fill: "none",
                zIndex: 1,
                "& polyline": {
                    strokeWidth: "2px",
                    strokeDasharray: "40 480",
                    strokeDashoffset: "40",
                    transition: " all 0.8s ease-in-out",
                    width: "100%",
                },
            })}
        ></svg>
    )
}

const BorderLine = ({ ...props }: React.ComponentProps<"polyline">) => (
    <polyline {...props} />
)

const button = cva({
    base: {
        textTransform: "uppercase",
        textAlign: "left",
        textDecoration: "none",
        position: "relative",
        overflow: "hidden",
        width: "auto",
        borderWidth: "1px",
        borderStyle: "solid",
        fontSize: "16px",
        letterSpacing: "2px",
        fontWeight: 300,
        padding: 0,
        paddingEnd: 0,
        paddingStart: 0,
        cursor: "pointer",
        transition: " 0.5s ease-in-out",
        display: "inline-block",
        height: "auto",
        paddingRight: ["3rem", "5rem"],
        borderRadius: 0,
        _focus: {
            outline: 0,
        },
        _active: {
            outline: 0,
        },
        _hover: {
            outline: 0,
            "& svg": {
                "& polyline": {
                    strokeDashoffset: -480,
                },
            },
        },
    },
    variants: {
        header: {
            header: {
                minWidth: [0, "314px"],
            },
            none: {
                minWidth: [0],
            },
        },
        visual: {
            base: {},
            primary: {
                color: "buttonColorPrimary",
                bg: "buttonBackgroundPrimary",
                borderColor: "buttonBorderPrimary" + "!important",
                _hover: {
                    bg: "rgba(0, 0, 0, 0.1)",
                },
                "& svg": {
                    "& polyline": {
                        stroke: "buttonBorderPrimary",
                    },
                },
            },
            secondary: {
                color: "buttonColorSecondary",
                bg: "buttonBackgroundSecondary",
                borderColor: "buttonBorderSecondary" + "!important",
                "_:hover": {
                    bg: "rgba(0, 0, 0, 0.6)",
                },
                "& svg": {
                    "& polyline": {
                        stroke: "buttonBorderSecondary",
                    },
                },
            },
        },
    },
})

type ButtonInnerProps = React.PropsWithChildren<Partial<ButtonProps>>

const ButtonInner = ({
    children,
    icon,
    variant,
}: ButtonInnerProps): React.ReactElement => {
    return (
        <>
            <Border viewBox="0 0 180 60" preserveAspectRatio="none">
                <BorderLine points="179,1 179,59 1,59 1,1 179,1" />
            </Border>
            <ButtonContent>{children}</ButtonContent>
            {icon && (
                <ButtonIcon variant={variant}>{renderButton(icon)}</ButtonIcon>
            )}
        </>
    )
}

const Button = ({
    as = "button",
    icon,
    children,
    type = "button",
    header,
    disabled,
    href,
    variant = "primary",
    click,
    ...props
}: ButtonProps): React.ReactElement => {
    if (as === "a") {
        return (
            <a
                href={href}
                className={button({
                    header: header ? "header" : "none",
                    visual: variant,
                })}
                {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                <ButtonInner variant={variant} icon={icon}>
                    {children}
                </ButtonInner>
            </a>
        )
    }

    return (
        <button
            onClick={e => {
                if (click) {
                    e.preventDefault()
                    click()
                }
            }}
            type={type}
            disabled={disabled}
            className={button({
                header: header ? "header" : "none",
                visual: variant,
            })}
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            <ButtonInner variant={variant} icon={icon}>
                {children}
            </ButtonInner>
        </button>
    )
}

export default Button
