import * as React from "react"

import { graphql, useStaticQuery } from "gatsby"

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
                    slug
                    title
                    intro {
                        raw
                    }
                }
                projects {
                    id
                    slug
                    headline
                    title
                    coverImage {
                        icon1x: fixed(width: 375) {
                            src
                            srcWebp
                        }
                        icon2x: fixed(width: 750) {
                            src
                            srcWebp
                            tracedSVG
                        }
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
                        icon1x: fixed(width: 100) {
                            src
                            srcWebp
                        }
                        icon2x: fixed(width: 200) {
                            src
                            srcWebp
                        }
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
