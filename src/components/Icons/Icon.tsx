import React, { SVGAttributes } from "react"

const sizes = {
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
}

const defaultProps = {
    role: "img",
    display: "inline-block",
    verticalAlign: "middle",
    ["data-icon"]: true,
}

type IconProps = {
    children: React.ReactElement
    size?: "small" | "medium" | "large"
} & SVGAttributes<any>

const Icon = ({ children, size = "small", ...props }: IconProps) => {
    const svgProps = {
        width: sizes[size].width,
        height: sizes[size].height,
        ...defaultProps,
    }
    return <>{React.cloneElement(children, { ...svgProps, ...props })}</>
}

export default Icon
