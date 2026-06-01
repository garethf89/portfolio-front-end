import * as React from "react"
import { css } from "@styled-system/css"
import { IconsProcessed } from "../../../../@types/types"
import Container from "../../Global/Container/Container"
import HomeSkill from "../../Skills/HomeSkill"
import { Subheading } from "../../Typography/Subheading"
import { HomePageSkillsCollection, HomePageSkillsText } from "@schema"

const skillsStyles = css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 0,
    gap: 12,
    listStyleType: "none",
    marginBottom: "0",
    marginX: "auto",
    marginTop: 12,
    md: {
        flexWrap: "nowrap",
        gap: 8,
        justifyContent: "space-between",
    },
})

interface HomeTechProps {
    skills: HomePageSkillsCollection["items"]
    text: HomePageSkillsText
    icons: IconsProcessed[]
}

const HomeTech = ({ skills, icons }: HomeTechProps): React.ReactElement => {
    return (
        <Container
            css={{ textAlign: "center" }}
            options={{ smallPadding: true }}
        >
            <Subheading
                css={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                Skills
            </Subheading>
            <ul className={skillsStyles}>
                {!!icons &&
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
                            <HomeSkill
                                key={i}
                                id={`skill${i}`}
                                icon={skillIcon}
                                title={skill.name!}
                            >
                                {skill.name}
                            </HomeSkill>
                        )
                    })}
            </ul>
        </Container>
    )
}

export default HomeTech
