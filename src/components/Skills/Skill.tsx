import * as React from "react"

import { BREAKPOINTS } from "@theme"
import Heading from "../Typography/Heading"
import IconExternal from "../Icons/IconExternal"
import { IconProps } from "../Icons/Icon"
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

    @media (min-width: ${BREAKPOINTS.sm}) {
        width: 16.6%;
        &:nth-of-type(n + 7) {
            margin-bottom: 0;
        }
    }
`

const skillTextStyles = {
    fontWeight: 200,
    fontSize: "18px",
    flex: 0,
    marginTop: 4,
    marginBottom: 0,
}

type SkillProps = Omit<IconProps, "height" | "width" | "src"> & {
    children: React.ReactNode
    icon: string
    id: string
    title: string
    height: number[]
    width: number[]
}

const Skill = ({
    children,
    id,
    icon,
    title,
    width,
    height,
}: SkillProps): React.ReactElement => (
    <SkillContainer>
        <IconExternal
            aria-describedby={id}
            aria-labelledby={id}
            title={title}
            src={icon}
            css={{ marginX: "auto", width, height }}
        />
        <Heading id={id} level="h4" override="p" css={skillTextStyles}>
            {children}
        </Heading>
    </SkillContainer>
)

export default Skill
