import * as React from "react"

import { Field, useField } from "formik"

import { COLORS } from "../../@chakra-ui/theme"
import { FormError } from "./FormError"
import styled from "@emotion/styled"
import { useStyleConfig } from "@chakra-ui/react"

const InputStyled = styled(Field)<{ error?: string; border: string }>`
    display: block;
    border: none;
    outline: none;
    border-bottom: 2px solid
        ${props => (props.error ? "#e55353" : props.border)};
    padding-bottom: 0.5rem;
    width: 100%;
    max-width: 250px;
    background: ${COLORS.transparent};
`

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { id?: string }

const Input = ({ id, ...props }: InputProps): React.ReactElement => {
    const name = props.name ?? ""

    const [_field, meta] = useField<string>(name ?? "")
    const error = meta.touched && meta.error
    const styles = useStyleConfig("ColorText")

    return (
        <>
            <InputStyled
                border={styles.border}
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
