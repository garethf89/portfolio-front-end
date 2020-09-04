import Input from "./Input"
import Label from "./Label"
import { LightContainer } from "../../stories/LightContainer"
import React from "react"
import { Spacer } from "../../stories/Spacer"
import TextArea from "./Textarea"
import { withFormik } from "storybook-formik"
import { withKnobs } from "@storybook/addon-knobs"

export const Form = () => (
    <LightContainer>
        <Label required={true} htmlFor="name">
            Name
        </Label>
        <Input id="name" name="name" />
        <Spacer />
        <Label required={true} htmlFor="message">
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
    decorators: [withKnobs],
}
