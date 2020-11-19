import Moon from "../../svgs/moon"
import NavigationLink from "./NavigationLink"
import React from "react"
import Sun from "../../svgs/sun"
import styled from "@emotion/styled"
import { useColorMode } from "theme-ui"

const NavigationLinkLabel = styled.span`
    margin-right: 0.5rem;
`

const ColorPicker = (): React.ReactElement => {
    const [colorMode, setColorMode] = useColorMode()

    const buttonThemes = [
        { name: "Light", stateLink: "dark", iconLink: Sun },
        { name: "Dark", stateLink: "light", iconLink: Moon },
    ]

    const setTheme = (theme: string) => {
        setColorMode(theme)
    }

    return (
        <>
            {buttonThemes.map((link, i) => {
                if (link.stateLink === colorMode) {
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
