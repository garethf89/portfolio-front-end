import * as React from "react"
import { useEffect, useState } from "react"
import { random } from "../../helpers/random"
import Image from "../Common/Image"
import { SROnly } from "../Common/SROnly"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import Link from "../Link/Link"
import { useProjects } from "../../contexts"
import { Project } from "@schema"
import { css } from "@styled-system/css"

const suggestedProjectLinkContainerStyles = css({
    display: "inline-block",
    width: "100%",
    marginBottom: "12",
    marginRight: "4",
    overflow: "hidden",
    "&:last-of-type": {
        marginBottom: 0,
        marginRight: 0,
    },
    "& a:hover": { textDecoration: "none", color: "inherit" },
    "&:hover img": { transform: "scale(1.1);" },
    md: { width: "40%", marginBottom: 0, marginRight: 0 },
})

const suggestedProjectLinkBGStyles = css({
    transition: "all 0.5s ease-in-out",
    objectFit: "cover",
})

const aspectContainerStyles = css({
    position: "relative",
    aspectRatio: "16 / 9",
    overflow: "hidden",
})

const SuggestedProjects = (): React.ReactElement => {
    const [randomProjects, setProjects] = useState<Project[] | null>(null)

    const { projects } = useProjects()

    useEffect(() => {
        if (!projects.length) {
            return
        }
        const randomNumbers = random(projects.length - 1, 2)
        setProjects([
            projects[randomNumbers[0] - 1],
            projects[randomNumbers[1] - 1],
        ])
    }, [projects])

    if (!randomProjects || !randomProjects.length) {
        return <></>
    }

    return (
        <Container
            useflex
            css={{
                "&&": { paddingX: { base: "0", lg: "0" } },
                justifyContent: "space-between",
            }}
        >
            {!!randomProjects &&
                randomProjects.map((project, i) => {
                    return (
                        <div
                            className={suggestedProjectLinkContainerStyles}
                            key={i}
                        >
                            <Link href={`/${project.slug}`}>
                                <div className={aspectContainerStyles}>
                                    <Image
                                        className={suggestedProjectLinkBGStyles}
                                        alt={project.title!}
                                        image={project.coverImage!}
                                        fill
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center center",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                                <SROnly>{project.title}</SROnly>
                            </Link>
                            <Heading
                                level="h3"
                                css={css.raw({ marginTop: "6" })}
                            >
                                <Link href={`/${project.slug}`}>
                                    {project.title}
                                </Link>
                            </Heading>
                            <Heading
                                level="h6"
                                override="p"
                                css={{ margin: 0 }}
                            >
                                <Link href={`/${project.slug}`}>
                                    {project.headline}
                                </Link>
                            </Heading>
                        </div>
                    )
                })}
        </Container>
    )
}

export default SuggestedProjects
