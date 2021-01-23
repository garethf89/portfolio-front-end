import React from "react"
import { StyledComponentProps } from "../../../@types/types"
import styled from "@emotion/styled"

const BoldElement = styled.span`
    color: ${(props: StyledComponentProps) => props.theme.colors.sectionText};
`

type BoldProps = {
    children: React.ReactNode
}

const Bold = ({ children }: BoldProps): React.ReactElement => (
    <>
        <BoldElement>{children}</BoldElement>
        <br />
    </>
)

export default Bold
