import styled from "@emotion/styled"
import theme from "../gatsby-plugin-theme-ui/index"
export const LightContainer = styled.div`
    padding: 2rem;
    color: ${props => theme.colors.text};
    background: ${props => theme.colors.background};
`
