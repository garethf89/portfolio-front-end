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
import { Footer } from "@components"
import { ImageSupportProvider } from "../contexts"
import { useDarkMode } from "../hooks"
import { css } from "@styled-system/css"

// React-Query
const queryClient = new QueryClient()

const rootStyles = css({
    maxWidth: "100%",
    overflowX: "hidden",
})

const footerExtenderStyles = css({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
})

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
                                    <div className={footerExtenderStyles}>
                                        <main className={rootStyles}>
                                            {children}
                                        </main>
                                        <Footer />
                                    </div>
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
