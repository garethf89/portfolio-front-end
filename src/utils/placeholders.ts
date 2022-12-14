import { getPlaiceholder, IGetPlaiceholderReturn } from "plaiceholder"

export const generatePlaceholders = async (
    image: string
): Promise<IGetPlaiceholderReturn> => {
    const placeholder = await getPlaiceholder(image, { size: 8 })
    return placeholder
}

export const addPlaceholder = async <T>(
    data: any[],
    path: string
): Promise<T> => {
    const modifiedData = await Promise.all(
        data.map(async item => {
            const response = await generatePlaceholders(item[path].url)
            return {
                ...item,
                [path]: { ...item[path], blurURL: response.base64 },
            }
        })
    )
    return modifiedData
}

export const addPlaceholderSingle = async <T>(
    data: any,
    path: string
): Promise<T> => {
    const response = await generatePlaceholders(data[path].url)
    return {
        ...data,
        [path]: { ...data[path], blurURL: response.base64 },
    }
}
