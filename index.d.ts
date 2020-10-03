declare type StyledComponentProps = {
    theme?: any
    [key: string]: any
    [x: string]: any
}

type NotFunction<T> = T extends Function ? never : T

declare module "*.css"
