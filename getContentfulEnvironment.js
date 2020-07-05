const contentfulManagement = require("contentful-management")
const contentfulConfig = require("./.contentful-codegen")

module.exports = () => {
    const { spaceId, accessToken, env } = contentfulConfig

    const contentfulClient = contentfulManagement.createClient({
        accessToken: accessToken,
    })

    return contentfulClient
        .getSpace(spaceId)
        .then(space => space.getEnvironment(env || "master"))
}
