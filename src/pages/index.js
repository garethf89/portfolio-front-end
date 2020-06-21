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
            }
        }
    `)

    return (
        <>
            <HomeHeader text={data.page.introText.json} />
            <Container></Container>
        </>
    )
}

export default IndexPage
