import React, { Dispatch, createContext, useReducer } from "react"

type InitalStateTypes = {
    theme: string
    logo: string
}

export const initialStateGlobals = { theme: "light", logo: "light" }

export const globals = createContext<{
    state: InitalStateTypes
    dispatch: Dispatch<Action>
}>({ state: initialStateGlobals, dispatch: () => ({}) })

type Action = {
    type: string
    theme?: string
    logo?: string
}

const reducer = (state: InitalStateTypes, action: Action) => {
    switch (action.type) {
        case "THEME":
            return { ...state, theme: action.theme }
        case "LOGO":
            return { ...state, logo: action.logo }
        default:
            return {}
    }
}

interface StateProps {
    children?: React.ReactNode
}

export const GlobalsStateProvider = ({
    children,
}: StateProps): React.ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialStateGlobals)
    const value = { state: state as InitalStateTypes, dispatch }
    return <globals.Provider value={value}>{children}</globals.Provider>
}
