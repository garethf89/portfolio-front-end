import * as animationData from "../../animations/Lines"

import React, { useEffect } from "react"

import lottie from "lottie-web"
import styled from "@emotion/styled"

const HeaderAnimation = styled.div`
    position: absolute;
    left: -20%;
    right: -20%;
    top: -20%;
    bottom: -20%;
    z-index: 0;
`

const Lines = ({ id }) => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById("HeaderAni"),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData,
        })
    }, [])
    return <HeaderAnimation id={id}></HeaderAnimation>
}

export default Lines
