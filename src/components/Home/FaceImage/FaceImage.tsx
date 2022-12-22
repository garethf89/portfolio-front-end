import Circle from "../../Common/Circle"
import * as React from "react"
import styled from "@emotion/styled"
import Image from "next/image"
import { useImageSupport } from "../../../contexts"

const FaceCircle = styled(Circle)`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
`

const FaceImage = (): React.ReactElement => {
    const { avif, webP } = useImageSupport()

    let src = "/images/Logo.jpg"

    if (webP) {
        src = "/images/Logo.webp"
    }

    if (avif) {
        src = "/images/Logo.avif"
    }

    return (
        <FaceCircle>
            <Image
                alt="Gareth Ferguson face"
                src={src}
                width={130}
                height={130}
            />
        </FaceCircle>
    )
}

export default FaceImage
