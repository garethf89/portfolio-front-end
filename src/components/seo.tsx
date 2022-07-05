/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Helmet } from "react-helmet"
import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

interface SeoProps {
    pageDescription: string
    pageTitle: string
    path: string
    children?: React.ReactNode
}

const ICON_SIZES = ["16x16", "32x32", "180x180", "512x512"]

const TOUCH_ICON_SIZES = ["192x192", "512x512"]

const SEO = ({
    pageTitle,
    pageDescription,
    path,
}: SeoProps): React.ReactElement => {
    const { siteUrl, image, title, description } = useSiteMetadata()
    const metaDescription = pageDescription || description
    const metaImage = image

    const titleTemplate =
        pageTitle && pageTitle !== title
            ? `${title} | ${pageTitle}`
            : `${title}`

    const isHome = path === "/"

    return (
        <Helmet
            htmlAttributes={{
                lang: `en`,
            }}
            title={title}
            defaultTitle={title}
            titleTemplate={titleTemplate}
        >
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <link rel="canonical" href={siteUrl} />

            {/* FavIcon */}

            {ICON_SIZES.map((icon: string, i) => (
                <link
                    key={`favicon-${i}`}
                    rel="icon"
                    sizes={icon}
                    href={`images/favicon-${icon}.jpg`}
                ></link>
            ))}

            {TOUCH_ICON_SIZES.map((icon: string, i) => (
                <link
                    key={`applefavicon-${i}`}
                    rel="apple-touch-icon"
                    sizes={icon}
                    href={`images/favicon-${icon}.jpg`}
                ></link>
            ))}

            <link rel="manifest" href="/site.webmanifest"></link>

            {/* General tags */}
            <meta name="image" content={image} />
            <meta name="description" content={metaDescription} />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com/"
                crossOrigin="true"
            />
            <link
                rel="preconnect"
                href="https://images.ctfassets.net/"
                crossOrigin="true"
            />
            <link
                href={`https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap`}
                rel="stylesheet"
            />
            {/* OpenGraph tags */}
            <meta property="og:title" content={title} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:description" content={metaDescription} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:image" content={metaImage} />
            <meta name="twitter:description" content={metaDescription} />
            {isHome && (
                <script type="application/ld+json">{`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Gareth Ferguson",
                "url": "https://www.garethferguson.co.uk",
                "logo": "https://www.garethferguson.co.uk/icons/icon-48x48.png",
                "sameAs": "https://www.garethferguson.co.uk"
              }
             `}</script>
            )}
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

export default SEO
