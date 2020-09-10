import styled from "@emotion/styled"

export const OuterWrapper = styled.div`
    position: relative;
    overflow: hidden;
    background: ${(props: StyledComponentProps) =>
        props.theme.colors.sectionBackground};
    color: ${(props: StyledComponentProps) => props.theme.colors.sectionText};
`
