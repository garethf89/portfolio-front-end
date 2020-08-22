import React, { useContext, useEffect } from "react"

import BackLink from "../BackLink/BackLink"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import Lines from "../Animation/Lines"
import { globals } from "../../state/state"
import styled from "@emotion/styled"

const HeaderStyles = styled.section`
    overflow: hidden;
    padding: 9rem 0 3rem;
    position: relative;
    color: ${(props: StyledComponentProps) => props.theme.colors.text};
    background: ${(props: StyledComponentProps) =>
        props.theme.colors.sectionSecondaryBackground};
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        padding: 5rem 0;
    }
`
const StyledTitle = styled(Heading)`
    margin: 3rem 0 6.3rem 0;
    font-weight: 700;
`

const InnerContainer = styled.div`
    max-width: 50%;
`

interface PageHeaderProps {
    text: string
}

const PageHeader = ({ text }: PageHeaderProps) => {
    const { state, dispatch } = useContext(globals)

    useEffect(() => {
        if (state.logo !== "dark") {
            dispatch({ type: "LOGO", logo: "dark" })
        }
    }, [])

    return (
        <HeaderStyles>
            <Lines dark id="HeaderAni" />
            <Container>
                <InnerContainer>
                    <BackLink />
                    <StyledTitle level="h1" text={text} />
                </InnerContainer>
            </Container>
        </HeaderStyles>
    )
}
export default PageHeader
