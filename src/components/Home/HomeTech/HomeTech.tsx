import { BLOCKS, Document, INLINES, MARKS } from "@contentful/rich-text-types"

import Bold from "../../Typography/Bold"
import Container from "../../Global/Container/Container"
import FaceImage from "../FaceImage/FaceImage"
import Heading from "../../Typography/Heading"
import { ISkillFields } from "../../../../@types/generated/contentful"
import Inlinelink from "../../Typography/Inlinelink"
import React from "react"
import Skill from "../../Skills/Skill"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "@emotion/styled"

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
    margin: 4rem 0 0;
`

const Text = ({ children }) => {
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
            return <Inlinelink to={node.data.uri}>{children}</Inlinelink>
        },
    },
}

interface TextProps {
    text?: Document;
}

export const HomeHeaderContentText = ({ text }: TextProps): any =>
    documentToReactComponents(text, options)

interface HomeTechProps {
    skills: ISkillFields[];
    text: Document;
}

const HomeTech = ({ skills, text }: HomeTechProps): React.ReactElement => {
    return (
        <Container
            padding={[
                "5rem 1.5rem 2.5rem",
                "5rem 1.5rem 2.5rem",
                "5rem 1.5rem 2.5rem",
            ]}
            textAlign="center"
        >
            <FaceImage />
            <HomeHeaderContentText text={text} />
            <Skills>
                {skills.map((skill: ISkillFields, i) => (
                    <Skill
                        key={i}
                        id={`skill${i}`}
                        icon={skill.icon.svg.content}
                        title={skill.name}
                    >
                        {skill.name}
                    </Skill>
                ))}
            </Skills>
        </Container>
    )
}

export default HomeTech
