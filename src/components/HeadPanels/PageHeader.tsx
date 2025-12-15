import * as React from "react"
import { useContext, useEffect } from "react"
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

const InnerContainerStyles = css({
    padding: 8,
    md: {
        maxWidth: "50%",
        paddingX: 0,
        paddingY: 20,
    },
})

const PageImageStyles = css({
    paddingTop: "75%",
    overflow: "hidden",
    position: "relative",
    md: {
        paddingTop: 0,
        maxWidth: "50%",
        height: "100%",
        position: "absolute",
        top: "0",
        right: "0",
    },
})

const PageImageElementStyles = css({
    width: "100%",
    position: "absolute",
    objectFit: "cover",
    minWidth: "100%",
    minHeight: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    md: {
        width: "auto",
    },
})

const ButtonWrapperStyles = css({
    maxWidth: "320px",
    marginBottom: 4,
})

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
                <div className={PageImageStyles}>
                    <Image
                        alt={`Background image for ${title}`}
                        sizes="(min-width: 50em) 50vw, 100vw"
                        fill
                        image={image}
                        className={PageImageElementStyles}
                    />
                </div>
            )}
            <Container>
                <div className={InnerContainerStyles}>
                    <BackLink />
                    <Heading level="h1" text={text} css={styledTitleStyles} />
                    {!!externalLink && (
                        <div className={ButtonWrapperStyles}>
                            <Button
                                variant="primary"
                                href={externalLink}
                                as="a"
                                icon="Arrow"
                            >
                                {"Visit Site"}
                            </Button>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    )
}
export default PageHeader
