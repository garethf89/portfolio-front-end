const crypto = require(`crypto`)
const fs = require(`fs-extra`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const { default: PQueue } = require("p-queue")
const { optimize } = require("svgo")

const queue = new PQueue({
    concurrency: 5,
})

const svgoConfig = {
    multipass: true,
    plugins: [
        {
            name: "preset-default",
            params: {
                overrides: {
                    removeViewBox: false,
                },
            },
        },
        { name: "removeDimensions" },
    ],
}

exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
    type InlineSvg {  
      content: String
      updatedAt: String
    }
  `)
}

async function parseSVG({
    source,
    uri,
    store,
    cache,
    createNode,
    createNodeId,
}) {
    // Get remote file
    const { absolutePath } = await createRemoteFileNode({
        url: uri,
        parentNodeId: source.id,
        store,
        cache,
        createNode,
        createNodeId,
    })

    // Read local file
    const svg = await fs.readFile(absolutePath)

    if (!svg) {
        throw new Error(
            "Unable to read " + source.contentful_id + ": " + absolutePath
        )
    }

    // Optimize
    if (svg.indexOf("base64") !== -1) {
        console.log(
            "SVG contains pixel data. Pixel data was removed to avoid file size bloat.",
            source.contentful_id + ": " + absolutePath
        )
    }
    const { data: optimizedSVG } = await optimize(svg, {
        ...svgoConfig,
        path: absolutePath,
    })

    return {
        content: optimizedSVG,
        updatedAt: source.updatedAt,
    }
}

exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
  type InlineSvg {
    content: String
    updatedAt: String
  }
`)
}

exports.createResolvers = ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
}) => {
    const { createNode } = actions
    createResolvers({
        ContentfulAsset: {
            svg: {
                type: `InlineSvg`,
                resolve: async source => {
                    // Catch empty Contentful assets
                    if (!source.file) {
                        return null
                    }

                    const {
                        file: { url, contentType },
                        updatedAt,
                    } = source

                    // Ensure to process only svgs and files with an url
                    if (contentType !== "image/svg+xml" || !url) {
                        return null
                    }

                    const cacheId =
                        "contentful-svg-content-" +
                        crypto.createHash(`md5`).update(url).digest(`hex`)

                    const result = await queue.add(async () => {
                        const uri = `http:${url}`

                        try {
                            const cachedData = await cache.get(cacheId)

                            if (
                                cachedData &&
                                cachedData.updatedAt === updatedAt
                            ) {
                                return cachedData
                            }

                            const svgRaw = await parseSVG({
                                source,
                                uri,
                                store,
                                cache,
                                createNode,
                                createNodeId,
                            })

                            await cache.set(cacheId, svgRaw)

                            return svgRaw
                        } catch (err) {
                            console.error(err)
                            return null
                        }
                    })

                    return result
                },
            },
        },
    })
}
