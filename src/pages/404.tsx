import Container from "../components/Global/Container/Container"
import Heading from "../components/Typography/Heading"
import PageHeader from "../components/HeadPanels/PageHeader"
import React from "react"

const NotFoundPage = () => {
    const headerText = "Page not found!"
    return (
        <>
            <PageHeader text={headerText} />
            <Container vPadding>
                <Heading level="h2">Try these pages instead</Heading>
            </Container>
        </>
    )
}

export default NotFoundPage
