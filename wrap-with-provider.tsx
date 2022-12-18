import * as React from "react"

import { ColorModeProvider, ThemeProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"

import { GlobalsStateProvider } from "./src/state/state"
import theme from "./src/@chakra-ui/gatsby-plugin/theme"

type WrapTypes = {
    element: React.ReactNode
}

// Create a client
const queryClient = new QueryClient()

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }: WrapTypes): React.ReactElement => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <ColorModeProvider
                        options={{
                            initialColorMode: "light",
                            useSystemColorMode: false,
                        }}
                    >
                        <GlobalsStateProvider>{element}</GlobalsStateProvider>
                    </ColorModeProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </>
    )
}
