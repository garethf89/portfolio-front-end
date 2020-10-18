import * as CSS from "csstype"
import { ObjectOrArray, Theme } from "styled-system"
import { ResponsiveImage } from "../src/components/Utils/ProgressiveImage"
import { IProjectFields } from "./generated/contentful"

interface CustomTheme extends Theme {
    space?: {
        common: ObjectOrArray<CSS.Property.Margin<number | string>>
        l: ObjectOrArray<CSS.Property.Margin<number | string>>
    }
    sizes?: Record<string, string>
    fonts?: {
        body: ObjectOrArray<CSS.Property.FontFamily>
    }
    colors?: Record<string, ObjectOrArray<CSS.Property.Color<string>>>
}

export type StyledComponentProps = {
    theme?: CustomTheme
}

export interface StyledProps {
    as?: string
}

// Contentful

export type IProjectFieldsTypes = IProjectFields & {
    coverImage: ResponsiveImage
}
