import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import Heading from "../Typography/Heading"
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "@emotion/styled"

const StyledParagraph = styled(Heading)`
    font-weight: 200;
    margin-top: 0;
    color: ${props => props.theme.colors.sectionTextSecondary};
    max-width: ${props => props.theme.sizes.contentMaxWidth};
`

const BoldElement = styled.span`
    color: ${props => props.theme.colors.sectionText};
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
        [BLOCKS.HEADING_1]: (node, children) => (
            <Heading level="h1">{children}</Heading>
        ),
    },
}

export const HomeHeaderContentText = ({ text }) =>
    documentToReactComponents(text, options)

const HomeHeaderContent = ({ text, className }) => {
    return <HomeHeaderContentText className={className} text={text} />
}

export default HomeHeaderContent
