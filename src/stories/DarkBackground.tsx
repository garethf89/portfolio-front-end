import styled from "@emotion/styled"
import theme from "../gatsby-plugin-theme-ui/index"
export const DarkBackground = styled.div`
    padding: 2rem;
    color: ${props => theme.colors.sectionText};
    background: ${props => theme.colors.sectionBackground};
`
