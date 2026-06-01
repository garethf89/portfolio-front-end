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

export type ContainerOptions = {
    largePadding?: boolean
    smallPadding?: boolean
}

export type FlexProps = {
    options?: ContainerOptions
    children: React.ReactNode
    css?: Styles
} & React.ComponentProps<"section">

const Flex = ({
    children,
    options,
    css: cssProp,
    ...props
}: FlexProps): React.ReactElement => {
    const { largePadding, smallPadding } = options ?? {}

    const yPadding = { paddingY: largePadding ? "16" : smallPadding ? "8" : "0" }
    const merged = css([flexStyles, yPadding, cssProp])

    return (
        <section className={merged} {...props}>
            {children}
        </section>
    )
}

export default Flex
