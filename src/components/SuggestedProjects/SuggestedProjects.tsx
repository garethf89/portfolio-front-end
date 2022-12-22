import styled from "@emotion/styled"
import { Asset } from "contentful"
import * as React from "react"
import { useEffect, useState } from "react"
import { BREAKPOINTS, SPACE } from "../../@chakra-ui//theme"
import { random } from "../../helpers/random"
import Image from "../Common/Image"
import { SROnly } from "../Common/SROnly"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import Link from "../Link/Link"
import { useProjects } from "../../contexts"
import { AspectRatio } from "@chakra-ui/react"

const SuggestedProjectLinkContainer = styled.div`
    display: inline-block;
    width: 100%;
    margin-bottom: ${SPACE.common[4]};
    margin-right: 1rem;
    overflow: hidden;
    &:last-of-type {
        margin-bottom: 0;
        margin-right: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    &:hover {
        img {
            transform: scale(1.1);
        }
    }
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        width: 44%;
        margin-bottom: 0;
        margin-right: 0;
    }
`
const SuggestedProjectLink = styled(Link)``

type SuggestedProjectLinkBGProps = {
    image?: Asset
}

const SuggestedProjectLinkBG = styled(Image)<SuggestedProjectLinkBGProps>`
    transition: all 0.5s ease-in-out;
`

const SuggestedProjectLinkHeading = styled(Heading)`
    margin-top: 1.13rem;
`

const SuggestedDescription = styled(Heading)`
    margin: 0;
`

// TODO Types
const SuggestedProjects = (): React.ReactElement => {
    const [randomProjects, setProjects] = useState(null)

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
        <Container useflex px={[0, 0, 0]} justifyContent="space-between">
            {randomProjects &&
                randomProjects.map((project, i) => {
                    return (
                        <SuggestedProjectLinkContainer key={i}>
                            <SuggestedProjectLink
                                href={`/${project.slug}`}
                                className=""
                            >
                                <AspectRatio ratio={16 / 9}>
                                    <SuggestedProjectLinkBG
                                        alt={project.title}
                                        image={project.coverImage}
                                        fill
                                    />
                                </AspectRatio>
                                <SROnly>{project.title}</SROnly>
                            </SuggestedProjectLink>
                            <SuggestedProjectLinkHeading level="h3">
                                <Link className="" href={`/${project.slug}`}>
                                    {project.title}
                                </Link>
                            </SuggestedProjectLinkHeading>
                            <SuggestedDescription level="h6" override="p">
                                <Link className="" href={`/${project.slug}`}>
                                    {project.headline}
                                </Link>
                            </SuggestedDescription>
                        </SuggestedProjectLinkContainer>
                    )
                })}
        </Container>
    )
}

export default SuggestedProjects
