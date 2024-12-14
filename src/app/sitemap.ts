import { getProjectPathsServer } from "../queries/api/getProjectPathsServer"

const URL = "https://www.garethferguson.co.uk"

export default async function sitemap() {
    const { paths } = await getProjectPathsServer()

    const posts = paths.map(({ id }) => ({
        url: `${URL}/${id}`,
        lastModified: new Date().toISOString(),
    }))

    const routes = ["/", "/contact"].map(route => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
    }))

    return [...routes, ...posts]
}
