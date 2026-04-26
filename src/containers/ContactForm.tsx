"use client"

import * as React from "react"
import { z } from "zod"

import { css } from "@styled-system/css"
import { PulseLoader } from "react-spinners"
import { Alert, Button, Flex, Input, Label, TextArea } from "@components"
import { useEmail } from "../services/email"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

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

const formSectionStyles = css({
    marginBottom: 6,
    flex: 1,
})

const formContainerStyles = css({
    flex: 1,
    flexBasis: "",
    marginBottom: 5,
    md: { flexBasis: "50%", marginBottom: 12 },
})

const ContactSchema = z.object({
    personName: z.string().min(1, "Name is required"),
    personEmail: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email format"),
    personEnq: z.string().min(1, "You need to enter a message, come on man!"),
})

type Values = z.infer<typeof ContactSchema>

export const ContactForm = (): React.ReactElement => {
    const { submit, status, error } = useEmail()

    const submitForm = async (values: Values) => {
        await submit(values)
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValidating, touchedFields },
    } = useForm({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            personEmail: "",
            personEnq: "",
            personName: "",
        },
    })

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)} noValidate>
                {error && (
                    <Alert variant="error">
                        {
                            "There has been a problem submitting the form, please contact me direct at gareth.f@hotmail.co.uk"
                        }
                    </Alert>
                )}
                {status === "success" && (
                    <Alert variant="success">Thank you for your enquiry!</Alert>
                )}
                {status !== "success" && (
                    <Flex css={fieldContainerStyles}>
                        <div className={formSectionStyles}>
                            <div className={formContainerStyles}>
                                <Label
                                    error={errors.personName}
                                    required
                                    htmlFor="personName"
                                >
                                    Name
                                </Label>
                                <Input
                                    error={errors.personName}
                                    touched={touchedFields.personName}
                                    id="personName"
                                    {...register("personName")}
                                />
                            </div>
                            <div className={formContainerStyles}>
                                <Label
                                    error={errors.personEmail}
                                    required
                                    htmlFor="personEmail"
                                >
                                    Email
                                </Label>
                                <Input
                                    error={errors.personEmail}
                                    id="personEmail"
                                    type="email"
                                    touched={touchedFields.personEmail}
                                    {...register("personEmail")}
                                />
                            </div>
                        </div>
                        <div className={formSectionStyles}>
                            <div className={formContainerStyles}>
                                <Label
                                    required
                                    htmlFor="personEnq"
                                    error={errors.personEnq}
                                >
                                    Message
                                </Label>
                                <TextArea
                                    error={errors.personEnq}
                                    id="personEnq"
                                    touched={touchedFields.personEnq}
                                    {...register("personEnq")}
                                />
                            </div>
                            <div className={buttonContainerStyles}>
                                <Button
                                    variant="primary"
                                    disabled={isValidating || isSubmitting}
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
                        </div>
                    </Flex>
                )}
            </form>
        </>
    )
}
