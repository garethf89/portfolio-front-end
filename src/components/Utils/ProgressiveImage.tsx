import React, { useState } from "react"

import { StyledComponentProps } from "../../../@types/types"
import { css } from "@emotion/core"
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
}

interface ProgressiveImageProps {
    image: ResponsiveImage
    sizes?: string
    alt: string
    absolute?: boolean
    loadingImage?: boolean
}

const ImageCommon = props => css`
    width: 100%;
    position: absolute;
    object-fit: fill;
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: ${props.theme.breakpoint.medium}) {
        width: auto;
    }
`

interface ImgProps extends StyledComponentProps {
    loaded?: boolean
    absolute?: boolean
}

const MainImage = styled.img<ImgProps>`
    ${(props: ImgProps) => (props.absolute ? ImageCommon : "")}
    opacity: ${(props: ImgProps) => (props.loaded ? 1 : 0)};
    transition: opacity 0.25s ease-in;
`

const BlurryImage = styled.img`
    ${ImageCommon}
    filter: blur(20px);
`

const ProgressiveImage = ({
    image,
    alt,
    absolute,
    loadingImage,
    sizes = "100vw",
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
            />
        </div>
    )
}

export default ProgressiveImage
