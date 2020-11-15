import Alert from "./Alert"
import React from "react"

const alertTypes = ["success", "error"]

const Alerts = ({ variant, label }) => (
    <>
        <Alert variant={variant}>{label}</Alert>
    </>
)

export default {
    title: "Form /Alert",
    component: Alerts,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: alertTypes,
            },
        },
    },
}

const commonArgs = { label: "An alert message" }

export const Success = Alerts.bind({})
Success.args = {
    ...commonArgs,
    variant: "success",
}

export const Error = Alerts.bind({})
Error.args = {
    ...commonArgs,
    variant: "error",
}
