import Button, { ButtonTypes } from "./Button"

import { DarkBackground } from "../../stories/DarkBackground"
import { LightContainer } from "../../stories/LightContainer"
import * as React from "react"
import { Spacer } from "../../stories/Spacer"

const buttonTypes = ["primary", "secondary"]

const Buttons = [{ icon: "Download" }, { icon: "Arrow" }]

const ButtonStory = ({ label, variant, icons }): React.ReactElement => (
    <>
        {variant === "primary" && (
            <DarkBackground>
                {Buttons.map(button => (
                    <>
                        <Button
                            click={() => alert("CLICKED")}
                            icon={icons ? (button.icon as ButtonTypes) : null}
                            type="submit"
                            variant="secondary"
                        >
                            {label}
                        </Button>
                        <Spacer />
                    </>
                ))}
            </DarkBackground>
        )}
        {variant === "secondary" && (
            <LightContainer>
                {Buttons.map(button => (
                    <>
                        <Button
                            click={() => alert("CLICKED")}
                            icon={icons ? (button.icon as ButtonTypes) : null}
                            type="submit"
                            variant="primary"
                        >
                            {label}
                        </Button>
                        <Spacer />
                    </>
                ))}
            </LightContainer>
        )}
    </>
)

export default {
    title: "Common /Button",
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: buttonTypes,
            },
        },
    },
}

const commonArgs = { label: "Download CV", icons: true }

export const Primary = ButtonStory.bind({})
Primary.args = {
    ...commonArgs,
    variant: "primary",
}

export const Secondary = ButtonStory.bind({})
Secondary.args = {
    ...commonArgs,
    variant: "secondary",
}
