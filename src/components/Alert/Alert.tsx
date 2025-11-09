import Cross from "../../svgs/cross"
import * as React from "react"
import Tick from "../../svgs/tick"
import { cva } from "@styled-system/css"

type AlertVariantObjectProps = {
    icon: typeof Tick
}

type AlertVariantProps = Record<string, AlertVariantObjectProps>

const alertStyles = cva({
    base: {
        padding: 4,
        fontWeight: 700,
        marginBottom: 8,
    },
    variants: {
        visual: {
            success: {
                background: "rgba(240,255,244)",
                color: "rgba(47,133,90)",
                borderWidth: 1,
                borderColor: "rgba(47,133,90)",
            },
            error: {
                background: "rgba(255,245,245)",
                color: "#e55353",
                borderWidth: 1,
                borderColor: "#e55353",
            },
        },
    },
})

export type AlertProps = {
    variant: "success" | "error"
} & React.HTMLAttributes<HTMLDivElement>

const variants: AlertVariantProps = {
    success: {
        icon: Tick,
    },
    error: {
        icon: Cross,
    },
}

const Alert = ({
    children,
    variant = "error",
    ...props
}: AlertProps): React.ReactElement => {
    const variantUsed = variants[variant]

    const { icon: Icon } = variantUsed

    return (
        <div
            role="alert"
            className={alertStyles({ visual: variant })}
            {...props}
        >
            <Icon
                css={{
                    margin: "-2px 0.5rem 0 0",
                    display: "inline-block",
                    width: "16px",
                }}
            />
            {children}
        </div>
    )
}

export default Alert
