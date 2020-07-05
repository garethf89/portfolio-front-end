import Header from "../components/Header/Header"
import HomeHeader from "../components/HeadPanels/HomeHeader"
import HomeTech from "../components/Home/HomeTech/HomeTech"
import React from "react"
import { useStaticQuery } from "gatsby"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query Home {
            page: contentfulHomePage {
                title
                introText {
                    json
                }
                stats {
                    number
                    description
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.page.title} />
            <HomeHeader
                stats={data.page.stats}
                text={data.page.introText.json}
            />
            <HomeTech image={data.page.faceMedia} />
        </>
    )
}

export default IndexPage
