import * as React from "react"

import Button from "./Button"
import { ButtonTypes } from "./Button.types"

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
}: ButtonStoryProps): React.ReactElement => {
    const Background = variant === "primary" ? DarkBackground : LightContainer
    const buttonVariant = variant === "primary" ? "secondary" : "primary"

    return (
        <Background>
            {Buttons.map((button, index) => (
                <React.Fragment key={index}>
                    <Button
                        click={() => alert("CLICKED")}
                        icon={icons ? (button.icon as ButtonTypes) : undefined}
                        type="submit"
                        variant={buttonVariant}
                        as="a"
                        href="/"
                    >
                        {label}
                    </Button>
                    <Spacer />
                </React.Fragment>
            ))}
        </Background>
    )
}

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
