import styled from "@emotion/styled"
import * as React from "react"
import { useEffect, useState } from "react"
import { httpUrlToWebSockeUrl } from "../../helpers/sockets"
import Eye from "../../svgs/eye"

const connectionString = httpUrlToWebSockeUrl(
    process.env.NEXT_PUBLIC_REACT_APP_API_URL ?? ""
)

const CounterStyled = styled.aside`
    display: block;
    width: 100%;
    text-align: right;
    color: ${props => props.theme.colors.sectionText};
`

const Counter = (): React.ReactElement => {
    const [count, setCount] = useState(1)

    const startSocket = (socket: WebSocket) => {
        socket.addEventListener("open", () => {
            socket.send("Hello Server!")
        })
        socket.addEventListener("message", event => {
            setCount(event.data)
        })
    }

    useEffect(() => {
        const socket = new WebSocket(connectionString)
        startSocket(socket)

        return function cleanup() {
            socket.close()
        }
    }, [])

    return (
        <CounterStyled>
            <span title={`${count} current visitors`}>
                <Eye
                    css={{
                        width: " 1.5rem",
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: "0.5rem",
                    }}
                />
                {count}
            </span>
        </CounterStyled>
    )
}

export default Counter
