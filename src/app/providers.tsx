"use client"

import { ViewTransitions } from "next-view-transitions"
import { useEffect, useState } from "react"

import * as Sentry from "@sentry/react"
import { BrowserTracing } from "@sentry/tracing"

import { ColorModeProvider, ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"

import { GlobalsStateProvider } from "../state/state"
import theme from "../@chakra-ui/theme"
import { ApolloProvider } from "@apollo/client"
import { client } from "../queries/apolloClient"
import globalStyles from "../styles/globals"
import { Global } from "@emotion/react"
import styled from "@emotion/styled"
import { Footer } from "@components"
import { ImageSupportProvider } from "../contexts"

// React-Query
const queryClient = new QueryClient()

const Root = styled.main`
    max-width: 100%;
    overflow-x: hidden;
    font-family: ${props => props.theme.fonts.body};
`

const FooterExtender = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [initGlobals, setInitGlobals] = useState(false)

    useEffect(() => {
        if (!initGlobals) {
            if (process.env.NODE_ENV === "production") {
                Sentry.init({
                    dsn: process.env.NEXT_PUBLIC_SENTRY ?? "",
                    integrations: [new BrowserTracing()],
                    tracesSampleRate: 1.0,
                })
            }

            setInitGlobals(true)
        }
    }, [])
    return (
        <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
            <QueryClientProvider client={queryClient}>
                <ApolloProvider client={client}>
                    <ChakraProvider theme={theme}>
                        <ColorModeProvider
                            options={{
                                initialColorMode: "light",
                                useSystemColorMode: false,
                            }}
                        >
                            <GlobalsStateProvider>
                                <ImageSupportProvider>
                                    <Global styles={globalStyles} />
                                    <ViewTransitions>
                                        <FooterExtender>
                                            <Root>{children}</Root>
                                            <Footer />
                                        </FooterExtender>
                                    </ViewTransitions>
                                </ImageSupportProvider>
                            </GlobalsStateProvider>
                        </ColorModeProvider>
                    </ChakraProvider>
                </ApolloProvider>
            </QueryClientProvider>
        </Sentry.ErrorBoundary>
    )
}

export default Providers
