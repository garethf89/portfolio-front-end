import { Field, useField } from "formik"

import { FormError } from "./FormError"
import React from "react"
import { StyledComponentProps } from "../../../@types/types"
import styled from "@emotion/styled"

const TextAreaStyled = styled(Field)`
    display: block;
    outline: none;
    border: 2px solid
        ${(props: StyledComponentProps) => (props.error ? "#e55353" : "#000")};
    padding: 0.5rem;
    width: 100%;
    max-width: 400px;
    height: 10rem;
    resize: none;
`

type InputProps = React.InputHTMLAttributes<any> & { as?: string }

const TextArea = ({ children, ...props }: InputProps) => {
    const [_field, meta] = useField(props.name)
    return (
        <>
            <TextAreaStyled error={meta.touched ? meta.error : null} {...props}>
                {children}
            </TextAreaStyled>
            {meta.touched && meta.error && (
                <FormError id={`${props.id}-error`} role="alert">
                    {meta.error}
                </FormError>
            )}
        </>
    )
}

export default TextArea
