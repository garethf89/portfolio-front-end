import { GetStaticPaths, GetStaticProps } from "next"
import * as React from "react"
import { PROJECT_PATHS, PROJECT_QUERY } from "../queries"
import { client } from "../queries/apolloClient"
import { getSingleItem } from "../queries/utils"
import { PageHeader, PageContent } from "@components"
import { addPlaceholderSingle } from "../utils"
import {
    Project,
    ProjectCollection,
    ProjectPathsQuery,
    ProjectPathsQueryVariables,
    ProjectQuery,
    ProjectQueryVariables,
} from "@schema"
import { IconsProcessed } from "../../@types/types"

export const getStaticPaths: GetStaticPaths = async () => {
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

    const paths = data?.project.items.reduce((slugs, contentfulObj) => {
        if (contentfulObj.slug) {
            return [...slugs, contentfulObj.slug]
        }
        return slugs
    }, [])

    return {
        paths: paths.map(path => ({ params: { id: path } })) || [],
        fallback: "blocking",
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { error, data } = await client.query<
        ProjectQuery,
        ProjectQueryVariables
    >({
        query: PROJECT_QUERY,
        variables: {
            slug: String(params.id),
            limit: 1,
            preview: process.env.NODE_ENV === "development",
        },
        fetchPolicy: "no-cache",
        context: {
            headers: {
                "x-contentful-preview": "false",
            },
        },
    })

    console.log("REQUEST DATA: ")
    console.error(JSON.stringify(params, null, 2))

    if (error) {
        console.log("REQUEST ERRORS: ")
        console.error(error)
    }

    const projectSingle = getSingleItem<ProjectCollection, Project>(
        data.project as unknown as ProjectCollection
    )

    // Create blur images
    const project = await addPlaceholderSingle(projectSingle, "coverImage")

    // Request SVGS and set to strings - TODO
    const ICON_REQUESTS_SKILL = [...project.skillsCollection.items].map(
        item => {
            return { url: item.icon.url, icon: item.icon.fileName }
        }
    )
    const icons = await Promise.all(
        [...ICON_REQUESTS_SKILL].map(async item => {
            const resp = await fetch(item.url)
            return { url: item.url, icon: await resp.text() }
        })
    )

    return {
        props: {
            title: project.title,
            icons: icons,
            page: project,
        },
        revalidate: 60 * 60 * 24,
    }
}

type ProjectPageProps = {
    title: string
    page: Project
    icons: IconsProcessed[]
}

const ProjectTemplate = ({
    page,
    icons,
}: ProjectPageProps): React.ReactElement => {
    const {
        coverImage,
        headline,
        link,
        title,
        pageContentCollection,
        skillsCollection,
    } = page
    return (
        <>
            <PageHeader
                link={link}
                image={coverImage}
                text={headline}
                title={title}
            />
            <PageContent
                content={pageContentCollection.items}
                skills={skillsCollection.items}
                icons={icons}
            />
        </>
    )
}

export default ProjectTemplate
