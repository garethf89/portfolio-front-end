import React, { useContext } from "react"
import { globals, initialStateGlobals } from "../../state/state"

import Moon from "../../svgs/moon"
import NavigationLink from "./NavigationLink"
import Sun from "../../svgs/sun"
import styled from "@emotion/styled"

const NavigationLinkLabel = styled.span`
    margin-right: 0.5rem;
`

const ColorPicker = (): React.ReactElement => {
    const { state, dispatch } = useContext(globals)

    const activeTheme = state?.theme ?? initialStateGlobals.theme

    const buttonThemes = [
        { name: "Light", stateLink: "dark", iconLink: Sun },
        { name: "Dark", stateLink: "light", iconLink: Moon },
    ]

    const setTheme = (theme: string) => {
        dispatch({ type: "THEME", theme: theme })
    }

    return (
        <>
            {buttonThemes.map((link, i) => {
                if (link.stateLink === activeTheme) {
                    return
                }
                const LinkIcon = link.iconLink
                return (
                    <NavigationLink
                        key={i}
                        button
                        click={() => setTheme(link.stateLink)}
                        to="/"
                    >
                        <NavigationLinkLabel>Theme</NavigationLinkLabel>
                        <LinkIcon iconSize="xs" />
                    </NavigationLink>
                )
            })}
        </>
    )
}

export default ColorPicker
