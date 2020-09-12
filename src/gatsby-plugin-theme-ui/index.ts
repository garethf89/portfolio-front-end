import { Theme } from "theme-ui"

interface ThemeType extends Theme {
    breakpoint: any;
    container: any;
}

// Using Theme-UI as a basic outline but this will be a custom object
const theme: ThemeType = {
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
    },
    fonts: {
        body: '"Ubuntu", Roboto, Helvetica, Arial, sans-serif',
    },
    sizes: {
        maxWidth: "1160px",
        contentMaxWidth: "686px",
    },
    breakpoints: ["35em", "50em", "79.38em"],
    breakpoint: {
        small: "35em",
        medium: "50em",
        large: "79.38em",
    },
    container: {
        padding: "1.5rem",
    },
    buttons: {
        default: {
            border: "#fff",
            background: "transparent",
            color: "#fff",
        },
        dark: {
            border: "#000",
            background: "#F6F6F6",
            color: "#000",
        },
    },
}

export default theme
