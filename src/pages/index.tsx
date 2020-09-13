import { graphql, useStaticQuery } from "gatsby"

import CaseStudies from "../components/CaseStudies/CaseStudies"
import Header from "../components/Header/Header"
import HomeHeader from "../components/HeadPanels/HomeHeader"
import HomeTech from "../components/Home/HomeTech/HomeTech"
import LastFM from "../components/LastFM/LastFM"
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

            <LastFM />
        </>
    )
}

export default IndexPage
