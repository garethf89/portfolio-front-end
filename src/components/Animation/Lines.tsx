import * as animationData from "../../animations/Lines"

import React, { useEffect } from "react"

import { StyledComponentProps } from "../../../@types/types"
import lottie from "lottie-web"
import styled from "@emotion/styled"

const HeaderAnimation = styled.div<any>`
    position: absolute;
    left: -20%;
    right: -20%;
    top: -20%;
    bottom: -20%;
    z-index: 0;
    svg path {
        stroke: ${(props: StyledComponentProps) =>
            props.dark ? `${props.theme.colors.sectionSecondaryLines}` : ``};
    }
`

interface LinesProps extends React.HTMLAttributes<any> {
    dark?: boolean;
}

const Lines = ({ id, dark }: LinesProps) => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById(id),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData.default,
        })
    }, [])
    return <HeaderAnimation dark={dark} id={id}></HeaderAnimation>
}

export default Lines
