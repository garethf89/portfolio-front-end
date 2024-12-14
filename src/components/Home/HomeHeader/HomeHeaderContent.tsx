import * as React from "react"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import {
    ContentfulRichTextNextReference,
    RenderRichTextData,
} from "../../../../@types/types"
import {
    documentToReactComponents,
    CommonNode,
} from "@contentful/rich-text-react-renderer"
import Bold from "../../Typography/Bold"
import Heading from "../../Typography/Heading"
import styled from "@emotion/styled"

const StyledParagraph = styled(Heading)`
    font-weight: 200;
    margin-top: 0;
    color: ${props => props.theme.colors.sectionTextSecondary};
    max-width: ${props => props.theme.sizes.container.content};
`

interface BlockParams {
    children?: React.ReactNode
}

const Text = ({ children }: BlockParams): React.ReactElement => {
    return <StyledParagraph level="h1">{children}</StyledParagraph>
}

const options = {
    renderMark: {
        [MARKS.BOLD]: (text: React.ReactNode) => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (
            node: CommonNode,
            children: React.ReactNode
        ): React.ReactElement => {
            return <Text>{children}</Text>
        },
        [BLOCKS.HEADING_1]: (node: CommonNode, children: React.ReactNode) => (
            <Heading level="h1">{children}</Heading>
        ),
    },
}

interface HomeHeaderContentTextProps {
    text: RenderRichTextData<ContentfulRichTextNextReference>
}

export const HomeHeaderContentText = ({
    text,
}: HomeHeaderContentTextProps): React.ReactElement => {
    return documentToReactComponents(text.json, options) as React.ReactElement
}

interface HomeHeaderContentProps {
    className?: string
    text: RenderRichTextData<ContentfulRichTextNextReference>
}

const HomeHeaderContent = (
    props: HomeHeaderContentProps
): React.ReactElement => {
    return <HomeHeaderContentText {...props} />
}

export default HomeHeaderContent
