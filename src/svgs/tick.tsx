import * as React from "react"

import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react"
import { Icon, IconPropsType } from "@components"

const Tick = (props: IconProps): React.ReactElement => {
    return (
        <ChakraIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"
            ></path>
        </ChakraIcon>
    )
}

export default (props: IconPropsType): React.ReactElement =>
    Icon({ Component: Tick, ...props })
