import {
    BLOCKS,
    Document,
    INLINES,
    MARKS,
    TopLevelBlockEnum,
} from "@contentful/rich-text-types"
import {
    IPageContentTextFields,
    ISkill,
} from "../../../@types/generated/contentful"
import ProgressiveImage, { ImageFieldsCustom } from "../Utils/ProgressiveImage"
import React, { useEffect, useState } from "react"

import { BREAKPOINTS } from "../../gatsby-plugin-theme-ui"
import Container from "../Global/Container/Container"
import ContainerBreak from "../Utils/ContainerBreak"
import Heading from "../Typography/Heading"
import InlineLink from "../Typography/Inlinelink"
import PageSkills from "./PageSkills"
import { StyledComponentProps } from "../../../@types/types"
import { css } from "@emotion/core"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "@emotion/styled"

const CUSTOMBLOCKS = {
    ...BLOCKS,
    ...INLINES,
    INTRO: "intro" as TopLevelBlockEnum,
}

const ImageStyles = (props: StyledComponentProps) => css`
    max-width: 100%;
    margin-bottom: ${props.theme.space.common[2]};
    margin-top: ${props.theme.space.common[3]};
`

const StyledParagraph = styled.p`
    font-size: 1.13rem;
    line-height: 1.6;
    font-weight: 200;
    margin-bottom: ${(props: StyledComponentProps) =>
        props.theme.space.common[2]};
`
const StyledParagraphIntro = styled.p`
    font-size: 1.58rem;
    line-height: 1.6;
    font-weight: 700;
    margin-bottom: ${(props: StyledComponentProps) =>
        props.theme.space.common[2]};
`

export const ContentContainer = styled(Container)`
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
        [CUSTOMBLOCKS.HYPERLINK]: (node, children) => (
            <InlineLink to={node.data.uri}>{children}</InlineLink>
        ),
    },
}

type Filter<T, U> = T extends U ? T : never

// Text

type CustomTextAttributes = {
    type: string
    isIntro?: boolean
    body?: {
        json: Document
    }
}

type TextTypes = Filter<
    AllContent,
    CustomTextAttributes & IPageContentTextFields
>

// Image

type ImageTypes = Filter<AllContent, ImageFieldsCustom>

// All

export type AllContent = ImageFieldsCustom &
    IPageContentTextFields &
    CustomTextAttributes

type ContentProps = {
    content: unknown[]
    className?: string
    skills: ISkill[]
}

interface OutputTextComponentProps {
    text: TextTypes
    name: number | string
}
const OutputTextComponent = ({
    text,
    name,
}: OutputTextComponentProps): React.ReactElement => {
    return (
        <React.Fragment key={`inlinetext-${name}`}>
            {documentToReactComponents(text.body.json, options)}
        </React.Fragment>
    )
}

interface OutputImageComponentProps {
    image: ImageTypes
    name: number | string
    type: string
}
const OutputImageComponent = ({
    image,
    name,
    type,
}: OutputImageComponentProps): React.ReactElement => {
    return (
        <ProgressiveImage
            key={`${type}-${name}`}
            sizes="100vw"
            alt={image.image.title}
            image={image.image}
            styles={ImageStyles}
        />
    )
}

const PageContent = ({ content, skills }: ContentProps): React.ReactElement => {
    const [formatContent, setFormatContent] = useState<AllContent[]>(null)

    useEffect(() => {
        const objectToSet: AllContent[] = content.map((c: AllContent, i) => {
            if (c.type === "ContentfulPageContentText" && i === 0) {
                return { ...c, isIntro: true } as TextTypes
            }
            return c as TextTypes | ImageTypes
        })
        setFormatContent(objectToSet)
    }, [content])

    if (!formatContent) {
        return <></>
    }

    return (
        <ContentContainer>
            {formatContent.map((c: AllContent, i) => {
                if (c.type === "ContentfulPageContentText") {
                    if (c.isIntro) {
                        c.body.json.content[0].nodeType = CUSTOMBLOCKS.INTRO
                    }
                    return (
                        <OutputTextComponent
                            key={i}
                            name={i}
                            text={c as TextTypes}
                        />
                    )
                }
                if (c.type === "ContentfulPageContentFullSizeImage") {
                    return (
                        <ContainerBreak key={i}>
                            <OutputImageComponent
                                key={i}
                                name={i}
                                image={c as ImageTypes}
                                type="imagefull"
                            />
                        </ContainerBreak>
                    )
                }
                return (
                    <OutputImageComponent
                        key={i}
                        image={c as ImageTypes}
                        name={i}
                        type="image"
                    />
                )
            })}
            <PageSkills skills={skills} />
        </ContentContainer>
    )
}

export default PageContent
