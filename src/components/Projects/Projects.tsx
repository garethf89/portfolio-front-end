import styled from "@emotion/styled"
import * as React from "react"
import { BREAKPOINTS } from "@theme"
import { Project as ProjectType } from "@schema"
import Image from "../Common/Image"
import { SROnly } from "../Common/SROnly"
import Container from "../Global/Container/Container"
import FadeLink from "../Link/Link"
import Heading from "../Typography/Heading"

const ProjectsContainer = styled(Container)`
    padding-bottom: 0;
`

const ProjectWrapper = styled.div`
    position: relative;

    @media (min-width: ${BREAKPOINTS.md}) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        > * {
            width: 48%;
        }
    }

    @media (min-width: ${BREAKPOINTS.LARGE}) {
        > * {
            width: 32%;
        }
    }
`

const ProjectWrapperLower = styled.div`
    position: relative;

    @media (min-width: ${BREAKPOINTS.md}) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        > * {
            width: 48%;
        }
    }

    @media (min-width: ${BREAKPOINTS.LARGE}) {
        > * {
            width: 24%;
            margin-bottom: 0;
        }
    }
`

const Project = styled.div`
    margin-bottom: 3rem;
    transition: all 0.5s ease-out;
    p {
        margin-bottom: 0;
    }
    &:hover {
        opacity: 0.9;
    }
`

const ProjectImageContainer = styled.div`
    padding-top: 56.25%;
    position: relative;
    overflow: hidden;
    margin-bottom: 2rem;
`

const ProjectImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`

interface ProjectProps {
    data: ProjectType[]
}

const ProjectTemplate = ({
    project,
    index,
    lower = false,
}: {
    project: ProjectType
    index: number
    lower?: boolean
}): React.ReactElement => {
    const { coverImage } = project

    if (!coverImage) {
        return <></>
    }

    return (
        <Project key={index}>
            <FadeLink href={project.slug ?? ""}>
                <SROnly>{project.title}</SROnly>
                <ProjectImageContainer>
                    <ProjectImage
                        alt={project.title ?? ""}
                        image={coverImage}
                        fill
                        sizes="(max-width: 800) 50vw,
              33vw"
                        style={{
                            objectFit: "cover",
                            height: "100%",
                        }}
                    />
                </ProjectImageContainer>
            </FadeLink>
            <Heading
                level={"h6"}
                override="p"
                fontSize={[24, 24, 24, lower ? 18 : 24]}
            >
                <FadeLink href={project.slug ?? "/"}>
                    <SROnly>{project.title}</SROnly>
                    {project.headline}
                </FadeLink>
            </Heading>
        </Project>
    )
}

const Projects = ({ data }: ProjectProps): React.ReactElement<ProjectProps> => {
    return (
        <ProjectsContainer vPadding>
            <Heading level="h2" textAlign="center">
                My Work
            </Heading>
            <ProjectWrapper>
                {data.map((project: ProjectType, i: number) => {
                    if (i >= data.length - 4) {
                        return null
                    }
                    return (
                        <ProjectTemplate key={i} index={i} project={project} />
                    )
                })}
            </ProjectWrapper>
            <ProjectWrapperLower>
                {data.map((project: ProjectType, i: number) => {
                    if (i < data.length - 4) {
                        return null
                    }
                    return (
                        <ProjectTemplate
                            key={i}
                            index={i}
                            project={project}
                            lower={true}
                        />
                    )
                })}
            </ProjectWrapperLower>
        </ProjectsContainer>
    )
}

export default Projects
