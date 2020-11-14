import Heading from "../Typography/Heading"
import { ISkill } from "../../../@types/generated/contentful"
import { ISkillFieldsCustom } from "../../../@types/types"
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
    flex-wrap: wrap;
    justify-content: start;
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
                {skills &&
                    (skills as ISkillFieldsCustom[]).map((skill, i) => (
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
