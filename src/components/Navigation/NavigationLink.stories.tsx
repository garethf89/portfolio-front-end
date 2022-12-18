import { DarkBackground } from "../../stories/DarkBackground"
import NavigationLink from "./NavigationLink"
import * as React from "react"

export const NavigationLinkText = (): React.ReactElement => (
    <DarkBackground>
        <NavigationLink href="/">
            <span>Test</span>
        </NavigationLink>
    </DarkBackground>
)

export default {
    title: "Navigation / Links",
    component: NavigationLinkText,
}
