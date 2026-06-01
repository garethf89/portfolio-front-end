import * as React from "react"
import { css, Styles } from "@styled-system/css"
import { ContainerOptions } from "./Flex"

const boxStyles = {
    position: "relative",
    margin: "0 auto auto",
    width: "100%",
    textAlign: "left",
    maxWidth: "container.xl",
    paddingX: { base: "6", lg: "12" },
}

export type BoxProps = {
    options?: ContainerOptions
    children: React.ReactNode
    css?: Styles
} & React.ComponentProps<"section">

const Box = ({
    children,
    options,
    css: cssProp,
    ...props
}: BoxProps): React.ReactElement => {
    const { largePadding, smallPadding } = options ?? {}

    const paddingY = largePadding ? "16" : smallPadding ? "8" : "0"
    const merged = css([boxStyles, { paddingY }, cssProp])
    return (
        <section className={merged} {...props}>
            {children}
        </section>
    )
}

export default Box
