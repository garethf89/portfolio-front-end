import { BLOCKS, Document, INLINES, MARKS } from "@contentful/rich-text-types"
import styled from "@emotion/styled"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as React from "react"
import {
    ContentfulRichTextGatsbyReference,
    ISkillFieldsCustom,
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

type RichDocument = Document &
    RenderRichTextData<ContentfulRichTextGatsbyReference>
interface TextProps {
    text?: RichDocument
}

export const HomeHeaderContentText = ({
    text,
}: TextProps): React.ReactElement => {
    const formatData = JSON.parse(text.raw)
    return documentToReactComponents(formatData, options) as React.ReactElement
}

interface HomeTechProps {
    skills: ISkillFieldsCustom[]
    text: RichDocument
}

const HomeTech = ({ skills, text }: HomeTechProps): React.ReactElement => {
    return (
        <Container vPadding textAlign="center">
            <FaceImage />
            <HomeHeaderContentText text={text} />
            <Skills>
                {skills.map((skill, i) => (
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
