import { defineConfig, defineGlobalStyles } from "@pandacss/dev"
import { theme } from "@theme"

const globalCss = defineGlobalStyles({
    body: {
        base: {
            bg: "white !important",
            color: "{text} !important",
        },
        _dark: { bg: "backgroundDark !important" },
    },
})

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    conditions: {
        light: "[data-color-mode=light] &,&[data-color-mode=light]",
        dark: "[data-color-mode=dark] &,&[data-color-mode=dark]",
    },

    globalCss,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: theme,
    },

    jsxFramework: "react",

    // The output directory for your css system
    outdir: "./src/styled-system",
})
