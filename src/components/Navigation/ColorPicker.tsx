import { useEffect, useState } from "react"

import Moon from "../../svgs/moon"
import NavigationLink from "./NavigationLink"
import Sun from "../../svgs/sun"
import { css } from "@styled-system/css"
import { useDarkMode } from "../../hooks"

type themes = "dark" | "light"

const ColorPicker = (): React.ReactElement => {
    const { isDarkMode, toggle } = useDarkMode()
    const [colorTheme, setColorTheme] = useState<themes>("light")

    const buttonThemes = [
        { name: "Light", stateLink: "dark", iconLink: Sun },
        { name: "Dark", stateLink: "light", iconLink: Moon },
    ]

    const setTheme = () => {
        toggle()
    }

    useEffect(() => {
        setColorTheme(isDarkMode ? "dark" : "light")
    }, [isDarkMode])

    return (
        <>
            {buttonThemes
                .filter(theme => theme.stateLink !== colorTheme)
                .map((link, i) => {
                    const LinkIcon = link.iconLink
                    return (
                        <NavigationLink
                            key={`color-${i}`}
                            button
                            click={() => setTheme()}
                            href="/"
                        >
                            <div
                                className={css({
                                    display: "flex",
                                    alignItems: "center",
                                })}
                            >
                                <span
                                    className={css({ marginRight: "0.5rem" })}
                                >
                                    Theme
                                </span>
                                <LinkIcon css={{ width: "6" }} />
                            </div>
                        </NavigationLink>
                    )
                })}
        </>
    )
}

export default ColorPicker
