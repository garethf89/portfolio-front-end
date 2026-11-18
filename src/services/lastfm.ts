import {
    UseQueryResult,
    useQuery,
    UseQueryOptions,
} from "@tanstack/react-query"

import axios, { AxiosResponse } from "axios"
import { config } from "./headers"
import type {
    AlbumType,
    LastFMServerResponse,
    LastFMServerResponseFunction,
} from "@components"

import { url, data, functionGet } from "../constants/lastfm"

type UseQueryOptionsLastFM = Omit<
    UseQueryOptions<LastFMServerResponse, Error, LastFMServerResponse>,
    "queryKey" | "queryFn"
>
export const useLastFm = (
    options: UseQueryOptionsLastFM = {}
): UseQueryResult<LastFMServerResponse> => {
    return useQuery<LastFMServerResponse, Error, LastFMServerResponse>({
        ...options,
        queryKey: ["lastfm"],
        queryFn: async ({ signal }) => {
            const result: AxiosResponse<LastFMServerResponse> =
                await axios.post(url, data, {
                    headers: config,
                    signal: signal,
                })
            return result.data
        },
    })
}

type UseQueryOptionsLastFMFunction = Omit<
    UseQueryOptions<AlbumType[], Error, LastFMServerResponseFunction>,
    "queryKey" | "queryFn"
>

export const useLastFmFunction = (
    options: UseQueryOptionsLastFMFunction = {}
): UseQueryResult<LastFMServerResponseFunction> => {
    return useQuery<AlbumType[], Error, LastFMServerResponseFunction>({
        ...options,
        queryKey: ["lastfmFunction"],
        queryFn: async () => {
            const result: AxiosResponse<LastFMServerResponseFunction> =
                await axios.get(functionGet)
            return result.data.data.album
        },
    })
}
