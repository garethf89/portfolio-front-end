import * as animationData from "../../animations/Logo"

import React, { useEffect, useState } from "react"

import lottie from "lottie-web"
import styled from "@emotion/styled"

const HeaderLink = styled.a`
    z-index: 3;
    pointer-events: auto;
    cursor: pointer;
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 3rem;
    width: 3rem;
`

const Logo = ({ siteTitle }) => {
    let [headIconDark, updateHeadDark] = useState(null)

    useEffect(() => {
        updateHeadDark(
            lottie.loadAnimation({
                container: document.getElementById("HeaderLogo"),
                renderer: "svg",
                loop: false,
                autoplay: false,
                animationData: animationData,
                rendererSettings: {
                    clearCanvas: false,
                    className: "RenderedSVGMenu",
                },
            })
        )
    }, [])

    const hover = () => {
        headIconDark.goToAndPlay(0)
    }

    return (
        <HeaderLink
            aria-label={siteTitle}
            to="/"
            onMouseEnter={hover}
            id="HeaderLogo"
        ></HeaderLink>
    )
}

export default Logo
