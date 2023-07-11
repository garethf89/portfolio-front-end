"use client"

import React, { useState, createContext, useContext, useEffect } from "react"

type ImageSupportType = {
    avif: boolean
    webP: boolean
}

type ImageSupportTypeProps = {
    children: React.ReactNode
    value?: ImageSupportType
}

const DEFAULT_VALUES = { avif: false, webP: true }

export const ImageSupportContext = createContext(DEFAULT_VALUES)

const AVIF_SRC =
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="

const WEBP_SRC =
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="

export const ImageSupportProvider = ({
    children,
    value = DEFAULT_VALUES,
}: ImageSupportTypeProps) => {
    const [avif, setAvif] = useState(value.avif)
    const [webP, setWebP] = useState(value.webP)

    useEffect(() => {
        const AVIF_TEST_IMG = new Image()
        AVIF_TEST_IMG.src = AVIF_SRC
        AVIF_TEST_IMG.onload = () => setAvif(true)
        AVIF_TEST_IMG.onerror = () => setAvif(false)

        const WEBP_TEST_IMG = new Image()
        WEBP_TEST_IMG.src = WEBP_SRC
        WEBP_TEST_IMG.onload = () => setWebP(true)
        WEBP_TEST_IMG.onerror = () => setWebP(false)
    }, [])

    return (
        <ImageSupportContext.Provider value={{ avif, webP }}>
            {children}
        </ImageSupportContext.Provider>
    )
}

export const useImageSupport = () => {
    const { webP, avif } = useContext(ImageSupportContext)
    return {
        webP,
        avif,
    }
}
