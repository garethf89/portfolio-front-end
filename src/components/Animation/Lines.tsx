import { Box } from "@chakra-ui/react"
import styled from "@emotion/styled"
import lottie from "lottie-web"
import * as React from "react"
import { useEffect } from "react"
import * as animationData from "../../animations/Lines"

interface LinesProps extends React.ComponentProps<"div"> {
    dark?: boolean
}

const HeaderAnimation = styled(Box, {
    shouldForwardProp: prop => prop !== "dark",
})<LinesProps>`
    position: absolute;
    left: -20%;
    right: -20%;
    top: -20%;
    bottom: -20%;
    z-index: 0;
    svg path {
        stroke: ${props =>
            props.dark ? `${props.theme.colors["sectionSecondaryLines"]}` : ``};
    }
`

const Lines = ({ id, dark }: LinesProps): React.ReactElement => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById(id!)!,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData.default,
        })
    }, [])
    return <HeaderAnimation dark={dark} id={id}></HeaderAnimation>
}

export default Lines
