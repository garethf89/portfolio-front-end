import { UseQueryResult, useQuery, UseQueryOptions } from "react-query"

import axios, { AxiosResponse } from "axios"
import { config } from "./headers"
import type {
    AlbumType,
    LastFMServerResponse,
    LastFMServerResponseFunction,
} from "../components/LastFM/types"

import { url, data, functionGet } from "../constants/lastfm"

type UseQueryOptionsLastFM = UseQueryOptions<
    LastFMServerResponse,
    Error,
    LastFMServerResponse
>
export const useLastFm = (
    options: UseQueryOptionsLastFM
): UseQueryResult<LastFMServerResponse> => {
    return useQuery<LastFMServerResponse, Error, LastFMServerResponse>(
        "lastfm",
        async ({ signal }) => {
            const result: AxiosResponse<LastFMServerResponse> =
                await axios.post(url, data, {
                    headers: config,
                    signal: signal,
                })
            return result.data
        },
        options
    )
}

type UseQueryOptionsLastFMFunction = UseQueryOptions<
    AlbumType[],
    Error,
    LastFMServerResponseFunction
>

export const useLastFmFunction = (
    options: UseQueryOptionsLastFMFunction
): UseQueryResult<LastFMServerResponseFunction> => {
    return useQuery<AlbumType[], Error, LastFMServerResponseFunction>(
        "lastfmFunction",
        async () => {
            const result: AxiosResponse<LastFMServerResponseFunction> =
                await axios.get(functionGet)
            return result.data.data.album
        },
        options
    )
}
