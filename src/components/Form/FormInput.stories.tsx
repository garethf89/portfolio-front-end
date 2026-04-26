import Input from "./Input"
import Label from "./Label"
import { LightContainer } from "../../stories/LightContainer"
import * as React from "react"
import { Spacer } from "../../stories/Spacer"
import TextArea from "./Textarea"
import { FormProvider, useForm } from "react-hook-form"

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
            const methods = useForm({
                defaultValues: {
                    name: "",
                    message: "",
                },
            })

            return (
                <FormProvider {...methods}>
                    <form>
                        <Story />
                    </form>
                </FormProvider>
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
