// THISstyled from "@emotion/styled"
import { IStatFields } from "../../../../@types/generated/contentful"
import  FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.
export interface IHomePageFields {
    /** Title */
    title?: string | undefined

    /** Intro Text */
    introText?: Document | undefined

    /** Stats */
    stats?: IStat[] | undefined

    /** Skills */
    skills?: ISkill[] | undefined

    /** Skills Text */
    skillsText?: Document | undefined

    /** Logos */
    logos?: ILogo[] | undefined

    /** Case Studies */
    caseStudies?: IProject[] | undefined

    /** Projects */
    projects?: IProject[] | undefined
}

export interface IHomePage extends Entry<IHomePageFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: "homePage"
                linkType: "ContentType"
                type: "Link"
            }
        }
    }
}

export interface ILogoFields {
    /** Name */
    name?: string | undefined

    /** Logo */
    logo?: Asset | undefined
}

export interface ILogo extends Entry<ILogoFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: "logo"
                linkType: "ContentType"
                type: "Link"
            }
        }
    }
}

export interface IPageContentImageFields {
    /** Title */
    title?: string | undefined

    /** Image */
    image?: Asset | undefined
}

export interface IPageContentImage extends Entry<IPageContentImageFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: "pageContentImage"
                linkType: "ContentType"
                type: "Link"
            }
        }
    }
}

export interface IPageContentTextFields {
    /** Title */
    title?: string | undefined

    /** Body */
    body?: Document | undefined
}

export interface IPageContentText extends Entry<IPageContentTextFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: "pageContentText"
                linkType: "ContentType"
                type: "Link"
            }
        }
    }
}

export interface IProjectFields {
    /** Title */
    title?: string | undefined

    /** Headline */
    headline?: string | undefined

    /** Cover Image */
    coverImage?: Asset | undefined

    /** Page Content */
    pageContent?: (IPageContentImage | IPageContentText)[] | undefined

    /** Skills */
    skills?: Entry<{ [fieldId: string]: unknown }>[] | undefined

    /** Slug */
    slug: string

    /** Link */
    link?: string | undefined
}

export interface IProject extends Entry<IProjectFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: "project"
                linkType: "ContentType"
                type: "Link"
            }
        }
    }
}

export interface ISkillFields {
    /** Name */
    name?: string | undefined

    /** Icon */
    icon?: Asset | undefined
}

export interface ISkill extends Entry<ISkillFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: "skill"
                linkType: "ContentType"
                type: "Link"
            }
        }
    }
}

export interface IStatFields {
    /** Description */
    description?: string | undefined

    /** Amount */
    amount?: number | undefined
}

export interface IStat extends Entry<IStatFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: "stat"
                linkType: "ContentType"
                type: "Link"
            }
        }
    }
}

export type CONTENT_TYPE =
    | "homePage"
    | "logo"
    | "pageContentImage"
    | "pageContentText"
    | "project"
    | "skill"
    | "stat"

export type LOCALE_CODE = "en-US"

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US"
