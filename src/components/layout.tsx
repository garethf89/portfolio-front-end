import * as React from "react"
import * as Sentry from "@sentry/browser"

import { useEffect, useState } from "react"

import Footer from "./Footer/Footer"
import { Global } from "@emotion/react"
import SEO from "./seo"
import globalStyles from "../styles/globals"
import styled from "@emotion/styled"
import type { PageProps } from "gatsby"

const Root = styled.main`
    font-family: ${props => props.theme.fonts.body};
`

const FooterExtender = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

type PageContextProps = {
    id: string
    title: string
    slug: string
    description: string
}

type PageLayoutProps = PageProps<Record<string, never>, PageContextProps>

const TemplateWrap = ({
    pageContext,
    children,
    data,
    path,
}: PageLayoutProps): React.ReactElement => {
    const [initGlobals, setInitGlobals] = useState(false)
    const { title } = (data && data.page) || ""

    useEffect(() => {
        if (!initGlobals) {
            if (process.env.NODE_ENV === "production") {
                Sentry.init({
                    dsn: process.env.GATSBY_SENTRY ?? "",
                })
            }

            setInitGlobals(true)
        }
    }, [])

    return (
        <>
            <Global styles={globalStyles} />
            <SEO
                pageTitle={title}
                pageDescription={pageContext.description}
                path={path}
            />
            <FooterExtender>
                <Root>{children}</Root>
                <Footer />
            </FooterExtender>
        </>
    )
}

const PageLayout = (props: PageLayoutProps): React.ReactElement => {
    return <TemplateWrap {...props} />
}
export default PageLayout
