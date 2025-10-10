import { css } from "@styled-system/css"
import lottie from "lottie-web"
import * as React from "react"
import { useEffect } from "react"
import * as animationData from "../../animations/Lines"

interface LinesProps extends React.ComponentProps<"div"> {
    dark?: boolean
}

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

    return (
        <div
            id={id}
            className={css({
                position: "absolute",
                left: "-20%",
                right: "-20%",
                top: "-20%",
                bottom: "-20%",
                zIndex: 0,
                "& svg path": {
                    stroke: dark ? "lightGrey2" : "",
                },
            })}
        />
    )
}

export default Lines
