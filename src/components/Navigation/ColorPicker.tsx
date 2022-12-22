import * as React from "react"

import Moon from "../../svgs/moon"
import NavigationLink from "./NavigationLink"
import Sun from "../../svgs/sun"
import styled from "@emotion/styled"
import { useColorMode } from "@chakra-ui/react"

const NavigationLinkLabel = styled.span`
    margin-right: 0.5rem;
`

const ColorPicker = (): React.ReactElement => {
    const { colorMode, toggleColorMode } = useColorMode()

    const buttonThemes = [
        { name: "Light", stateLink: "dark", iconLink: Sun },
        { name: "Dark", stateLink: "light", iconLink: Moon },
    ]
    const setTheme = () => {
        toggleColorMode()
    }

    return (
        <>
            {buttonThemes.map((link, i) => {
                if (link.stateLink === colorMode) {
                    return false
                }
                const LinkIcon = link.iconLink
                return (
                    <NavigationLink
                        key={`color-${i}`}
                        button
                        click={() => setTheme()}
                        href="/"
                    >
                        <NavigationLinkLabel>Theme</NavigationLinkLabel>
                        <LinkIcon boxSize={8} />
                    </NavigationLink>
                )
            })}
        </>
    )
}

export default ColorPicker
