import { Fragment } from "react"
import { ImageMock } from "@storybook-home-dir/helpers/imageMock"
import Container from "../Global/Container/Container"
import { OutputImageComponent } from "./PageContent"
import { PageContentFullSizeImage } from "@schema"

const ContentImageStory = ({
    type = "Test",
    name,
    container,
}: {
    type: string
    name: string
    container: string
}) => {
    const Wrap = container ? Container : Fragment
    return (
        <Wrap>
            <OutputImageComponent
                type={type}
                image={ImageMock as unknown as PageContentFullSizeImage}
                name={name}
            />
        </Wrap>
    )
}

export default {
    title: "Images /Content Image",
}

export const ContentImage = ContentImageStory.bind({})
ContentImage.args = {
    alt: "Test storybook image",
}
