type AlbumImageFormatted = { size: string; src: string }
export type AlbumServerFormatted = {
    name: string
    url: string
    image: AlbumImageFormatted[]
    artist: { url: string; name: string }
}

export type AlbumType = {
    name: string
    url?: string
    image: { src: string }[]
    artist: { url: string; name?: string }
}

export type LastFMServerResponse = AlbumType[]

export type LastFMServerResponseFunction = {
    data: {
        album: AlbumType[]
    }
}
