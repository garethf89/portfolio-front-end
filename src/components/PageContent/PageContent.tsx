import {
    BLOCKS,
    INLINES,
    MARKS,
    TopLevelBlockEnum,
} from "@contentful/rich-text-types"
import styled from "@emotion/styled"
import { Asset } from "contentful"
import * as React from "react"
import { useEffect, useId, useState } from "react"
import {
    IPageContentImageFields,
    IPageContentTextFields,
} from "../../../@types/generated/contentful"
import {
    ContentfulRichTextNextReference,
    IconsProcessed,
    RenderRichTextData,
} from "../../../@types/types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BREAKPOINTS, SPACE } from "../../@chakra-ui//theme"
import Image from "../Common/Image"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import InlineLink from "../Typography/Inlinelink"
import ContainerBreak from "../Utils/ContainerBreak"
import PageSkills from "./PageSkills"
import { Skill } from "../../schema/schema"

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
            <InlineLink href={node.data.uri}>{children}</InlineLink>
        ),
    },
}

// Text

type CustomTextAttributes = {
    type: string
    isIntro?: boolean
    body?: RenderRichTextData<ContentfulRichTextNextReference>
}

type TextTypes = AllContent & CustomTextAttributes & IPageContentTextFields

// Image

type ImageTypes = AllContent

// All

export type AllContent = Partial<IPageContentTextFields> &
    Partial<CustomTextAttributes> &
    Partial<IPageContentImageFields>

type ContentProps = {
    content: unknown[]
    className?: string
    skills: Skill[]
    icons: IconsProcessed[]
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

export interface OutputImageComponentProps {
    image: IPageContentImageFields
    name: number | string
    type: string
}

type ExpandedAsset = Asset & {
    title: string
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
            if (c.type === "PageContentText" && i === 0) {
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
                if (c.type === "PageContentText") {
                    if (c.isIntro) {
                        c.body.json.content[0].nodeType = CUSTOMBLOCKS.INTRO
                    }
                    return (
                        <OutputTextComponent
                            key={`${id}-${i}`}
                            name={`${id}-${i}`}
                            text={c as TextTypes}
                        />
                    )
                }
                if (c.type === "PageContentFullSizeImage") {
                    return (
                        <ContainerBreak key={i}>
                            <OutputImageComponent
                                key={`${id}-${i}`}
                                name={`${id}-${i}`}
                                image={c as IPageContentImageFields}
                                type="imagefull"
                            />
                        </ContainerBreak>
                    )
                }
                return (
                    <OutputImageComponent
                        key={`${id}-${i}`}
                        image={c as IPageContentImageFields}
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
