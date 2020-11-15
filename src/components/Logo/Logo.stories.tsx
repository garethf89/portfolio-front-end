import { DarkBackground } from "../../stories/DarkBackground"
import Logo from "./Logo"
import React from "react"

const LogoStory = () => (
    <DarkBackground>
        <Logo siteTitle="Test" />
    </DarkBackground>
)

export default {
    title: "Navigation /Logo",
}
export const LogoIconLight = LogoStory.bind({})

export const LogoIconDark = LogoStory.bind({})
