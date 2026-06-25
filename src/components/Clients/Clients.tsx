"use client"

import * as React from "react"
import Image from "../Common/Image"
import Container from "../Global/Container/Container"
import IconExternal from "../Icons/IconExternal"
import { HomePageLogosCollection, Logo } from "@schema"
import { CustomImageAsset, IconsProcessed } from "@types"
import { css } from "@styled-system/css"
import { useDarkMode } from "../../hooks"
import type { SystemStyleObject } from "@styled-system/types"
import { Subheading } from "../Typography/Subheading"
import { OuterWrapper } from "../Common"

const logoWrapperCommonStyles = {
    position: "relative",
    textAlign: "center",
    margin: "0 auto",
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    "& > *:nth-child(3n+1)": { justifySelf: "start" },
    "& > *:nth-child(3n+2)": { justifySelf: "center" },
    "& > *:nth-child(3n+3)": { justifySelf: "end" },
    gap: 4,
    md: {
        gap: 12,
        justifyContent: "space-around",
        display: "flex",
    },
}

const logoWrapperStylesUpper = css({
    ...logoWrapperCommonStyles,
    maxWidth: "500px",
    marginBottom: "4",
    md: {
        ...logoWrapperCommonStyles.md,

        maxWidth: "700px",
    },
})

const logoWrapperStyleLower = css({
    ...logoWrapperCommonStyles,
    maxWidth: "500px",
    md: {
        ...logoWrapperCommonStyles.md,
        maxWidth: "900px",
    },
})

type LogoStyleProps = {
    dark?: boolean
    darkIcon?: boolean
}

const logoStyles = ({ dark, darkIcon }: LogoStyleProps) =>
    css.raw({
        filter: dark ? "grayscale(0)" : "grayscale(1)",
        opacity: dark ? 1 : "0.5",
        maxWidth: "75px",
        width: "100%",
        height: "auto",
        transition: "opacity 0.25s ease-in",
        minHeight: "50px",
        margin: "0",
        marginBottom: ["2rem", 0],
        position: "relative",
        flex: 1,
        _hover: {
            opacity: 1,
        },
        "& path": {
            fill: darkIcon && dark ? "#fff!" : "",
        },
    })

const getLogoKey = (logo: Logo): string => {
    const logoFields = logo.logo as CustomImageAsset | null | undefined
    return logoFields?.url ?? logo.name ?? logo.sys.id
}

type ClientLogoProps = {
    logo: Logo
    icons: IconsProcessed[]
    css?: SystemStyleObject
}

const ClientLogo = ({
    logo,
    icons,
    css: cssProp,
}: ClientLogoProps): React.ReactElement | null => {
    const logoFields = logo.logo as CustomImageAsset | null | undefined
    const { isDarkMode } = useDarkMode({ initializeWithValue: false })
    const isDarkIcon = isDarkMode && !!logo.dark

    if (!logoFields) {
        return null
    }

    const styles = logoStyles({ dark: isDarkMode, darkIcon: isDarkIcon })

    if (logoFields.contentType === "image/svg+xml") {
        const iconSvg = icons.find(icon => icon.url === logoFields.url)

        if (!iconSvg) {
            console.error(`Icon not found for URL: ${logoFields.url}`)
            return null
        }

        if (!iconSvg.icon || iconSvg.icon.trim() === "") {
            console.error(`Icon content is empty for URL: ${logoFields.url}`)
            return null
        }

        return (
            <IconExternal
                title={logo.name ?? ""}
                src={iconSvg.icon}
                css={css.raw(styles, cssProp)}
            />
        )
    }

    return (
        <div className={css(styles, cssProp)}>
            <Image
                image={logoFields}
                alt={logo.name ?? ""}
                style={{
                    objectFit: "contain",
                    height: "100%",
                }}
                fill
            />
        </div>
    )
}

interface ClientProps {
    data: HomePageLogosCollection["items"]
    icons: IconsProcessed[]
}

const renderClientLogos = (
    data: HomePageLogosCollection["items"],
    icons: IconsProcessed[]
) =>
    data.map(logo => {
        if (!logo) {
            return null
        }

        return <ClientLogo key={getLogoKey(logo)} logo={logo} icons={icons} />
    })

const Clients = ({
    data,
    icons,
}: ClientProps): React.ReactElement<ClientProps> => {
    return (
        <OuterWrapper offsetBg>
            <Container options={{ smallPadding: true }}>
                <Subheading
                    css={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                    }}
                >
                    Clients I have worked with
                </Subheading>
                <div className={logoWrapperStylesUpper}>
                    {renderClientLogos(data.slice(0, 6), icons)}
                </div>
                <div className={logoWrapperStyleLower}>
                    {renderClientLogos(data.slice(6), icons)}
                </div>
            </Container>
        </OuterWrapper>
    )
}

export default Clients
