import { Asset } from "contentful"
import NextImage from "next/image"
import { useState } from "react"
import { useImageSupport } from "../../contexts"

type CustomImageAsset = Asset & {
    avifUrl?: string
    webPUrl?: string
    url: string
    blurURL?: string
}

declare type SafeNumber = number | `${number}`

type ImageProps = React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
> & {
    image: CustomImageAsset
    alt: string
    fill?: boolean
    width?: SafeNumber | undefined
    height?: SafeNumber | undefined
}

const Image = ({
    image,
    fill,
    alt,
    ...rest
}: ImageProps): React.ReactElement => {
    const { avif, webP } = useImageSupport()

    const [isLoading, setLoading] = useState(true)

    let src = image.url

    if (webP && image.webPUrl) {
        src = image.webPUrl
    }

    if (avif && image.avifUrl) {
        src = image.avifUrl
    }

    const willBlur = image.blurURL

    const imageProps = {
        fill: fill ?? undefined,
        width: fill ? undefined : (rest.width as SafeNumber),
        height: fill ? undefined : (rest.height as SafeNumber),
        placeholder: image.blurURL ? "blur" : "empty",
        blurDataURL: image.blurURL,
        style: {
            transition: "0.5s",
            height: fill ? undefined : "auto",
            inset: rest.style?.top ? rest.style?.top : undefined,
        },
    }

    return (
        <>
            {fill && willBlur && (
                <NextImage
                    alt={alt}
                    src={image.blurURL as string}
                    fill={fill}
                    aria-hidden="true"
                    {...imageProps}
                    {...rest}
                    style={{
                        opacity: isLoading ? 1 : 0,
                        ...imageProps.style,
                        ...rest.style,
                    }}
                />
            )}
            <NextImage
                alt={alt}
                src={src as string}
                fill={fill}
                onLoadingComplete={() => setLoading(false)}
                {...imageProps}
                {...rest}
                style={{
                    opacity: isLoading && willBlur ? 0 : 1,
                    ...imageProps.style,
                    ...rest.style,
                }}
            />
        </>
    )
}

export default Image
