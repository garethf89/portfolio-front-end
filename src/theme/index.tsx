const palette = {
    black: "#000",
    error: "#e55353",
    white: "#ffffff",
    darkColor1: "#20222f",
    darkColor2: "#1B1D28",
    darkColor3: "#14161F",
    lightGrey1: "#F6F6F6",
    lightGrey2: "#4A4A4A",
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
    theme: {
        extend: {
            breakpoints: BREAKPOINTS,
            keyframes: {
                float: {
                    "0%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-8px)" },
                    "100%": { transform: "translateY(0)" },
                },
            },

            fonts: {
                ubuntu: {
                    value: "Ubuntu, Roboto, Helvetica, Arial, sans-serif",
                },
            },
        },
    },
    keyframes: {
        fadeIn: {
            from: { opacity: "0" },
            to: { opacity: "1" },
        },
        fadeOut: {
            from: { opacity: "1" },
            to: { opacity: "0" },
        },
    },
    tokens: {
        animations: {
            fadeIn: { value: "fadeIn 0.5s ease-in-out" },
            fadeOut: { value: "fadeOut 0.5s ease-in-out" },
        },
        colors: {
            backgroundDark: { value: palette.darkColor2 },
            black: { value: palette.black },
            buttonColorPrimary: { value: palette.black },
            buttonBackgroundPrimary: { value: palette.lightGrey1 },
            buttonBorderSecondary: { value: palette.white },
            buttonColorSecondary: { value: palette.white },
            buttonBackgroundSecondary: { value: "transparent" },
            error: { value: palette.error },
            logoDark: { value: palette.darkColor1 },
            darkText: { value: palette.darkColor1 },
            footerBg: { value: palette.darkColor3 },
            transparent: { value: "transparent" },
            white: { value: palette.white },
            svgFill: { value: palette.white },
            darkBackground: { value: palette.darkColor1 },
            sectionText: { value: palette.white },
            sectionTextSecondary: { value: "#A9A9A9" },
            sectionSecondaryBackground: { value: palette.lightGrey1 },
            sectionBackground: { value: palette.darkColor1 },
            sectionBackgroundPageLight: { value: palette.lightGrey1 },
        },
        sizes: {
            container: {
                xl: { value: "1160px" },
                content: { value: "" },
            },
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
            sectionBackgroundPage: {
                value: {
                    _dark: "{colors.darkText}",
                    base: "{colors.sectionBackgroundPageLight}",
                },
            },
            sectionColor: {
                value: {
                    _dark: "{colors.white}",
                    base: "{colors.darkText}",
                },
            },
            buttonBorderPrimary: {
                value: {
                    _dark: "{colors.black}",
                    base: "{colors.darkText}",
                },
            },
            buttonColorPrimaryHover: {
                value: {
                    _dark: "{colors.white}",
                    base: "{colors.darkText}",
                },
            },
        },
        sizes: {
            container: {
                content: { value: "686px" },
            },
        },
    },
}

export type Theme = typeof theme
