import { DarkBackground } from "../../../stories/DarkBackground"
import React from "react"
import Stats from "./Stats"

const statsData = [
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
    <DarkBackground>
        <Stats stats={statsData} />
    </DarkBackground>
)
export default {
    title: "Stats",
    component: StatsComponent,
}
