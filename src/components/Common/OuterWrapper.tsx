import styled from "@emotion/styled"

export const OuterWrapper = styled.div`
    position: relative;
    overflow: hidden;
    background: ${props => props.theme.colors.sectionBackground};
    color: ${props => props.theme.colors.sectionText};
`
