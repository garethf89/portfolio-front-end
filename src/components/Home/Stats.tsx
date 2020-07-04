import Heading from "../Typography/Heading"
import React from "react"
import styled from "@emotion/styled"

const StatsContainer = styled.ul`
    list-style-type: 0;
    margin: 0;
    padding: 0;
    position: relative;
    @media (min-width: ${props => props.theme.breakpoint.small}) {
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
    @media (min-width: ${props => props.theme.breakpoint.small}) {
        width: 33.33%;
        margin-right: 0;
    }
    @media (min-width: ${props => props.theme.breakpoint.medium}) {
        width: 50%;
    }
`

const StatNumber = styled(Heading)`
    margin: 0;
    display: inline-block;
    vertical-align: middle;
`

const StatDesc = styled.span`
    display: inline-block;
    vertical-align: middle;
    margin-left: 1rem;
    @media (min-width: ${props => props.theme.breakpoint.small}) {
        margin-left: 2px;
    }
`

const Stats = ({ stats }) => {
    return (
        <StatsContainer>
            {stats.map((stat, i) => (
                <Stat key={i}>
                    <StatNumber className="" level="h1" override="span">
                        {stat.number}+
                    </StatNumber>
                    <StatDesc>{stat.description}</StatDesc>
                </Stat>
            ))}
        </StatsContainer>
    )
}
export default Stats
