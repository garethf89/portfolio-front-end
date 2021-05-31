import { UseQueryResult, useQuery } from "react-query"

import axios from "axios"
import { config } from "./headers"

// eslint-disable-next-line
const url = require("../constants/lastfm").url

// eslint-disable-next-line
const data = require("../constants/lastfm").data

export const useLastFm = (): UseQueryResult => {
    return useQuery("lastfm", async () => {
        const result = await axios({
            method: "post",
            headers: config,
            url: url,
            data: data,
        })
        return result
    })
}
