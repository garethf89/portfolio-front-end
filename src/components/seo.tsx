/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Helmet } from "react-helmet"
import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata"

interface SeoProps {
    pageDescription: string
    pageTitle: string
    pageImage: string
    path: string
    children?: React.ReactNode
}

const SEO = ({
    pageTitle,
    pageDescription,
    pageImage,
    path,
}: SeoProps): React.ReactElement => {
    const { siteUrl, image, title, description } = useSiteMetadata()

    const metaDescription = pageDescription || description
    const metaImage = pageImage || image

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
