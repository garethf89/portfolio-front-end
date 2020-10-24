import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import React, { useEffect, useState } from "react"

import { BREAKPOINTS } from "../../gatsby-plugin-theme-ui"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import ProgressiveImage from "../Utils/ProgressiveImage"
import { StyledComponentProps } from "../../../@types/types"
import { css } from "@emotion/core"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "@emotion/styled"

enum EXTRABLOCKS {
    INTRO = "intro",
}
const CUSTOMBLOCKS = { ...BLOCKS, ...EXTRABLOCKS }

const ImageStyles = (props: StyledComponentProps) => css`
    max-width: 100%;
    margin-bottom: ${props.theme.space.common[2]};
`

const StyledParagraph = styled.p`
    font-size: 1.13rem;
    line-height: 1.6;
    font-weight: 200;
    margin-bottom: ${(props: StyledComponentProps) =>
        props.theme.space.common[2]};
`
const StyledParagraphIntro = styled.p`
    font-size: 1.13rem;
    line-height: 1.6;
    font-weight: 700;
    margin-bottom: ${(props: StyledComponentProps) =>
        props.theme.space.common[3]};
`

const ContentContainer = styled(Container)`
    max-width: ${(props: StyledComponentProps) =>
        props.theme.sizes.contentMaxWidth};
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        max-width: calc(
            ${(props: StyledComponentProps) =>
                    props.theme.sizes.contentMaxWidth} + 6rem
        );
    }
`

const BoldMark = styled.span`
    font-weight: 700;
`
const UnderlineMark = styled.span`
    text-decoration: underline;
`
const ItalicMark = styled.span`
    font-style: italic;
`

const Bold = ({ children }) => {
    return <BoldMark>{children}</BoldMark>
}
const Italic = ({ children }) => {
    return <ItalicMark>{children}</ItalicMark>
}

const Underline = ({ children }) => {
    return <UnderlineMark>{children}</UnderlineMark>
}
const Text = ({ children }) => {
    return <StyledParagraph> {children}</StyledParagraph>
}
const IntroText = ({ children }) => {
    return <StyledParagraphIntro>{children}</StyledParagraphIntro>
}

const options = {
    renderMark: {
        [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
        [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
        [CUSTOMBLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [CUSTOMBLOCKS.INTRO]: (node, children) => (
            <IntroText>{children}</IntroText>
        ),
        [CUSTOMBLOCKS.HEADING_1]: (node, children) => (
            <Heading level="h1">{children}</Heading>
        ),
        [CUSTOMBLOCKS.HEADING_2]: (node, children) => (
            <Heading level="h2">{children}</Heading>
        ),
        [CUSTOMBLOCKS.HEADING_3]: (node, children) => (
            <Heading level="h3">{children}</Heading>
        ),
        [CUSTOMBLOCKS.HEADING_4]: (node, children) => (
            <Heading level="h4">{children}</Heading>
        ),
        [CUSTOMBLOCKS.HEADING_5]: (node, children) => (
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
    isIntro?: boolean
}

const PageContent = ({ content }: ContentProps): React.ReactElement => {
    const [formatContent, setFormatContent] = useState(null)
    useEffect(() => {
        let objectToSet = Object.values({ ...content })

        objectToSet = objectToSet.map((c, i) => {
            if (
                ((c as any) as ContentElement).internal.type ===
                    "ContentfulPageContentText" &&
                i === 0
            ) {
                return { ...c, isIntro: true }
            }
            return c
        })
        setFormatContent(objectToSet)
    }, [content])

    if (!formatContent) {
        return <></>
    }
    return (
        <ContentContainer vPadding>
            {formatContent.map((c, i) => {
                if (
                    ((c as unknown) as ContentElement).internal.type ===
                    "ContentfulPageContentText"
                ) {
                    if (c.isIntro) {
                        c.body.json.content[0].nodeType = CUSTOMBLOCKS.INTRO
                    }
                    return (
                        <React.Fragment key={`inlinetext-${i}`}>
                            {documentToReactComponents(
                                ((c as unknown) as ContentElement).body.json,
                                options
                            )}
                        </React.Fragment>
                    )
                }
                return (
                    <ProgressiveImage
                        key={`image-${i}`}
                        sizes="100vw"
                        alt={"test"}
                        image={((c as unknown) as ContentElement).image}
                        styles={ImageStyles}
                    />
                )
            })}
        </ContentContainer>
    )
}

export default PageContent
