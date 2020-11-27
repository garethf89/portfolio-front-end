import Container from "../Global/Container/Container"
import React from "react"
import { StyledParagraphIntro } from "./PageContent"

const TextIntroStory = ({ container, text }) => {
    const Wrap = container ? Container : React.Fragment
    return (
        <Wrap>
            <StyledParagraphIntro>{text}</StyledParagraphIntro>
        </Wrap>
    )
}

export default {
    title: "Typography /Content Intro Text",
}

export const ContentIntroText = TextIntroStory.bind({})
ContentIntroText.args = {
    container: true,
    text: `Cat ipsum dolor sit amet, slap the dog because cats rule.`,
}
