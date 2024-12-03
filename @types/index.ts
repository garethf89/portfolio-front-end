import { Asset } from "@schema"

export * from "./globals"

export type CustomImageAsset = Asset & {
    avifUrl?: string
    webPUrl?: string
    blurURL?: string
}
