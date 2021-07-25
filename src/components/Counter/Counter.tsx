import * as React from "react"

import { useEffect, useState } from "react"

import Eye from "../../svgs/eye"
import styled from "@emotion/styled"

type SocketIORes = {
    count: number
}

const connectionString = process.env.GATSBY_REACT_APP_API_URL

const CounterStyled = styled.aside`
    display: block;
    width: 100%;
    text-align: right;
    color: ${props => props.theme.colors.sectionText};
`

const CounterIcon = styled(Eye)`
    width: 1.5rem;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5rem;
`

const Counter = (): React.ReactElement => {
    const [count, setCount] = useState(1)

    const startSocket = (socket: WebSocket) => {
        socket.addEventListener('open', function (event) {
          socket.send('Hello Server!');
        });
        socket.addEventListener('message', function (event) {
          setCount(event.data)
        });
    }

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8081');
        startSocket(socket)
    }, [])

    return (
        <CounterStyled>
            <span title={`${count} current visitors`}>
                <CounterIcon />
                {count}
            </span>
        </CounterStyled>
    )
}

export default Counter
