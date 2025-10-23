import { gql } from "@apollo/client"

export const PROJECT_PATHS = gql`
    query ProjectPaths {
        project: projectCollection {
            items {
                slug
            }
        }
    }
`
export const PROJECT_QUERY = gql`
    query Project($slug: String!, $limit: Int!, $preview: Boolean) {
        project: projectCollection(
            where: { slug: $slug }
            limit: $limit
            preview: $preview
        ) {
            items {
                slug
                title
                headline
                link

                skillsCollection {
                    items {
                        name
                        icon {
                            fileName
                            url
                            title
                        }
                    }
                }

                pageContentCollection {
                    items {
                        ... on PageContentText {
                            type: __typename
                            body {
                                json
                            }
                        }

                        ... on PageContentFullSizeImage {
                            type: __typename
                            image {
                                contentType
                                width
                                height
                                fileName
                                title
                                blurURL: url(
                                    transform: {
                                        resizeStrategy: PAD
                                        width: 1
                                        format: JPG
                                        quality: 1
                                    }
                                )
                                url(
                                    transform: {
                                        resizeStrategy: PAD
                                        width: 2200
                                        quality: 75
                                    }
                                )
                                avifUrl: url(
                                    transform: {
                                        resizeStrategy: PAD
                                        width: 2200
                                        format: AVIF
                                        quality: 75
                                    }
                                )
                                webPUrl: url(
                                    transform: {
                                        resizeStrategy: PAD
                                        width: 2200
                                        format: WEBP
                                        quality: 75
                                    }
                                )
                            }
                        }
                        ... on PageContentImage {
                            type: __typename
                            image {
                                contentType
                                width
                                height
                                fileName
                                title
                                blurURL: url(
                                    transform: {
                                        resizeStrategy: PAD
                                        width: 1
                                        format: JPG
                                        quality: 1
                                    }
                                )
                                url(
                                    transform: {
                                        resizeStrategy: PAD
                                        width: 2200
                                        quality: 75
                                    }
                                )
                                avifUrl: url(
                                    transform: {
                                        resizeStrategy: PAD
                                        width: 2200
                                        format: AVIF
                                        quality: 75
                                    }
                                )
                                webPUrl: url(
                                    transform: {
                                        resizeStrategy: PAD
                                        width: 2200
                                        format: WEBP
                                        quality: 75
                                    }
                                )
                            }
                        }
                    }
                }

                coverImage {
                    contentType
                    width
                    height
                    fileName
                    title
                    blurURL: url(
                        transform: {
                            resizeStrategy: PAD
                            width: 1
                            format: JPG
                            quality: 1
                        }
                    )
                    url(
                        transform: {
                            resizeStrategy: PAD
                            width: 2200
                            quality: 75
                        }
                    )
                    avifUrl: url(
                        transform: {
                            resizeStrategy: PAD
                            width: 2200
                            format: AVIF
                            quality: 75
                        }
                    )
                    webPUrl: url(
                        transform: {
                            resizeStrategy: PAD
                            width: 2200
                            format: WEBP
                            quality: 75
                        }
                    )
                }
            }
        }
    }
`

export const MULTIPLE_PROJECTS_QUERY = gql`
    query AllProjects {
        project: projectCollection {
            items {
                slug
                title
                headline
                coverImage {
                    contentType
                    width
                    height
                    fileName
                    title
                    blurURL: url(
                        transform: {
                            resizeStrategy: PAD
                            width: 1
                            format: JPG
                            quality: 1
                        }
                    )
                    url(
                        transform: {
                            resizeStrategy: PAD
                            width: 2200
                            quality: 75
                        }
                    )
                    avifUrl: url(
                        transform: {
                            resizeStrategy: PAD
                            width: 2200
                            format: AVIF
                            quality: 75
                        }
                    )
                    webPUrl: url(
                        transform: {
                            resizeStrategy: PAD
                            width: 2200
                            format: WEBP
                            quality: 75
                        }
                    )
                }
            }
        }
    }
`
