import * as React from "react"
import { Project as ProjectType } from "@schema"
import Image from "../Common/Image"
import { SROnly } from "../Common/SROnly"
import FadeLink from "../Link/Link"
import Heading from "../Typography/Heading"
import { Container } from "../Global/Container"
import { css } from "@styled-system/css"

const projectsContainerStyles = {
    paddingBottom: 0,
}

const projectWrapperStyles = css({
    position: "relative",
    sm: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        "& > *": {
            width: "48%",
        },
    },
    md: {
        "& > *": {
            width: "32%",
        },
    },
})

const projectWrapperLowerStyles = css({
    position: "relative",
    sm: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        "& > *": {
            width: "48%",
        },
    },
    md: {
        "& > *": {
            width: "24%",
            marginBottom: 0,
        },
    },
})

const projectStyles = css({
    marginBottom: "3rem",
    transition: "all 0.5s ease-out",
    "& p": {
        marginBottom: 0,
    },
    "&:hover": {
        opacity: 0.9,
    },
})

const projectImageContainerStyles = css({
    paddingTop: "56.25%",
    position: "relative",
    overflow: "hidden",
    marginBottom: "2rem",
})

const projectImageStyles = css({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: "all 0.5s ease-in-out",
    "&:hover": {
        transform: "scale(1.1)",
    },
})

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
        <div className={projectStyles} key={index}>
            <FadeLink href={project.slug ?? ""}>
                <SROnly>{project.title}</SROnly>
                <div className={projectImageContainerStyles}>
                    <Image
                        className={projectImageStyles}
                        alt={project.title ?? ""}
                        image={coverImage}
                        fill
                        sizes="(max-width: 800) 50vw, 33vw"
                        style={{
                            objectFit: "cover",
                            height: "100%",
                        }}
                    />
                </div>
            </FadeLink>
            <Heading
                level={"h6"}
                override="p"
                css={{
                    fontSize: { base: "24px", lg: lower ? "18px" : "24px" },
                }}
            >
                <FadeLink href={project.slug ?? "/"}>
                    <SROnly>{project.title}</SROnly>
                    {project.headline}
                </FadeLink>
            </Heading>
        </div>
    )
}

const Projects = ({ data }: ProjectProps): React.ReactElement<ProjectProps> => {
    return (
        <Container css={projectsContainerStyles} vPadding>
            <Heading level="h2" css={{ textAlign: "center" }}>
                My Work
            </Heading>
            <div className={projectWrapperStyles}>
                {data.map((project: ProjectType, i: number) => {
                    if (i >= data.length - 4) {
                        return null
                    }
                    return (
                        <ProjectTemplate key={i} index={i} project={project} />
                    )
                })}
            </div>
            <div className={projectWrapperLowerStyles}>
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
            </div>
        </Container>
    )
}

export default Projects
