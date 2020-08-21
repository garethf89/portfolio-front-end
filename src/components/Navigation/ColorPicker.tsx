import React, { useContext } from "react"
import { globals, initialStateGlobals } from "../../state/state"

import Moon from "../../svgs/moon"
import NavigationLink from "./NavigationLink"
import Sun from "../../svgs/sun"
import styled from "@emotion/styled"

const NavigationLinkLabel = styled.span`
    margin-right: 0.5rem;
`

const ColorPicker = (): React.ReactElement<any> => {
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
                return (
                    <NavigationLink
                        key={i}
                        button
                        click={() => setTheme(link.stateLink)}
                        to="/"
                    >
                        <NavigationLinkLabel>Theme</NavigationLinkLabel>
                        <link.iconLink iconSize="small" />
                    </NavigationLink>
                )
            })}
        </>
    )
}

export default ColorPicker
