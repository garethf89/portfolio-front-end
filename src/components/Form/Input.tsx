import * as React from "react"

import { Field, useField } from "formik"

import { FormError } from "./FormError"
import { css } from "../../styled-system/css"

type InputStyledProps = React.PropsWithChildren<{
    error?: string
}>

export const InputStyled = ({
    children,
    error,
    ...props
}: InputStyledProps): React.ReactElement => {
    return (
        <Field
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
        </Field>
    )
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { id?: string }

const Input = ({ id, ...props }: InputProps): React.ReactElement => {
    const name = props.name ?? ""

    const [_field, meta] = useField<string>(name ?? "")
    const error = meta.touched && meta.error

    return (
        <>
            <InputStyled
                error={error ? "true" : undefined}
                aria-describedby={error ? `${id}-error` : null}
                {...props}
            >
                {props.children}
            </InputStyled>
            {meta.touched && meta.error && (
                <FormError id={`${id}-error`} role="alert">
                    {meta.error}
                </FormError>
            )}
        </>
    )
}

export default Input
