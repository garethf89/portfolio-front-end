import {
    BaseThemeWithExtensions,
    ThemeExtension,
    ThemeOverride,
} from "@chakra-ui/react"
import { ThemeTypings } from "@chakra-ui/styled-system"
import { ChakraTheme } from "@chakra-ui/theme"
import "@emotion/react"
import { Asset } from "contentful"
import { ResponsiveImage } from "../src/components/Utils/ProgressiveImage"
import { IProjectFields } from "./generated/contentful"

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

declare module "@chakra-ui/react" {
    /* eslint-disable-next-line */
    export declare function extendTheme<
        BaseTheme extends ChakraTheme = ChakraTheme,
        Extensions extends (
            | BaseTheme
            | ThemeOverride<BaseTheme>
            | ThemeExtension<ThemeOverride<BaseTheme>>
        )[] = (
            | ThemeOverride<BaseTheme>
            | ThemeExtension<ThemeOverride<BaseTheme>>
        )[]
    >(
        ...extensions: [...Extensions]
    ): BaseThemeWithExtensions<CustomTheme, Extensions>
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
