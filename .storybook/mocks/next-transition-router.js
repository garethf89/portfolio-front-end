import React from "react"

export const Link = ({ children, href, ...props }) => {
    return React.createElement("a", { href, ...props }, children)
}

export const TransitionRouter = ({ children }) => {
    return React.createElement(React.Fragment, {}, children)
}

export const useTransitionRouter = () => {
    return {
        push: () => {},
        replace: () => {},
        back: () => {},
        forward: () => {},
        refresh: () => {},
        prefetch: () => {},
    }
}

export default {
    Link,
    TransitionRouter,
    useTransitionRouter,
}
