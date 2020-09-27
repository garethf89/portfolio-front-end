import { IProjectFields } from "../../@types/generated/contentful"
import PageContent from "../components/PageContent/PageContent"
import PageHeader from "../components/HeadPanels/PageHeader"
import React from "react"
import { graphql } from "gatsby"

interface ProjectProps {
    id: string
    data: {
        page: IProjectFields
    }
}

const ProjectTemplate = ({ id, data }: ProjectProps): React.ReactElement => {
    const { coverImage, headline, link, title, pageContent } = data.page

    return (
        <>
            <PageHeader
                link={link}
                image={coverImage}
                text={headline}
                title={title}
            />
            <PageContent content={pageContent} />
        </>
    )
}

export const query = graphql`
    query($id: String!) {
        page: contentfulProject(id: { eq: $id }) {
            id
            title
            slug
            headline
            link
            pageContent {
                ... on ContentfulPageContentText {
                    body {
                        json
                    }
                    internal {
                        type
                    }
                }
                ... on ContentfulPageContentImage {
                    image {
                        title
                        description
                        file {
                            url
                        }
                        fixed(quality: 100, width: 2400) {
                            srcWebp
                            src
                        }
                    }
                    internal {
                        type
                    }
                }
            }
            coverImage {
                coverM: fixed(width: 800) {
                    src
                    srcWebp
                }
                coverL: fixed(width: 1200) {
                    src
                    srcWebp
                    tracedSVG
                }
            }
        }
    }
`
export default ProjectTemplate
