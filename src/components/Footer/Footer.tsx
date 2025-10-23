import * as React from "react"
import Heading from "../Typography/Heading"
import FadeLink from "../Link/Link"
import GitHubIcon from "../../svgs/github"
import LinkedInIcon from "../../svgs/linkedin"
import { css } from "@styled-system/css"
import { Flex } from "../Global/Container"

const footerOuterStyles = css({
    background: "footerBg",
    color: "sectionText",
})

const footerContainerStyles = {
    paddingTop: "8",
    paddingBottom: "8",
    display: "flex",
    justifyContent: "space-between",
}

const footerHeadingStyles = {
    marginBottom: 12,
    marginTop: "25px",
    textAlign: "left",
    lg: { alignSelf: "center", margin: 0 },
}

const footerLinkStyles = css({
    color: "sectionText",
    marginRight: "1rem",
    _last: { marginRight: 0 },
})

const footerContentIconsStyles = css({
    display: "flex",
    gap: "0.25rem",
})

const footerCopyrightStyles = css({
    margin: "1rem 0 0",
    color: "sectionTextSecondary",
})

const Footer = (): React.ReactElement<HTMLDivElement> => {
    const year = new Date().getFullYear()
    return (
        <footer className={footerOuterStyles}>
            <Flex css={footerContainerStyles}>
                <Heading css={footerHeadingStyles} level="h3">
                    <FadeLink href="/contact">Contact Me</FadeLink>
                </Heading>
                <div>
                    <div className={footerContentIconsStyles}>
                        <a
                            className={footerLinkStyles}
                            rel="noopener"
                            aria-label="LinkedIn"
                            href="//uk.linkedin.com/in/garethferguson1"
                        >
                            <LinkedInIcon css={{ height: 8, width: 8 }} />
                        </a>
                        <a
                            className={footerLinkStyles}
                            rel="noopener"
                            aria-label="Github"
                            href="//github.com/garethf89"
                        >
                            <GitHubIcon css={{ height: 8, width: 8 }} />
                        </a>
                    </div>
                    <p className={footerCopyrightStyles}>
                        Gareth Ferguson {year}
                    </p>
                </div>
            </Flex>
        </footer>
    )
}

export default Footer
