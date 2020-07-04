import React, { useContext, useEffect, useState } from "react"

import Arrow from "../../svgs/arrow"
import NavigationLink from "./NavigationLink"
import Tick from "../../svgs/tick"
import { globals } from "../../state/state"
import styled from "@emotion/styled"

const Options = styled.div`
    display: block;
    transition: opacity 0.5s ease-in-out;
    opacity: ${props => (props.visibilityStatus ? 1 : 0)};
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
    margin-top: 0.25rem;
    display: ${props => (props.activeStatus ? "inline-block" : "none")};
    vertical-align: middle;
`

const StyledArrow = styled(Arrow)`
    margin-left: 0.75rem;
    margin-top: -0.65rem;
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

    const handleClickOutside = (event: MouseEvent) => {
        setVisibility(false)
    }

    useEffect(() => {
        if (visibility) {
            document.addEventListener("click", handleClickOutside)
        } else {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [visibility])

    return (
        <>
            <NavigationLink
                role="help"
                button
                hover={() => setVisibility(true)}
            >
                <span>Choose Theme</span>
                <StyledArrow width="0.75rem" />
            </NavigationLink>
            <Options visibilityStatus={visibility}>
                {buttonThemes.map((link, i) => (
                    <NavigationLink
                        key={i}
                        button
                        click={() => setTheme(link.state)}
                    >
                        {link.name}{" "}
                        <Icon
                            height="0.75rem"
                            activeStatus={activeTheme === link.state}
                        />
                    </NavigationLink>
                ))}
            </Options>
        </>
    )
}

export default ColorPicker
