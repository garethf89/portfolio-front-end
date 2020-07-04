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
    const { spaceId, accessToken } = contentfulConfig.production
    if (!spaceId || !accessToken) {
        throw new Error(
            "Contentful space ID and access token need to be provided."
        )
    }
}
module.exports = {
    siteMetadata: {
        title: "Gareth Ferguson Portfolio",
        description: "Gareth Ferguson Portfolio",
        siteUrl: "http://garethferguson.co.uk",
        author: "Gareth Ferguson",
        image: "/images/Logo.jpg",
        menuLinks: [
            {
                name: "Work",
                slug: "/",
                anchor: "work",
            },
            {
                name: "Contact",
                slug: "/contact/",
            },
        ],
        basePath: "/",
    },
    plugins: [
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
        "gatsby-plugin-theme-ui",
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-plugin-transition-link",
            options: {
                layout: require.resolve(`./src/components/layout.tsx`),
                injectPageProps: false,
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
            resolve: `gatsby-plugin-schema-snapshot`,
            options: {
                path: `./src/gatsby/schema/schema.gql`,
                update: false,
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
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
