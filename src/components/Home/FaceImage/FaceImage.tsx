import { graphql, useStaticQuery } from "gatsby"

import Circle from "../../Common/Circle"
import Image from "../../Common/Image"
import React from "react"
import styled from "@emotion/styled"

const FaceCircle = styled(Circle)``

const FaceImage = () => {
    const data = useStaticQuery(graphql`
        query {
            image: file(
                relativePath: { eq: "Logo.jpg" }
                sourceInstanceName: { eq: "images" }
            ) {
                childImageSharp {
                    fixed(width: 130) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    return (
        <FaceCircle>
            <Image
                alt="Gareth Ferguson face"
                fixed={data.image.childImageSharp.fixed}
            />
        </FaceCircle>
    )
}

export default FaceImage
