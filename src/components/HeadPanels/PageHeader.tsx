import ProgressiveImage, { ResponsiveImage } from "../Utils/ProgressiveImage"
import { useContext, useEffect } from "react";
import * as React from "react";

import { BREAKPOINTS } from "../../gatsby-plugin-theme-ui/index"
import BackLink from "../BackLink/BackLink"
import Button from "../Common/Button"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import Lines from "../Animation/Lines"
import { globals } from "../../state/state"
import styled from "@emotion/styled"

const HeaderStyles = styled.section`
    overflow: hidden;
    position: relative;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.sectionSecondaryBackground};
`

const StyledTitle = styled(Heading)`
    margin: 2rem 0 2.3rem 0;
    font-weight: 700;
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        margin: 3rem 1rem 6.3rem 0;
    }
`

const InnerContainer = styled.div`
    padding: 2rem 0;
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        max-width: 50%;
        padding: 5rem 0;
    }
`

const PageImage = styled.div`
    padding-top: 75%;
    position: relative;
    overflow: hidden;

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        padding-top: 0;
        max-width: 50%;
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
    }
`

const PageImageElement = styled(ProgressiveImage)`
    width: 100%;
    position: absolute;
    object-fit: fill;
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        width: auto;
    }
`

const ButtonWrapper = styled.div`
    max-width: 320px;
    margin-bottom: 1rem;
`

interface PageHeaderProps {
    text: string
    image?: unknown
    link?: string
    title: string
}

const PageHeader = ({
    image,
    link,
    text,
    title,
}: PageHeaderProps): React.ReactElement => {
    const { state, dispatch } = useContext(globals)

    useEffect(() => {
        if (state.logo !== "dark") {
            dispatch({ type: "LOGO", logo: "dark" })
        }
    }, [])

    const externalLink = link ? link.replace(/http:/gi, "https:") : null

    return (
        <HeaderStyles>
            <Lines dark id="HeaderAni" />
            {image && (
                <PageImage>
                    <PageImageElement
                        alt={`Background image for ${title}`}
                        sizes="(min-width: 50em) 50vw, 100vw"
                        image={image as ResponsiveImage}
                        absolute
                        loadingImage
                    />
                </PageImage>
            )}
            <Container>
                <InnerContainer>
                    <BackLink />
                    <StyledTitle level="h1" text={text} />
                    {link && (
                        <ButtonWrapper>
                            <Button
                                variant="primary"
                                href={externalLink}
                                as="a"
                                icon="Arrow"
                            >
                                {"Visit Site"}
                            </Button>
                        </ButtonWrapper>
                    )}
                </InnerContainer>
            </Container>
        </HeaderStyles>
    )
}
export default PageHeader
