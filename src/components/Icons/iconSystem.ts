import { variant } from "styled-system"

export const iconSystem = variant({
    prop: "iconSize",
    variants: {
        small: {
            width: "40px",
            height: "40px",
        },
        medium: {
            width: "80px",
            height: "80px",
        },
        large: {
            width: "100px",
            height: "100px",
        },
    },
})
