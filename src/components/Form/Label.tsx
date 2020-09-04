import React from "react"
import styled from "@emotion/styled"

const LabelStyled = styled.label`
    font-weight: 700;
    display: block;
    margin-bottom: 1rem;
    color: ${(props: StyledComponentProps) =>
        props.error ? "#e55353" : "inherit"};
`

const Required = styled.span`
    color: red;
    display: inline-block;
    margin-left: 0.25rem;
`

type LabelProps = {
    required: boolean
    error?: string
} & React.LabelHTMLAttributes<any>

const Label = ({ children, required = false, ...props }: LabelProps) => (
    <LabelStyled {...props}>
        {children}
        {required && <Required>*</Required>}
    </LabelStyled>
)

export default Label
