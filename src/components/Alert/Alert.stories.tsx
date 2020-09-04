import Alert from "./Alert"
import React from "react"

export const Alerts = () => (
    <>
        <Alert variant="error">An error has occured</Alert>
        <Alert variant="success">Success</Alert>
    </>
)

export default {
    title: "Alert",
    component: Alerts,
}
