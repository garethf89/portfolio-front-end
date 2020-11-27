import Container from "../Global/Container/Container"
import React from "react"
import { StyledParagraph } from "./PageContent"

const TextStory = ({ container, text }) => {
    const Wrap = container ? Container : React.Fragment
    return (
        <Wrap>
            <StyledParagraph>{text}</StyledParagraph>
        </Wrap>
    )
}

export default {
    title: "Typography /Content Text",
}

export const ContentText = TextStory.bind({})
ContentText.args = {
    container: true,
    text: `Cat ipsum dolor sit amet, slap the dog because cats rule. Chase mice i heard this rumor where the humans are our owners, pfft, what do they know?!, yet dont wait for the storm to pass, dance in the rain pet me pet me don't pet me side-eyes your "jerk" other hand while being petted meow and walk away. Commence midnight zoomies. Find a way to fit in tiny box put toy mouse in food bowl run out of litter box at full speed claw at curtains stretch and yawn nibble on tuna ignore human bite human hand, and wack the mini furry mouse. `,
}
