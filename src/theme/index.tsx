const palette = {
    black: "#000",
    error: "#e55353",
    white: "#ffffff",
    darkColor1: "#20222f",
    darkColor2: "#1B1D28",
    lightGrey1: "#F6F6F6",
}

export const BREAKPOINTS = {
    sm: "35em",
    md: "50em",
    lg: "79.38em",
    xl: "85em",
    "2xl": "96em",
}

export type CustomColors = "brand" | "transparent"

export const theme = {
    conditions: {
        light: "[data-color-mode=light] &",
        dark: "[data-color-mode=dark] &",
    },
    breakpoints: BREAKPOINTS,
    fontFamily: "var(--font-ubuntu), Roboto, Helvetica, Arial, sans-serif",
    tokens: {
        colors: {
            backgroundDark: { value: palette.darkColor2 },
            buttonBorderPrimary: { value: palette.darkColor1 },
            buttonColorPrimary: { value: palette.black },
            buttonBackgroundPrimary: { value: palette.lightGrey1 },
            buttonBorderSecondary: { value: palette.white },
            buttonColorSecondary: { value: palette.white },
            buttonBackgroundSecondary: { value: "transparent" },
            error: { value: palette.error },
            darkText: { value: palette.darkColor1 },
            transparent: { value: "transparent" },
            white: { value: palette.white },
            svgFill: { value: palette.white },
            darkBackground: { value: palette.darkColor1 },
            sectionSecondaryBackground: { value: palette.lightGrey1 },
        },
    },
    semanticTokens: {
        colors: {
            text: {
                value: {
                    base: "{colors.darkText}",
                    _dark: "{colors.white}",
                },
            },
            sectionColor: {
                value: {
                    base: "{colors.darkText}",
                    _dark: "{colors.white}",
                },
            },
            sectionBackground: {
                value: {
                    base: "{colors.sectionSecondaryBackground}",
                    _dark: "{colors.darkBackground}",
                },
            },
        },
    },
}

export type Theme = typeof theme
