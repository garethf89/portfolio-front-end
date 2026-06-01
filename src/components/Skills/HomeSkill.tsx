import * as React from "react"
import Heading from "../Typography/Heading"
import IconExternal from "../Icons/IconExternal"
import { IconProps } from "../Icons/Icon"
import { css } from "@styled-system/css"

const skillContainerStyles = css({
    textAlign: "center",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 0",
    marginBottom: "0",
    gap: "4",
    flexBasis: "calc(100% / 6 - 3rem)",
    md: {
        flex: 1,
        flexBasis: "0",
        minWidth: 0,
    },
})

const iconWrapperStyles = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "48px",
    width: "100%",
})

const skillTextStyles = {
    fontWeight: 200,
    fontSize: "14px",
    marginTop: 2,
    marginBottom: 0,
}

type SkillProps = Omit<IconProps, "height" | "width" | "src"> & {
    children: React.ReactNode
    icon: string
    id: string
    title: string
}

const HomeSkill = ({
    children,
    id,
    icon,
    title,
}: SkillProps): React.ReactElement => (
    <li className={skillContainerStyles}>
        <div className={iconWrapperStyles}>
            <IconExternal
                aria-describedby={id}
                aria-labelledby={id}
                title={title}
                src={icon}
            />
        </div>
        <Heading id={id} level="h4" override="p" css={skillTextStyles}>
            {children}
        </Heading>
    </li>
)

export default HomeSkill
