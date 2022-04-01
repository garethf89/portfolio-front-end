import { graphql, useStaticQuery } from "gatsby"

export const getAllProjects = (): Record<string, string> => {
    const data = useStaticQuery(
        graphql`
            query WorkProjects {
                allContentfulProject {
                    edges {
                        node {
                            slug
                            title
                            headline
                            coverImage {
                                gatsbyImageData(
                                    width: 2200
                                    layout: FULL_WIDTH
                                    placeholder: BLURRED
                                    quality: 90
                                    formats: [AUTO, AVIF, WEBP]
                                    aspectRatio: 1.77
                                )
                            }
                        }
                    }
                }
            }
        `
    )
    return data
}
