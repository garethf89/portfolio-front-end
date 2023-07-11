"use client"

import { useColorMode } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const useIsDark = (dark: boolean): boolean => {
    const [isDark, setIsDark] = useState(null)
    const { colorMode } = useColorMode()

    useEffect(() => {
        if (colorMode !== "dark") {
            setIsDark(false)
        } else {
            setIsDark(dark)
        }
    }, [colorMode])

    return isDark
}
