import * as React from "react"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import {
    ContentfulRichTextGatsbyReference,
    RenderRichTextData,
} from "../../../@types/types"

import { BREAKPOINTS } from "../../@chakra-ui/gatsby-plugin/theme"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import { IProjectFields } from "../../../@types/generated/contentful"
import Lines from "../Animation/Lines"
import { OuterWrapper } from "../Common/OuterWrapper"
import ReadMore from "../Typography/ReadMore"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from "@emotion/styled"

const StyledParagraph = styled(Heading)`
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.sectionText};
`

const CaseStudyContainer = styled(Container)``

const CaseStudyWrapper = styled.div`
    position: relative;

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        display: flex;
        justify-content: space-between;
    }
`

const CaseStudy = styled.div`
    margin-bottom: 3rem;
    &:last-of-type {
        margin-bottom: 0;
    }
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        width: 30%;
        margin-bottom: 0;
    }
`

interface BlockParams {
    children?: React.ReactNode
}

const Text = ({
    children,
}: BlockParams): React.ReactElement<CaseStudyTextProps> => {
    return (
        <StyledParagraph level="h5" override="p">
            {children}
        </StyledParagraph>
    )
}

const Bold = styled.span`
    font-weight: 700;
`

const options = {
    renderMark: {
        [MARKS.BOLD]: (text: React.ReactNode) => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (
            node: React.ReactNode,
            children: React.ReactNode
        ): React.ReactElement<CaseStudyTextProps> => {
            return <Text>{children}</Text>
        },
    },
}

interface CaseStudyTextProps {
    data?: Document<ContentfulRichTextGatsbyReference>
}

type Intro = RenderRichTextData<ContentfulRichTextGatsbyReference>

type Project = Omit<IProjectFields, "intro"> & {
    intro: Intro
}

interface CSProps {
    data: Project[]
}

export const CaseStudyText = ({
    data,
}: CaseStudyTextProps): React.ReactElement => {
    return renderRichText(data, options) as React.ReactElement
}

const CaseStudies = ({ data }: CSProps): React.ReactElement<CSProps> => {
    return (
        <OuterWrapper>
            <CaseStudyContainer vPadding>
                <Lines id="LinesCaseStudies" />
                <Heading level="h2" position="relative">
                    Case Studies
                </Heading>
                <CaseStudyWrapper>
                    {data.map((project: Project, i: number) => {
                        return (
                            <CaseStudy key={i}>
                                <CaseStudyText data={project.intro} />
                                <ReadMore to={`/${project.slug}`}>
                                    Read more about {project.title}
                                </ReadMore>
                            </CaseStudy>
                        )
                    })}
                </CaseStudyWrapper>
            </CaseStudyContainer>
        </OuterWrapper>
    )
}

export default CaseStudies
