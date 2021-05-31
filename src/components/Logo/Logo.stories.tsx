import { createElement, useContext, useEffect } from "react"

import { DarkBackground } from "../../stories/DarkBackground"
import { LightContainer } from "../../stories/LightContainer"
import Logo from "./Logo"
import { globals } from "../../state/state"

const LogoStory = ({ variant }) =>
    createElement(() => {
        const { dispatch } = useContext(globals)

        useEffect(() => {
            dispatch({ type: "LOGO", logo: variant })
        }, [])

        const Background = variant === "dark" ? LightContainer : DarkBackground
        return (
            <Background>
                <Logo siteTitle="Test" />
            </Background>
        )
    })

const logoTypes = ["light", "dark"]

export default {
    title: "Navigation /Logo",
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: logoTypes,
            },
        },
    },
}
export const LogoIconLight = LogoStory.bind({})
LogoIconLight.args = {
    variant: "light",
}

export const LogoIconDark = LogoStory.bind({})
LogoIconDark.args = {
    variant: "dark",
}
