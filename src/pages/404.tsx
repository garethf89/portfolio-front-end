import Container from "../components/Global/Container/Container"
import Heading from "../components/Typography/Heading"
import PageHeader from "../components/HeadPanels/PageHeader"
import * as React from "react"
import SuggestedProjects from "../components/SuggestedProjects/SuggestedProjects"

const NotFoundPage = (): React.ReactElement => {
    const headerText = "Page not found!"
    return (
        <>
            <PageHeader title="404" text={headerText} />
            <Container vPadding>
                <Heading level="h2">Try these pages instead</Heading>
                <SuggestedProjects />
            </Container>
        </>
    )
}

export default NotFoundPage
