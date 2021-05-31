import Alert, { AlertProps } from "./Alert"

import * as React from "react"

const alertTypeOptions = ["success", "error"]

const Alerts = ({
    variant,
    label,
}: AlertProps & { label: string }): React.ReactElement => (
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
                options: alertTypeOptions,
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
