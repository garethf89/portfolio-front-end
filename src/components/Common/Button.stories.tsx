import * as React from "react"

import Button, { ButtonTypes } from "./Button"

import { DarkBackground } from "../../stories/DarkBackground"
import { LightContainer } from "../../stories/LightContainer"
import { Spacer } from "../../stories/Spacer"

const buttonTypes = ["primary", "secondary"]

const Buttons = [{ icon: "Download" }, { icon: "Arrow" }]

type ButtonStoryProps = { label: string; variant: string; icons: boolean }

const ButtonStory = ({
    label,
    variant,
    icons,
}: ButtonStoryProps): React.ReactElement => (
    <>
        {variant === "primary" && (
            <DarkBackground>
                {Buttons.map(button => (
                    <>
                        <Button
                            click={() => alert("CLICKED")}
                            icon={
                                icons ? (button.icon as ButtonTypes) : undefined
                            }
                            type="submit"
                            variant="secondary"
                            as="a"
                            href="/"
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
                            icon={
                                icons ? (button.icon as ButtonTypes) : undefined
                            }
                            type="submit"
                            variant="primary"
                            as="a"
                            href="/"
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
