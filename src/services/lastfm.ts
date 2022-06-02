import { UseQueryResult, useQuery } from "react-query"

import axios from "axios"
import { config } from "./headers"

// eslint-disable-next-line
const url = require("../constants/lastfm").url

// eslint-disable-next-line
const data = require("../constants/lastfm").data

// eslint-disable-next-line
const urlGet = require("../constants/lastfm").functionGet

export const useLastFm = (options): UseQueryResult => {
    return useQuery(
        "lastfm",
        async () => {
            const result = await axios({
                method: "post",
                headers: config,
                url: url,
                data: data,
            })
            return result
        },
        options
    )
}

export const useLastFmFunction = (options): UseQueryResult => {
    return useQuery(
        "lastfmFunction",
        async () => {
            const result = await axios.get(urlGet)

            return result
        },
        options
    )
}
