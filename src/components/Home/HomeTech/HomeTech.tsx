import { BLOCKS, Document, INLINES, MARKS } from "@contentful/rich-text-types"
import styled from "@emotion/styled"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as React from "react"
import { ISkillFields } from "../../../../@types/generated/contentful"
import {
    ContentfulRichTextGatsbyReference,
    RenderRichTextData,
} from "../../../../@types/types"
import { SPACE } from "../../../@chakra-ui/gatsby-plugin/theme"
import Container from "../../Global/Container/Container"
import Skill from "../../Skills/Skill"
import Bold from "../../Typography/Bold"
import Heading from "../../Typography/Heading"
import Inlinelink from "../../Typography/Inlinelink"
import FaceImage from "../FaceImage/FaceImage"

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
    text?: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

export const HomeHeaderContentText = ({
    text,
}: TextProps): React.ReactElement => <>{renderRichText(text, options)}</>

interface HomeTechProps {
    skills: ISkillFields[]
    text: Document
}

const HomeTech = ({ skills, text }: HomeTechProps): React.ReactElement => {
    return (
        <Container vPadding textAlign="center">
            <FaceImage />
            <HomeHeaderContentText text={text} />
            <Skills>
                {skills.map((skill: ISkillFields, i) => (
                    <Skill
                        key={i}
                        id={`skill${i}`}
                        icon={skill.icon.svg.content}
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
