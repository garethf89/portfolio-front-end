/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/* eslint-disable */

// You can delete this file if you're not using

const axios = require("axios")
const url = require("./src/constants/lastfm.ts").url
const data = require("./src/constants/lastfm.ts").data
const album = require("./src/__mocks__/lastfm")

exports.createSchemaCustomization = require("./src/gatsby/node/createSchemaCustomization")
exports.createPages = require("./src/gatsby/node/createPages")

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        node: { fs: "empty" }
    })
}

exports.sourceNodes = async ({
    actions: { createNode },
    createNodeId,
    createContentDigest
}) => {
    let result
    if (process.env.NODE_ENV !== "production") {
        result = { albums: album }
    } else {
        try {
            const res = await axios({
                method: "post",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                url: url,
                data: data
            })
            result = { albums: res }
        } catch (e) {
            console.log("No connection to back end")
        }
    }
    return createNode({
        albums: result.albums,
        id: createNodeId(`lastfm-build-time-data`),
        internal: {
            type: `Albums`,
            contentDigest: createContentDigest(result)
        }
    })
}
