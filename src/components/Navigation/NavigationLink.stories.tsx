import { DarkBackground } from "../../stories/DarkBackground"
import NavigationLink from "./NavigationLink"
import React from "react"

export const NavigationLinkText = () => (
    <DarkBackground>
        <NavigationLink to="/">
            <span>Test</span>
        </NavigationLink>
    </DarkBackground>
)

export default {
    title: "Navigation / Links",
    component: NavigationLinkText,
}
