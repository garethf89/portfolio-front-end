import React, { useContext, useEffect, useState } from "react"

import { Link } from "gatsby"
import { Logo as animationData } from "../../animations/Logo"
import { globals } from "../../state/state"
import lottie from "lottie-web"
import styled from "@emotion/styled"

const HeaderLink = styled(Link)`
    z-index: 3;
    pointer-events: auto;
    cursor: pointer;
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 3rem;
    width: 3rem;
    outline: 0;
    svg path {
        transition: stroke 0.5s ease-in-out;
        stroke: ${(props: StyledComponentProps) =>
            props.dark === "true" ? props.theme.colors.logoDark : ""};
    }
`

interface LogoProps {
    siteTitle: string
}

const Logo = ({ siteTitle }: LogoProps): React.ReactElement<any> => {
    let [headIconDark, updateHeadDark] = useState(null)

    const { state } = useContext(globals)

    const isDark = state.logo === "dark" ? "true" : "false"

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
            tabIndex={1}
            aria-label={siteTitle}
            to="/"
            onKeyUp={hover}
            onMouseEnter={hover}
            id="HeaderLogo"
            dark={isDark}
        ></HeaderLink>
    )
}

export default Logo
