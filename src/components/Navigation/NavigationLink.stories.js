import { DarkBackground } from "../../stories/DarkBackground"
import NavigationLink from "./NavigationLink"
import React from "react"

export const NavigationLinkText = () => (
    <DarkBackground>
        <NavigationLink to="/">Test</NavigationLink>
    </DarkBackground>
)

export default {
    title: "Navigation",
    component: NavigationLinkText,
}
