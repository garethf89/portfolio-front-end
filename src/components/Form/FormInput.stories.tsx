import Input from "./Input"
import Label from "./Label"
import { LightContainer } from "../../stories/LightContainer"
import React from "react"
import { Spacer } from "../../stories/Spacer"
import TextArea from "./Textarea"
import { withFormik } from "storybook-formik"

export const Form = () => (
    <LightContainer>
        <Label required htmlFor="name">
            Name
        </Label>
        <Input id="name" name="name" />
        <Spacer />
        <Label required htmlFor="message">
            Message
        </Label>
        <TextArea as="textarea" id="message" name="message" type="textarea" />
    </LightContainer>
)

Form.story = {
    decorators: [withFormik],
    parameters: {
        formik: {
            initialValues: {
                foo: "Initialized",
            },
        },
    },
}

export default {
    title: "Form /Form Elements",
    component: Form,
}
