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
`
export default globalStyles
