const contentfulManagement = require("contentful-management")

const { SPACE_ID, ACCESS_TOKEN, env } = process.env

module.exports = () => {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: ACCESS_TOKEN,
    })

    return contentfulClient
        .getSpace(SPACE_ID)
        .then(space => space.getEnvironment(env || "master"))
}
