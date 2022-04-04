import {
    BLOCKS,
    INLINES,
    MARKS,
    TopLevelBlockEnum,
} from "@contentful/rich-text-types"
import styled from "@emotion/styled"
import { Asset } from "contentful"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as React from "react"
import { useEffect, useState } from "react"
import {
    IPageContentImageFields,
    IPageContentTextFields,
    ISkill,
} from "../../../@types/generated/contentful"
import { BREAKPOINTS, SPACE } from "../../@chakra-ui/gatsby-plugin/theme"
import Image from "../Common/Image"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import InlineLink from "../Typography/Inlinelink"
import ContainerBreak from "../Utils/ContainerBreak"
import PageSkills from "./PageSkills"

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
            <InlineLink to={node.data.uri}>{children}</InlineLink>
        ),
    },
}

// Text

type CustomTextAttributes = {
    type: string
    isIntro?: boolean
    body?: React.ReactNode
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
            {renderRichText(text.body, options)}
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
            alt={(image.image as ExpandedAsset).title}
            image={image.image}
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
                        const tempC = JSON.parse(c.body.raw)
                        tempC.content[0].nodeType = CUSTOMBLOCKS.INTRO
                        c.body.raw = JSON.stringify(tempC)
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
                                image={c as IPageContentImageFields}
                                type="imagefull"
                            />
                        </ContainerBreak>
                    )
                }
                return (
                    <OutputImageComponent
                        key={i}
                        image={c as IPageContentImageFields}
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
