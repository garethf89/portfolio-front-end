import { Container, Heading, PageHeader, SuggestedProjects } from "@components"
import * as React from "react"
import { GetStaticProps } from "next"
import { IProjectFields } from "../../@types/generated/contentful"
import { MULTIPLE_PROJECTS_QUERY } from "../queries"
import { client } from "../queries/apolloClient"
import ProjectProvider from "../contexts/Projects"
import { addPlaceholder } from "../utils"
import type { AllProjectsQuery } from "@schema"

export const getStaticProps: GetStaticProps = async () => {
    const { error, data } = await client.query<AllProjectsQuery>({
        query: MULTIPLE_PROJECTS_QUERY,
        variables: {},
        fetchPolicy: "no-cache",
        context: {
            headers: {
                "x-contentful-preview": "false",
            },
        },
    })

    const projects = data.project.items

    // Create blur images
    const projectsFormatted = await addPlaceholder(projects, "coverImage")

    if (error) {
        console.error(error)
    }

    return {
        props: {
            projects: projectsFormatted,
        },
        revalidate: 60 * 60 * 24,
    }
}

type NotFoundPageProps = { projects: IProjectFields[] }

const NotFoundPage = ({ projects }: NotFoundPageProps): React.ReactElement => {
    const headerText = "Page not found!"
    return (
        <>
            <ProjectProvider value={projects}>
                <PageHeader title="404" text={headerText} />
                <Container vPadding>
                    <Heading level="h2">Try these pages instead</Heading>
                    <SuggestedProjects />
                </Container>
            </ProjectProvider>
        </>
    )
}

export default NotFoundPage
