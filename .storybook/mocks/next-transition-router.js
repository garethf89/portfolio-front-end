import React from "react"

// Mock the Link component from next-transition-router
export const Link = ({ children, href, ...props }) => {
    return React.createElement("a", { href, ...props }, children)
}

// Mock the TransitionRouter component
export const TransitionRouter = ({ children }) => {
    return React.createElement(React.Fragment, {}, children)
}

// Mock the useTransitionRouter hook
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

// Default export
export default {
    Link,
    TransitionRouter,
    useTransitionRouter,
}


