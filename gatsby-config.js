let contentfulConfig
try {
    contentfulConfig = require("./.contentful")
} catch (e) {
    contentfulConfig = {
        production: {
            spaceId: process.env.SPACE_ID,
            accessToken: process.env.ACCESS_TOKEN,
        },
    }
} finally {
    const { spaceId, accessToken } = contentfulConfig.development
        ? contentfulConfig.development
        : contentfulConfig.production
    if (!spaceId || !accessToken) {
        throw new Error(
            "Contentful space ID and access token need to be provided."
        )
    }
}
module.exports = {
    flags: {
        FAST_REFRESH: true,
        PRESERVE_WEBPACK_CACHE: true,
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
    },
    siteMetadata: {
        title: "Gareth Ferguson",
        description:
            "Portfolio site for Gareth Ferguson, a full-stack engineer based in Newcastle. View my skills and project experience, or contact using the form.",
        siteUrl: "https://garethferguson.co.uk",
        author: "Gareth Ferguson",
        image: "/images/Logo.jpg",
        menuLinks: [
            {
                name: "Contact",
                slug: "/contact/",
            },
            {
                name: "Storybook",
                slug:
                    process.env.NODE_ENV === "development"
                        ? "http://localhost:6006"
                        : "https://gareth-ferguson-storybook.netlify.app/",
            },
        ],
        basePath: "/",
    },
    plugins: [
        "gatsby-plugin-robots-txt",
        "gatsby-plugin-sitemap",
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        {
            resolve: `@chakra-ui/gatsby-plugin`,
            options: {
                isUsingColorMode: false,
                isResettingCSS: false,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: "gatsby-plugin-transition-link",
            options: {
                layout: require.resolve(`./src/components/layout.tsx`),
                injectPageProps: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gareth Ferguson Portfolio`,
                short_name: `Gareth Ferguson`,
                start_url: `/`,
                background_color: `#20222F`,
                theme_color: `#20222F`,
                display: `minimal-ui`,
                icon: `static/images/Logo.jpg`,
            },
        },
        {
            resolve: "gatsby-source-contentful",
            options:
                process.env.NODE_ENV === "development"
                    ? contentfulConfig.development
                    : contentfulConfig.production,
        },
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    // "/*": ["Cache-Control: max-age=604800"],
                },
            },
        },
        {
            resolve: `gatsby-plugin-typescript`,
        },
    ],
}
