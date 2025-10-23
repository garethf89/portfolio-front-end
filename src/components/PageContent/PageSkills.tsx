import styled from "@emotion/styled"
import * as React from "react"
import { IconsProcessed } from "../../../@types/types"
import { Skill as SkillType } from "@schema"
import Skill from "../Skills/Skill"
import Heading from "../Typography/Heading"
import { css } from "@styled-system/css"

interface PageSkillProps {
    skills: SkillType[]
    icons: IconsProcessed[]
}

const pageSkillContainerStyles = css({
    marginBottom: "6",
})

const SkillContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`

const PageSkills = ({ skills, icons }: PageSkillProps): React.ReactElement => {
    return (
        <div className={pageSkillContainerStyles}>
            <Heading
                level="h3"
                override="h2"
                css={{ marginBottom: 12, fontWeight: 700 }}
            >
                Technology Used
            </Heading>
            <SkillContainer>
                {skills &&
                    skills.map((skill, i) => {
                        const skillIcon = icons.find(icon =>
                            skill.icon ? icon.url === skill.icon.url : null
                        )?.icon

                        if (!skillIcon) {
                            console.error(
                                `No skill icon found for ${skill.name}`
                            )
                            return <></>
                        }
                        return (
                            <Skill
                                key={`skill${i}`}
                                id={`skill${i}`}
                                icon={skillIcon}
                                title={skill.name!}
                                height={[14, 14, 16]}
                                width={[14, 14, 16]}
                            >
                                {skill.name}
                            </Skill>
                        )
                    })}
            </SkillContainer>
        </div>
    )
}

export default PageSkills
