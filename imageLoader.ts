import { ImageLoaderProps } from "next/image"

export default function contentfulLoader({ src }: ImageLoaderProps): string {
    const [baseUrl, existingParams] = src.split("?")
    const params = new URLSearchParams(existingParams)

    params.set("fit", "pad")

    return `${baseUrl}?${params.toString()}`
}
