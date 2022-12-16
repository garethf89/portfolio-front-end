import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"

import { Global } from "@emotion/react"
import { GlobalsStateProvider } from "../src/state/state"
import React from "react"
import TransitionLinkProvider from "gatsby-plugin-transition-link/context/InternalProvider"
import { action } from "@storybook/addon-actions"
import globalStyles from "../src/styles/globals"
import styled from "@emotion/styled"
import theme from "../src/@chakra-ui//theme"

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
    enqueue: () => {},
    hovering: () => {},
}

global.__PATH_PREFIX__ = ``
global.__BASE_PATH__ = ``

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = pathname => {
    action("NavigateTo:")(pathname)
}

const Root = styled.div`
    font-family: ${props => props.theme.fonts.body};
`

const withChakra = StoryFn => {
    return (
        <TransitionLinkProvider>
            <ChakraProvider theme={theme}>
                <ColorModeProvider
                    options={{
                        initialColorMode: "light",
                        useSystemColorMode: false,
                    }}
                >
                    <GlobalsStateProvider>
                        <Root theme={theme}>
                            <Global styles={globalStyles} />
                            <StoryFn />
                        </Root>
                    </GlobalsStateProvider>
                </ColorModeProvider>
            </ChakraProvider>
        </TransitionLinkProvider>
    )
}
export const decorators = [withChakra]
