import * as React from "react"

import { BREAKPOINTS } from "../../@chakra-ui/theme"
import Heading from "../Typography/Heading"
import IconExternal from "../Icons/IconExternal"
import { SystemsTypeProperties } from "../Icons/Icon"
import styled from "@emotion/styled"

const SkillContainer = styled.li`
    width: 33.33%;
    word-break: break-word;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 0;
    margin-bottom: 2rem;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        width: 16.6%;
        &:nth-of-type(n + 7) {
            margin-bottom: 0;
        }
    }
`

const SkillText = styled(Heading)`
    font-weight: 200;
    font-size: 18px;
    flex: 0;
    margin: 1rem 0;
`

interface SkillProps extends SystemsTypeProperties {
    children: React.ReactNode
    icon: string
    id: string
    title: string
}

const Skill = ({
    children,
    id,
    icon,
    title,
    boxSize,
}: SkillProps): React.ReactElement => (
    <SkillContainer>
        <IconExternal
            aria-describedby={id}
            aria-labelledby={id}
            title={title}
            margin="0 auto"
            iconSvg={icon}
            boxSize={boxSize}
        />
        <SkillText id={id} level="h4" override="p">
            {children}
        </SkillText>
    </SkillContainer>
)

export default Skill
