import { Subheading } from "./Subheading"

const SubHeadingStory = ({ text }: { text: string }) => (
    <div>
        <Subheading>{text}</Subheading> <br />
        <Subheading accentLine>{text} with accent</Subheading>
    </div>
)

export default {
    title: "Typography /Sub Heading",
}

export const SubHeading = SubHeadingStory.bind({})
SubHeading.args = {
    text: "Sub Heading",
}
