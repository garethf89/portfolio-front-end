import axios from "axios"

const url = `${process.env.REACT_APP_API_URL}/formEmail`

export const submitEmail = async data => {
    try {
        const res = await axios({
            method: "post",
            url: url,
            data: data,
        })
        return res
    } catch (error) {
        throw error
    }
}
