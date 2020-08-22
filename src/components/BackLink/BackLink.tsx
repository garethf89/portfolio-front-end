import Arrow from "../../svgs/arrow"
import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const BackLinkStyled = styled(Link)`
    display: block;
    color: #000;
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
            <Arrow iconSize="small" width="30px" height="30px" />
            {text}
        </BackLinkStyled>
    )
}
export default BackLink
