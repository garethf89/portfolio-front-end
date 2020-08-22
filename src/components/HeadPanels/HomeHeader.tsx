import Button from "../Common/Button"
import Container from "../Global/Container/Container"
import Counter from "../Counter/Counter"
import { Document } from "@contentful/rich-text-types"
import HomeHeaderContent from "../Home/HomeHeader/HomeHeaderContent"
import { IStatFields } from "../../../@types/generated/contentful"
import Lines from "../Animation/Lines"
import React from "react"
import Stats from "../Home/HomeHeader/Stats"
import styled from "@emotion/styled"

const HomeHeaderStyles = styled.section`
    padding: 9rem 0 3rem;
    position: relative;
    background: ${(props: StyledComponentProps) =>
        props.theme.colors.sectionBackground};
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        padding: 12rem 0 8rem;
    }
`
const HomeContainer = styled(Container)`
    position: relative;
    z-index: 1;
    color: ${(props: StyledComponentProps) => props.theme.colors.sectionText};
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        display: flex;
        justify-content: space-between;
        padding: 0
            calc(
                0.65rem +
                    ${(props: StyledComponentProps) =>
                        props.theme.container.padding}
            );
    }
`

const HomeSection = styled.div`
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        width: 60%;
        margin-right: 5.5rem;
    }
`

const HomeSectionStats = styled.div`
    margin-top: 3rem;
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        margin-top: 0;
        width: 40%;
    }
`

interface HomeHeaderProps {
    text: Document
    stats: IStatFields[]
}

const HomeHeader = ({ text, stats }: HomeHeaderProps) => {
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
