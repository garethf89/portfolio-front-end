import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as React from "react"
import { css } from "@styled-system/css"
import { IconsProcessed } from "../../../../@types/types"
import Container from "../../Global/Container/Container"
import Skill from "../../Skills/Skill"
import Bold from "../../Typography/Bold"
import Heading from "../../Typography/Heading"
import Inlinelink from "../../Typography/Inlinelink"
import FaceImage from "../FaceImage/FaceImage"
import { HomePageSkillsCollection, HomePageSkillsText } from "@schema"

const styledParagraphStyles = {
    fontWeight: 200,
    marginTop: 4,
    textAlign: "center",
}
const skillsStyles = css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 0,
    listStyleType: "none",
    marginBottom: "0",
    marginX: 0,
    marginTop: 12,
})

const Text = ({ children }: React.PropsWithChildren) => {
    return (
        <Heading override="p" level="h3" css={styledParagraphStyles}>
            {children}
        </Heading>
    )
}

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
            return <Text>{children}</Text>
        },
        [INLINES.HYPERLINK]: (node, children) => {
            return (
                <Inlinelink href={String(node.data.uri)}>{children}</Inlinelink>
            )
        },
    },
}

interface TextProps {
    text: HomePageSkillsText
}

export const HomeHeaderContentText = ({
    text,
}: TextProps): React.ReactElement => {
    return documentToReactComponents(text.json, options) as React.ReactElement
}

interface HomeTechProps {
    skills: HomePageSkillsCollection["items"]
    text: HomePageSkillsText
    icons: IconsProcessed[]
}

const HomeTech = ({
    skills,
    text,
    icons,
}: HomeTechProps): React.ReactElement => {
    return (
        <Container vPadding css={{ textAlign: "center" }}>
            <FaceImage />
            <HomeHeaderContentText text={text} />
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
                            <Skill
                                key={i}
                                id={`skill${i}`}
                                icon={skillIcon}
                                title={skill.name!}
                                width={[14, 14, 20]}
                                height={[14, 14, 20]}
                            >
                                {skill.name}
                            </Skill>
                        )
                    })}
            </ul>
        </Container>
    )
}

export default HomeTech
