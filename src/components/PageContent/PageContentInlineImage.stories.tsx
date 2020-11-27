import { AllContent, OutputImageComponent } from "./PageContent"

import Container from "../Global/Container/Container"
import React from "react"

const ContentImageStory = ({
    type = "Test",
    name,
    image,
    container,
}: {
    image: string
    type: string
    name: string
    container: string
}) => {
    const imageProps: AllContent = {
        type: "image",
        title: type,
        image: {
            title: type,
            progressive: { src: image, srcWebp: image },
            S: { src: image, srcWebp: image },
            S2X: { src: image, srcWebp: image },
            L: { src: image, srcWebp: image },
            L2X: { src: image, srcWebp: image },
        },
    }
    const Wrap = container ? Container : React.Fragment
    return (
        <Wrap>
            <OutputImageComponent type={type} image={imageProps} name={name} />
        </Wrap>
    )
}

export default {
    title: "Images /Content Image",
}

export const ContentImage = ContentImageStory.bind({})
ContentImage.args = {
    container: true,
    alt: "Test storybook image",
    image:
        "https://images.ctfassets.net/z41luxcckja5/1DaEaQgLElwsJG462M9ysR/7b827f37782bd9a56fa370cca3430a3b/Arup_1.jpg?w=2200&q=90&fm=webp",
}
