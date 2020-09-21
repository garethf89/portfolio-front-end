import { graphql, useStaticQuery } from "gatsby"

import CaseStudies from "../components/CaseStudies/CaseStudies"
import Clients from "../components/Clients/Clients"
import Header from "../components/Header/Header"
import HomeHeader from "../components/HeadPanels/HomeHeader"
import HomeTech from "../components/Home/HomeTech/HomeTech"
import LastFM from "../components/LastFM/LastFM"
import Projects from "../components/Projects/Projects"
import React from "react"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query Home {
            page: contentfulHomePage {
                title
                introText {
                    json
                }
                stats {
                    amount
                    description
                }
                skillsText {
                    json
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
                    intro {
                        json
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

    return (
        <>
            <Header nav siteTitle={data.page.title} />
            <HomeHeader
                stats={data.page.stats}
                text={data.page.introText.json}
            />
            <HomeTech
                text={data.page.skillsText.json}
                skills={data.page.skills}
            />
            <CaseStudies data={data.page.caseStudies} />
            <Projects data={data.page.projects} />
            <Clients data={data.page.logos} />
            <LastFM />
        </>
    )
}

export default IndexPage
