import NextImage from "next/image"
import { useState } from "react"
import { useImageSupport } from "../../contexts"
import { CustomImageAsset } from "@types"

declare type SafeNumber = number | `${number}`

declare type PlaceholderValue = "blur" | "empty"

type ImageProps = React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
> &
    React.RefAttributes<HTMLImageElement | null> & {
        image: CustomImageAsset
        alt: string
        fill?: boolean
        width?: SafeNumber | undefined
        height?: SafeNumber | undefined
        placeholder?: PlaceholderValue
    }

const Image = ({
    image,
    fill,
    alt,
    ...rest
}: ImageProps): React.ReactElement => {
    const { avif, webP } = useImageSupport()

    const [isLoading, setLoading] = useState(true)

    const src = avif ? image.avifUrl : webP ? image.webPUrl : image.url

    const willBlur = image.blurURL

    const imageProps = {
        fill: fill ?? undefined,
        width: fill ? undefined : (rest.width as SafeNumber),
        height: fill ? undefined : (rest.height as SafeNumber),
        placeholder: image.blurURL
            ? ("blur" as PlaceholderValue)
            : ("empty" as PlaceholderValue),
        blurDataURL: image.blurURL,
        style: {
            transition: "0.5s",
            height: fill ? undefined : "auto",
            inset: rest.style?.top ? rest.style?.top : undefined,
        },
    }

    return (
        <>
            {!!fill && !!willBlur && (
                <NextImage
                    alt={alt}
                    src={image.blurURL!}
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
                src={src!}
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
