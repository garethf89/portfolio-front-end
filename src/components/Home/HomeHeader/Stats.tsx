import * as React from "react"

import { BREAKPOINTS } from "../../../@chakra-ui//theme"
import Heading from "../../Typography/Heading"
import { IStatFields } from "../../../../@types/generated/contentful"
import styled from "@emotion/styled"

const StatsContainer = styled.ul`
    list-style-type: 0;
    margin: 0;
    padding: 0;
    position: relative;
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        display: flex;
        flex-wrap: wrap;
    }
`

const Stat = styled.li`
    list-style-type: none;
    padding: 0;
    display: inline-block;
    margin: 0 1rem 2rem 0;
    &:last-of-type {
        margin-bottom: 0;
    }
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        width: 33.33%;
        margin-right: 0;
    }
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        width: 50%;
    }
`

const StatNumber = styled(Heading)`
    margin: 0;
    display: inline-block;
    vertical-align: middle;
`

const StatDesc = styled.span`
    vertical-align: middle;
    font-weight: 200;
    display: inline-block;
    margin-left: 1rem;
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        display: block;
        margin-left: 0;
    }
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        margin-top: 0.5rem;
    }
`

interface StatProps {
    stats: IStatFields[]
}

const Stats = ({ stats }: StatProps): React.ReactElement => {
    return (
        <StatsContainer>
            {stats.map((stat: IStatFields, i) => (
                <Stat key={i}>
                    <StatNumber className="" level="h1" override="p">
                        {stat.amount}+
                    </StatNumber>
                    <StatDesc>{stat.description}</StatDesc>
                </Stat>
            ))}
        </StatsContainer>
    )
}
export default Stats
