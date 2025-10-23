"use client"

import { useEffect, useState } from "react"

import { gsap } from "gsap"
import { TransitionRouter } from "next-transition-router"

import * as Sentry from "@sentry/react"
import { BrowserTracing } from "@sentry/tracing"

import { QueryClient, QueryClientProvider } from "react-query"

import { GlobalsStateProvider } from "../state/state"
import { ApolloProvider } from "@apollo/client"
import { client } from "../queries/apolloClient"
import styled from "@emotion/styled"
import { Footer } from "@components"
import { ImageSupportProvider } from "../contexts"
import { useDarkMode } from "../hooks"

// React-Query
const queryClient = new QueryClient()

const Root = styled.main`
    max-width: 100%;
    overflow-x: hidden;
`

const FooterExtender = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [initGlobals, setInitGlobals] = useState(false)
    const [colorTheme, setColorTheme] = useState("light")
    const { isDarkMode } = useDarkMode({
        defaultValue: false,
        initializeWithValue: true,
    })

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

    useEffect(() => {
        setColorTheme(isDarkMode ? "dark" : "light")
    }, [isDarkMode])

    return (
        <body data-color-mode={colorTheme}>
            <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
                <QueryClientProvider client={queryClient}>
                    <ApolloProvider client={client}>
                        <GlobalsStateProvider>
                            <ImageSupportProvider>
                                <TransitionRouter
                                    leave={next => {
                                        const tween = gsap.fromTo(
                                            "main",
                                            { autoAlpha: 1 },
                                            {
                                                autoAlpha: 0,
                                                onComplete: next,
                                                duration: 0.2,
                                            }
                                        )
                                        return () => tween.kill()
                                    }}
                                    enter={next => {
                                        const tween = gsap.fromTo(
                                            "main",
                                            { autoAlpha: 0 },
                                            {
                                                autoAlpha: 1,
                                                onComplete: next,
                                                duration: 0.2,
                                            }
                                        )
                                        return () => tween.kill()
                                    }}
                                >
                                    <FooterExtender>
                                        <Root>{children}</Root>
                                        <Footer />
                                    </FooterExtender>
                                </TransitionRouter>
                            </ImageSupportProvider>
                        </GlobalsStateProvider>
                    </ApolloProvider>
                </QueryClientProvider>
            </Sentry.ErrorBoundary>
        </body>
    )
}

export default Providers
