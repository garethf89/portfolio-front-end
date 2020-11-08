import React from "react"
import { DarkBackground } from "../../stories/DarkBackground"
import { LightContainer } from "../../stories/LightContainer"
import { Spacer } from "../../stories/Spacer"
import Button, { ButtonTypes } from "./Button"

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
}

const Template = args => <ButtonStory {...args} />

const commonArgs = { label: "Download CV", icons: true }

export const Primary = Template.bind({})
Primary.args = {
    ...commonArgs,
    variant: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
    ...commonArgs,
    variant: "secondary",
}
