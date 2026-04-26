import * as React from "react"

import { FormError } from "./FormError"
import { css } from "../../styled-system/css"
import type { FieldError } from "react-hook-form"

type InputStyledProps = React.PropsWithChildren<{
    error?: FieldError
    id?: string
}>

export const InputStyled = ({
    children,
    error,
    ...props
}: InputStyledProps): React.ReactElement => {
    return (
        <input
            {...props}
            data-error={error}
            className={css({
                display: "block",
                background: "transparent",
                border: "none",
                borderBottom: "2px solid",
                borderBottomColor: error ? "error" : "text",
                outline: "none",
                paddingBottom: "3",
                width: "100%",
                maxWidth: "250px",
            })}
        >
            {children}
        </input>
    )
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    id?: string
    error?: FieldError
    touched?: Boolean
}

const Input = ({
    id,
    error,
    touched,
    ...props
}: InputProps): React.ReactElement => {
    const name = props.name ?? ""
    console.log(error)
    return (
        <>
            <InputStyled
                error={error}
                id={id}
                aria-describedby={error ? `${id}-error` : null}
                {...props}
            >
                {props.children}
            </InputStyled>
            {error && (
                <FormError id={`${id}-error`} role="alert">
                    {error.message}
                </FormError>
            )}
        </>
    )
}

export default Input
