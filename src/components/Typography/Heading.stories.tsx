import React from "react"
import Heading from "./Heading"

export const Headings = ({ heading }) => (
    <div>
        <Heading level="h1">H1 - {heading}</Heading>
        <Heading level="h1" override="h2">
            H2 with H1 Styles - {heading}
        </Heading>
        <Heading level="h2">H2 - {heading}</Heading>
        <Heading level="h3">H3 - {heading}</Heading>
        <Heading level="h4">H4 - {heading}</Heading>
        <Heading level="h5">H5 - {heading}</Heading>
    </div>
)

export default {
    title: "Typography",
    component: Headings,
    args: {
        heading: "Heading",
    },
}
