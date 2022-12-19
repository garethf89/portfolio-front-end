import { ImageMock } from "@storybook-home-dir/helpers/imageMock"
import ContainerBreak from "../Utils/ContainerBreak"
import { OutputImageComponent } from "./PageContent"
import type { PageContentFullSizeImage } from "@schema"

const FullWidthImageStory = ({
    type = "Test",
    name,
}: {
    alt: string
    type: string
    name: string
}) => {
    return (
        <ContainerBreak>
            <OutputImageComponent
                type={type}
                image={ImageMock as unknown as PageContentFullSizeImage}
                name={name}
            />
        </ContainerBreak>
    )
}

export default {
    title: "Images /Full Width Image",
}

export const FullWidthImage = FullWidthImageStory.bind({})
FullWidthImage.args = {
    alt: "Test storybook image",
}
