import * as React from "react"
import { z } from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter"
import { Form, Formik, FormikHelpers } from "formik"

import { Alert, Button, Flex, Input, Label, TextArea } from "@components"
import { BREAKPOINTS } from "../@chakra-ui/theme"
import styled from "@emotion/styled"
import { useEmail } from "../services/email"
import { Box, CircularProgress, Spacer } from "@chakra-ui/react"

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

const ContactSchema = z.object({
    personName: z.string({ required_error: "Name is required" }),
    personEmail: z
        .string({ required_error: "Email is required" })
        .email("Invalid email format"),
    personEnq: z.string({
        required_error: "You need to enter a message, come on man!",
    }),
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
                validationSchema={toFormikValidationSchema(ContactSchema)}
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
                                        <Box
                                            p={0}
                                            alignItems="center"
                                            paddingInline={0}
                                            display="flex"
                                        >
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
                                            <Spacer />
                                            {status === "pending" && (
                                                <CircularProgress
                                                    isIndeterminate
                                                    color="green.300"
                                                />
                                            )}
                                        </Box>
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
