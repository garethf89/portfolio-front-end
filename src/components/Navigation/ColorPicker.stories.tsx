import { default as ColorPickerComponent } from "./ColorPicker"
import { DarkBackground } from "../../stories/DarkBackground"
import React from "react"

const ColorPickerStory = () => (
    <DarkBackground>
        <ColorPickerComponent />
    </DarkBackground>
)

export default {
    title: "Navigation /Color Picker",
}

export const ColorPicker = ColorPickerStory.bind({})
