import ColorPickerComponent from "./ColorPicker"
import { DarkBackground } from "../../stories/DarkBackground"

const ColorPickerStory = () => (
    <DarkBackground>
        <ColorPickerComponent />
    </DarkBackground>
)

export default {
    title: "Navigation /Color Picker",
}

export const ColorPicker = ColorPickerStory.bind({})
