import Cross from "../../svgs/cross"
import React from "react"
import Tick from "../../svgs/tick"
import styled from "@emotion/styled"

type AlertVariantObjectProps = {
    bg: string
    color: string
    icon: typeof Tick
}
type AlertVariantProps = Record<string, AlertVariantObjectProps>

const AlertStyled = styled.div`
    padding: 1rem;
    font-weight: 700;
    margin-bottom: 2rem;
    border: 1px solid ${(props: AlertVariantObjectProps) => props.color};
    background: ${(props: AlertVariantObjectProps) => props.bg};
    color: ${(props: AlertVariantObjectProps) => props.color};
`

export type AlertProps = {
    variant: "success" | "error"
} & React.HTMLAttributes<HTMLDivElement>

const variants: AlertVariantProps = {
    success: {
        bg: "rgba(240,255,244)",
        color: "rgba(47,133,90)",
        icon: Tick,
    },
    error: {
        bg: "rgba(255,245,245)",
        color: "#e55353",
        icon: Cross,
    },
}

const Alert = ({
    children,
    variant = "error",
    ...props
}: AlertProps): React.ReactElement => {
    const variantUsed = variants[variant]
    const variantProps = { ...variantUsed, icon: null }
    const Icon = variantUsed.icon
    return (
        <AlertStyled role="alert" {...variantProps} {...props}>
            <Icon
                margin="-2px 0.5rem 0 0"
                display="inline-block"
                width="16px"
            />
            {children}
        </AlertStyled>
    )
}

export default Alert
