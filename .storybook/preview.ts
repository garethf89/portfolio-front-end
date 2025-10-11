import type { Preview } from "@storybook/react"
import "../src/globals.css"

if (typeof window !== "undefined") {
    window.__NEXT_ROUTER_BASEPATH = ""
    window.__NEXT_ROUTER_MOCK = {
        push: () => {},
        replace: () => {},
        back: () => {},
        forward: () => {},
        refresh: () => {},
        prefetch: () => {},
    }

    window.__NEXT_DATA__ = {
        props: {},
        page: "/",
        query: {},
        buildId: "storybook",
        isFallback: false,
        gssp: false,
        customServer: false,
        appGip: false,
        scriptLoader: [],
    }
}

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
