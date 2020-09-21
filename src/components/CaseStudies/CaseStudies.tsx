import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types"

import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import { IProjectFields } from "../../../@types/generated/contentful"
import Lines from "../Animation/Lines"
import { OuterWrapper } from "../Common/OuterWrapper"
import React from "react"
import ReadMore from "../Typography/ReadMore"
import { StyledComponentProps } from "../../../@types/types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "@emotion/styled"

const StyledParagraph = styled(Heading)`
    font-weight: 300;
    margin-top: 0;
    color: ${(props: StyledComponentProps) => props.theme.colors.sectionText};
`

const CaseStudyContainer = styled(Container)``

const CaseStudyWrapper = styled.div`
    position: relative;

    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        display: flex;
        justify-content: space-between;
    }
`

const CaseStudy = styled.div`
    margin-bottom: 3rem;
    &:last-of-type {
        margin-bottom: 0;
    }
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        width: 30%;
        margin-bottom: 0;
    }
`

interface CSProps {
    data: IProjectFields[]
}

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
    data?: Document
}

type Intro = Document & {
    json: Document & Record<string, string>
}

interface Project extends IProjectFields {
    intro: Intro
}

export const CaseStudyText = ({
    data,
}: CaseStudyTextProps): React.ReactElement => {
    return documentToReactComponents(data, options) as React.ReactElement
}

const CaseStudies = ({ data }: CSProps): React.ReactElement<CSProps> => {
    return (
        <OuterWrapper>
            <CaseStudyContainer vPadding>
                <Lines id="LinesCaseStudies" />
                <Heading level="h2">Case Studies</Heading>
                <CaseStudyWrapper>
                    {data.map((project: Project, i: number) => {
                        return (
                            <CaseStudy key={i}>
                                <CaseStudyText data={project.intro.json} />
                                <ReadMore to={`/${project.slug}`}>
                                    Read more
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
