import { ThemeTypings } from "@chakra-ui/styled-system"
import "@emotion/react"
import { Asset } from "contentful"

interface Size {
    [key: string]: string
    container: Record<"sm" | "xl" | "md" | "lg" | "content", string>
}

interface CustomTheme extends ThemeTypings {
    sizes: Size
}

declare module "@emotion/react" {
    /* eslint-disable-next-line */
    export interface Theme extends CustomTheme {}
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

interface CustomAsset extends Asset {
    svg: { content: string }
}
export interface ISkillFieldsCustom {
    /** Name */
    name?: string | undefined

    /** Icon */
    icon?: CustomAsset | undefined
}
