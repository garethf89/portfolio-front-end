import * as React from "react"
import Heading from "../Typography/Heading"
import IconExternal from "../Icons/IconExternal"
import { IconProps } from "../Icons/Icon"
import { css } from "@styled-system/css"

const skillContainerStyles = css({
    width: "33.33%",
    wordBreak: "break-word",
    textAlign: "center",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: "0 0",
    marginBottom: "2rem",
    sm: {
        width: "16.6%",
        "&:nth-of-type(n + 7)": {
            marginBottom: 0,
        },
    },
})

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
    <li className={skillContainerStyles}>
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
    </li>
)

export default Skill
