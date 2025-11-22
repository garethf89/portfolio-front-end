import * as React from "react"
import { useEffect, useState } from "react"
import { useQueryClient } from "react-query"
import LastFMLogo from "../../svgs/lastfm"
import Lines from "../Animation/Lines"
import { OuterWrapper } from "../Common/OuterWrapper"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import { AlbumType } from "./types"
import { css, cva } from "@styled-system/css"

const albumsStyles = css({
    display: "block",
    md: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "2rem",
    },
})

const albumStyles = cva({
    base: {
        flexBasis: "31%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: "2rem",
        "&:last-of-type": {
            marginBottom: 0,
        },
    },
    variants: {
        size: {
            default: {
                md: {
                    flexWrap: "nowrap",
                    flex: 1,
                    marginRight: "2rem",
                    marginBottom: 0,
                },
            },
        },
    },
    defaultVariants: {
        size: "default",
    },
})

const albumInfoStyles = css({
    flex: 1,
    flexBasis: "40%",
    sm: {
        flexBasis: "56%",
    },
})

const albumArtContainerStyles = css({
    maxWidth: "80px",
    height: "auto",
    marginRight: "1rem",
    minWidth: "80px",
    md: {
        flex: 1,
        flexBasis: "52%",
        marginBottom: 0,
    },
})

const albumArtInnerStyles = css({
    maxWidth: "100%",
    height: "auto",
})

type LastFmProps = {
    initialAlbums?: AlbumType[]
}

const LastFM = ({ initialAlbums }: LastFmProps): React.ReactElement => {
    const [albums, _setAlbums] = useState(initialAlbums ?? null)
    const queryClient = useQueryClient()

    // Time limit before using the fallback
    useEffect(() => {
        const timer = setTimeout(() => {
            queryClient.cancelQueries("lastfm", { exact: true })
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    if (!albums) {
        return <></>
    }
    return (
        <OuterWrapper data-testid="lastfm-container">
            <Lines id="LFMAni" />
            <Container vPadding>
                <Heading
                    css={{
                        marginTop: 0,
                        display: "flex",
                        marginBottom: "12",
                    }}
                    level="h5"
                    override="h3"
                >
                    <LastFMLogo
                        css={{
                            verticalAlign: "middle",
                            marginRight: "1rem",
                            marginBottom: "0.4rem",
                            opacity: "0.5",
                            height: 8,
                            width: 8,
                        }}
                    />
                    Recently played
                </Heading>
                <div className={albumsStyles}>
                    {albums &&
                        albums.map((album, i) => (
                            <div
                                key={i}
                                data-testid={`album-${album.name}`}
                                className={albumStyles()}
                            >
                                <div className={albumArtContainerStyles}>
                                    <img
                                        className={albumArtInnerStyles}
                                        loading="lazy"
                                        alt={`${album.name} cover`}
                                        src={
                                            album.image[3].src ??
                                            album.image[3]["#text"]
                                        }
                                    />
                                </div>
                                <div className={albumInfoStyles}>
                                    <Heading
                                        css={{
                                            marginTop: 0,
                                            marginBottom: 4,
                                        }}
                                        level="h6"
                                        override="p"
                                    >
                                        {album.name}
                                    </Heading>
                                    <Heading
                                        level="h6"
                                        override="p"
                                        css={{
                                            margin: 0,
                                        }}
                                    >
                                        {album.artist.name}
                                    </Heading>
                                </div>
                            </div>
                        ))}
                </div>
            </Container>
        </OuterWrapper>
    )
}

export default LastFM
