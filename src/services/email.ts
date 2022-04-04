import axios, { AxiosError, AxiosResponse } from "axios"
import { useCallback, useState } from "react"

import type { Response } from "express"

const url = `${process.env.GATSBY_REACT_APP_API_URL}/formEmail`

type EmailFormData = {
    personEnq: string
    personEmail: string
    personName: string
}

type HookResult = {
    status: string
    error: AxiosError
    submit: (data: EmailFormData) => Promise<void>
    result: Response
}

export const submitEmail = async (
    data: EmailFormData
): Promise<AxiosResponse> => {
    const res = await axios({
        method: "post",
        url: url,
        data: data,
    })
    return res
}

export const useEmail = (): HookResult => {
    const [status, setStatus] = useState(null)
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)

    const submit = useCallback(
        (data: EmailFormData) => {
            setStatus("pending")
            setResult(null)
            setError(null)

            return submitEmail(data)
                .then(response => {
                    setResult(response)
                    setStatus("success")
                })
                .catch(err => {
                    setError(err)
                    setStatus("error")
                })
        },
        [submitEmail]
    )

    return { submit, status, result, error }
}
