import {
    BLOCKS,
    INLINES,
    MARKS,
    TopLevelBlockEnum,
} from "@contentful/rich-text-types"
import styled from "@emotion/styled"
import * as React from "react"
import { useEffect, useId, useState } from "react"

import { IconsProcessed } from "../../../@types/types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BREAKPOINTS, SPACE } from "../../@chakra-ui//theme"
import Image from "../Common/Image"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import InlineLink from "../Typography/Inlinelink"
import ContainerBreak from "../Utils/ContainerBreak"
import PageSkills from "./PageSkills"
import type {
    ProjectPageContentItem,
    Skill,
    PageContentFullSizeImage,
    PageContentImage,
    PageContentText,
} from "@schema"

const CUSTOMBLOCKS = {
    ...BLOCKS,
    ...INLINES,
    INTRO: "intro" as TopLevelBlockEnum,
}

const ImageStyled = styled(Image)`
    max-width: 100%;
    margin-bottom: ${SPACE.common[2]};
    margin-top: ${SPACE.common[3]};
`

export const StyledParagraph = styled.p`
    font-size: 1.13rem;
    line-height: 1.6;
    font-weight: 200;
    margin-bottom: ${SPACE.common[2]};
`
export const StyledParagraphIntro = styled.p`
    font-size: 1.58rem;
    line-height: 1.6;
    font-weight: 700;
    margin: ${SPACE.common[2]} 0;
`

export const ContentContainer = styled(Container)`
    max-width: ${props => props.theme.sizes.container.content};
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        max-width: calc(${props => props.theme.sizes.container.content} + 6rem);
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

const Bold = ({ children }: React.PropsWithChildren) => {
    return <BoldMark>{children}</BoldMark>
}
const Italic = ({ children }: React.PropsWithChildren) => {
    return <ItalicMark>{children}</ItalicMark>
}

const Underline = ({ children }: React.PropsWithChildren) => {
    return <UnderlineMark>{children}</UnderlineMark>
}
const Text = ({ children }: React.PropsWithChildren) => {
    return <StyledParagraph> {children}</StyledParagraph>
}
const IntroText = ({ children }: React.PropsWithChildren) => {
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
            <InlineLink href={node.data.uri}>{children}</InlineLink>
        ),
    },
}

// Text

type CustomTextAttributes = {
    type: string
    isIntro?: boolean
}

type TextTypes = AllContent & CustomTextAttributes

// All
export type AllContent = ProjectPageContentItem

type ContentProps = {
    content: ProjectPageContentItem[]
    className?: string
    skills: Skill[]
    icons: IconsProcessed[]
}

interface OutputTextComponentProps {
    text: PageContentText
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

export interface OutputImageComponentProps {
    image: PageContentFullSizeImage | PageContentImage
    name: number | string
    type: string
}

export const OutputImageComponent = ({
    image,
    name,
    type,
}: OutputImageComponentProps): React.ReactElement => {
    return (
        <ImageStyled
            key={`${type}-${name}`}
            alt={image.image.title}
            image={image.image}
            width={image.image.width}
            height={image.image.height}
        />
    )
}

const PageContent = ({
    content,
    skills,
    icons,
}: ContentProps): React.ReactElement => {
    const [formatContent, setFormatContent] = useState<AllContent[]>(null)
    const id = useId()
    useEffect(() => {
        const objectToSet: AllContent[] = content.map((c: AllContent, i) => {
            const cType = c["__typename"]
            if (cType === "PageContentText" && i === 0) {
                return { ...c, isIntro: true } as TextTypes
            }
            return c as TextTypes | PageContentImage
        })
        setFormatContent(objectToSet)
    }, [content])

    if (!formatContent) {
        return <></>
    }

    return (
        <ContentContainer>
            {formatContent.map((c: TextTypes, i) => {
                const cType = c["__typename"]
                if (cType === "PageContentText") {
                    if (c.isIntro) {
                        c.body.json.content[0].nodeType = CUSTOMBLOCKS.INTRO
                    }
                    return (
                        <OutputTextComponent
                            key={`${id}-${i}`}
                            name={`${id}-${i}`}
                            text={c as PageContentText}
                        />
                    )
                }
                if (cType === "PageContentFullSizeImage") {
                    return (
                        <ContainerBreak key={i}>
                            <OutputImageComponent
                                key={`${id}-${i}`}
                                name={`${id}-${i}`}
                                image={c}
                                type="imagefull"
                            />
                        </ContainerBreak>
                    )
                }
                return (
                    <OutputImageComponent
                        key={`${id}-${i}`}
                        image={c}
                        name={`${id}-${i}`}
                        type="image"
                    />
                )
            })}
            <PageSkills skills={skills} icons={icons} />
        </ContentContainer>
    )
}

export default PageContent
