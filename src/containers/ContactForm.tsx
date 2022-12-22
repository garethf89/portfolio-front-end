import * as React from "react"
import * as Yup from "yup"

import { Form, Formik, FormikHelpers } from "formik"

import Alert from "../components/Alert/Alert"
import { BREAKPOINTS } from "../@chakra-ui//theme"
import Button from "../components/Common/Button"
import Flex from "../components/Global/Container/Flex"
import Input from "../components/Form/Input"
import Label from "../components/Form/Label"
import TextArea from "../components/Form/Textarea"
import styled from "@emotion/styled"
import { useEmail } from "../services/email"

const FormContainer = styled.div`
    margin-bottom: 2.5rem;
`

const FormSection = styled.div`
    flex: 1;
    flex-basis: 100%;
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
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

const ContactForm = (): React.ReactElement => {
    const { submit, status, error } = useEmail()
    const submitForm = async (
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
    ) => {
        await submit(values)
        setSubmitting(false)
    }

    return (
        <>
            <Formik
                initialValues={{
                    personEmail: "",
                    personEnq: "",
                    personName: "",
                }}
                validationSchema={ContactSchema}
                onSubmit={submitForm}
            >
                {({ errors, touched, isSubmitting, isValidating }) => {
                    return (
                        <Form noValidate>
                            {error && (
                                <Alert variant="error">
                                    {
                                        "There has been a problem submitting the form, please contact me direct at gareth.f@hotmail.co.uk"
                                    }
                                </Alert>
                            )}
                            {status === "success" && (
                                <Alert variant="success">
                                    Thank you for your enquiry!
                                </Alert>
                            )}
                            {status !== "success" && (
                                <Flex flexWrap="wrap" padding={[0, 0, 0]}>
                                    <FormSection>
                                        <FormContainer>
                                            <Label
                                                error={
                                                    touched.personName
                                                        ? errors.personName
                                                        : null
                                                }
                                                required
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
                                                required
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
                                                required
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
                                            variant="primary"
                                            disabled={
                                                isValidating || isSubmitting
                                            }
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
