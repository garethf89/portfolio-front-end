import axios from "axios"
import { config } from "./headers"

// eslint-disable-next-line
const url = require("../constants/lastfm").url

// eslint-disable-next-line
const data = require("../constants/lastfm").data

export const lastFmService = async () => {
    try {
        const res = await axios({
            method: "post",
            headers: config,
            url: url,
            data: data,
        })
        return res.data
    } catch (error) {
        throw error
    }
}
