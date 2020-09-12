import React, { createContext, useReducer } from "react"

export const initialStateGlobals = { theme: "light", logo: "light" }

export const globals = createContext<any>(initialStateGlobals)

type Action = {
    type: string;
    theme?: string;
    logo?: string;
}

const reducer = (state: any, action: Action) => {
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
    children?: React.ReactNode;
}

export const GlobalsStateProvider = ({ children }: StateProps) => {
    const [state, dispatch] = useReducer(reducer, initialStateGlobals)
    return (
        <globals.Provider value={{ state, dispatch }}>
            {children}
        </globals.Provider>
    )
}
