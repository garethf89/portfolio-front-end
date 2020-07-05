import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.section`
    margin: 0 auto auto;
    width: 100%;
    flex-basis: 50%;
    padding: 0 1.5rem;
    flex-grow: 1;
    text-align: ${(props: StyledComponentProps) =>
        props.align ? props.align : "left"};
    max-width: ${(props: StyledComponentProps) => props.theme.sizes.maxWidth};
    max-width: calc(
        ${(props: StyledComponentProps) => props.theme.sizes.maxWidth} + 3rem
    );
`

interface ContainerProps {
    align?: string
    children: any
}

const Container = (props: ContainerProps): React.ReactElement<any> => {
    return <Wrapper {...props}>{props.children}</Wrapper>
}

export default Container
