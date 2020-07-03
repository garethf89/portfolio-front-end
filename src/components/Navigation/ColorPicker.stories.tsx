import ColorPicker from "./ColorPicker"
import { DarkBackground } from "../../stories/DarkBackground"
import React from "react"

export const ColorPickerOptions = () => (
    <DarkBackground>
        <ColorPicker />
    </DarkBackground>
)

export default {
    title: "Navigation",
    component: ColorPickerOptions,
}
