import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import CaseStudies from "../components/CaseStudies/CaseStudies"
import Clients from "../components/Clients/Clients"
import Header from "../components/Header/Header"
import HomeHeader from "../components/HeadPanels/HomeHeader"
import HomeTech from "../components/Home/HomeTech/HomeTech"
import LastFM from "../components/LastFM/LastFM"
import Projects from "../components/Projects/Projects"

const IndexPage = (): React.ReactElement => {
    const data = useStaticQuery(graphql`
        query Home {
            lfm: allAlbums {
                edges {
                    node {
                        id
                        albums {
                            name

                            image {
                                size
                                src
                            }
                            artist {
                                name
                            }
                        }
                    }
                }
            }
            page: contentfulHomePage {
                title
                description {
                    internal {
                        content
                    }
                }
                introText {
                    raw
                }
                stats {
                    amount
                    description
                }
                skillsText {
                    raw
                }
                skills {
                    name
                    icon {
                        svg {
                            content
                        }
                        file {
                            url
                        }
                    }
                }
                caseStudies {
                    __typename
                    slug
                    title
                    intro {
                        __typename
                        raw
                    }
                }
                projects {
                    id
                    slug
                    headline
                    title
                    coverImage {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            width: 1100
                            placeholder: BLURRED
                            quality: 90
                            formats: [AUTO, AVIF, WEBP]
                        )
                    }
                }
                logos {
                    name
                    dark
                    logo {
                        file {
                            contentType
                            details {
                                image {
                                    height
                                    width
                                }
                            }
                        }
                        svg {
                            content
                        }
                        gatsbyImageData(
                            layout: CONSTRAINED
                            width: 200
                            placeholder: BLURRED
                            quality: 90
                            formats: [AUTO, AVIF, WEBP]
                        )
                    }
                }
            }
        }
    `)

    const initalLastFmAlbums = data.lfm.edges[0].node.albums
    return (
        <>
            <Header nav siteTitle={data.page.title} />
            <HomeHeader stats={data.page.stats} text={data.page.introText} />
            <HomeTech text={data.page.skillsText} skills={data.page.skills} />
            <CaseStudies data={data.page.caseStudies} />
            <Projects data={data.page.projects} />
            <Clients data={data.page.logos} />
            <LastFM initialAlbums={initalLastFmAlbums} />
        </>
    )
}

export default IndexPage
