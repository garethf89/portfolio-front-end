import * as React from "react"

import { SPACE } from "../../@chakra-ui/theme"
import { useContext, useEffect } from "react"
import { BREAKPOINTS } from "@theme"

import Button from "../Common/Button"
import Container from "../Global/Container/Container"
import Counter from "../Counter/Counter"
import HomeHeaderContent from "../Home/HomeHeader/HomeHeaderContent"
import Lines from "../Animation/Lines"
import Stats from "../Home/HomeHeader/Stats"
import { globals } from "../../state/state"
import styled from "@emotion/styled"
import { HomePageIntroText, HomePageStatsCollection } from "@schema"

const HomeHeaderStyles = styled.section`
    padding: 9rem 0 3rem;
    position: relative;
    background: ${props => props.theme.colors.sectionBackground};
    @media (min-width: ${BREAKPOINTS.md}) {
        padding: 12rem 0 8rem;
    }
`
const HomeContainer = styled(Container)`
    position: relative;
    z-index: 1;
    color: ${props => props.theme.colors.sectionText};
    @media (min-width: ${BREAKPOINTS.md}) {
        display: flex;
        justify-content: space-between;
        padding: 0 calc(0.65rem + ${SPACE.common[0]});
    }
`

const HomeSection = styled.div`
    @media (min-width: ${BREAKPOINTS.md}) {
        width: 60%;
        margin-right: 5.5rem;
    }
`

const HomeSectionStats = styled.div`
    margin-top: 3rem;
    @media (min-width: ${BREAKPOINTS.md}) {
        margin-top: 0;
        width: 40%;
    }
`

interface HomeHeaderProps {
    text: HomePageIntroText
    stats: HomePageStatsCollection["items"]
}

const HomeHeader = ({ text, stats }: HomeHeaderProps): React.ReactElement => {
    const { state, dispatch } = useContext(globals)

    useEffect(() => {
        if (state.logo !== "light") {
            dispatch({ type: "LOGO", logo: "light" })
        }
    }, [])

    return (
        <HomeHeaderStyles>
            <Lines id="HeaderAni" />
            <HomeContainer>
                <HomeSection>
                    <HomeHeaderContent text={text} />
                    <Button
                        as="a"
                        target="_blank"
                        href={process.env.NEXT_PUBLIC_CV_URL}
                        header
                        icon="Download"
                        variant="secondary"
                        download
                    >
                        Download CV
                    </Button>
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
