import * as React from "react"
import { Project as ProjectType } from "@schema"
import Image from "../Common/Image"
import { SROnly } from "../Common/SROnly"
import FadeLink from "../Link/Link"
import Heading from "../Typography/Heading"
import { Container } from "../Global/Container"
import { css } from "@styled-system/css"

const projectWrapperStyles = css({
    position: "relative",
    rowGap: 12,
    marginBottom: 12,
    sm: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        "& > *": {
            width: "48%",
        },
    },
    md: {
        gap: 2,
        flexWrap: "nowrap",
        "& > *": {
            width: "25%",
        },
    },
})

const projectWrapperLowerStyles = css({
    position: "relative",
    rowGap: 12,
    sm: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        "& > *": {
            width: "48%",
        },
    },
    md: {
        flexWrap: "nowrap",
        gap: 4,
        "& > *": {
            width: "24%",
            marginBottom: 0,
        },
    },
})

const projectStyles = css({
    marginBottom: 0,
    transition: "all 0.5s ease-out",
    "& p": {
        marginBottom: 0,
    },
    "&:hover": {
        opacity: 0.9,
    },
})

const projectImageContainerStyles = css({
    aspectRatio: "16/9",
    position: "relative",
    overflow: "hidden",
    marginBottom: "2rem",
})

const projectImageStyles = css({
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
    lower,
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
                    fontSize: { base: "18px", md: lower ? "16px" : "18px" },
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

const topRowAmount = 4

const Projects = ({ data }: ProjectProps): React.ReactElement<ProjectProps> => {
    const topRow = data.splice(0, topRowAmount)

    return (
        <Container options={{ largePadding: true }}>
            <Heading level="h2" css={{ textAlign: "center" }}>
                My Work
            </Heading>
            <div className={projectWrapperStyles}>
                {topRow.map((project: ProjectType, i: number) => {
                    return (
                        <ProjectTemplate key={i} index={i} project={project} />
                    )
                })}
            </div>
            <div className={projectWrapperLowerStyles}>
                {data.map((project: ProjectType, i: number) => {
                    return (
                        <ProjectTemplate
                            lower={true}
                            key={i}
                            index={i}
                            project={project}
                        />
                    )
                })}
            </div>
        </Container>
    )
}

export default Projects
