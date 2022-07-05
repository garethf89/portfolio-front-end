import { Fragment } from "react"
import { GatsbyImageMock } from "../../../.storybook/helpers/gatsbyImageMock"
import { IPageContentImageFields } from "../../../@types/generated/contentful"
import Container from "../Global/Container/Container"
import { OutputImageComponent } from "./PageContent"

const ContentImageStory = ({
    type = "Test",
    name,
    container,
    alt,
}: {
    type: string
    name: string
    container: string
    alt: string
}) => {
    const imageProps = { image: { ...GatsbyImageMock, title: alt } }

    const Wrap = container ? Container : Fragment
    return (
        <Wrap>
            <OutputImageComponent
                type={type}
                image={imageProps as unknown as IPageContentImageFields}
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
