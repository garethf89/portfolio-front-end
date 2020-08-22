import { IStatFields } from "../../../../@types/generated/contentful"
import React from "react"
import Stats from "./Stats"

const statsData: Array<IStatFields> = [
    {
        description: "Years of experience",
        number: 10,
    },
    {
        description: "Technologies used",
        number: 20,
    },
    {
        description: "Projects worked on",
        number: 15,
    },
]
export const StatsComponent = () => (
    <>
        <Stats stats={statsData} />
    </>
)
export default {
    title: "Stats",
    component: StatsComponent,
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
