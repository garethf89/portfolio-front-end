import config from "../config/site"
import { Metadata } from "next"

import Providers from "./providers"

export const metadata: Metadata = {
    title: {
        template: `%s | ${config.title}`,
        default: config.title,
    },
    description: config.description,
    manifest: "/site.webmanifest",
    alternates: {
        canonical: config.siteUrl,
    },
    metadataBase: new URL(config.siteUrl),
    openGraph: {
        title: config.title,
        description: config.description,
        url: config.siteUrl,
        siteName: config.title,
        images: [
            {
                url: config.image,
                width: 800,
                height: 600,
            },
        ],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: config.title,
        description: config.description,
        images: [config.image],
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head></head>
            <body>
                <>
                    <Providers>{children}</Providers>
                </>
            </body>
        </html>
    )
}

export default Layout
