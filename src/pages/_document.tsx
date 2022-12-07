/* eslint-disable @next/next/next-script-for-ga */
import { Head, Html, Main, NextScript } from "next/document"
import config from "../config/site"

const ICON_SIZES = ["16x16", "32x32", "180x180", "512x512"]

const TOUCH_ICON_SIZES = ["192x192", "512x512"]

const Document = () => {
    const { siteUrl, image, title, description } = config
    const metaImage = image
    const metaDescription = description
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />

                <link rel="canonical" href={siteUrl} />
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

                <meta name="image" content={image} />
                <meta name="description" content={metaDescription} />

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

                {/* OpenGraph tags */}
                <meta property="og:title" content={title} />
                <meta property="og:image" content={metaImage} />
                <meta property="og:description" content={metaDescription} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:image" content={metaImage} />
                <meta name="twitter:description" content={metaDescription} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
