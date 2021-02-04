import { useState } from "react";
import * as React from "react";
import { SerializedStyles, css } from "@emotion/react"

import { BREAKPOINTS } from "../../gatsby-plugin-theme-ui"
import { Entry } from "contentful"
import styled from "@emotion/styled"
import { supportsWebP } from "../../helpers/support/webp"

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

export type ContentfulImageFields = Entry<ImageFieldsCustom>

interface ProgressiveImageProps {
    image: ResponsiveImage
    sizes?: string
    alt: string
    absolute?: boolean
    loadingImage?: boolean
    styles?: (props) => SerializedStyles
}

const ImageCommon = () => css`
    width: 100%;
    position: absolute;
    object-fit: fill;
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        width: auto;
    }
`
const ImageBlock = () => css`
    max-width: 100%;
`

interface ImgProps extends React.ComponentProps<"img"> {
    loaded?: boolean
    absolute?: boolean
    styles?: (props) => SerializedStyles
}

const MainImage = styled.img<ImgProps>`
    ${(props: ImgProps) => props.styles}
    ${(props: ImgProps) => (props.absolute ? ImageCommon : ImageBlock)}
    opacity: ${(props: ImgProps) => (props.loaded ? 1 : 0)};
    transition: opacity 0.25s ease-in;
    display: block;
`

const BlurryImage = styled.img`
    ${ImageCommon}
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
    styles,
}: ProgressiveImageProps): React.ReactElement => {
    const [loaded, setLoaded] = useState(null)

    const webp = supportsWebP()

    const blurrySrc = webp ? image.progressive.srcWebp : image.progressive.src
    const fallbackSrc = webp ? image.L2X.srcWebp : image.L2X.src

    const srcSet = `
      ${webp ? image.S.srcWebp : image.S.src} 800w, 
      ${webp ? image.S2X.srcWebp : image.S2X.src} 1600w, 
      ${webp ? image.L.srcWebp : image.L2X.src} 1100w, 
      ${webp ? image.L2X.srcWebp : image.L2X.src} 2200w
    `
    return (
        <div>
            {loadingImage && (
                <BlurryImage alt={alt} src={blurrySrc} aria-hidden={loaded} />
            )}
            <MainImage
                alt={alt}
                onLoad={() => setLoaded(true)}
                loaded={loaded}
                sizes={sizes}
                src={fallbackSrc}
                srcSet={srcSet}
                aria-hidden={!loaded}
                absolute={absolute}
                styles={styles}
            />
        </div>
    )
}

export default ProgressiveImage
