import ContactForm from "../containers/ContactForm"
import Container from "../components/Global/Container/Container"
import PageHeader from "../components/HeadPanels/PageHeader"
import * as React from "react"

const ContactPage = (): React.ReactElement => {
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
