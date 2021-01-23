import { graphql, useStaticQuery } from "gatsby"

interface Meta {
    [k: string]: string | { [p: string]: string }
}

export const useSiteMetadata = (): Record<string, Meta> => {
    const { site } = useStaticQuery(
        graphql`
            query siteMetaData {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                        image
                        menuLinks {
                            name
                            slug
                        }
                    }
                }
            }
        `
    )
    return site.siteMetadata
}
