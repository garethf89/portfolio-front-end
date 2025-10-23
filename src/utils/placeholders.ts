import { getPlaiceholder, IGetPlaiceholderReturn } from "plaiceholder"

export const generatePlaceholders = async (
    image: string
): Promise<IGetPlaiceholderReturn> => {
    const placeholder = await getPlaiceholder(image, { size: 8 })
    return placeholder
}

export const addPlaceholder = async <T>(
    data: T[],
    path: string
): Promise<T[]> => {
    const modifiedData = await Promise.all(
        data.map(async item => {
            // Add validation here
            const imageUrl = item[path]?.url

            if (!imageUrl) {
                console.warn(`Missing image URL at path: ${path}`, item)
                return item // Return item without placeholder
            }

            try {
                const response = await generatePlaceholders(imageUrl)
                return {
                    ...item,
                    [path]: { ...item[path], blurURL: response.base64 },
                }
            } catch (error) {
                console.error(
                    `Failed to generate placeholder for: ${imageUrl}`,
                    error
                )
                return item
            }
        })
    )
    return modifiedData
}

export const addPlaceholderSingle = async <T>(
    data: T,
    path: string
): Promise<T> => {
    const imageUrl = data[path]?.url

    if (!imageUrl) {
        console.warn(`Missing image URL at path: ${path}`, data)
        return data
    }

    try {
        const response = await generatePlaceholders(imageUrl)
        return {
            ...data,
            [path]: { ...data[path], blurURL: response.base64 },
        }
    } catch (error) {
        console.error(`Failed to generate placeholder for: ${imageUrl}`, error)
        return data
    }
}
