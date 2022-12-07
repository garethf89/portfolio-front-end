import { Asset } from "contentful"
import NextImage from "next/image"

import * as React from "react"
import { useImageSupport } from "../../contexts"

type CustomImageAsset = Asset & {
    avifUrl?: string
    webPUrl?: string
    url: string
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

const Image = ({ image, fill, ...rest }: ImageProps): React.ReactElement => {
    const { avif, webP } = useImageSupport()

    let src = image.url

    if (webP && image.webPUrl) {
        src = image.webPUrl
    }

    if (avif && image.avifUrl) {
        src = image.avifUrl
    }

    const imageProps = {
        fill: fill ?? undefined,
        width: fill ? undefined : (rest.width as SafeNumber),
        height: fill ? undefined : (rest.height as SafeNumber),
    }

    return (
        <NextImage
            alt="Gareth Ferguson face"
            src={src as string}
            fill={fill}
            // placeholder="blur"
            // style={{ objectFit: "cover" }}
            {...imageProps}
            {...rest}
        />
    )
    // return <GatsbyImage image={imageSrc} {...rest} />
}

export default Image
