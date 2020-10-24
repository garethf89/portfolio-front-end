import { ISkill, ISkillFields } from "../../../@types/generated/contentful"

import Heading from "../Typography/Heading"
import React from "react"
import Skill from "../Skills/Skill"
import styled from "@emotion/styled"
import { useThemeUI } from "theme-ui"

interface PageSkillProps {
    skills: ISkill[]
}

const PageSkillContainer = styled.div``

const SkillContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const PageSkills = ({ skills }: PageSkillProps): React.ReactElement => {
    const context = useThemeUI()
    const { theme } = context
    return (
        <PageSkillContainer>
            <Heading
                level="h3"
                fontWeight={700}
                marginBottom={theme.space.common[3]}
            >
                Technology Used
            </Heading>
            <SkillContainer>
                {(skills as ISkillFields[]).map((skill, i) => (
                    <Skill
                        key={i}
                        id={`skill${i}`}
                        icon={skill.icon.svg.content}
                        title={skill.name}
                    >
                        {skill.name}
                    </Skill>
                ))}
            </SkillContainer>
        </PageSkillContainer>
    )
}

export default PageSkills
