import { theme as baseTheme, extendTheme } from "@chakra-ui/react"
import { createBreakpoints, mode } from "@chakra-ui/theme-tools"

export const BREAKPOINTS = {
    SMALL: "35em",
    MEDIUM: "50em",
    LARGE: "79.38em",
}

const breakpoints = createBreakpoints({
    sm: BREAKPOINTS.SMALL,
    md: BREAKPOINTS.MEDIUM,
    lg: BREAKPOINTS.LARGE,
    xl: "85em",
    "2xl": "96em",
})
export const COLORS = {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    lightGrey1: "#F6F6F6",
    lightGrey2: "#4A4A4A",
    darkColor1: "#20222f",
    darkColor2: "#1B1D28",
}

export const SPACE = {
    padding: ["1.5rem"],
    common: ["1rem", "1.5rem", "2rem", "3rem", "4rem"],
}

const theme = {
    ...baseTheme,
    useCustomProperties: true,
    useLocalStorage: false,
    useColorSchemeMediaQuery: false,
    initialColorModeName: "light",
    initialColorMode: "light",
    useSystemColorMode: false,
    breakpoints,
    colors: {
        ...baseTheme.colors,
        background: COLORS.white,
        backgroundDark: COLORS.darkColor2,
        text: COLORS.darkColor1,
        textDark: COLORS.white,
        sectionBackground: COLORS.darkColor1,
        sectionText: COLORS.white,
        sectionTextSecondary: "#A9A9A9",
        navText: COLORS.white,
        sectionSecondaryBackground: COLORS.lightGrey1,
        sectionSecondaryLines: COLORS.lightGrey2,
        logoDark: COLORS.darkColor1,
        footerBg: "#14161F",
        buttonBorderPrimary: COLORS.black,
        buttonColorPrimary: COLORS.black,
        buttonBackgroundPrimary: COLORS.lightGrey1,
        buttonBorderSecondary: COLORS.white,
        buttonColorSecondary: COLORS.white,
        buttonBackgroundSecondary: COLORS.transparent,
        modes: {
            dark: {
                background: COLORS.darkColor2,
                text: COLORS.white,
                sectionSecondaryBackground: COLORS.darkColor1,
                sectionSecondaryLines: "",
            },
        },
    },
    fonts: {
        body: '"Ubuntu", Roboto, Helvetica, Arial, sans-serif',
        heading: '"Ubuntu", Roboto, Helvetica, Arial, sans-serif',
    },
    fontSizes: {
        ...baseTheme.fontSizes,

        md: "18px",
    },
    sizes: {
        ...baseTheme.sizes,
        container: {
            ...baseTheme.sizes.container,
            sm: "686px",
            content: "686px",
            md: "768px",
            lg: "1024px",
            xl: "1160px",
        },
    },
    components: {
        ...baseTheme.components,
    },
}

const components = {
    Button: {
        baseStyle: ({ header }) => ({
            textTransform: "uppercase",
            borderRadius: "base",
            textAlign: "left",
            textDecoration: "none",
            position: "relative",
            overflow: "hidden",
            width: "auto",
            borderWidth: "1px",
            borderStyle: "solid",
            fontSize: "16px",
            letterSpacing: "2px",
            fontWeight: 300,
            padding: 0,
            paddingRight: ["3rem", "5rem"],
            paddingEnd: 0,
            paddingStart: 0,
            cursor: "pointer",
            transition: " 0.5s ease-in-out",
            display: "inline-block",
            height: "auto",
            minWidth: header ? ["0", "314px"] : ["0"],
            _focus: {
                outline: 0,
            },
            _active: {
                outline: 0,
            },
            _hover: {
                outline: 0,
                svg: {
                    polyline: {
                        strokeDashoffset: -480,
                    },
                },
            },
        }),
        variants: {
            primary: {
                color: "buttonColorPrimary",
                bg: "buttonBackgroundPrimary",
                borderColor: "buttonBorderPrimary",
                borderRadius: 0,
                "&:hover": {
                    bg: "rgba(0, 0, 0, 0.1)",
                },
            },
            secondary: {
                color: "buttonColorSecondary",
                bg: "buttonBackgroundSecondary",
                borderColor: "buttonBorderSecondary",
                borderRadius: 0,
                "&:hover": {
                    bg: "rgba(0, 0, 0, 0.6)",
                },
            },
        },
    },
    ColorText: {
        baseStyle: ({ colorMode }) => ({
            color:
                colorMode === "dark"
                    ? theme.colors.modes.dark.text
                    : theme.colors.text,
        }),
    },
    CustomInput: {
        baseStyle: ({ colorMode }) => ({
            border:
                colorMode === "dark"
                    ? theme.colors.modes.dark.text
                    : theme.colors.text,
        }),
    },
    CustomHeader: {
        baseStyle: ({ colorMode }) => ({
            background:
                colorMode === "dark"
                    ? theme.colors.modes.dark.sectionSecondaryBackground
                    : theme.colors.sectionSecondaryBackground,
            color:
                colorMode === "dark"
                    ? theme.colors.modes.dark.text
                    : theme.colors.text,
        }),
    },
}

const styles = {
    styles: {
        global: props => ({
            body: {
                color: mode("text", "textDark")(props),
                bg: mode("background", "backgroundDark")(props),
            },
        }),
    },
}

const combinedTheme = {
    ...theme,
    styles: { ...theme.styles, ...styles },
    components: { ...theme.components, ...components },
}

const colorTheme = extendTheme({}, combinedTheme)
export default colorTheme
