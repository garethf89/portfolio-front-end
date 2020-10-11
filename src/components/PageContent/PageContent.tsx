import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types"
import {
    IPageContentImage,
    IPageContentText,
} from "../../../@types/generated/contentful"
import ProgressiveImage, { ResponsiveImage } from "../Utils/ProgressiveImage"

import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "@emotion/styled"

const StyledParagraph = styled.p`
    font-size: 1.13rem;
    line-height: 1.6;
    font-weight: 200;
`

export const Image = styled.img`
    max-width: 100%;
    margin-bottom: 3.75rem;
`

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <StyledParagraph>{children}</StyledParagraph>

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
        [BLOCKS.HEADING_2]: (node, children) => (
            <Heading level="h2">{children}</Heading>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
            <Heading level="h3">{children}</Heading>
        ),
        [BLOCKS.HEADING_4]: (node, children) => (
            <Heading level="h4">{children}</Heading>
        ),
        [BLOCKS.HEADING_5]: (node, children) => (
            <Heading level="h5">{children}</Heading>
        ),
    },
}

type ContentProps = {
    content: (IPageContentText | IPageContentImage)[] | undefined
    className?: string
}

interface ContentElement {
    internal: {
        type: string
    }
    body?: {
        json: Document
    }
    image?: ResponsiveImage
}

const PageContent = ({ content }: ContentProps): React.ReactElement => {
    if (!content) {
        return <></>
    }
    return (
        <Container>
            {content.map((c, i) => {
                if (
                    ((c as unknown) as ContentElement).internal.type ===
                    "ContentfulPageContentText"
                ) {
                    return documentToReactComponents(
                        ((c as unknown) as ContentElement).body.json,
                        options
                    )
                }
                return (
                    <ProgressiveImage
                        key={i}
                        sizes="100vw"
                        alt={"test"}
                        image={((c as unknown) as ContentElement).image}
                    />
                )
            })}
        </Container>
    )
}

export default PageContent
