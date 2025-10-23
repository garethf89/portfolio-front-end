import { useContext, useEffect, useState } from "react"
import * as React from "react"

import FadeLink from "../Link/Link"
import { Logo as animationData } from "../../animations/Logo"
import { globals } from "../../state/state"
import lottie, { AnimationItem } from "lottie-web"
import { css } from "@styled-system/css"

const headerLinkStyles = css({
    "& a": {
        zIndex: "3",
        width: "12",
        height: "12",
        outline: "0",
        cursor: "pointer",
        pointerEvents: "auto",
        verticalAlign: "top",
        position: "relative",
        display: "inline-block",
        "& svg path": {
            transition: "stroke 0.5s ease-in-out",
        },
    },
})
// = styled(FadeLink)`
//     z-index: 3;
//     pointer-events: auto;
//     cursor: pointer;
//     position: relative;
//     display: inline-block;
//     vertical-align: top;
//     height: 3rem;
//     width: 3rem;
//     outline: 0;
//     svg path {
//         transition: stroke 0.5s ease-in-out;
//         stroke: ${props =>
//             props.dark === "true" ? props.theme.colors.logoDark : ""};
//     }
// `

interface LogoProps {
    siteTitle: string
}

const Logo = ({ siteTitle }: LogoProps): React.ReactElement => {
    const [headIconDark, updateHeadDark] = useState<AnimationItem | null>(null)

    const { state } = useContext(globals)

    const isDark = state.logo === "dark" ? "true" : "false"

    useEffect(() => {
        updateHeadDark(
            lottie.loadAnimation({
                container: document.getElementById("HeaderLogo")!,
                renderer: "svg",
                loop: false,
                autoplay: false,
                animationData: animationData,
                rendererSettings: {
                    className: "RenderedSVGMenu",
                },
            })
        )
    }, [])

    const hover = () => {
        if (headIconDark) {
            headIconDark.goToAndPlay(0)
        }
    }

    return (
        <div className={headerLinkStyles}>
            <FadeLink
                tab-index={1}
                aria-label={siteTitle}
                href="/"
                onMouseEnter={hover}
                id="HeaderLogo"
                dark={isDark}
            />
        </div>
    )
}

export default Logo
