import Container from "../components/Global/Container"
import HomeHeader from "../components/Headers/HomeHeader"
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
            <HomeHeader
                stats={data.page.stats}
                text={data.page.introText.json}
            />
            <Container></Container>
        </>
    )
}

export default IndexPage
