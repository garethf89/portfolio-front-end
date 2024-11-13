import Script from "next/script"
import * as React from "react"
import {
    CaseStudies,
    Clients,
    Header,
    HomeHeader,
    HomeTech,
    LastFM,
    Projects,
} from "@components"
import { HOME_QUERY } from "../queries"
import { client } from "../queries/apolloClient"
import { getSingleItem } from "../queries/utils"
import config from "../config/site"
import lastFmMock from "../__mocks__/lastfm"
import { functionGet } from "../constants/lastfm"
import axios from "axios"
import { addPlaceholder } from "../utils"
import type { HomePage, HomePageCollection, HomeQuery } from "@schema"
import { AlbumType } from "@components"
import { IconsProcessed } from "../../@types/types"
import { notFound } from "next/navigation"

type HomePageProps = {
    title: string
    albums: AlbumType[]
    page: HomePage
    icons: IconsProcessed[]
}

const getHome = async (): Promise<HomePageProps> => {
    const { error, data } = await client.query<HomeQuery>({
        query: HOME_QUERY,
        variables: {
            preview: process.env.PREVIEW === "true",
        },
        fetchPolicy: "no-cache",
        context: {
            headers: {
                "x-contentful-preview": "false",
            },
        },
    })

    const homePage = getSingleItem<HomePageCollection, HomePage>(
        data.page as HomePageCollection
    )

    if (!homePage) {
        return notFound()
    }

    // Create Blur images
    if (homePage.projectsCollection) {
        homePage.projectsCollection.items = await addPlaceholder(
            homePage.projectsCollection.items,
            "coverImage"
        )
    }

    // Request SVGS and set to strings
    const ICON_REQUESTS_SKILL = homePage.skillsCollection
        ? [...homePage.skillsCollection.items].map(item => {
              return {
                  url: item?.icon?.url ?? "",
                  icon: item?.icon?.fileName ?? "",
              }
          })
        : []
    const ICON_REQUESTS_LOGOS = homePage.logosCollection
        ? [...homePage.logosCollection.items].map(item => {
              return {
                  url: item?.logo?.url ?? "",
                  icon: item?.logo?.fileName ?? "",
              }
          })
        : []

    const icons: IconsProcessed[] = await Promise.all(
        [...ICON_REQUESTS_SKILL, ...ICON_REQUESTS_LOGOS].map(async item => {
            const resp = await fetch(item.url)
            return { url: item.url, icon: await resp.text() }
        })
    )

    // LastFM Albums
    let result = { albums: lastFmMock }

    try {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_REACT_APP_FE_URL}${functionGet}`
        )
        result = { albums: res.data.data.album }
    } catch (_err) {
        console.error("No connection to back end")
    }

    if (error) {
        console.error(error)
    }

    return {
        title: config.title,
        icons: icons,
        page: homePage,
        albums: result.albums,
    }
}

const IndexPage = async (): Promise<React.ReactElement> => {
    const props = await getHome()
    const { title, albums, page, icons } = props

    if (
        !page.skillsCollection ||
        !page.statsCollection ||
        !page.introText ||
        !page.skillsText ||
        !page.caseStudiesCollection ||
        !page.projectsCollection ||
        !page.logosCollection
    ) {
        console.error("Problems with the home page data request, do not render")
        return notFound()
    }

    return (
        <>
            <Script id="SchemaCode" type="application/ld+json">{`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Gareth Ferguson",
                "url": "https://www.garethferguson.co.uk",
                "logo": "https://www.garethferguson.co.uk/icons/icon-48x48.png",
                "sameAs": "https://www.garethferguson.co.uk"
              }
             `}</Script>
            <Header nav siteTitle={title} />
            <HomeHeader
                stats={page.statsCollection.items}
                text={page.introText}
            />
            <HomeTech
                text={page.skillsText}
                icons={icons}
                skills={page.skillsCollection.items}
            />
            <CaseStudies data={page.caseStudiesCollection.items} />
            <Projects data={page.projectsCollection.items} />
            <Clients data={page.logosCollection.items} icons={icons} />
            <LastFM initialAlbums={albums} />
        </>
    )
}

export default IndexPage
