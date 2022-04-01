import styled from "@emotion/styled"
import { Asset } from "contentful"
import { Link } from "gatsby"
import * as React from "react"
import { useEffect, useState } from "react"
import { IProjectFields } from "../../../@types/generated/contentful"
import { BREAKPOINTS, SPACE } from "../../@chakra-ui/gatsby-plugin/theme"
import { random } from "../../helpers/random"
import { getAllProjects } from "../../hooks/get-all-projects"
import Image from "../Common/Image"
import { SROnly } from "../Common/SROnly"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"

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
        .gatsby-image-wrapper {
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

type ProjectNodes = IProjectFields[]
type AllProjects = {
    allContentfulProject: {
        edges: ProjectNodes[]
    }
}

const SuggestedProjects = (): React.ReactElement => {
    const [randomProjects, setProjects] = useState(null)

    const data: AllProjects = getAllProjects()

    useEffect(() => {
        const projects = [...data.allContentfulProject.edges]

        const randomNumbers = random(projects.length - 1, 2)
        setProjects([
            projects[randomNumbers[0] - 1],
            projects[randomNumbers[1] - 1],
        ])
    }, [])

    return (
        <Container useflex px={[0, 0, 0]} justifyContent="space-between">
            {randomProjects &&
                randomProjects.map((project, i) => {
                    return (
                        <SuggestedProjectLinkContainer key={i}>
                            <SuggestedProjectLink
                                to={`/${project.node.slug}`}
                                className=""
                            >
                                <SuggestedProjectLinkBG
                                    alt={project.node.title}
                                    image={project.node.coverImage}
                                />
                                <SROnly>{project.node.title}</SROnly>
                            </SuggestedProjectLink>
                            <SuggestedProjectLinkHeading level="h3">
                                <Link className="" to={`/${project.node.slug}`}>
                                    {project.node.title}
                                </Link>
                            </SuggestedProjectLinkHeading>
                            <SuggestedDescription level="h6" override="p">
                                <Link className="" to={`/${project.node.slug}`}>
                                    {project.node.headline}
                                </Link>
                            </SuggestedDescription>
                        </SuggestedProjectLinkContainer>
                    )
                })}
        </Container>
    )
}

export default SuggestedProjects
