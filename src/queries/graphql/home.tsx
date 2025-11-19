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
                projectsCollection(limit: 11) {
                    items {
                        slug
                        headline
                        title
                        coverImage {
                            fileName
                            title
                            width
                            height
                            blurURL: url(
                                transform: {
                                    resizeStrategy: PAD
                                    width: 8
                                    format: JPG
                                    quality: 80
                                }
                            )
                            url(
                                transform: {
                                    resizeStrategy: PAD
                                    width: 1100
                                    format: JPG
                                    quality: 75
                                }
                            )
                            avifUrl: url(
                                transform: {
                                    resizeStrategy: PAD
                                    width: 1100
                                    format: AVIF
                                    quality: 75
                                }
                            )
                            webPUrl: url(
                                transform: {
                                    resizeStrategy: PAD
                                    width: 1100
                                    format: WEBP
                                    quality: 75
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
                                    resizeStrategy: PAD
                                    width: 200
                                    quality: 75
                                }
                            )
                            avifUrl: url(
                                transform: {
                                    resizeStrategy: PAD
                                    width: 200
                                    format: AVIF
                                    quality: 75
                                }
                            )
                            webPUrl: url(
                                transform: {
                                    resizeStrategy: PAD
                                    width: 200
                                    format: WEBP
                                    quality: 75
                                }
                            )
                        }
                    }
                }
            }
        }
    }
`
