import { text, withKnobs } from "@storybook/addon-knobs"

import Button from "./Button"
import { DarkBackground } from "../../stories/DarkBackground"
import React from "react"

export const ButtonWithIcons = () => (
    <DarkBackground>
        <Button
            click={e => alert("CLICKED")}
            icon="Download"
            type="submit"
            color="light"
        >
            {text("Label", "Download CV")}
        </Button>
    </DarkBackground>
)
export default {
    title: "Common /Buttons",
    component: ButtonWithIcons,
    decorators: [withKnobs],
}

export const ButtonWithoutIcon = () => (
    <DarkBackground>
        <Button click={e => alert("CLICKED")} type="submit" color="light">
            {text("Label", "Download CV")}
        </Button>
    </DarkBackground>
)
