import { useEffect, useState } from "react"
import * as Sentry from "@sentry/browser"

import { ColorModeProvider, ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"

import { GlobalsStateProvider } from "../state/state"
import theme from "../@chakra-ui//theme"
import { ApolloProvider } from "@apollo/client"
import { client } from "../queries/apolloClient"
import type { AppProps as NextAppProps } from "next/app"
import globalStyles from "../styles/globals"
import { Global } from "@emotion/react"
import styled from "@emotion/styled"
import Footer from "../components/Footer/Footer"
import Head from "next/head"
import {
    AnimatePresence,
    domAnimation,
    LazyMotion,
    motion,
} from "framer-motion"
import { ImageSupportProvider } from "../contexts"
import { fadeAnimation } from "../config"

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

const AppHead = () => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
        </>
    )
}

const App = ({ Component, pageProps }: NextAppProps) => {
    const [initGlobals, setInitGlobals] = useState(false)
    // TODO
    // const { title } = (data && data.page) || ""

    useEffect(() => {
        if (!initGlobals) {
            if (process.env.NODE_ENV === "production") {
                Sentry.init({
                    dsn: process.env.NEXT_PUBLIC_SENTRY ?? "",
                })
            }

            setInitGlobals(true)
        }
    }, [])

    return (
        <>
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
                                    <AppHead />
                                    <FooterExtender>
                                        <Root>
                                            <LazyMotion features={domAnimation}>
                                                <AnimatePresence
                                                    exitBeforeEnter={true}
                                                >
                                                    <motion.div
                                                        key={`framer-${pageProps.title}`}
                                                        className="framer-animation"
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                        variants={
                                                            fadeAnimation.variants
                                                        }
                                                        transition={
                                                            fadeAnimation.transition
                                                        }
                                                    >
                                                        <Component
                                                            {...pageProps}
                                                        />
                                                    </motion.div>
                                                </AnimatePresence>
                                            </LazyMotion>
                                        </Root>
                                        <Footer />
                                    </FooterExtender>
                                </ImageSupportProvider>
                            </GlobalsStateProvider>
                        </ColorModeProvider>
                    </ChakraProvider>
                </ApolloProvider>
            </QueryClientProvider>
        </>
    )
}

export default App
