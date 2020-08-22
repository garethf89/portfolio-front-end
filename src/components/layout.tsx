import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import * as Sentry from "@sentry/browser"
import React, { useContext, useEffect, useState } from "react"
import { supportsWebP } from "../helpers/support/webp"
import { globals } from "../state/state"
import globalStyles from "../styles/globals"
import Footer from "./Footer/Footer"
import SEO from "./seo"

const Root = styled.div`
    font-family: ${(props: StyledComponentProps) => props.theme.fonts.body};
`

const TemplateWrap = ({ children, description, image, data, path }) => {
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
        <Root>
            <Global styles={globalStyles} />
            <SEO
                pageTitle={title}
                pageDescription={description}
                pageImage={image}
            />
            <main>{children}</main>
            <Footer />
        </Root>
    )
}

const PageLayout = props => {
    return <TemplateWrap {...props} />
}
export default PageLayout
