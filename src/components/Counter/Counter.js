import * as io from "socket.io-client"

import React, { useEffect, useState } from "react"

import Eye from "../../svgs/eye"
import styled from "@emotion/styled"

const connectionString = process.env.REACT_APP_API_URL

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

const Counter = () => {
    const [count, setCount] = useState(1)
    const [init, setInit] = useState(false)

    const startSocket = s => {
        s.on("connect", () => {
            s.on("count", msg => {
                setCount(msg.count)
            })
        })
    }

    useEffect(() => {
        const socket = io.connect(connectionString)

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
