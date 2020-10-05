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

// Using Theme-UI as a basic outline but this will be a custom object
const theme: Theme = {
    useCustomProperties: true,
    initialColorModeName: "default",
    colors: {
        background: "#ffffff",
        text: "#20222f",
        sectionBackground: "#20222F",
        sectionText: "#fff",
        sectionTextSecondary: "#A9A9A9",
        navText: "#fff",
        sectionSecondaryBackground: "#F6F6F6",
        sectionSecondaryLines: "#4A4A4A",
        logoDark: "#20222f",
        footerBg: "#14161F",
        buttonBorderPrimary: "#000",
        buttonColorPrimary: "#000",
        buttonBackgroundPrimary: "#F6F6F6",
        buttonBorderSecondary: "#fff",
        buttonColorSecondary: "#fff",
        buttonBackgroundSecondary: "transparent",
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
