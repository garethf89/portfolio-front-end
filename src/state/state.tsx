import React, { createContext, useReducer } from "react"

const initialStateGlobals = { theme: "light" }

export const globals = createContext<any>(initialStateGlobals)

type Action = {
    type: string
    theme?: string
}

const reducer = (state: any, action: Action) => {
    switch (action.type) {
        case "THEME":
            return { ...state, theme: action.theme }
        default:
            return {}
    }
}

interface StateProps {
    children?: React.ReactNode
}

export const GlobalsStateProvider = ({ children }: StateProps) => {
    const [state, dispatch] = useReducer(reducer, initialStateGlobals)
    return (
        <globals.Provider value={{ state, dispatch }}>
            {children}
        </globals.Provider>
    )
}
