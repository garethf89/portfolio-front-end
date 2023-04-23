import * as React from "react"

import { HeadingProps as ChakraHeadingProps, chakra } from "@chakra-ui/react"

import { Ref } from "react"
import { SPACE } from "../../@chakra-ui/theme"

const H1 = {
    fontSize: ["42px", "42px", "52px"],
    lineHeight: "1.2",
    fontWeight: "200",
}

const H2 = {
    fontSize: "38px",
    lineHeight: 1.2,
    fontWeight: 200,
    marginBottom: SPACE.common[4],
    marginTop: 0,
}

const H3 = {
    fontSize: "30px",
    lineHeight: 1.3,
    fontWeight: 200,
}

const H4 = {
    fontSize: "30px",
    lineHeight: 1.2,
    fontWeight: 200,
}

const H5 = {
    fontSize: "24px",
    lineHeight: 1.3,
    fontWeight: 200,
}

const H6 = {
    fontSize: "18px",
    lineHeight: 1.2,
    fontWeight: 200,
}

const Default = {
    marginTop: "1rem",
}

const Variants = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
}

const HeadingStyled = (level: HeadingsPossible) => {
    const element = level && Variants[level] ? Variants[level] : Default

    return chakra(level ?? "p", {
        baseStyle: {
            marginBottom: "2rem",
            lineHeight: "1.2",
            ...element,
            a: {
                color: "inherit",
                textDecoration: "none",
            },
        },
    })
}

type HeadingsPossible = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"

export type HeadingProps = {
    level: HeadingsPossible
    text?: string
    className?: string
    children?: React.ReactNode
    override?: HeadingsPossible
    ref?: Ref<HTMLElement>
} & ChakraHeadingProps

const Heading: React.FC<HeadingProps> = ({
    children,
    override,
    level,
    text,
    ...props
}): React.ReactElement => {
    let defaultProps = {
        display: "block",
        ...props,
    }

    const type: HeadingsPossible = override || level

    if (type && type !== level) {
        defaultProps = { ...defaultProps, as: type }
    }

    const Element = HeadingStyled(level)

    return (
        <>
            <Element {...defaultProps}>
                {text}
                {children}
            </Element>
        </>
    )
}

export default Heading
