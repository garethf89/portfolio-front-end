import { Theme } from "theme-ui"

// interface ThemeType extends Theme {
//     breakpoint: any
//     container: any
// }

export const BREAKPOINTS = {
    SMALL: "35em",
    MEDIUM: "50em",
    LARGE: "79.38em",
}

const COLORS = {
    black: "#000",
    white: "#fff",
    darkColor1: "#20222f",
    darkColor2: "#1B1D28",
}

// Using Theme-UI as a basic outline but this will be a custom object
const theme: Theme = {
    useCustomProperties: true,
    initialColorModeName: "default",
    colors: {
        background: COLORS.white,
        text: COLORS.darkColor1,
        sectionBackground: COLORS.darkColor1,
        sectionText: COLORS.white,
        sectionTextSecondary: "#A9A9A9",
        navText: COLORS.white,
        sectionSecondaryBackground: "#F6F6F6",
        sectionSecondaryLines: "#4A4A4A",
        logoDark: COLORS.darkColor1,
        footerBg: "#14161F",
        clientsBackground: "transparent",
        buttonBorderPrimary: COLORS.black,
        buttonColorPrimary: COLORS.black,
        buttonBackgroundPrimary: "#F6F6F6",
        buttonBorderSecondary: COLORS.white,
        buttonColorSecondary: COLORS.white,
        buttonBackgroundSecondary: "transparent",
        modes: {
            dark: {
                background: COLORS.darkColor2,
                text: COLORS.white,
                clientsBackground: COLORS.white,
            },
        },
    },
    fonts: {
        body: '"Ubuntu", Roboto, Helvetica, Arial, sans-serif',
    },
    sizes: {
        maxWidth: "1160px",
        contentMaxWidth: "686px",
    },
    breakpoints: [BREAKPOINTS.SMALL, BREAKPOINTS.MEDIUM, BREAKPOINTS.LARGE],
    space: {
        padding: "1.5rem",
        common: ["1rem", "1.5rem", "2rem", "3rem", "4rem"], // Used for content
        l: [], // Used for large, full width content
    },
    buttons: {
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
}

export default theme
