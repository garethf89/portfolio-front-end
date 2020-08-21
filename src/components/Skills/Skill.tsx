import Heading from "../Typography/Heading"
import IconExternal from "../Icons/IconExternal"
import React from "react"
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

    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.small}) {
        width: 16.6%;
        &:nth-of-type(n + 7) {
            margin-bottom: 0;
        }
    }
`

const SkillText = styled(Heading)`
    font-weight: 200;
    font-size: 18px;
    flex: 0;
`

interface SkillProps {
    children: React.ReactNode
    icon: string
}

const Skill = ({ children, icon }: SkillProps): React.ReactElement<any> => (
    <SkillContainer>
        <IconExternal iconSize="medium" margin="0 auto" iconSvg={icon} />
        <SkillText level="h4">{children}</SkillText>
    </SkillContainer>
)

export default Skill
