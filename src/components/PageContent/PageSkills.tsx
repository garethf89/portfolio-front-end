import styled from "@emotion/styled"
import * as React from "react"
import { IconsProcessed } from "../../../@types/types"
import { SPACE } from "../../@chakra-ui//theme"
import { Skill as SkillType } from "@schema"
import Skill from "../Skills/Skill"
import Heading from "../Typography/Heading"

interface PageSkillProps {
    skills: SkillType[]
    icons: IconsProcessed[]
}

const PageSkillContainer = styled.div`
    margin-bottom: ${SPACE.common[2]};
`

const SkillContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`

const PageSkills = ({ skills, icons }: PageSkillProps): React.ReactElement => {
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
                    skills.map((skill, i) => (
                        <Skill
                            key={`skill${i}`}
                            id={`skill${i}`}
                            icon={
                                icons.find(icon => icon.url === skill.icon.url)
                                    .icon
                            }
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
