import * as React from "react"

import { Box, useStyleConfig } from "@chakra-ui/react"

import Arrow from "../../svgs/arrow"
import FadeLink from "../Link/Link"
import styled from "@emotion/styled"

const BackLinkStyled = styled(FadeLink)`
    display: block;
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
`

const BackLinkStyledSpan = styled(Box)``

interface BackLinkProps {
    text?: string
}

const BackLink: React.FC<BackLinkProps> = ({
    text = "Back",
}): React.ReactElement => {
    const styles = useStyleConfig("ColorText")

    return (
        <BackLinkStyledSpan sx={styles} to="/">
            <BackLinkStyled to="/">
                <Arrow boxSize={8} />
                {text}
            </BackLinkStyled>
        </BackLinkStyledSpan>
    )
}
export default BackLink
