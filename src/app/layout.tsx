import config from "../config/site"
import { Metadata, Viewport } from "next"
import Providers from "./providers"
import "../globals.css"
import { Ubuntu } from "next/font/google"

const ubuntuFont = Ubuntu({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-ubuntu",
})

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
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <html className={ubuntuFont.className} lang="en">
            <head></head>
            <Providers>{children}</Providers>
        </html>
    )
}

export default Layout
