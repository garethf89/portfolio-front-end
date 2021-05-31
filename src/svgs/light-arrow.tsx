import * as React from "react"

import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react"
import Icon, { IconPropsType } from "../components/Icons/Icon"

const ArrowLight = (props: IconProps) => {
    return (
        <ChakraIcon
            viewBox="0 0 21 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height="9px"
            width="21px"
            {...props}
        >
            <path
                d="M20.3536 4.85355C20.5488 4.65829 20.5488 4.34171 20.3536 4.14645L17.1716 0.964466C16.9763 0.769204 16.6597 0.769204 16.4645 0.964466C16.2692 1.15973 16.2692 1.47631 16.4645 1.67157L19.2929 4.5L16.4645 7.32843C16.2692 7.52369 16.2692 7.84027 16.4645 8.03553C16.6597 8.2308 16.9763 8.2308 17.1716 8.03553L20.3536 4.85355ZM1 4H0.5V5H1V4ZM20 4H1V5H20V4Z"
                fill="currentColor"
            />
        </ChakraIcon>
    )
}

export default (props: IconPropsType): React.ReactElement =>
    Icon({ Component: ArrowLight, ...props })
