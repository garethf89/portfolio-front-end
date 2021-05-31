import { AllContent, OutputImageComponent } from "./PageContent"

import ContainerBreak from "../Utils/ContainerBreak"

const FullWidthImageStory = ({
    type = "Test",
    name,
    image,
}: {
    image: string
    type: string
    name: string
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
    return (
        <ContainerBreak>
            <OutputImageComponent type={type} image={imageProps} name={name} />
        </ContainerBreak>
    )
}

export default {
    title: "Images /Full Width Image",
}

export const FullWidthImage = FullWidthImageStory.bind({})
FullWidthImage.args = {
    alt: "Test storybook image",
    image: "https://images.ctfassets.net/z41luxcckja5/44KQdXsxEXbw4L9EAw9NaL/b3d70104e5a0c4bb982c57622b50b4e8/Arup_2.jpg?w=2200&q=90",
}
