import { ResponsiveImage } from "../src/components/Utils/ProgressiveImage"
import { IProjectFields } from "./generated/contentful"

export type StyledComponentProps = {
    theme: any
}

export interface StyledProps {
    as?: string
}

// Contentful

export type IProjectFieldsTypes = IProjectFields & {
    coverImage: ResponsiveImage
}
