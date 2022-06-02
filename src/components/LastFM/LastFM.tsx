import styled from "@emotion/styled"
import * as React from "react"
import { useEffect, useState } from "react"
import { StyledProps } from "../../../@types/types"
import { BREAKPOINTS } from "../../@chakra-ui/gatsby-plugin/theme"
import { useLastFm, useLastFmFunction } from "../../services/lastfm"
import LastFMLogo from "../../svgs/lastfm"
import Lines from "../Animation/Lines"
import { OuterWrapper } from "../Common/OuterWrapper"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"

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

type AlbumType = {
    name: string
    artist: {
        name: string
    }
    image: { src: string }[]
}

type LastFmProps = {
    initialAlbums?: Record<string, AlbumType>[]
}

const LastFM = ({ initialAlbums }: LastFmProps): React.ReactElement => {
    const [albums, setAlbums] = useState(initialAlbums ?? null)
    // Access the client
    const { data, failureCount } = useLastFm({ retry: 0 })
    const { data: functionData, refetch } = useLastFmFunction({
        enabled: false,
        retry: 0,
    })

    useEffect(() => {
        if (failureCount === 1) {
            refetch()
        }
    }, [failureCount])

    useEffect(() => {
        if (functionData) {
            setAlbums(functionData.data.data.album)
        }
    }, [functionData])

    useEffect(() => {
        if (!data) {
            setAlbums(initialAlbums ?? null)
        } else {
            setAlbums(data.data)
        }
    }, [data])
    if (!albums) {
        return <></>
    }
    return (
        <OuterWrapper>
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
                            <Album key={i} last={i === 2}>
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
