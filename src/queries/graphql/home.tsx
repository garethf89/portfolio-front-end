import { gql } from "@apollo/client"

export const HOME_QUERY = gql`
    query Home($preview: Boolean) {
        page: homePageCollection(limit: 1, preview: $preview) {
            items {
                title
                description
                introText {
                    json
                }
                statsCollection {
                    items {
                        amount
                        description
                    }
                }
                skillsText {
                    json
                }
                skillsCollection(limit: 12) {
                    items {
                        name
                        icon {
                            fileName
                            url
                            title
                        }
                    }
                }
                caseStudiesCollection(limit: 3) {
                    items {
                        link
                        intro {
                            json
                        }
                        slug
                        title
                    }
                }
                projectsCollection(limit: 10) {
                    items {
                        slug
                        headline
                        title
                        coverImage {
                            fileName
                            title
                            width
                            height
                            url(
                                transform: {
                                    resizeStrategy: FIT
                                    width: 1100
                                    format: JPG
                                    quality: 90
                                }
                            )
                            avifUrl: url(
                                transform: {
                                    resizeStrategy: FIT
                                    width: 1100
                                    format: AVIF
                                    quality: 90
                                }
                            )
                            webPUrl: url(
                                transform: {
                                    resizeStrategy: FIT
                                    width: 1100
                                    format: WEBP
                                    quality: 90
                                }
                            )
                        }
                    }
                }

                logosCollection {
                    items {
                        name
                        dark
                        logo {
                            contentType
                            width
                            height
                            title
                            fileName
                            url(
                                transform: {
                                    resizeStrategy: FIT
                                    width: 200
                                    quality: 90
                                }
                            )
                            avifUrl: url(
                                transform: {
                                    resizeStrategy: FIT
                                    width: 200
                                    format: AVIF
                                    quality: 90
                                }
                            )
                            webPUrl: url(
                                transform: {
                                    resizeStrategy: FIT
                                    width: 200
                                    format: WEBP
                                    quality: 90
                                }
                            )
                        }
                    }
                }
            }
        }
    }
`
