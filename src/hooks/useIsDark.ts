import { useEffect, useState } from "react"

import { useColorMode } from "theme-ui"

export const useIsDark = (dark: boolean): [boolean, () => void] => {
    const [isDark, setIsDark] = useState(null)
    const [colorMode] = useColorMode()

    useEffect(() => {
        if (colorMode !== "dark") {
            setIsDark(false)
        } else {
            setIsDark(dark)
        }
    }, [colorMode])

    return isDark
}
