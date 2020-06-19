import { GlobalsStateProvider } from "./src/state/state"
import React from "react"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
    return <GlobalsStateProvider>{element}</GlobalsStateProvider>
}
