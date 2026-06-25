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
import { Image } from "../Common"

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "3rem",
    position: "relative",
    background: "caseStudyBackgroundColor",
    borderColor: "caseStudyBorderColor",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    padding: 6,
    "&:last-of-type": {
        marginBottom: 0,
    },
    "&:hover img": {
        transform: "scale(1.1)",
    },
    md: {
        width: "30%",
        marginBottom: 0,
    },
})

const caseStudyImageContainerStyles = css({
    aspectRatio: "16/9",
    position: "relative",
    overflow: "hidden",
    marginBottom: "2rem",
})

const caseStudyImageStyles = css({
    transition: "all 0.5s ease-in-out",
})

interface BlockParams {
    children?: React.ReactNode
}

const Text = ({
    children,
}: BlockParams): React.ReactElement<CaseStudyTextProps> => {
    return (
        <Heading level="h6" override="p" css={styledParagraphStyles}>
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
            _node: CommonNode,
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
            <Container options={{ largePadding: true }}>
                <Lines id="LinesCaseStudies" />
                <Heading level="h2">Featured Projects</Heading>
                <div className={caseStudyWrapperStyles}>
                    {data.map((project: Project, i: number) => {
                        if (!project) {
                            return <></>
                        }
                        const { coverImage } = project

                        if (!coverImage) {
                            return <></>
                        }
                        return (
                            <div key={i} className={caseStudyStyles}>
                                <div className={caseStudyImageContainerStyles}>
                                    <Image
                                        className={caseStudyImageStyles}
                                        alt={project.title ?? ""}
                                        image={coverImage}
                                        fill
                                        sizes="(max-width: 800px) 50vw, 33vw"
                                        style={{
                                            objectFit: "cover",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                                <Heading
                                    level="h6"
                                    override="h3"
                                    css={{ marginBottom: 4, fontWeight: 600 }}
                                >
                                    {project.title}
                                </Heading>
                                <CaseStudyText
                                    data={project.intro as ProjectIntro}
                                />
                                <ReadMore
                                    href={`/${project.slug}`}
                                    aria-label={`View project: ${project.title ?? "Untitled project"}`}
                                >
                                    View Project
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
