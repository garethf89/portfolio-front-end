import { css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"

/* stylelint-disable */
export const globalStyles = css`
    ${emotionNormalize}
    body {
        transition: all 0.5s ease-in-out;
    }
`
export default globalStyles
