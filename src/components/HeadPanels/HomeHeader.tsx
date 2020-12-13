import {
    ContentfulRichTextGatsbyReference,
    RenderRichTextData,
    StyledComponentProps,
} from "../../../@types/types"
import React, { useContext, useEffect } from "react"

import { BREAKPOINTS } from "../../gatsby-plugin-theme-ui/index"
import Button from "../Common/Button"
import Container from "../Global/Container/Container"
import Counter from "../Counter/Counter"
import { Document } from "@contentful/rich-text-types"
import HomeHeaderContent from "../Home/HomeHeader/HomeHeaderContent"
import { IStatFields } from "../../../@types/generated/contentful"
import Lines from "../Animation/Lines"
import Stats from "../Home/HomeHeader/Stats"
import { globals } from "../../state/state"
import styled from "@emotion/styled"

const HomeHeaderStyles = styled.section`
    padding: 9rem 0 3rem;
    position: relative;
    background: ${(props: StyledComponentProps) =>
        props.theme.colors.sectionBackground};
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        padding: 12rem 0 8rem;
    }
`
const HomeContainer = styled(Container)`
    position: relative;
    z-index: 1;
    color: ${(props: StyledComponentProps) => props.theme.colors.sectionText};
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        display: flex;
        justify-content: space-between;
        padding: 0
            calc(
                0.65rem +
                    ${(props: StyledComponentProps) =>
                        props.theme.space.padding}
            );
    }
`

const HomeSection = styled.div`
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        width: 60%;
        margin-right: 5.5rem;
    }
`

const HomeSectionStats = styled.div`
    margin-top: 3rem;
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        margin-top: 0;
        width: 40%;
    }
`

interface HomeHeaderProps {
    text: RenderRichTextData<ContentfulRichTextGatsbyReference>
    stats: IStatFields[]
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
                        href="/cv.pdf"
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
