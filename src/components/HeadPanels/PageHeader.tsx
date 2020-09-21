import React, { useContext, useEffect } from "react"

import { Asset } from "contentful-management/dist/typings/entities/entry-fields"
import BackLink from "../BackLink/BackLink"
import Button from "../Common/Button"
import Container from "../Global/Container/Container"
import Heading from "../Typography/Heading"
import IconExternal from "../Icons/IconExternal"
import Lines from "../Animation/Lines"
import { StyledComponentProps } from "../../../@types/types"
import { globals } from "../../state/state"
import styled from "@emotion/styled"
import { supportsWebP } from "../../helpers/support/webp"

const HeaderStyles = styled.section`
    overflow: hidden;
    position: relative;
    color: ${(props: StyledComponentProps) => props.theme.colors.text};
    background: ${(props: StyledComponentProps) =>
        props.theme.colors.sectionSecondaryBackground};
`

const StyledTitle = styled(Heading)`
    margin: 2rem 0 2.3rem 0;
    font-weight: 700;
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        margin: 3rem 1rem 6.3rem 0;
    }
`

const InnerContainer = styled.div`
    padding: 2rem 0;
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        max-width: 50%;
        padding: 5rem 0;
    }
`

const PageImage = styled.div`
    padding-top: 75%;
    position: relative;
    overflow: hidden;

    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        padding-top: 0;
        max-width: 50%;
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
    }
`

const PageImageElement = styled.img`
    width: 100%;
    position: absolute;
    object-fit: fill;
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: ${(props: StyledComponentProps) =>
            props.theme.breakpoint.medium}) {
        width: auto;
    }
`

const TraceImage = styled(IconExternal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const ButtonWrapper = styled.div`
    max-width: 320px;
    margin-bottom: 1rem;
`
type PageImageType = {
    coverM: { src: string; srcWebp: string }
    coverL: { src: string; srcWebp: string; tracedSVG: string }
} & Asset

interface PageHeaderProps {
    text: string
    image: PageImageType
    link: string
}

const PageHeader = ({ image, link, text, title }: PageHeaderProps) => {
    const { state, dispatch } = useContext(globals)

    const webp = supportsWebP()

    const imageSrc = {
        small: webp ? image.coverM.srcWebp : image.coverM.src,
        large: webp ? image.coverL.srcWebp : image.coverL.src,
    }

    useEffect(() => {
        if (state.logo !== "dark") {
            dispatch({ type: "LOGO", logo: "dark" })
        }
    }, [])

    return (
        <HeaderStyles>
            <Lines dark id="HeaderAni" />
            {image && (
                <PageImage>
                    <TraceImage
                        margin="0 auto"
                        width="1000px"
                        iconSvg={decodeURIComponent(image.coverL.tracedSVG)}
                    />
                    <PageImageElement
                        alt={`Background image for ${title}`}
                        srcSet={`${imageSrc.small} 1x, ${imageSrc.large} 2x`}
                        src={imageSrc.large}
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
                                color="dark"
                                href={link}
                                as="a"
                                icon="Arrow"
                            >
                                Visit Site
                            </Button>
                        </ButtonWrapper>
                    )}
                </InnerContainer>
            </Container>
        </HeaderStyles>
    )
}
export default PageHeader
