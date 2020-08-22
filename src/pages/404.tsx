import PageHeader from "../components/HeadPanels/PageHeader"
import React from "react"

const NotFoundPage = () => {
    const headerText = "Page not found!"
    return (
        <>
            <PageHeader text={headerText} />
        </>
    )
}

export default NotFoundPage
