import { GlobalsStateProvider } from "./src/state/state"
import * as React from "react";

type WrapTypes = {
    element: React.ReactNode
}

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }: WrapTypes): React.ReactElement => {
    return <GlobalsStateProvider>{element}</GlobalsStateProvider>
}
