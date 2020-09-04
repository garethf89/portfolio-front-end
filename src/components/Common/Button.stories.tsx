import Button, { ButtonTypes } from "./Button"
import { text, withKnobs } from "@storybook/addon-knobs"

import { DarkBackground } from "../../stories/DarkBackground"
import { LightContainer } from "../../stories/LightContainer"
import React from "react"
import { Spacer } from "../../stories/Spacer"

const Buttons = [{ icon: "Download" }, { icon: "Arrow" }]

export const ButtonWithIcons = () => (
    <>
        <DarkBackground>
            {Buttons.map(button => (
                <>
                    <Button
                        click={() => alert("CLICKED")}
                        icon={button.icon as ButtonTypes}
                        type="submit"
                    >
                        {text("Label", "Download CV")}
                    </Button>
                    <Spacer />
                </>
            ))}
        </DarkBackground>
        <LightContainer>
            {Buttons.map(button => (
                <>
                    <Button
                        click={() => alert("CLICKED")}
                        icon={button.icon as ButtonTypes}
                        type="submit"
                        color="dark"
                    >
                        {text("Label", "Download CV")}
                    </Button>
                    <Spacer />
                </>
            ))}
        </LightContainer>
    </>
)
export default {
    title: "Common /Buttons",
    component: ButtonWithIcons,
    decorators: [withKnobs],
}

export const ButtonWithoutIcon = () => (
    <>
        <DarkBackground>
            <Button click={() => alert("CLICKED")} type="submit">
                {text("Label", "Download CV")}
            </Button>
        </DarkBackground>
        <LightContainer>
            <Button click={() => alert("CLICKED")} type="submit" color="dark">
                {text("Label", "Download CV")}
            </Button>
        </LightContainer>
    </>
)
