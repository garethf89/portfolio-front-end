import { Container, Heading, PageHeader, SuggestedProjects } from "@components"
import * as React from "react"
import { MULTIPLE_PROJECTS_QUERY } from "../queries"
import { client } from "../queries/apolloClient"
import ProjectProvider from "../contexts/Projects"
import type { AllProjectsQuery, Project } from "@schema"

type NotFoundPageProps = Promise<{ projects?: Project[] }>

export const getProjects = async (): NotFoundPageProps => {
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

    const projects = data.project!.items as Project[]

    if (error) {
        console.error(error)
    }

    return {
        projects,
    }
}

const NotFoundPage = async (): Promise<React.ReactElement> => {
    const { projects } = await getProjects()

    const headerText = "Page not found!"

    if (!projects) {
        return <PageHeader title="404" text={headerText} />
    }

    return (
        <ProjectProvider value={projects}>
            <PageHeader title="404" text={headerText} />
            {!!projects && (
                <Container vPadding>
                    <Heading level="h2">Try these pages instead</Heading>
                    <SuggestedProjects />
                </Container>
            )}
        </ProjectProvider>
    )
}

export default NotFoundPage
