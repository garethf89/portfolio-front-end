import { graphql } from "gatsby"
import * as React from "react"
import { IProjectFields } from "../../@types/generated/contentful"
import PageHeader from "../components/HeadPanels/PageHeader"
import PageContent from "../components/PageContent/PageContent"

interface ProjectProps {
    id: string
    data: {
        page: IProjectFields
    }
}

const ProjectTemplate = ({ data }: ProjectProps): React.ReactElement => {
    const { coverImage, headline, link, title, pageContent, skills } = data.page

    return (
        <>
            <PageHeader
                link={link}
                image={coverImage}
                text={headline}
                title={title}
            />
            <PageContent content={pageContent} skills={skills} />
        </>
    )
}

export const query = graphql`
    query ($id: String!) {
        page: contentfulProject(id: { eq: $id }) {
            id
            title
            slug
            headline
            link
            pageContent {
                ... on Node {
                    ... on ContentfulPageContentText {
                        type: __typename
                        body {
                            raw
                        }
                        internal {
                            type
                        }
                    }
                    ... on ContentfulPageContentFullSizeImage {
                        type: __typename
                        image {
                            title
                            description
                            gatsbyImageData(
                                width: 2200
                                layout: FULL_WIDTH
                                placeholder: BLURRED
                                quality: 90
                                formats: [AUTO, AVIF, WEBP]
                            )
                        }
                        internal {
                            type
                        }
                    }
                    ... on ContentfulPageContentImage {
                        type: __typename
                        image {
                            title
                            description
                            gatsbyImageData(
                                width: 2200
                                layout: FULL_WIDTH
                                placeholder: BLURRED
                                quality: 90
                                formats: [AUTO, AVIF, WEBP]
                            )
                        }
                        internal {
                            type
                        }
                    }
                }
            }
            skills {
                name
                icon {
                    svg {
                        content
                    }
                    file {
                        url
                    }
                }
            }
            coverImage {
                gatsbyImageData(
                    width: 2200
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    quality: 90
                    formats: [AUTO, AVIF, WEBP]
                )
            }
        }
    }
`
export default ProjectTemplate
