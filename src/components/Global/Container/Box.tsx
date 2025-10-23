import * as React from "react"
import { css, Styles } from "@styled-system/css"

const boxStyles = {
    position: "relative",
    margin: "0 auto auto",
    width: "100%",
    textAlign: "left",
    maxWidth: "container.xl",
    paddingX: { base: "6", lg: "12" },
}

export type BoxProps = {
    vPadding?: boolean
    children: React.ReactNode
    css?: Styles
} & React.ComponentProps<"section">

const Box = ({
    children,
    vPadding,
    css: cssProp,
    ...props
}: BoxProps): React.ReactElement => {
    const merged = css([
        boxStyles,
        { paddingY: vPadding ? "16" : "0" },
        cssProp,
    ])
    return (
        <section className={merged} {...props}>
            {children}
        </section>
    )
}

export default Box
