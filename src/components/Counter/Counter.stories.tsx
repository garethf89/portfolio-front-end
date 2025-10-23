import CounterComponent from "./Counter"
import { DarkBackground } from "../../stories/DarkBackground"

export default {
    title: "Components /Counter",
    component: CounterComponent,
    decorators: [
        Story => (
            <DarkBackground>
                <Story />
            </DarkBackground>
        ),
    ],
}

export const Counter = CounterComponent.bind({})
