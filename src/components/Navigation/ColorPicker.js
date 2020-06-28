import React, { useContext, useState } from "react"

import NavigationLink from "./NavigationLink"
import Tick from "../../svgs/tick"
import { globals } from "../../state/state"
import styled from "@emotion/styled"

const Options = styled.div`
    display: block;
    transition: opacity 0.5s ease-in-out;
    opacity: ${props => (props.visibility ? 1 : 0)};
    margin: 1rem -0.5rem 0;

    > button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        width: 100%;
        text-align: left;
        background: rgba(0, 0, 0, 0.2);
        &::after {
            display: none;
        }
    }
`

const Icon = styled(Tick)`
    height: 1rem;
    display: ${props => (props.active ? "inline-block" : "none")};
    vertical-align: middle;
`

const ColorPicker = () => {
    const { state, dispatch } = useContext(globals)

    const [visibility, setVisibility] = useState(false)

    const activeTheme = state.theme

    const buttonThemes = [
        { name: "Light", state: "light" },
        { name: "Dark", state: "dark" },
    ]

    const setTheme = theme => {
        dispatch({ type: "THEME", theme: theme })
        setVisibility(false)
    }

    return (
        <>
            <NavigationLink
                role="help"
                button
                click={() => setVisibility(!visibility)}
            >
                Choose Theme
            </NavigationLink>
            <Options visibility={visibility}>
                {buttonThemes.map((link, i) => (
                    <NavigationLink
                        key={i}
                        button
                        click={() => setTheme(link.state)}
                    >
                        {link.name} <Icon active={activeTheme === link.state} />
                    </NavigationLink>
                ))}
            </Options>
        </>
    )
}

export default ColorPicker
