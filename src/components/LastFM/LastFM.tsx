import styled from "@emotion/styled"
import * as React from "react"
import { useEffect, useState } from "react"
import { useQueryClient } from "react-query"
import { StyledProps } from "../../../@types/types"
import { BREAKPOINTS } from "../../@chakra-ui//theme"
import { useLastFm, useLastFmFunction } from "../../services/lastfm"
import LastFMLogo from "../../svgs/lastfm"
import Lines from "../Animation/Lines"
import { OuterWrapper } from "../Common/OuterWrapper"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import { AlbumType } from "./types"

const Albums = styled.div`
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2rem;
    }
`

interface AlbumProps extends StyledProps {
    last?: boolean
    bg?: string
}

const Album = styled.div<AlbumProps>`
    flex-basis: 31%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
    &:last-of-type {
        margin-bottom: 0;
    }
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        flex-wrap: nowrap;
        flex: 1;
        margin-right: 2rem;
        margin-bottom: 0;
    }
`

const AlbumInfo = styled.div`
    flex: 1;
    flex-basis: 40%;
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        flex-basis: 56%;
    }
`

const AlbumArtContainer = styled.div`
    max-width: 80px;
    height: auto;
    margin-right: 1rem;
    min-width: 80px;
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        flex: 1;
        flex-basis: 52%;
        margin-bottom: 0;
    }
`

const AlbumArtInner = styled.img`
    max-width: 100%;
    height: auto;
`

type LastFmProps = {
    initialAlbums?: AlbumType[]
}

const LastFM = ({ initialAlbums }: LastFmProps): React.ReactElement => {
    const [albums, setAlbums] = useState(initialAlbums ?? null)
    const queryClient = useQueryClient()

    const shoudFetch = !albums || albums === initialAlbums

    const { data, status } = useLastFm({
        retry: false,
        retryOnMount: false,
        refetchOnMount: false,
        enabled: shoudFetch,
    })
    const { data: functionData } = useLastFmFunction({
        enabled: status === "error" && shoudFetch,
        retry: false,
    })

    // Time limit before using the fallback
    useEffect(() => {
        const timer = setTimeout(() => {
            queryClient.cancelQueries("lastfm", { exact: true })
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (functionData) {
            setAlbums(functionData.data.album)
        }
    }, [functionData])

    useEffect(() => {
        if (data) {
            setAlbums(data)
        }
    }, [data])

    if (!albums) {
        return <></>
    }
    return (
        <OuterWrapper data-testid="lastfm-container">
            <Lines id="LFMAni" />
            <Container vPadding>
                <Heading
                    marginTop={0}
                    marginBottom="3rem"
                    level="h5"
                    override="h3"
                >
                    <LastFMLogo
                        verticalAlign="middle"
                        marginRight="1rem"
                        marginBottom="0.4rem"
                        opacity="0.5"
                        width="20px"
                    />
                    Recently played
                </Heading>
                <Albums>
                    {albums &&
                        albums.map((album, i) => (
                            <Album
                                key={i}
                                data-testid={`album-${album.name}`}
                                last={i === 2}
                            >
                                <AlbumArtContainer>
                                    <AlbumArtInner
                                        loading="lazy"
                                        alt={`${album.name} cover`}
                                        src={album.image[3].src}
                                    />
                                </AlbumArtContainer>
                                <AlbumInfo>
                                    <Heading
                                        marginTop={0}
                                        marginBottom={"1rem"}
                                        level="h6"
                                        override="p"
                                    >
                                        {album.name}
                                    </Heading>
                                    <Heading level="h6" override="p" margin={0}>
                                        {album.artist.name}
                                    </Heading>
                                </AlbumInfo>
                            </Album>
                        ))}
                </Albums>
            </Container>
        </OuterWrapper>
    )
}

export default LastFM
