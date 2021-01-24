import { Asset } from "contentful"
import { ResponsiveImage } from "../src/components/Utils/ProgressiveImage"
import { IProjectFields } from "./generated/contentful"

import "@emotion/react"

import { MyTheme } from "../src/gatsby-plugin-theme-ui/index"
declare module "@emotion/react" {
    /* eslint-disable-next-line */
    export interface Theme extends MyTheme {}
}

export interface StyledProps {
    as?: string
}

// Contentful

export interface ContentfulRichTextGatsbyReference {
    /**
     * Either ContentfulAsset for assets or ContentfulYourContentTypeName for content types
     */
    /* eslint-disable-next-line */
    contentful_id: string
    __typename: string
}

export interface RenderRichTextData<
    T extends ContentfulRichTextGatsbyReference
> {
    raw: string
    references: T[]
}

export type IProjectFieldsTypes = IProjectFields & {
    coverImage: ResponsiveImage
}

interface CustomAsset extends Asset {
    svg: { content: string }
}
export interface ISkillFieldsCustom {
    /** Name */
    name?: string | undefined

    /** Icon */
    icon?: CustomAsset | undefined
}
