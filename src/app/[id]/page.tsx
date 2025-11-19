import {
    Project,
    ProjectCollection,
    ProjectPathsQuery,
    ProjectPathsQueryVariables,
    ProjectQuery,
    ProjectQueryVariables,
} from "@schema"
import { client, PROJECT_PATHS, PROJECT_QUERY, getSingleItem } from "@queries"
import { IconsProcessed } from "@types"
import { PageHeader, PageContent } from "@components"
import { notFound } from "next/navigation"
import { Metadata } from "next"

export const generateStaticParams = async () => {
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

    const paths =
        data?.project?.items.reduce((slugs, contentfulObj) => {
            if (contentfulObj.slug) {
                return [...slugs, contentfulObj.slug]
            }
            return slugs
        }, []) ?? []

    return paths.map(path => ({ id: path })) || []
}

type ProjectPageProps = {
    title: string
    page: Project
    icons: IconsProcessed[]
}

type GetProjectProps = { id: string }

const getProject = async ({
    id,
}: GetProjectProps): Promise<ProjectPageProps> => {
    const { error, data } = await client.query<
        ProjectQuery,
        ProjectQueryVariables
    >({
        query: PROJECT_QUERY,
        variables: {
            slug: String(id),
            limit: 1,
            preview: process.env.PREVIEW === "true",
        },
        fetchPolicy: "no-cache",
        context: {
            headers: {
                "x-contentful-preview": "false",
            },
        },
    })

    if (error) {
        console.error(error)
    }

    if (!data.project || !data.project.items.length) {
        return notFound()
    }

    const project = getSingleItem<ProjectCollection, Project>(
        data.project as unknown as ProjectCollection
    )

    // Request SVGS and set to strings - TODO
    const ICON_REQUESTS_SKILL = project.skillsCollection?.items.map(item => {
        return { url: item.icon?.url, icon: item.icon?.fileName }
    })

    const icons = await Promise.all(
        [...ICON_REQUESTS_SKILL!].map(async item => {
            const resp = await fetch(item.url!)
            return { url: item.url!, icon: await resp.text() }
        })
    )

    return {
        title: project.title!,
        icons: icons,
        page: project,
    }
}

export const generateMetadata = async ({ params }): Promise<Metadata> => {
    const { id } = await params
    const { page } = await getProject({ id })

    return {
        title: page.title!,
        description: page.headline || `Project: ${page.title}`,
    }
}

const ProjectPage = async ({ params }): Promise<React.ReactElement> => {
    const { id } = await params

    const { page, icons, title } = await getProject({ id })

    const {
        coverImage,
        headline,
        link,
        pageContentCollection,
        skillsCollection,
    } = page

    return (
        <>
            <PageHeader
                link={link}
                image={coverImage}
                text={headline!}
                title={title}
            />
            <PageContent
                content={pageContentCollection!.items}
                skills={skillsCollection!.items}
                icons={icons}
            />
        </>
    )
}

export default ProjectPage
