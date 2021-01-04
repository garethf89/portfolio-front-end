import * as Sentry from "@sentry/browser"

import React, { useContext, useEffect, useState } from "react"

import Footer from "./Footer/Footer"
import { Global } from "@emotion/core"
import SEO from "./seo"
import { StyledComponentProps } from "../../@types/types"
import globalStyles from "../styles/globals"
import { globals } from "../state/state"
import styled from "@emotion/styled"
import { supportsWebP } from "../helpers/support/webp"

const Root = styled.main`
    font-family: ${(props: StyledComponentProps) => props.theme.fonts.body};
`

const TemplateWrap = ({ pageContext, children, image, data, path }) => {
    const { dispatch } = useContext(globals)
    const [initGlobals, setInitGlobals] = useState(false)

    const { title } = (data && data.page) || ""

    useEffect(() => {
        if (!initGlobals) {
            if (process.env.NODE_ENV === "production") {
                Sentry.init({
                    dsn:
                        "https://23f3f26328754be8baa6040caea128b7@sentry.io/1876648",
                })
            }
            if (!supportsWebP()) {
                dispatch({ type: "WEBP", webp: false })
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
                pageImage={image}
                path={path}
            />
            <Root>{children}</Root>
            <Footer />
        </>
    )
}

const PageLayout = props => {
    return <TemplateWrap {...props} />
}
export default PageLayout
