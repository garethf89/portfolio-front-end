import { GetStaticProps } from "next"
import Head from "next/head"
import Script from "next/script"
import * as React from "react"
import { IHomePageFields } from "../../@types/generated/contentful"
import CaseStudies from "../components/CaseStudies/CaseStudies"
import Clients from "../components/Clients/Clients"
import Header from "../components/Header/Header"
import HomeHeader from "../components/HeadPanels/HomeHeader"
import HomeTech from "../components/Home/HomeTech/HomeTech"
import LastFM from "../components/LastFM/LastFM"
import Projects from "../components/Projects/Projects"
import { HOME_QUERY } from "../queries"
import { client } from "../queries/apolloClient"
import { getSingleItem } from "../queries/utils"
import config from "../config/site"
import lastFmMock from "../__mocks__/lastfm"
import { url, functionGet } from "../constants/lastfm"
import axios from "axios"
import { addPlaceholder } from "../utils"
import type { HomePage, HomePageCollection, HomeQuery } from "../schema/schema"
import { AlbumType } from "../components/LastFM/types"
import { IconsProcessed } from "../../@types/types"

type HomePageParams = {}

export const getStaticProps: GetStaticProps = async () => {
    const { error, data } = await client.query<HomeQuery, HomePageParams>({
        query: HOME_QUERY,
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

    // Create Blur images
    homePage.projectsCollection.items = await addPlaceholder(
        homePage.projectsCollection.items,
        "coverImage"
    )

    // Request SVGS and set to strings
    const ICON_REQUESTS_SKILL = [...homePage.skillsCollection.items].map(
        item => {
            return { url: item.icon.url, icon: item.icon.fileName }
        }
    )
    const ICON_REQUESTS_LOGOS = [...homePage.logosCollection.items].map(
        item => {
            return { url: item.logo.url, icon: item.logo.fileName }
        }
    )

    const icons: IconsProcessed[] = await Promise.all(
        [...ICON_REQUESTS_SKILL, ...ICON_REQUESTS_LOGOS].map(async item => {
            const resp = await fetch(item.url)
            return { url: item.url, icon: await resp.text() }
        })
    )

    // LastFM Albums
    let result = { albums: lastFmMock }
    if (process.env.NODE_ENV === "production") {
        try {
            const res = await axios({
                method: "post",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Headers": "*",
                },
                url: url,
                data: data,
            })
            result = { albums: res.data }
        } catch (e) {
            try {
                const res = await axios.get(functionGet)
                result = { albums: res.data }
            } catch (_err) {
                console.error("No connection to back end")
            }
        }
    }

    if (error) {
        console.error(error)
    }

    return {
        props: {
            title: config.title,
            icons: icons,
            page: homePage,
            albums: result.albums,
        },
    }
}

type HomePageProps = {
    title: string
    albums: AlbumType[]
    page: HomePage
    icons: IconsProcessed[]
}

const IndexPage = ({
    page,
    title,
    icons,
    albums,
}: HomePageProps): React.ReactElement => {
    return (
        <>
            <Head>
                <Script type="application/ld+json">{`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Gareth Ferguson",
                "url": "https://www.garethferguson.co.uk",
                "logo": "https://www.garethferguson.co.uk/icons/icon-48x48.png",
                "sameAs": "https://www.garethferguson.co.uk"
              }
             `}</Script>
                <title>{title}</title>
            </Head>
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
