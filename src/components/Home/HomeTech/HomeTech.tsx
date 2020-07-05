import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import Container from "../../Global/Container"
import FaceImage from "../FaceImage/FaceImage"
import Heading from "../../Typography/Heading"
import React from "react"
import styled from "@emotion/styled"

const StyledParagraph = styled(Heading)`
    font-weight: 200;
    margin-top: 0;
    color: ${(props: StyledComponentProps) =>
        props.theme.colors.sectionTextSecondary};
    max-width: ${(props: StyledComponentProps) =>
        props.theme.sizes.contentMaxWidth};
`

const BoldElement = styled.span`
    color: ${(props: StyledComponentProps) => props.theme.colors.sectionText};
`

const Bold = ({ children }) => (
    <>
        <BoldElement>{children}</BoldElement>
        <br />
    </>
)
const Text = ({ children }) => {
    return (
        <StyledParagraph as="p" level="h1">
            {children}
        </StyledParagraph>
    )
}

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
            return <Text>{children}</Text>
        },
    },
}

const TechContainer = styled(Container)`
    margin-top: -70px;
`

interface HomeTechProps {
    image: any
}

const HomeTech = ({ image }: HomeTechProps) => {
    return (
        <TechContainer align="center">
            <FaceImage />
        </TechContainer>
    )
}

export default HomeTech
