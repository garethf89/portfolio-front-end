import Arrow from "../../svgs/arrow"
import FadeLink from "../Link/Link"
import React from "react"
import { StyledComponentProps } from "../../../@types/types"
import styled from "@emotion/styled"

const BackLinkStyled = styled(FadeLink)`
    display: block;
    color: ${(props: StyledComponentProps) => props.theme.colors.text};
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
`

interface BackLinkProps {
    text?: string
}

const BackLink: React.FC<BackLinkProps> = ({
    text = "Back",
}): React.ReactElement => {
    return (
        <BackLinkStyled to="/">
            <Arrow iconSize="xs" />
            {text}
        </BackLinkStyled>
    )
}
export default BackLink
