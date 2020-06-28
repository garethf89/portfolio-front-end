import React, { createContext, useReducer } from "react"

const initialStateGlobals = { theme: "light" }

export const globals = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "THEME":
            return { ...state, theme: action.theme }
        default:
            return {}
    }
}

export const GlobalsStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStateGlobals)
    return (
        <globals.Provider value={{ state, dispatch }}>
            {children}
        </globals.Provider>
    )
}
