import Button, { ButtonTypes } from "./Button"
import { text, withKnobs } from "@storybook/addon-knobs"

import { DarkBackground } from "../../stories/DarkBackground"
import { LightContainer } from "../../stories/LightContainer"
import React from "react"
import { Spacer } from "../../stories/Spacer"

const Buttons = [{ icon: "Download" }, { icon: "Arrow" }]

export const ButtonWithIcons = (): React.ReactElement => (
    <>
        <DarkBackground>
            {Buttons.map(button => (
                <>
                    <Button
                        click={() => alert("CLICKED")}
                        icon={button.icon as ButtonTypes}
                        type="submit"
                        variant="secondary"
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
                        variant="primary"
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
            <Button
                variant="secondary"
                click={() => alert("CLICKED")}
                type="submit"
            >
                {text("Label", "Download CV")}
            </Button>
        </DarkBackground>
        <LightContainer>
            <Button
                variant="primary"
                click={() => alert("CLICKED")}
                type="submit"
            >
                {text("Label", "Download CV")}
            </Button>
        </LightContainer>
    </>
)
