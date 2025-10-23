import * as React from "react"

import { css } from "@styled-system/css"
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

const homeHeaderStyles = css({
    padding: "9rem 0 3rem",
    position: "relative",
    background: "sectionBackground",
    md: {
        padding: "12rem 0 8rem",
    },
})

const homeContainerStyles = {
    position: "relative",
    zIndex: 1,
    color: "sectionText",
    md: {
        display: "flex",
        justifyContent: "space-between",
        paddingX: "0.65rem",
    },
}

const homeSectionStyles = css({
    maxWidth: "container.content",
    md: { width: "60%", marginRight: "7" },
})

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
        <section className={homeHeaderStyles}>
            <Lines id="HeaderAni" />
            <Container css={homeContainerStyles}>
                <div className={homeSectionStyles}>
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
                </div>
                <HomeSectionStats>
                    <Stats stats={stats} />
                </HomeSectionStats>
            </Container>
            <Container css={homeContainerStyles}>
                <Counter />
            </Container>
        </section>
    )
}
export default HomeHeader
