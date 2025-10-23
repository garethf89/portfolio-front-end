import * as React from "react"

import { css, Styles } from "@styled-system/css"
import { BREAKPOINTS } from "@theme"
import styled from "@emotion/styled"
import { supportsWebP } from "../../helpers/support/webp"
import { useState } from "react"
import { CustomImageAsset } from "@types"

interface ImageSource {
    src: string
    srcWebp: string
}

export interface ResponsiveImage {
    progressive: ImageSource
    S: ImageSource
    S2X: ImageSource
    L: ImageSource
    L2X: ImageSource
    title: string
}

export interface ImageFieldsCustom {
    title: string
    image: ResponsiveImage
}

export type ContentfulImageFields = CustomImageAsset

interface ProgressiveImageProps {
    image: ResponsiveImage
    sizes?: string
    alt: string
    absolute?: boolean
    loadingImage?: boolean
    css?: Styles
}

const mainImgStyles = {
    transition: "opacity 0.25s ease-in",
    display: "block",
}

const imageCommonStyles = {
    width: "100%",
    position: "absolute",
    objectFit: "cover",
    minWidth: "100%",
    minHeight: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
}

const imageBlockStyles = { maxWidth: "100%" }

const BlurryImage = styled.img`
    width: 100%;
    position: absolute;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: ${BREAKPOINTS.md}) {
        width: auto;
    }
    filter: blur(20px);
    &[aria-hidden="true"] {
        display: none;
    }
`

const ProgressiveImage = ({
    image,
    alt,
    absolute,
    loadingImage,
    sizes = "100vw",
    css: cssProp,
}: ProgressiveImageProps): React.ReactElement => {
    const [loaded, setLoaded] = useState(false)

    const webp = supportsWebP()

    const blurrySrc = webp ? image.progressive.srcWebp : image.progressive.src
    const fallbackSrc = webp ? image.L2X.srcWebp : image.L2X.src

    const srcSet = `
      ${webp ? image.S.srcWebp : image.S.src} 800w, 
      ${webp ? image.S2X.srcWebp : image.S2X.src} 1600w, 
      ${webp ? image.L.srcWebp : image.L2X.src} 1100w, 
      ${webp ? image.L2X.srcWebp : image.L2X.src} 2200w
    `

    const conditionalStyle = absolute ? imageCommonStyles : imageBlockStyles

    const opacity = { opacity: loaded ? "1" : "0" }

    const merged = css([mainImgStyles, cssProp, conditionalStyle, opacity])

    return (
        <div>
            {loadingImage && (
                <BlurryImage alt={alt} src={blurrySrc} aria-hidden={!!loaded} />
            )}
            <img
                alt={alt}
                onLoad={() => setLoaded(true)}
                sizes={sizes}
                src={fallbackSrc}
                srcSet={srcSet}
                aria-hidden={!loaded}
                className={merged}
            />
        </div>
    )
}

export default ProgressiveImage
