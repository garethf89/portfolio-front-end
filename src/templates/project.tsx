import { IProjectFields } from "../../@types/generated/contentful"
import PageContent from "../components/PageContent/PageContent"
import PageHeader from "../components/HeadPanels/PageHeader"
import * as React from "react"
import { graphql } from "gatsby"

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
                            file {
                                url
                            }
                            progressive: fixed(width: 20, quality: 80) {
                                src
                                srcWebp
                            }
                            S: fluid(maxWidth: 800, quality: 90) {
                                src
                                srcWebp
                            }
                            S2X: fluid(maxWidth: 1600, quality: 90) {
                                src
                                srcWebp
                            }
                            L: fluid(maxWidth: 1100, quality: 90) {
                                src
                                srcWebp
                            }
                            L2X: fluid(maxWidth: 2200, quality: 90) {
                                src
                                srcWebp
                            }
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
                            file {
                                url
                            }
                            progressive: fixed(width: 20, quality: 80) {
                                src
                                srcWebp
                            }
                            S: fluid(maxWidth: 800, quality: 90) {
                                src
                                srcWebp
                            }
                            S2X: fluid(maxWidth: 1600, quality: 90) {
                                src
                                srcWebp
                            }
                            L: fluid(maxWidth: 1100, quality: 90) {
                                src
                                srcWebp
                            }
                            L2X: fluid(maxWidth: 2200, quality: 90) {
                                src
                                srcWebp
                            }
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
                progressive: fixed(width: 20, quality: 80) {
                    src
                    srcWebp
                }
                S: fluid(maxWidth: 800, quality: 90) {
                    src
                    srcWebp
                }
                S2X: fluid(maxWidth: 1600, quality: 90) {
                    src
                    srcWebp
                }
                L: fluid(maxWidth: 1100, quality: 90) {
                    src
                    srcWebp
                }
                L2X: fluid(maxWidth: 2200, quality: 90) {
                    src
                    srcWebp
                }
            }
        }
    }
`
export default ProjectTemplate
