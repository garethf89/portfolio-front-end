import * as React from "react"

import {
    Cross,
    Download,
    Eye,
    Github,
    Lastfm,
    LightArrow,
    Linkedin,
    Moon,
    Sun,
    Tick,
} from "../../svgs/index"

import { SimpleGrid } from "@chakra-ui/layout"

const IconsImports = [
    Cross,
    Download,
    Eye,
    Github,
    Lastfm,
    LightArrow,
    Linkedin,
    Moon,
    Sun,
    Tick,
]

type IconsStoryType = {
    color: string
    size: number
}

const IconsStory = ({ color, size }: IconsStoryType): React.ReactElement => {
    const style = {
        color,
        width: `${size}px`,
        height: `${size}px`,
    }
    return (
        <SimpleGrid minChildWidth="120px" spacing={10}>
            {IconsImports.map((Icon, k) => (
                <Icon key={k} style={style} />
            ))}
        </SimpleGrid>
    )
}

export default {
    title: "Components /Icons",
    argTypes: {
        size: {
            control: {
                type: "range",
                min: 10,
                max: 100,
                step: 10,
            },
        },
        color: {
            control: {
                type: "color",
            },
        },
    },
}

export const Icons = IconsStory.bind({})
Icons.args = {
    size: 40,
    color: "#000",
}
