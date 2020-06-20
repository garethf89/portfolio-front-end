import Button from "./Button"
import { DarkBackground } from "../../stories/DarkBackground"
import React from "react"
export const ButtonWithIcon = () => (
    <DarkBackground>
        <Button click={e => alert("CLICKED")} icon type="submit" color="light">
            Download CV
        </Button>
    </DarkBackground>
)
export default {
    title: "Common",
    component: ButtonWithIcon,
}

export const ButtonWithoutIcon = () => (
    <DarkBackground>
        <Button click={e => alert("CLICKED")} type="submit" color="light">
            Download CV
        </Button>
    </DarkBackground>
)
