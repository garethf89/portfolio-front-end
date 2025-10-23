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
import { css } from "../../styled-system/css"

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

const iconGridStyle = css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr));",
    gap: 16,
})

const IconsStory = ({ color, size }: IconsStoryType): React.ReactElement => {
    const style = {
        color,
    }
    return (
        <div className={iconGridStyle}>
            {IconsImports.map((Icon, k) => (
                <Icon
                    key={k}
                    css={style}
                    width={`${size}px`}
                    height={`${size}px`}
                />
            ))}
        </div>
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
