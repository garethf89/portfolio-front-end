declare type StyledComponentProps = {
    theme?: any
    [key: string]: any
    [x: string]: any
}

type NotFunction<T> = T extends Function ? never : T

declare module "*.css"

// Contentful Fixes as it is currently lacking in TS

interface ExpandedAssetType extends Asset {
    svg: {
        content: string
    }
}
interface ISkillFieldsType extends ISkillFields {
    /** Name */
    name?: string | undefined

    /** Icon */
    icon?: ExpandedAssetType
}
