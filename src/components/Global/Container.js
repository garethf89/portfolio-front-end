import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.section`
    margin: 0 auto auto;
    width: 100%;
    flex-basis: 50%;
    padding: 0 1.5rem;
    flex-grow: 1;
    max-width: ${props => props.theme.sizes.maxWidth};
    max-width: calc(${props => props.theme.sizes.maxWidth} + 3rem);
`

const Container = ({ children, className }) => {
    return <Wrapper className={className}>{children}</Wrapper>
}

export default Container
