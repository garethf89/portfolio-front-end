import CounterComponent from "./Counter"

export default {
    title: "Components /Counter",
    parameters: {
        backgrounds: {
            default: "dark",
            values: [
                { name: "light", value: "#eeeeee" },
                { name: "dark", value: "#222222", default: true },
            ],
        },
    },
}

export const Counter = CounterComponent.bind({})
