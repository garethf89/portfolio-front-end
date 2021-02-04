import { Field, useField } from "formik"

import { COLORS } from "../../gatsby-plugin-theme-ui"
import { FormError } from "./FormError"
import * as React from "react";
import styled from "@emotion/styled"

const InputStyled = styled(Field)<{ error?: string }>`
    display: block;
    border: none;
    outline: none;
    border-bottom: 2px solid
        ${props => (props.error ? "#e55353" : props.theme.colors.text)};
    padding-bottom: 0.5rem;
    width: 100%;
    max-width: 250px;
    background: ${COLORS.transparent};
`

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = (props: InputProps): React.ReactElement => {
    const [field, meta] = useField(props.name) // eslint-disable-line
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
