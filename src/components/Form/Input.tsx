import { Field, useField } from "formik"

import { FormError } from "./FormError"
import React from "react"
import styled from "@emotion/styled"

const InputStyled = styled(Field)`
    display: block;
    border: none;
    outline: none;
    border-bottom: 2px solid
        ${(props: StyledComponentProps) => (props.error ? "#e55353" : "#000")};
    padding-bottom: 0.5rem;
    width: 100%;
    max-width: 250px;
`

type InputProps = React.InputHTMLAttributes<any>

const Input = (props: InputProps) => {
    const [fied, meta] = useField(props.name)
    const error = meta.touched && meta.error
    return (
        <>
            <InputStyled
                error={error ? "true" : undefined}
                aria-describedby={error ? `${props.id}-error` : null}
                {...props}
            >
                {props.children}
            </InputStyled>
            {meta.touched && meta.error && (
                <FormError id={`${props.id}-error`} role="alert">
                    {meta.error}
                </FormError>
            )}
        </>
    )
}

export default Input
