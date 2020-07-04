import { Theme } from "theme-ui"

const theme: Theme = {
    useCustomProperties: true,
    initialColorModeName: "default",
    colors: {
        background: "#ffffff",
        text: "#121212",
        sectionBackground: "#20222F",
        sectionText: "#fff",
        sectionTextSecondary: "#A9A9A9",
        navText: "#fff",
    },
    fonts: {
        body: '"Ubuntu", Roboto, Helvetica, Arial, sans-serif',
    },
    sizes: {
        maxWidth: "1160px",
        contentMaxWidth: "686px",
    },
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
            background: "#000",
            color: "#fff",
        },
    },
}

export default theme
