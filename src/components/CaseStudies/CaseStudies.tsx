import * as React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import {
    documentToReactComponents,
    CommonNode,
} from "@contentful/rich-text-react-renderer"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import Lines from "../Animation/Lines"
import { OuterWrapper } from "../Common/OuterWrapper"
import ReadMore from "../Typography/ReadMore"
import { HomePageCaseStudiesCollection, Project, ProjectIntro } from "@schema"
import { css } from "@styled-system/css"

const styledParagraphStyles = {
    fontWeight: 300,
    marginTop: 0,
    marginBottom: 4,
    color: "sectionText",
}

const caseStudyWrapperStyles = css({
    position: "relative",
    md: {
        display: "flex",
        justifyContent: "space-between",
    },
})

const caseStudyStyles = css({
    marginBottom: "3rem",
    "&:last-of-type": {
        marginBottom: 0,
    },
    md: {
        width: "30%",
        marginBottom: 0,
    },
})

interface BlockParams {
    children?: React.ReactNode
}

const Text = ({
    children,
}: BlockParams): React.ReactElement<CaseStudyTextProps> => {
    return (
        <Heading level="h5" override="p" css={styledParagraphStyles}>
            {children}
        </Heading>
    )
}

const boldStyles = css({
    fontWeight: 700,
})

const Bold = ({ children }: { children: React.ReactNode }) => (
    <span className={boldStyles}>{children}</span>
)

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
    data: HomePageCaseStudiesCollection["items"]
}

interface CaseStudyTextProps {
    data: ProjectIntro
}

export const CaseStudyText = ({
    data,
}: CaseStudyTextProps): React.ReactElement => {
    return documentToReactComponents(data.json, options) as React.ReactElement
}

const CaseStudies = ({ data }: CSProps): React.ReactElement<CSProps> => {
    return (
        <OuterWrapper>
            <Container vPadding>
                <Lines id="LinesCaseStudies" />
                <Heading level="h2">Case Studies</Heading>
                <div className={caseStudyWrapperStyles}>
                    {data.map((project: Project, i: number) => {
                        if (!project) {
                            return <></>
                        }
                        return (
                            <div key={i} className={caseStudyStyles}>
                                <CaseStudyText
                                    data={project.intro as ProjectIntro}
                                />
                                <ReadMore href={`/${project.slug}`}>
                                    Read more about {project.title}
                                </ReadMore>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </OuterWrapper>
    )
}

export default CaseStudies
