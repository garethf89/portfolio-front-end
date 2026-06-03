import { HomeIntro } from "../../../../schema"
import { DarkBackground } from "../../../stories/DarkBackground"
import HomeHeaderIntroTextComponent from "./HomeHeaderIntroText"

const introTextData = [
    {
        text: "Many years of experience building web applications",
        icon: {
            url: "https://images.ctfassets.net/z41luxcckja5/kQwjmedb2ZxIwyjSDO8b7/43ea85d752bf4fbb82f45a8bb5cf981b/brackets.svg",
        },
    },
    {
        text: "Specialising in React, Typescript, AWS and Node",
        icon: {
            url: "https://images.ctfassets.net/z41luxcckja5/5pvSr6zR3ZwhcmUn0JE95S/c4a51bdb1640bb5effc52a448eafa82f/gears-solid-full.svg",
        },
    },
    {
        text: "Trusted by leading brands and companies",
        icon: {
            url: "https://images.ctfassets.net/z41luxcckja5/2PrUAYFezx5N7B73sdduyh/3a882091724e6e99f5a7054a30054bbd/handshake-regular-full.svg",
        },
    },
]

const HomeHeaderIntroTextStory = ({
    introText,
}: {
    introText: HomeIntro[]
}) => (
    <DarkBackground>
        <HomeHeaderIntroTextComponent intro={introText} />
    </DarkBackground>
)

export default {
    title: "Components /Home Header Intro Text",
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
        introText: {
            control: {
                type: "object",
                options: Object.values(introTextData),
            },
        },
    },
}

export const HomeHeaderIntroText = HomeHeaderIntroTextStory.bind({})
HomeHeaderIntroText.args = {
    introText: introTextData,
}
