import { css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"
import theme from "../gatsby-plugin-theme-ui"

/* stylelint-disable */
export const globalStyles = css`
    ${emotionNormalize}
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
