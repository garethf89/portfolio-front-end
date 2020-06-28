import Header from "../components/Header/Header"
import HomeHeader from "../components/HeadPanels/HomeHeader"
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
        </>
    )
}

export default IndexPage
