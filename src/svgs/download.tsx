import * as React from "react"

import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react"
import { Icon, IconPropsType } from "@components"

const SvgDownload = (props: IconProps) => {
    return (
        <ChakraIcon
            className=""
            width="32px"
            height="27px"
            viewBox="0 0 34 29"
            fill="none"
            {...props}
        >
            <path
                d="M1 17.5v10.418h31.625V17.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.646 20.354a.5.5 0 00.708 0l3.181-3.182a.5.5 0 10-.707-.707L17 19.293l-2.828-2.828a.5.5 0 10-.708.707l3.182 3.182zM17.5 1V.5h-1V1h1zm0 19V1h-1v19h1z"
                fill="currentColor"
            />
        </ChakraIcon>
    )
}

export default (props: IconPropsType): React.ReactElement =>
    Icon({ Component: SvgDownload, ...props })
