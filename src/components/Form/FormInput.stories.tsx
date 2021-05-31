import Input from "./Input"
import Label from "./Label"
import { LightContainer } from "../../stories/LightContainer"
import * as React from "react"
import { Spacer } from "../../stories/Spacer"
import TextArea from "./Textarea"
import { withFormik } from "storybook-formik"

type FormStoryProps = {
    nameLabel: string
    messageLabel: string
}

const FormStory = ({
    nameLabel,
    messageLabel,
}: FormStoryProps): React.ReactElement => (
    <LightContainer>
        <Label required htmlFor="name">
            {nameLabel}
        </Label>
        <Input id="name" name="name" />
        <Spacer />
        <Label required htmlFor="message">
            {messageLabel}
        </Label>
        <TextArea as="textarea" id="message" name="message" type="textarea" />
    </LightContainer>
)

export default {
    title: "Form /Form Elements",
    component: FormStory,
    decorators: [withFormik],
}

export const Form = FormStory.bind({})
Form.args = {
    nameLabel: "Name",
    messageLabel: "Message",
}

Form.parameters = {
    formik: {
        initialValues: {
            foo: "Initialized",
        },
    },
}
