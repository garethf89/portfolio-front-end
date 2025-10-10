import * as React from "react"
import { css } from "@styled-system/css"
import Flex from "../Global/Container/Flex"
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"

const headerStyles = css({
    fontSize: "2rem",
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    zIndex: "2",
    paddingY: "12",
    paddingX: "0",
})

interface HeaderProps {
    siteTitle: string
    nav?: boolean
}

const Header = ({ nav, siteTitle = `` }: HeaderProps): React.ReactElement => {
    return (
        <header className={headerStyles}>
            <Flex
                css={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: { base: "row" },
                    maxWidth: "calc(var(--sizes-container-xl) + 9rem)",
                }}
            >
                <Logo siteTitle={siteTitle} />
                {nav && <Navigation />}
            </Flex>
        </header>
    )
}

export default Header
