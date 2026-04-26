import * as React from "react"

import { FormError } from "./FormError"
import { css } from "../../styled-system/css"
import type { FieldError } from "react-hook-form"

type InputStyledProps = React.PropsWithChildren<{
    error?: FieldError
}>

export const TextAreaStyled = ({
    children,
    error,
    ...props
}: InputStyledProps): React.ReactElement => {
    return (
        <textarea
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
        </textarea>
    )
}

type InputProps = React.HTMLProps<HTMLTextAreaElement> & {
    name: string
    id?: string
    error?: FieldError
    touched?: Boolean
}

const TextArea = ({
    children,
    touched,
    error,
    ...props
}: InputProps): React.ReactElement => {
    return (
        <>
            <TextAreaStyled error={touched ? error : undefined} {...props}>
                {children}
            </TextAreaStyled>
            {error && (
                <FormError id={`${props.id}-error`} role="alert">
                    {error.message}
                </FormError>
            )}
        </>
    )
}

export default TextArea
