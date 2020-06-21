import Button from "../Common/Button"
import Container from "../Global/Container"
import HomeHeaderContent from "./HomeHeaderContent"
import Lines from "../Animation/Lines"
import React from "react"
import styled from "@emotion/styled"
import theme from "../../gatsby-plugin-theme-ui/index"

const HomeHeaderStyles = styled.section`
    padding: 6rem 0;
    position: relative;
    background: ${theme.colors.sectionBackground};
    @media (min-width: ${props => props.theme.responsive.medium}) {
        padding: 10rem 0;
    }
`
const HomeContainer = styled(Container)`
    position: relative;
    z-index: 1;
    color: ${theme.colors.sectionText};
    @media (min-width: ${props => props.theme.responsive.medium}) {
        display: flex;
    }
`

const HomeSection = styled.div`
    @media (min-width: ${props => props.theme.responsive.medium}) {
        width: 60%;
    }
`

const HomeSectionStats = styled.div`
    @media (min-width: ${props => props.theme.responsive.medium}) {
        width: 40%;
    }

    width: 40%;
`

const HomeHeader = ({ text }) => {
    return (
        <HomeHeaderStyles>
            <Lines id="HeaderAni" />
            <HomeContainer>
                <HomeSection>
                    <HomeHeaderContent text={text} />
                    <Button icon>Download CV</Button>
                </HomeSection>
                <HomeSectionStats></HomeSectionStats>
            </HomeContainer>
        </HomeHeaderStyles>
    )
}
export default HomeHeader
