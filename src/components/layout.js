import * as Sentry from "@sentry/browser"

import React, { useContext, useEffect, useState } from "react"

import Footer from "./footer"
import { Global } from "@emotion/core"
import Header from "./header"
import SEO from "./seo"
import globalStyles from "../styles/globals"
import { globals } from "../state/state"
import styled from "@emotion/styled"
import { supportsWebP } from "../helpers/support/webp"

const Root = styled.div`
    font-family: ${props => props.theme.fonts.body};
    p,
    li {
        font-size: 1.13rem;
        line-height: 1.6;
        font-weight: 200;
    }
`

const TemplateWrap = ({ children, description, image, data, path }) => {
    const { dispatch } = useContext(globals)
    const [initGlobals, setInitGlobals] = useState(false)

    const { title } = (data && data.page) || ""

    const home = path === "/"

    useEffect(() => {
        if (!initGlobals) {
            if (process.env.NODE_ENV === "production") {
                Sentry.init({
                    dsn: "",
                })
            }
            if (!supportsWebP()) {
                dispatch({ type: "WEBP", webp: false })
            }

            setInitGlobals(true)
        }
    }, [])
    return (
        <Root>
            <Global styles={globalStyles} />
            <SEO
                pageTitle={title}
                pageDescription={description}
                pageImage={image}
            />
            <Header siteTitle={title} />
            <main>{children}</main>
            <Footer wide={home} />
        </Root>
    )
}

const PageLayout = props => {
    return <TemplateWrap {...props} />
}
export default PageLayout
