import { text, withKnobs } from "@storybook/addon-knobs"

import Heading from "./Heading"
import React from "react"

export const Headings = () => (
    <div>
        <Heading level="h1">H1 - {text("Heading", "Heading", "Props")}</Heading>
        <Heading level="h1" overrride="h2">
            H2 with H1 Styles - {text("Heading", "Heading", "Props")}
        </Heading>
        <Heading level="h2">H2 - {text("Heading", "Heading", "Props")}</Heading>
        <Heading level="h3">H3 - {text("Heading", "Heading", "Props")}</Heading>
        <Heading level="h4">H4 - {text("Heading", "Heading", "Props")}</Heading>
        <Heading level="h5">H5 - {text("Heading", "Heading", "Props")}</Heading>
    </div>
)

export default {
    title: "Typography",
    component: Headings,
    decorators: [withKnobs],
}
