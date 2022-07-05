import { GatsbyImageMock } from "../../../.storybook/helpers/gatsbyImageMock"
import { IPageContentFullSizeImageFields } from "../../../@types/generated/contentful"
import ContainerBreak from "../Utils/ContainerBreak"
import { OutputImageComponent } from "./PageContent"

const FullWidthImageStory = ({
    type = "Test",
    name,
    alt,
}: {
    alt: string
    type: string
    name: string
}) => {
    const imageProps = { image: { ...GatsbyImageMock, title: alt } }
    return (
        <ContainerBreak>
            <OutputImageComponent
                type={type}
                image={imageProps as unknown as IPageContentFullSizeImageFields}
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
