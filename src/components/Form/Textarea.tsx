import * as React from "react"

import { Field, useField } from "formik"
import { FormError } from "./FormError"
import { css } from "../../styled-system/css"

type InputStyledProps = React.PropsWithChildren<{
    error?: string | null
}>

export const TextAreaStyled = ({
    children,
    error,
    ...props
}: InputStyledProps): React.ReactElement => {
    return (
        <Field
            {...props}
            className={css({
                display: "block",
                background: "transparent",
                border: "2px solid",
                borderColor: error ? "error" + "!important" : "text",
                outline: "none",
                padding: "2",
                width: "100%",
                maxWidth: "400px",
                height: "10rem",
                resize: "none",
            })}
        >
            {children}
        </Field>
    )
}

type InputProps = React.HTMLProps<HTMLTextAreaElement> & {
    as?: string
    name: string
    id?: string
}

const TextArea = ({ children, ...props }: InputProps): React.ReactElement => {
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
