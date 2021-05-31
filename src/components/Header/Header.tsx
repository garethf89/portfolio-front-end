import * as React from "react"

import Flex from "../Global/Container/Flex"
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import styled from "@emotion/styled"
import { useTheme } from "@chakra-ui/react"

const HeaderStyles = styled.header`
    font-size: 2rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 2;
    padding: 3rem 0;
`

interface HeaderProps {
    siteTitle: string
    nav?: boolean
}

const Header = ({ nav, siteTitle }: HeaderProps): React.ReactElement => {
    const theme = useTheme()
    return (
        <HeaderStyles>
            <Flex
                justifyContent="space-between"
                flexDirection="row"
                maxW={`calc(${theme.sizes.container.xl} + 9rem)`}
            >
                <Logo siteTitle={siteTitle} />
                {nav && <Navigation />}
            </Flex>
        </HeaderStyles>
    )
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
