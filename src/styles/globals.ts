import { css } from "@emotion/react"
import theme from "../@chakra-ui/theme"
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    display: "swap",
})

/* stylelint-disable */
export const globalStyles = css`
    :root {
        --font-ubuntu: ${ubuntu.style.fontFamily};
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: ${theme.fonts.body};
        transition: background 0.5s ease-in-out;
    }
    /* LINK FADE */

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`
export default globalStyles
