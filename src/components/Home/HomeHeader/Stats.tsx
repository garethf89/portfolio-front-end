import * as React from "react"
import Heading from "../../Typography/Heading"
import { Stat } from "@schema"
import { css } from "@styled-system/css"

const statsContainerStyles = css({
    listStyleType: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    sm: {
        display: "flex",
        flexWrap: "wrap",
    },
})

const statListStyles = css({
    listStyleType: "none",
    padding: 0,
    display: "inline-block",
    margin: "0 1rem 2rem 0",
    "&:last-of-type": {
        marginBottom: 0,
    },
    sm: {
        width: "33.33%",
        marginRight: 0,
    },
    md: {
        width: "50%",
    },
})

const statNumberStyles = {
    marginBottom: 0,
    display: "inline-block",
    verticalAlign: "middle",
}

const statDescStyles = css({
    verticalAlign: "middle",
    fontWeight: "200",
    display: "inline-block",
    marginLeft: "1rem",
    sm: {
        display: "block",
        marginLeft: 0,
    },
    md: {
        marginTop: "0.5rem",
    },
})

interface StatProps {
    stats: Stat[]
}

const Stats = ({ stats }: StatProps): React.ReactElement => {
    return (
        <ul className={statsContainerStyles}>
            {stats.map((stat: Stat, i) => (
                <li key={i} className={statListStyles}>
                    <Heading css={statNumberStyles} level="h1" override="p">
                        {stat.amount}+
                    </Heading>
                    <span className={statDescStyles}>{stat.description}</span>
                </li>
            ))}
        </ul>
    )
}

export default Stats
