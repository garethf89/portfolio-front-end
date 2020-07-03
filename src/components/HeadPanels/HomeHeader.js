import Button from "../Common/Button"
import Container from "../Global/Container"
import Counter from "../Counter/Counter"
import HomeHeaderContent from "../Home/HomeHeaderContent"
import Lines from "../Animation/Lines"
import React from "react"
import Stats from "../Home/Stats"
import styled from "@emotion/styled"

const HomeHeaderStyles = styled.section`
    padding: 9rem 0 3rem;
    position: relative;
    background: ${props => props.theme.colors.sectionBackground};
    @media (min-width: ${props => props.theme.responsive.medium}) {
        padding: 12rem 0 6rem;
    }
`
const HomeContainer = styled(Container)`
    position: relative;
    z-index: 1;
    color: ${props => props.theme.colors.sectionText};
    @media (min-width: ${props => props.theme.responsive.medium}) {
        display: flex;
        justify-content: space-between;
        padding: 0 calc(0.65rem + ${props => props.theme.container.padding});
    }
`

const HomeSection = styled.div`
    @media (min-width: ${props => props.theme.responsive.medium}) {
        width: 60%;
        margin-right: 5.5rem;
    }
`

const HomeSectionStats = styled.div`
    margin-top: 3rem;
    @media (min-width: ${props => props.theme.responsive.medium}) {
        margin-top: 0;
        width: 40%;
    }
`

const HomeHeader = ({ text, stats }) => {
    return (
        <HomeHeaderStyles>
            <Lines id="HeaderAni" />
            <HomeContainer>
                <HomeSection>
                    <HomeHeaderContent text={text} />
                    <Button icon="Download">Download CV</Button>
                </HomeSection>
                <HomeSectionStats>
                    <Stats stats={stats} />
                </HomeSectionStats>
            </HomeContainer>
            <HomeContainer as="div">
                <Counter />
            </HomeContainer>
        </HomeHeaderStyles>
    )
}
export default HomeHeader
