import * as React from "react"
import { css, Styles } from "@styled-system/css"

const flexStyles = {
    position: "relative",
    margin: "0 auto auto",
    width: "100%",
    textAlign: "left",
    display: "flex",
    flexDirection: { base: "column", lg: "row" },
    maxWidth: "container.xl",
    paddingX: { base: "6", lg: "12" },
}

export type FlexProps = {
    vPadding?: boolean
    children: React.ReactNode
    css?: Styles
} & React.ComponentProps<"section">

const Flex = ({
    children,
    vPadding,
    css: cssProp,
    ...props
}: FlexProps): React.ReactElement => {
    const yPadding = { paddingY: vPadding ? "16" : "0" }
    const merged = css([flexStyles, yPadding, cssProp])

    return (
        <section className={merged} {...props}>
            {children}
        </section>
    )
}

export default Flex
