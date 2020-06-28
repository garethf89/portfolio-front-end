import { DarkBackground } from "../../stories/DarkBackground"
import Logo from "./Logo"
import React from "react"

export const LogoIcon = () => (
    <DarkBackground>
        <Logo siteTitle="Test" />
    </DarkBackground>
)

export default {
    title: "Logo",
    component: LogoIcon,
}
