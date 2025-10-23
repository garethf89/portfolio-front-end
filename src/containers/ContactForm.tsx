"use client"

import * as React from "react"
import { z } from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter"
import { Form, Formik, FormikHelpers } from "formik"
import { css } from "@styled-system/css"
import { PulseLoader } from "react-spinners"
import { Alert, Button, Flex, Input, Label, TextArea } from "@components"
import { BREAKPOINTS } from "@theme"
import styled from "@emotion/styled"
import { useEmail } from "../services/email"

const buttonContainerStyles = css({
    display: "flex",
    alignItems: "center",
    gap: "4",
})

const fieldContainerStyles = {
    flexWrap: "wrap",
    padding: 0,
    paddingX: { base: "0", lg: "0" },
}

const FormContainer = styled.div`
    margin-bottom: 2.5rem;
`

const FormSection = styled.div`
    flex: 1;
    flex-basis: 100%;
    @media (min-width: ${BREAKPOINTS.md}) {
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

export const ContactForm = (): React.ReactElement => {
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
                                <Flex css={fieldContainerStyles}>
                                    <FormSection>
                                        <FormContainer>
                                            <Label
                                                error={
                                                    touched.personName
                                                        ? errors.personName
                                                        : undefined
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
                                                        : undefined
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
                                                        : undefined
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
                                        <div className={buttonContainerStyles}>
                                            <Button
                                                variant="primary"
                                                disabled={
                                                    isValidating || isSubmitting
                                                }
                                                icon="Arrow"
                                                type="submit"
                                            >
                                                Submit
                                            </Button>{" "}
                                            <PulseLoader
                                                loading={status === "pending"}
                                                size={8}
                                            />
                                        </div>
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
