import styled from "@emotion/styled"
import * as React from "react"
import { IProjectFields } from "../../../@types/generated/contentful"
import { BREAKPOINTS } from "../../@chakra-ui//theme"
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

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

const Project = styled.div`
    margin-bottom: 3rem;
    transition: all 0.5s ease-out;
    p {
        margin-bottom: 0;
    }
    &:last-of-type {
        margin-bottom: 0;
    }
    &:hover {
        opacity: 0.9;
    }
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        width: 48%;
        &:last-of-type {
            margin-bottom: 0;
        }
        :nth-of-type(n + 5) {
            margin-bottom: 0;
        }
    }
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        width: 32%;
        margin-bottom: 2rem;
        :nth-of-type(n + 6) {
            margin-bottom: 0;
        }
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
    data: IProjectFields[]
}

type IProject = IProjectFields

const Projects = ({ data }: ProjectProps): React.ReactElement<ProjectProps> => {
    return (
        <ProjectsContainer vPadding>
            <Heading level="h2" textAlign="center">
                My Work
            </Heading>
            <ProjectWrapper>
                {data.map((project: IProject, i: number) => {
                    return (
                        <Project key={i}>
                            <FadeLink to={project.slug}>
                                <SROnly>{project.title}</SROnly>
                                <ProjectImageContainer>
                                    <ProjectImage
                                        alt={project.title}
                                        image={project.coverImage}
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
                            <Heading level="h5" override="p">
                                <FadeLink to={project.slug}>
                                    <SROnly>{project.title}</SROnly>
                                    {project.headline}
                                </FadeLink>
                            </Heading>
                        </Project>
                    )
                })}
            </ProjectWrapper>
        </ProjectsContainer>
    )
}

export default Projects
