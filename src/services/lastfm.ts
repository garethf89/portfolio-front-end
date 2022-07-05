import { UseQueryResult, useQuery, UseQueryOptions } from "react-query"

import axios, { AxiosResponse } from "axios"
import { config } from "./headers"
import type {
    LastFMServerResponse,
    LastFMServerResponseFunction,
} from "../components/LastFM/types"

// eslint-disable-next-line
const url = require("../constants/lastfm").url

// eslint-disable-next-line
const data = require("../constants/lastfm").data

// eslint-disable-next-line
const urlGet = require("../constants/lastfm").functionGet

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
    LastFMServerResponseFunction,
    Error,
    LastFMServerResponseFunction
>

export const useLastFmFunction = (
    options: UseQueryOptionsLastFMFunction
): UseQueryResult<LastFMServerResponseFunction> => {
    return useQuery<
        LastFMServerResponseFunction,
        Error,
        LastFMServerResponseFunction
    >(
        "lastfmFunction",
        async () => {
            const result: AxiosResponse<LastFMServerResponseFunction> =
                await axios.get(urlGet)
            return result.data
        },
        options
    )
}
