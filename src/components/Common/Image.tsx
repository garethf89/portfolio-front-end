import { Asset } from "contentful"
import {
    GatsbyImage,
    GatsbyImageProps,
    getImage,
    ImageDataLike,
} from "gatsby-plugin-image"
import * as React from "react"

type ImageProps = Partial<Omit<GatsbyImageProps, "image">> & {
    image: Asset
    alt: string
}

const Image = ({ image, ...rest }: ImageProps): React.ReactElement => {
    const imageSrc = getImage(image as unknown as ImageDataLike)
    return <GatsbyImage image={imageSrc} {...rest} />
}

export default Image
