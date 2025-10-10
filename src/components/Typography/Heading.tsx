import * as React from "react"
import { cva, css, Styles } from "@styled-system/css"
import { Ref } from "react"

const headingRecipe = cva({
    base: {
        marginBottom: "8",
        lineHeight: "1.2",
        display: "block",
        "& a": {
            color: "inherit",
            textDecoration: "none",
        },
    },
    variants: {
        level: {
            h1: {
                fontSize: { base: "42px", lg: "52px" },
                lineHeight: "1.2",
                fontWeight: "200",
            },
            h2: {
                fontSize: "38px",
                lineHeight: "1.2",
                fontWeight: "200",
                marginBottom: "16",
                marginTop: "0",
            },
            h3: {
                fontSize: "30px",
                lineHeight: "1.3",
                fontWeight: "200",
            },
            h4: {
                fontSize: "30px",
                lineHeight: "1.2",
                fontWeight: "200",
            },
            h5: {
                fontSize: "24px",
                lineHeight: "1.3",
                fontWeight: "200",
            },
            h6: {
                fontSize: "18px",
                lineHeight: "1.2",
                fontWeight: "200",
            },
            p: {
                marginTop: "4",
            },
            span: {
                marginTop: "4",
            },
        },
    },
    defaultVariants: {
        level: "p",
    },
})

type HeadingsPossible = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"

export type HeadingProps = {
    level: HeadingsPossible
    text?: string
    css?: Styles
    children?: React.ReactNode
    override?: HeadingsPossible
    ref?: Ref<HTMLElement>
} & React.ComponentProps<"div">

const Heading: React.FC<HeadingProps> = ({
    children,
    override,
    level,
    text,
    css: cssProp = {},
    ...props
}): React.ReactElement => {
    const Component = override || level

    const merged = css(headingRecipe.raw({ level }), cssProp)

    return React.createElement(
        Component,
        {
            className: merged,
            ...props,
        },
        text,
        children
    )
}

export default Heading
