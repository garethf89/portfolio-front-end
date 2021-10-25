import * as React from "react"

import { BREAKPOINTS } from "../../@chakra-ui/gatsby-plugin/theme"
import Container from "../Global/Container/Container"
import FadeLink from "../Link/Link"
import Heading from "../Typography/Heading"
import { IProjectFields } from "../../../@types/generated/contentful"
import { SROnly } from "../Common/SROnly"
import styled from "@emotion/styled"
import { supportsWebP } from "../../helpers/support/webp"

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
        :nth-of-type(n + 4) {
            margin-bottom: 0;
        }
    }
`
type ProjectImageProps = {
    image: {
        "1x": string
        "2x": string
    }
}

const ProjectImageContainer = styled.div<ProjectImageProps>`
    padding-top: 56.25%;
    position: relative;
    overflow: hidden;
    margin-bottom: 2rem;
`

const ProjectImage = styled.div<ProjectImageProps>`
    background-image: url(${props => props.image["1x"]});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background-image: url(${props => props.image["2x"]});
    }
`

interface ProjectProps {
    data: IProjectFields[]
}

type IProject = IProjectFields

const Projects = ({ data }: ProjectProps): React.ReactElement<ProjectProps> => {
    const webP = supportsWebP()
    return (
        <ProjectsContainer vPadding>
            <Heading level="h2" textAlign="center">
                My Work
            </Heading>
            <ProjectWrapper>
                {data.map((project: IProject, i: number) => {
                    const imageSrc = webP
                        ? {
                              "1x": project.coverImage.icon1x.srcWebp,
                              "2x": project.coverImage.icon2x.srcWebp,
                          }
                        : {
                              "1x": project.coverImage.icon1x.src,
                              "2x": project.coverImage.icon2x.src,
                          }
                    return (
                        <Project key={i}>
                            <FadeLink to={project.slug}>
                                <SROnly>{project.title}</SROnly>
                                <ProjectImageContainer image={imageSrc}>
                                    <ProjectImage image={imageSrc} />
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
