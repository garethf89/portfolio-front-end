import axios from "axios"

const url = `${process.env.GATSBY_REACT_APP_API_URL}/lastFm`
const data = { name: "DirtyG" }

export const lastFmService = async () => {
    try {
        const res = await axios({
            method: "post",
            url: url,
            data: data,
        })
        return res.data.data.album
    } catch (error) {
        throw error
    }
}
