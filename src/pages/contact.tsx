import ContactForm from "../containers/ContactForm"
import Container from "../components/Global/Container/Container"
import PageHeader from "../components/HeadPanels/PageHeader"
import React from "react"

const ContactPage = () => {
    const headerText = "Contact me using the form below"
    return (
        <>
            <PageHeader title="Contact" text={headerText} />
            <Container vPadding>
                <ContactForm />
            </Container>
        </>
    )
}

export default ContactPage
