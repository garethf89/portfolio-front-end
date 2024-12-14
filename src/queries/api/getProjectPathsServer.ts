import { ProjectPathsQuery, ProjectPathsQueryVariables } from "@schema"
import { PROJECT_PATHS } from "@queries"
import { client } from "../apolloClient"
import { cache } from "react"
import "server-only"

type GetProjectPathsResponsePaths = { id: string }

type GetProjectPathsResponse = {
    paths: GetProjectPathsResponsePaths[]
    fallback: string
}

export const getProjectPathsServer = cache(
    async (): Promise<GetProjectPathsResponse> => {
        const { data } = await client.query<
            ProjectPathsQuery,
            ProjectPathsQueryVariables
        >({
            query: PROJECT_PATHS,
            fetchPolicy: "no-cache",
            context: {
                headers: {
                    "x-contentful-preview": "false",
                },
            },
        })

        if (!data.project) {
            return {
                paths: [],
                fallback: "blocking",
            }
        }

        const paths = data?.project.items.reduce((slugs, contentfulObj) => {
            if (contentfulObj?.slug) {
                return [...slugs, contentfulObj.slug]
            }
            return slugs
        }, [])

        return {
            paths: paths.map(path => ({ id: path })) ?? [],
            fallback: "blocking",
        }
    }
)
