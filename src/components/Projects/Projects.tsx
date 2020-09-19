import Container from "../Global/Container/Container"
import { Document } from "@contentful/rich-text-types"
import FadeLink from "../Link/Link"
import Heading from "../Typography/Heading"
import { IProjectFields } from "../../../@types/generated/contentful"
import React from "react"
import { StyledComponentProps } from "../../../@types/types"
import styled from "@emotion/styled"
import { supportsWebP } from "../../helpers/support/webp"
const ProjectsContainer = styled(Container)``

const ProjectWrapper = styled.div`
    position: relative;

    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.small}) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

const Project = styled.div`
    margin-bottom: 3rem;
    &:last-of-type {
        margin-bottom: 0;
    }
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.small}) {
        width: 48%;
        margin-bottom: 0;
    }
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        width: 32%;
        margin-bottom: 0;
    }
`
type ProjectImageProps = {
    image: {
        "1x": string
        "2x": string
    }
}
const ProjectImage = styled.div<ProjectImageProps>`
    padding-top: 56.25%;
    background-image: url(${(props: StyledComponentProps) =>
        props.image["1x"]});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background-image: url(${(props: StyledComponentProps) =>
            props.image["2x"]});
    }
`

interface ProjectProps {
    data: IProjectFields[]
}

type Icon = Document & {
    icon: Document & Record<string, string>
}

type IProject = IProjectFields

const Projects = ({ data }: ProjectProps): React.ReactElement<ProjectProps> => {
    const webP = supportsWebP()
    return (
        <ProjectsContainer vPadding>
            <Heading level="h3" textAlign="center">
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
                                <ProjectImage image={imageSrc} />
                            </FadeLink>
                            <Heading level="h5" override="p">
                                <FadeLink to={project.slug}>
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
