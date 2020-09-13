import FadeLink from "../Link/Link"
import { StyledComponentProps } from "../../../@types/types"
import styled from "@emotion/styled"

const ReadMore = styled(FadeLink)`
    font-weight: 400;
    display: inline;
    position: relative;
    overflow: visible;
    color: ${(props: StyledComponentProps) => props.theme.colors.sectionText};
    &:active,
    &:visited {
        color: ${(props: StyledComponentProps) =>
            props.theme.colors.sectionText};
    }
`

export default ReadMore
