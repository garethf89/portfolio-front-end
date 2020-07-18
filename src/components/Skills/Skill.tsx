import Heading from "../Typography/Heading"
import Icon from "../Icons/Icon"
import React from "react"
import SVG from "react-inlinesvg"
import styled from "@emotion/styled"

const SkillContainer = styled.li`
    width: 33.33%;
    word-break: break-word;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 0;
    margin-bottom: 2rem;
    &:nth-child(n + 7) {
        margin-bottom: 0;
    }
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.small}) {
        width: 16.6%;
    }
`

const SkillText = styled(Heading)`
    font-weight: 200;
    font-size: 18px;
    flex: 0;
`

const SkillImage = styled(SVG)`
    margin: 0 auto;
    width: auto;
    max-width: 100%;
    padding: 0 30px;
    flex: 1 1 auto;
`

interface SkillProps {
    children: React.ReactNode
    icon: string
}

const Skill = ({ children, icon }: SkillProps): React.ReactElement<any> => (
    <SkillContainer>
        <Icon size="medium">
            <SkillImage src={icon} />
        </Icon>
        <SkillText level="h4">{children}</SkillText>
    </SkillContainer>
)

export default Skill
