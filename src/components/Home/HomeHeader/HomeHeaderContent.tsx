import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types"

import Bold from "../../Typography/Bold"
import Heading from "../../Typography/Heading"
import React from "react"
import { StyledComponentProps } from "../../../../@types/types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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
    children?: React.ReactNode;
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
    text?: Document;
}

export const HomeHeaderContentText = ({
    text,
}: HomeHeaderContentTextProps): any => documentToReactComponents(text, options)

interface HomeHeaderContentProps {
    className?: string;
    text?: Document;
}

const HomeHeaderContent = (
    props: HomeHeaderContentProps
): React.ReactElement<any> => {
    return <HomeHeaderContentText {...props} />
}

export default HomeHeaderContent
