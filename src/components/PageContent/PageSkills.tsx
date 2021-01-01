import { ISkillFieldsCustom, StyledComponentProps } from "../../../@types/types"

import Heading from "../Typography/Heading"
import { ISkill } from "../../../@types/generated/contentful"
import { MyTheme } from "../../gatsby-plugin-theme-ui"
import React from "react"
import Skill from "../Skills/Skill"
import styled from "@emotion/styled"
import { useThemeUI } from "theme-ui"

interface PageSkillProps {
    skills: ISkill[]
}

const PageSkillContainer = styled.div`
    margin-bottom: ${(props: StyledComponentProps) =>
        props.theme.space.common[2]};
`

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
                override="h2"
                fontWeight={700}
                marginBottom={(theme as MyTheme).space.common[3]}
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
