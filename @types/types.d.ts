import { ThemeType } from "../src/@chakra-ui/theme"
import "@emotion/react"
import { Asset, Maybe, Scalars } from "@schema/graphql"

interface Size {
    [key: string]: string
    container: Record<"sm" | "xl" | "md" | "lg" | "content", string>
}

declare module "@emotion/react" {
    export interface Theme extends ThemeType {
        sizes: Size
    }
}

export interface StyledProps {
    as?: string
}

// Image Types

// Correct Alisased Guild types
export type AssetWithBlur = Asset & { blurUrl: Maybe<Scalars["String"]> }

export type IconsProcessed = { url: string; icon: string }

// Contentful

export interface ContentfulRichTextNextReference {
    /**
     * Either ContentfulAsset for assets or ContentfulYourContentTypeName for content types
     */
    /* eslint-disable-next-line */
    contentful_id: string
    __typename: string
}

export interface RenderRichTextData<T extends ContentfulRichTextNextReference> {
    json: any
    references?: T[]
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
