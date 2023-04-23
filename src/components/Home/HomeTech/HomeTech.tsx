import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import styled from "@emotion/styled"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as React from "react"
import { IconsProcessed } from "../../../../@types/types"
import { SPACE } from "../../../@chakra-ui/theme"
import Container from "../../Global/Container/Container"
import Skill from "../../Skills/Skill"
import Bold from "../../Typography/Bold"
import Heading from "../../Typography/Heading"
import Inlinelink from "../../Typography/Inlinelink"
import FaceImage from "../FaceImage/FaceImage"
import { HomePageSkillsCollection, HomePageSkillsText } from "@schema"

const StyledParagraph = styled(Heading)`
    font-weight: 200;
    margin-top: 1rem;
`
const Skills = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    list-style-type: none;
    margin: ${SPACE.common[4]} 0 0;
`

const Text = ({ children }: React.PropsWithChildren) => {
    return (
        <StyledParagraph override="p" level="h3">
            {children}
        </StyledParagraph>
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
    text?: HomePageSkillsText
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
        <Container vPadding textAlign="center">
            <FaceImage />
            <HomeHeaderContentText text={text} />
            <Skills>
                {skills.map((skill, i) => (
                    <Skill
                        key={i}
                        id={`skill${i}`}
                        icon={
                            icons.find(icon => icon.url === skill.icon.url).icon
                        }
                        title={skill.name}
                        boxSize={[14, 14, 20]}
                    >
                        {skill.name}
                    </Skill>
                ))}
            </Skills>
        </Container>
    )
}

export default HomeTech
