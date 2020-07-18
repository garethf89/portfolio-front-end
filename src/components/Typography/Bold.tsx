import React from "react"
import styled from "@emotion/styled"

const BoldElement = styled.span`
    color: ${(props: StyledComponentProps) => props.theme.colors.sectionText};
`

const Bold = ({ children }) => (
    <>
        <BoldElement>{children}</BoldElement>
        <br />
    </>
)

export default Bold
