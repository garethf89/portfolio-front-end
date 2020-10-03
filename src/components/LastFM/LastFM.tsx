import React, { useEffect, useState } from "react"

import { BREAKPOINTS } from "../../gatsby-plugin-theme-ui"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import LastFMLogo from "../../svgs/lastfm"
import Lines from "../Animation/Lines"
import { OuterWrapper } from "../Common/OuterWrapper"
import { StyledProps } from "../../../@types/types"
import { lastFmService } from "../../services/lastfm"
import styled from "@emotion/styled"

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
    @media (min-width: ${BREAKPOINTS.SMALL}) {
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
    max-width: 100px;
    height: auto;
    margin-right: 1rem;
    min-width: 80px;
    margin-bottom: 1rem;
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

const LastFM = (): React.ReactElement => {
    const [albums, setAlbums] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const lfm = await lastFmService()
            setAlbums(lfm)
        }
        fetchData()
    }, [])
    if (!albums) {
        return <></>
    }
    return (
        <OuterWrapper>
            <Lines id="LFMAni" />
            <Container vPadding>
                <Heading marginTop={0} marginBottom="3rem" level="h2">
                    <LastFMLogo
                        verticalAlign="middle"
                        marginRight="1rem"
                        marginBottom="0.4rem"
                        opacity="0.5"
                        width="60px"
                    />
                    Recently played
                </Heading>
                <Albums>
                    {albums &&
                        albums.map((album, i) => (
                            <Album key={i} last={i === 2}>
                                <AlbumArtContainer>
                                    <AlbumArtInner
                                        alt={`${album.name} cover`}
                                        src={album.image[3]["#text"]}
                                    />
                                </AlbumArtContainer>
                                <AlbumInfo>
                                    <Heading
                                        marginTop={0}
                                        marginBottom={"1rem"}
                                        level="h5"
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
