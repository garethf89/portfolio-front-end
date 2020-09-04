import * as Yup from "yup"

import { Form, Formik, FormikHelpers } from "formik"
import React, { useState } from "react"

import Alert from "../components/Alert/Alert"
import Button from "../components/Common/Button"
import Flex from "../components/Global/Container/Flex"
import Input from "../components/Form/Input"
import Label from "../components/Form/Label"
import TextArea from "../components/Form/Textarea"
import styled from "@emotion/styled"
import { submitEmail } from "../services/email"

const FormContainer = styled.div`
    margin-bottom: 2.5rem;
`

const FormSection = styled.div`
    flex: 1;
    flex-basis: 100%;
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        flex-basis: 50%;
    }
`

interface Values {
    personName: string
    personEnq: string
    personEmail: string
}

const ContactSchema = Yup.object().shape({
    personName: Yup.string().required("Name is required"),
    personEmail: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    personEnq: Yup.string().required(
        "You need to enter a message, come on man!"
    ),
})

const ContactForm = () => {
    const [hasError, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    return (
        <>
            <Formik
                initialValues={{
                    personEmail: "",
                    personEnq: "",
                    personName: "",
                }}
                validationSchema={ContactSchema}
                onSubmit={async (
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    try {
                        await submitEmail(values)
                        setError(false)
                        setSuccess(true)
                    } catch (e) {
                        setError(true)
                    }
                    setSubmitting(false)
                }}
            >
                {({ errors, touched, isSubmitting, isValidating }) => {
                    return (
                        <Form noValidate>
                            {hasError && (
                                <Alert variant="error">
                                    {
                                        "There has been a problem submitting the form, please contact me direct at gareth.f@hotmail.co.uk"
                                    }
                                </Alert>
                            )}
                            {success && (
                                <Alert variant="success">
                                    Thank you for your enquiry!
                                </Alert>
                            )}
                            {!success && (
                                <Flex flexWrap="wrap" padding={[0, 0, 0]}>
                                    <FormSection>
                                        <FormContainer>
                                            <Label
                                                error={
                                                    touched.personName
                                                        ? errors.personName
                                                        : null
                                                }
                                                required={true}
                                                htmlFor="personName"
                                            >
                                                Name
                                            </Label>
                                            <Input
                                                id="personName"
                                                name="personName"
                                            />
                                        </FormContainer>
                                        <FormContainer>
                                            <Label
                                                error={
                                                    touched.personEmail
                                                        ? errors.personEmail
                                                        : null
                                                }
                                                required={true}
                                                htmlFor="personEmail"
                                            >
                                                Email
                                            </Label>
                                            <Input
                                                id="personEmail"
                                                name="personEmail"
                                                type="email"
                                            />
                                        </FormContainer>
                                    </FormSection>
                                    <FormSection>
                                        <FormContainer>
                                            <Label
                                                required={true}
                                                htmlFor="personEnq"
                                                error={
                                                    touched.personEnq
                                                        ? errors.personEnq
                                                        : null
                                                }
                                            >
                                                Message
                                            </Label>
                                            <TextArea
                                                as="textarea"
                                                id="personEnq"
                                                name="personEnq"
                                                type="textarea"
                                            />
                                        </FormContainer>

                                        <Button
                                            disabled={
                                                isValidating || isSubmitting
                                            }
                                            color="dark"
                                            icon="Arrow"
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                    </FormSection>
                                </Flex>
                            )}
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}

export default ContactForm
