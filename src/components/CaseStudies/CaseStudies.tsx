import * as React from "react"

import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types"
import { RenderRichTextData } from "../../../@types/types"
import {
    documentToReactComponents,
    CommonNode,
} from "@contentful/rich-text-react-renderer"
import { BREAKPOINTS } from "../../@chakra-ui/gatsby-plugin/theme"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import { IProjectFields } from "../../../@types/generated/contentful"
import Lines from "../Animation/Lines"
import { OuterWrapper } from "../Common/OuterWrapper"
import ReadMore from "../Typography/ReadMore"
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
            node: CommonNode,
            children: React.ReactNode
        ): React.ReactElement<CaseStudyTextProps> => {
            return <Text>{children}</Text>
        },
    },
}

interface CSProps {
    data: IProjectFields[]
}

type RichDocument = Document & RenderRichTextData<undefined>

interface CaseStudyTextProps {
    data: Document & RenderRichTextData<undefined>
}

export const CaseStudyText = ({
    data,
}: CaseStudyTextProps): React.ReactElement => {
    return documentToReactComponents(data.json, options) as React.ReactElement
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
                    {data.map((project, i: number) => {
                        return (
                            <CaseStudy key={i}>
                                <CaseStudyText
                                    data={project.intro as RichDocument}
                                />
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
