import * as React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
    display: inline-block;
    img {
        border-radius: 50%;
    }
`
interface CircleProps {
    children: React.ReactNode
}

const Circle = (props: CircleProps): React.ReactElement => {
    return (
        <Wrapper className="" {...props}>
            {props.children}
        </Wrapper>
    )
}

export default Circle
