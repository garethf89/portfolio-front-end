import Circle from "../../Common/Circle"
import * as React from "react"
import { css } from "@styled-system/css"
import Image from "next/image"
import { useImageSupport } from "../../../contexts"

const FaceImage = (): React.ReactElement => {
    const { avif, webP } = useImageSupport()

    let src = "/images/Logo.jpg"

    if (webP) {
        src = "/images/Logo.webp"
    }

    if (avif) {
        // Enable when plugin adds support on Netlify
        // src = "/images/Logo.avif"
    }

    return (
        <Circle
            className={css({
                position: "absolute",
                left: "50%",
                top: "0",
                transform: "translate(-50%, -50%)",
            })}
        >
            <Image
                alt="Gareth Ferguson face"
                src={src}
                width={130}
                height={130}
            />
        </Circle>
    )
}

export default FaceImage
