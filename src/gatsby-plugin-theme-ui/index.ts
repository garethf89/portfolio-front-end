import { ColorMode, Theme } from "theme-ui"

export const BREAKPOINTS = {
    SMALL: "35em",
    MEDIUM: "50em",
    LARGE: "79.38em",
}

export const COLORS = {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    lightGrey1: "#F6F6F6",
    lightGrey2: "#4A4A4A",
    darkColor1: "#20222f",
    darkColor2: "#1B1D28",
}

// Using Theme-UI as a basic outline but this will be a custom object

type ButtonProps = {
    color: string
    bg: string
    borderColor: string
    borderRadius: number
    "&:hover": {
        bg: string
    }
}

export type MyTheme = Theme & {
    fonts: { body: string } & Theme["fonts"]
    space: { [k: string]: Theme["fonts"] }
    colors: {
        [k: string]: string | { [k: string]: ColorMode }
        modes?: {
            [k: string]: ColorMode
        }
    }
    buttons: { [k: string]: ButtonProps }
}

const theme: MyTheme = {
    useCustomProperties: true,
    useLocalStorage: false,
    initialColorModeName: "light",
    colors: {
        background: COLORS.white,
        text: COLORS.darkColor1,
        sectionBackground: COLORS.darkColor1,
        sectionText: COLORS.white,
        sectionTextSecondary: "#A9A9A9",
        navText: COLORS.white,
        sectionSecondaryBackground: COLORS.lightGrey1,
        sectionSecondaryLines: COLORS.lightGrey2,
        logoDark: COLORS.darkColor1,
        footerBg: "#14161F",
        clientsBackground: COLORS.transparent,
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
                clientsBackground: COLORS.white,
                sectionSecondaryBackground: COLORS.darkColor1,
                sectionSecondaryLines: "",
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
        padding: ["1.5rem"],
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
