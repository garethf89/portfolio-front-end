import ProgressiveImage, { ResponsiveImage } from "./ProgressiveImage"

import Container from "../Global/Container/Container"
import React from "react"

const ProgressiveLoadImageStory = ({
    title = "Test",
    blurryImage,
    image,
    container,
}: {
    image: string
    title: string
    blurryImage: boolean
    container: string
}) => {
    const imageProps: ResponsiveImage = {
        title: title,
        progressive: { src: image, srcWebp: image },
        S: { src: image, srcWebp: image },
        S2X: { src: image, srcWebp: image },
        L: { src: image, srcWebp: image },
        L2X: { src: image, srcWebp: image },
    }
    const Wrap = container ? Container : React.Fragment
    return (
        <Wrap>
            <ProgressiveImage
                alt={title}
                loadingImage={blurryImage}
                image={imageProps}
            />
        </Wrap>
    )
}

export default {
    title: "Images /Progressive Load Image",
}

export const ProgressiveLoadImage = ProgressiveLoadImageStory.bind({})
ProgressiveLoadImage.args = {
    container: true,
    blurryImage: true,
    alt: "Test storybook image",
    image:
        "https://images.ctfassets.net/z41luxcckja5/1DaEaQgLElwsJG462M9ysR/7b827f37782bd9a56fa370cca3430a3b/Arup_1.jpg?w=2200&q=90&fm=webp",
}
