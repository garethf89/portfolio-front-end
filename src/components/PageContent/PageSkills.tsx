import * as React from "react"

import Heading from "../Typography/Heading"
import { ISkill } from "../../../@types/generated/contentful"
import { ISkillFieldsCustom } from "../../../@types/types"
import { SPACE } from "../../@chakra-ui/gatsby-plugin/theme"
import Skill from "../Skills/Skill"
import styled from "@emotion/styled"

interface PageSkillProps {
    skills: ISkill[]
}

const PageSkillContainer = styled.div`
    margin-bottom: ${SPACE.common[2]};
`

const SkillContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`

const PageSkills = ({ skills }: PageSkillProps): React.ReactElement => {
    return (
        <PageSkillContainer>
            <Heading
                level="h3"
                override="h2"
                fontWeight={700}
                marginBottom={SPACE.common[3]}
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
                            boxSize={[14, 14, 16]}
                        >
                            {skill.name}
                        </Skill>
                    ))}
            </SkillContainer>
        </PageSkillContainer>
    )
}

export default PageSkills
