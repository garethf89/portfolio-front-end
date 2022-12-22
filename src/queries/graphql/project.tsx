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
    query Project($slug: String!, $limit: Int!) {
        project: projectCollection(where: { slug: $slug }, limit: $limit) {
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
                                        resizeStrategy: FIT
                                        width: 1
                                        format: JPG
                                        quality: 1
                                    }
                                )
                                url(
                                    transform: {
                                        resizeStrategy: FIT
                                        width: 2200
                                        quality: 90
                                    }
                                )
                                avifUrl: url(
                                    transform: {
                                        resizeStrategy: FIT
                                        width: 2200
                                        format: AVIF
                                        quality: 90
                                    }
                                )
                                webPUrl: url(
                                    transform: {
                                        resizeStrategy: FIT
                                        width: 2200
                                        format: WEBP
                                        quality: 90
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
                                        resizeStrategy: FIT
                                        width: 1
                                        format: JPG
                                        quality: 1
                                    }
                                )
                                url(
                                    transform: {
                                        resizeStrategy: FIT
                                        width: 2200
                                        quality: 90
                                    }
                                )
                                avifUrl: url(
                                    transform: {
                                        resizeStrategy: FIT
                                        width: 2200
                                        format: AVIF
                                        quality: 90
                                    }
                                )
                                webPUrl: url(
                                    transform: {
                                        resizeStrategy: FIT
                                        width: 2200
                                        format: WEBP
                                        quality: 90
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
                            resizeStrategy: FIT
                            width: 1
                            format: JPG
                            quality: 1
                        }
                    )
                    url(
                        transform: {
                            resizeStrategy: FIT
                            width: 2200
                            quality: 90
                        }
                    )
                    avifUrl: url(
                        transform: {
                            resizeStrategy: FIT
                            width: 2200
                            format: AVIF
                            quality: 90
                        }
                    )
                    webPUrl: url(
                        transform: {
                            resizeStrategy: FIT
                            width: 2200
                            format: WEBP
                            quality: 90
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
                            resizeStrategy: FIT
                            width: 1
                            format: JPG
                            quality: 1
                        }
                    )
                    url(
                        transform: {
                            resizeStrategy: FIT
                            width: 2200
                            quality: 90
                        }
                    )
                    avifUrl: url(
                        transform: {
                            resizeStrategy: FIT
                            width: 2200
                            format: AVIF
                            quality: 90
                        }
                    )
                    webPUrl: url(
                        transform: {
                            resizeStrategy: FIT
                            width: 2200
                            format: WEBP
                            quality: 90
                        }
                    )
                }
            }
        }
    }
`
