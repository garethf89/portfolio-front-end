import { StaticImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

import Circle from "../../Common/Circle"
import Image from "../../Common/Image"
import React from "react"
import styled from "@emotion/styled"

const FaceCircle = styled(Circle)`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
`

const FaceImage = (): React.ReactElement => {
    return (
        <FaceCircle>
            <StaticImage
                alt="Gareth Ferguson face"
                src="../../../../static/images/Logo.jpg"
                formats={["auto", "avif", "webp"]}
                placeholder="blurred"
                layout="fixed"
                width={130}
            />
        </FaceCircle>
    )
}

export default FaceImage
