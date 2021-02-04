import * as React from "react";
import styled from "@emotion/styled"

type LabelStyleProps = {
    error?: string
}

const LabelStyled = styled.label`
    font-weight: 700;
    display: block;
    margin-bottom: 1rem;
    color: ${(props: LabelStyleProps) => (props.error ? "#e55353" : "inherit")};
`

const Required = styled.span`
    color: red;
    display: inline-block;
    margin-left: 0.25rem;
`

type LabelProps = { required: boolean } & LabelStyleProps &
    React.LabelHTMLAttributes<HTMLLabelElement>

const Label = ({
    children,
    required = false,
    ...props
}: LabelProps): React.ReactElement => (
    <LabelStyled {...props}>
        {children}
        {required && <Required>*</Required>}
    </LabelStyled>
)

export default Label
