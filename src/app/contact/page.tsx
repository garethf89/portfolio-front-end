import { ContactForm } from "@containers"
import { Container, PageHeader } from "@components"
import * as React from "react"

const ContactPage = (): React.ReactElement => {
    const headerText = "Contact me using the form below"
    return (
        <>
            <PageHeader title="Contact" text={headerText} />
            <Container options={{ largePadding: true }}>
                <ContactForm />
            </Container>
        </>
    )
}

export default ContactPage
