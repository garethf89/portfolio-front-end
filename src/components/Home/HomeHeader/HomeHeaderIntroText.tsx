import * as React from "react"
import Heading from "../../Typography/Heading"
import { HomeIntro } from "@schema"
import { css } from "@styled-system/css"
import { IconExternal } from "../../Icons"

const homeHeaderIntroTextContainerStyles = css({
    listStyleType: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    paddingTop: 8,
    paddingBottom: 4,
})

const homeHeaderIntroTextStyles = css({
    display: "flex",
    gap: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "headerBorderColor",
    alignItems: "center",
    "&:last-of-type": {
        paddingBottom: 0,
        borderBottom: "none",
    },
    md: {
        "&:last-of-type": {
            marginBottom: 12,
        },
    },
})

const homeHeaderIntroTextHeadingStyles = {
    marginBottom: 0,
    display: "inline-block",
    verticalAlign: "middle",
    maxW: 250,
}

const iconStyles = {
    height: 34,
    width: 34,
    "& path": { fill: "#fff" },
}

interface HomeHeaderIntroProps {
    intro: HomeIntro[]
}

const HomeHeaderIntroText = ({
    intro,
}: HomeHeaderIntroProps): React.ReactElement => {
    return (
        <ul className={homeHeaderIntroTextContainerStyles}>
            {intro.map((item: HomeIntro, i) => (
                <li key={i} className={homeHeaderIntroTextStyles}>
                    {!!item.icon && (
                        <IconExternal
                            title={item.icon.title ?? ""}
                            src={item.icon.url ?? ""}
                            css={iconStyles}
                        />
                    )}
                    <Heading
                        css={homeHeaderIntroTextHeadingStyles}
                        level="h6"
                        override="p"
                    >
                        {item.text}
                    </Heading>
                </li>
            ))}
        </ul>
    )
}

export default HomeHeaderIntroText
