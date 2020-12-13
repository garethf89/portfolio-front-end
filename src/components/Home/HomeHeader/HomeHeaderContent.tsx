import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types"
import {
    ContentfulRichTextGatsbyReference,
    RenderRichTextData,
    StyledComponentProps,
} from "../../../../@types/types"

import Bold from "../../Typography/Bold"
import Heading from "../../Typography/Heading"
import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from "@emotion/styled"

const StyledParagraph = styled(Heading)`
    font-weight: 200;
    margin-top: 0;
    color: ${(props: StyledComponentProps) =>
        props.theme.colors.sectionTextSecondary};
    max-width: ${(props: StyledComponentProps) =>
        props.theme.sizes.contentMaxWidth};
`

interface BlockParams {
    children?: React.ReactNode
}

const Text = ({ children }: BlockParams): React.ReactElement<any> => {
    return <StyledParagraph level="h1">{children}</StyledParagraph>
}

const options = {
    renderMark: {
        [MARKS.BOLD]: (text: React.ReactNode) => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (
            node: React.ReactNode,
            children: React.ReactNode
        ): React.ReactElement<any> => {
            return <Text>{children}</Text>
        },
        [BLOCKS.HEADING_1]: (
            node: React.ReactNode,
            children: React.ReactNode
        ) => <Heading level="h1">{children}</Heading>,
    },
}

interface HomeHeaderContentTextProps {
    text?: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

export const HomeHeaderContentText = ({
    text,
}: HomeHeaderContentTextProps): any => renderRichText(text, options)

interface HomeHeaderContentProps {
    className?: string
    text?: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

const HomeHeaderContent = (
    props: HomeHeaderContentProps
): React.ReactElement<any> => {
    return <HomeHeaderContentText {...props} />
}

export default HomeHeaderContent
