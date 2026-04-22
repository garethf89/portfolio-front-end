import Input from "./Input"
import Label from "./Label"
import { LightContainer } from "../../stories/LightContainer"
import * as React from "react"
import { Spacer } from "../../stories/Spacer"
import TextArea from "./Textarea"
import { Formik } from "formik"

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
    decorators: [
        (Story: React.ComponentType, context: { parameters?: any }) => {
            const initialValues = context.parameters?.formik?.initialValues ?? {
                name: "",
                message: "",
            }

            return (
                <Formik initialValues={initialValues} onSubmit={() => undefined}>
                    <form>
                        <Story />
                    </form>
                </Formik>
            )
        },
    ],
}

export const Form = FormStory.bind({})
Form.args = {
    nameLabel: "Name",
    messageLabel: "Message",
}

Form.parameters = {
    formik: {
        initialValues: {
            name: "Initialized",
            message: "Initialized",
        },
    },
}
