import * as React from "react"
import { css } from "../../styled-system/css"

type LabelStyleProps = {
    error?: string
}

type LabelStyledProps = React.PropsWithChildren<LabelStyleProps>

export const LabelStyled = ({
    children,
    error,
    ...props
}: LabelStyledProps): React.ReactElement => {
    return (
        <label
            {...props}
            className={css({
                display: "block",
                fontWeight: "bold",
                color: error ? "error" : "inherit",
                marginBottom: "3",
            })}
        >
            {children}
        </label>
    )
}

export const Required = ({ children, ...props }): React.ReactElement => {
    return (
        <span
            {...props}
            className={css({
                display: "inline-block",
                color: "red",
                marginLeft: "1",
            })}
        >
            {children}
        </span>
    )
}

type LabelProps = { required: boolean } & LabelStyleProps &
    React.LabelHTMLAttributes<HTMLLabelElement>

const Label = ({
    children,
    required = false,
    ...props
}: LabelProps): React.ReactElement => (
    <LabelStyled {...props}>
        {children}
        {required && <Required>*</Required>}
    </LabelStyled>
)

export default Label
