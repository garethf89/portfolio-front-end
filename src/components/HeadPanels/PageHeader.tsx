import styled from "@emotion/styled"
import * as React from "react"
import { useContext, useEffect } from "react"
import { BREAKPOINTS } from "@theme"
import { Asset } from "@schema"
import { globals } from "../../state/state"
import Lines from "../Animation/Lines"
import BackLink from "../BackLink/BackLink"
import Button from "../Common/Button"
import Image from "../Common/Image"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import { css } from "@styled-system/css"

const styledTitleStyles = css.raw({
    marginX: 0,
    marginY: 4,
    fontWeight: 700,
    color: "sectionColor",
    md: {
        marginBottom: 16,
        marginTop: 8,
        marginRight: 4,
    },
})

const InnerContainer = styled.div`
    padding: 2rem 0;
    @media (min-width: ${BREAKPOINTS.md}) {
        max-width: 50%;
        padding: 5rem 0;
    }
`

const PageImage = styled.div`
    padding-top: 75%;
    position: relative;
    overflow: hidden;

    @media (min-width: ${BREAKPOINTS.md}) {
        padding-top: 0;
        max-width: 50%;
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
    }
`

const PageImageElement = styled(Image)`
    width: 100%;
    position: absolute;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: ${BREAKPOINTS.md}) {
        width: auto;
    }
`

const ButtonWrapper = styled.div`
    max-width: 320px;
    margin-bottom: 1rem;
`

interface PageHeaderProps {
    text: string
    image?: Asset
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
        <section
            className={css({
                position: "relative",
                overflow: "hidden",
                bg: "sectionBackgroundPage",
                color: "sectionColor",
            })}
        >
            <Lines dark id="HeaderAni" />
            {image && (
                <PageImage>
                    <PageImageElement
                        alt={`Background image for ${title}`}
                        sizes="(min-width: 50em) 50vw, 100vw"
                        fill
                        image={image}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </PageImage>
            )}
            <Container>
                <InnerContainer>
                    <BackLink />
                    <Heading level="h1" text={text} css={styledTitleStyles} />
                    {!!externalLink && (
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
        </section>
    )
}
export default PageHeader
