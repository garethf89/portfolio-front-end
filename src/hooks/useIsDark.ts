"use client"

import { useEffect, useState } from "react"
import { useDarkMode } from "./useDarkMode"

export const useIsDark = (dark: boolean): boolean => {
    const [isDark, setIsDark] = useState(false)
    const { isDarkMode } = useDarkMode()

    useEffect(() => {
        if (!isDarkMode) {
            setIsDark(false)
        } else {
            setIsDark(dark)
        }
    }, [isDarkMode])

    return isDark
}
