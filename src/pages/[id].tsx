import { GetStaticPaths, GetStaticProps } from "next"
import * as React from "react"
import { IProjectFields } from "../../@types/generated/contentful"
import { PROJECT_PATHS, PROJECT_QUERY } from "../queries"
import { client } from "../queries/apolloClient"
import { getSingleItem } from "../queries/utils"
import PageHeader from "../components/HeadPanels/PageHeader"
import PageContent from "../components/PageContent/PageContent"
import { addPlaceholder, addPlaceholderSingle } from "../utils"

type ProjectPageParams = {}

type ProjectQueryResult = {}

export const getStaticPaths: GetStaticPaths = async () => {
    const { error, data } = await client.query({
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

export const getStaticProps: GetStaticProps<
    IProjectFields,
    ProjectPageParams
> = async ({ params }) => {
    const { error, data } = await client.query({
        query: PROJECT_QUERY,
        variables: { slug: params.id },
        fetchPolicy: "no-cache",
        context: {
            headers: {
                "x-contentful-preview": "false",
            },
        },
    })

    const projectSingle = getSingleItem(data.project)

    // Create blur images
    const project = await addPlaceholderSingle(projectSingle, "coverImage")

    // Request SVGS and set to strings - TODO
    const ICON_REQUESTS_SKILL = [...project.skills.items].map(item => {
        return { url: item.icon.url, icon: item.icon.fileName }
    })
    const icons = await Promise.all(
        [...ICON_REQUESTS_SKILL].map(async item => {
            const resp = await fetch(item.url)
            return { url: item.url, icon: await resp.text() }
        })
    )

    if (error) {
        console.log(error)
    }

    return {
        props: {
            icons: icons,
            page: project,
        },
        revalidate: 60 * 60 * 24,
    }
}

// Use CodeGen TODO
const ProjectTemplate = ({ page, icons }: ProjectProps): React.ReactElement => {
    const { coverImage, headline, link, title, pageContent, skills } = page
    return (
        <>
            <PageHeader
                link={link}
                image={coverImage}
                text={headline}
                title={title}
            />
            <PageContent
                content={pageContent.items}
                skills={skills.items}
                icons={icons}
            />
        </>
    )
}

export default ProjectTemplate
