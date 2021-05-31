import { css } from "@emotion/react"
import emotionNormalize from "emotion-normalize"
import theme from "../@chakra-ui/gatsby-plugin/theme"

/* stylelint-disable */
export const globalStyles = css`
    ${emotionNormalize}
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
