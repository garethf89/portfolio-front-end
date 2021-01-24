import React, { useEffect, useState } from "react"

import { BREAKPOINTS } from "../../gatsby-plugin-theme-ui"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import { Link } from "gatsby"
import { SROnly } from "../Common/SROnly"
import { getAllProjects } from "../../hooks/get-all-projects"
import { random } from "../../helpers/random"
import styled from "@emotion/styled"
import { supportsWebP } from "../../helpers/support/webp"

const SuggestedProjectLinkContainer = styled.div`
    display: inline-block;
    width: 100%;
    margin-bottom: ${props => props.theme.space.common[4]};
    margin-right: 1rem;
    &:last-of-type {
        margin-bottom: 0;
        margin-right: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    &:hover {
        a span {
            transform: scale(1.1);
        }
    }
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        width: 44%;
        margin-bottom: 0;
        margin-right: 0;
    }
`
const SuggestedProjectLink = styled(Link)<SuggestedProjectProps>`
    padding-top: 56.25%;
    width: 100%;
    display: inline-block;
    position: relative;
    overflow: hidden;
`

type SuggestedProjectProps = {
    image: {
        "1x": string
        "2x": string
    }
}
const SuggestedProjectLinkBG = styled.span<SuggestedProjectProps>`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.secondaryBackground};
    background-image: url(${props => props.image["2x"]});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    transition: all 0.5s ease-in-out;
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        max-width: none;
    }
`

const SuggestedProjectLinkHeading = styled(Heading)`
    margin-top: 1.13rem;
`

const SuggestedDescription = styled(Heading)`
    margin: 0;
`

const SuggestedProjects = (): React.ReactElement => {
    const [randomProjects, setProjects] = useState(null)

    const data = getAllProjects()
    const webp = supportsWebP()

    useEffect(() => {
        const projects = [...data.allContentfulProject.edges]

        const randomNumbers = random(projects.length - 1, 2)
        setProjects([
            projects[randomNumbers[0] - 1],
            projects[randomNumbers[1] - 1],
        ])
    }, [])

    return (
        <Container useflex paddingX={[0, 0, 0]} justifyContent="space-between">
            {randomProjects &&
                randomProjects.map((project, i) => {
                    const imageSrc = webp
                        ? {
                              "1x": project.node.coverImage.icon1x.srcWebp,
                              "2x": project.node.coverImage.icon2x.srcWebp,
                          }
                        : {
                              "1x": project.node.coverImage.icon1x.src,
                              "2x": project.node.coverImage.icon2x.src,
                          }
                    return (
                        <SuggestedProjectLinkContainer key={i}>
                            <SuggestedProjectLink
                                to={`/${project.node.slug}`}
                                className=""
                            >
                                <SuggestedProjectLinkBG image={imageSrc}>
                                    <SROnly>{project.node.title}</SROnly>
                                </SuggestedProjectLinkBG>
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
