import axios, { AxiosError, AxiosResponse } from "axios"
import { useCallback, useState } from "react"

const url = `/.netlify/functions/email`

type EmailFormData = {
    personEnq: string
    personEmail: string
    personName: string
}

type HookResult = {
    status?: EmailStatus
    error: AxiosError | null
    submit: (data: EmailFormData) => Promise<void>
    result: AxiosResponse | null
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

type EmailStatus = "pending" | "error" | "success"

export const useEmail = (): HookResult => {
    const [status, setStatus] = useState<EmailStatus>()
    const [result, setResult] = useState<AxiosResponse | null>(null)
    const [error, setError] = useState<AxiosError | null>(null)

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
