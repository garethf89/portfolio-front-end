import React, { createContext, useReducer } from "react"

const initialStateGlobals = {}

export const globals = createContext()

const reducer = (state, action) => {
    switch (action.type) {
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
