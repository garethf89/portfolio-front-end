import { DarkBackground } from "../../../stories/DarkBackground"
import { IStatFields } from "../../../../@types/generated/contentful"
import StatsComponent from "./Stats"

const statsData: Array<IStatFields> = [
    {
        description: "Years of experience",
        amount: 10,
    },
    {
        description: "Technologies used",
        amount: 20,
    },
    {
        description: "Projects worked on",
        amount: 15,
    },
]

const StatStory = ({ stats }) => (
    <DarkBackground>
        <StatsComponent stats={stats} />
    </DarkBackground>
)

export default {
    title: "Components /Stats",
    parameters: {
        backgrounds: {
            default: "dark",
            values: [
                { name: "light", value: "#eeeeee" },
                { name: "dark", value: "#222222", default: true },
            ],
        },
    },
    argTypes: {
        stats: {
            control: {
                type: "object",
                options: Object.values(statsData),
            },
        },
    },
}

export const Stats = StatStory.bind({})
Stats.args = {
    stats: statsData,
}
