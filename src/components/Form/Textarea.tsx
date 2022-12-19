import * as React from "react"

import { Field, useField } from "formik"

import { COLORS } from "../../@chakra-ui//theme"
import { FormError } from "./FormError"
import styled from "@emotion/styled"
import { useStyleConfig } from "@chakra-ui/react"

const TextAreaStyled = styled(Field)`
    display: block;
    outline: none;
    border: 2px solid ${props => (props.error ? "#e55353" : props.border)};
    padding: 0.5rem;
    width: 100%;
    max-width: 400px;
    height: 10rem;
    resize: none;
    background: ${COLORS.transparent};
`

type InputProps = React.HTMLProps<HTMLTextAreaElement> & {
    as?: string
    name: string
    id?: string
}

const TextArea = ({ children, ...props }: InputProps): React.ReactElement => {
    const [_field, meta] = useField(props.name)
    const styles = useStyleConfig("ColorText")

    return (
        <>
            <TextAreaStyled
                border={styles.border}
                error={meta.touched ? meta.error : null}
                {...props}
            >
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
