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
                                icon1x: fixed(width: 400) {
                                    src
                                    srcWebp
                                }
                                icon2x: fixed(width: 850) {
                                    src
                                    srcWebp
                                    tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        `
    )
    return data
}
