import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
    display: inline-block;
    img {
        border-radius: 50%;
    }
`
interface CircleProps {
    children: any;
}

const Circle = (props: CircleProps) => {
    return (
        <Wrapper className="" {...props}>
            {props.children}
        </Wrapper>
    )
}

export default Circle
