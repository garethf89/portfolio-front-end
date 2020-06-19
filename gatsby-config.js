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
        title: "Gatsby Contentful Starter",
        description: "Gatsby Contentful Starter",
        siteUrl: "http://TODO",
        author: "Gareth Ferguson",
        image: "/images/Logo.jpg",
        menuLinks: [
            {
                name: "Home",
                slug: "/",
            },
            {
                name: "About",
                slug: "/about/",
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
                layout: require.resolve(`./src/components/layout.js`),
                injectPageProps: false,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby Contentful Starter`,
                short_name: `GCS`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: `static/images/Logo.png`,
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
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
