import { useQuery } from "@apollo/client"
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

type HomePageParams = {}

type HomeQueryResult = {}

export const getStaticProps: GetStaticProps<
    IHomePageFields,
    HomePageParams
> = async () => {
    const { error, data } = await client.query({
        query: HOME_QUERY,
        fetchPolicy: "no-cache",
        context: {
            headers: {
                "x-contentful-preview": "false",
            },
        },
    })

    const homePage = getSingleItem(data.page)

    // Create Blur images
    homePage.projects.items = await addPlaceholder(
        homePage.projects.items,
        "coverImage"
    )

    // Request SVGS and set to strings
    const ICON_REQUESTS_SKILL = [...homePage.skills.items].map(item => {
        return { url: item.icon.url, icon: item.icon.fileName }
    })
    const ICON_REQUESTS_LOGOS = [...homePage.logos.items].map(item => {
        return { url: item.logo.url, icon: item.logo.fileName }
    })

    const icons = await Promise.all(
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
            } catch (e) {
                console.log("No connection to back end")
            }
        }
    }

    if (error) {
        console.log(error)
    }

    return {
        props: {
            icons: icons,
            page: homePage,
            albums: result.albums,
        },
    }
}

// Use CodeGen TODO
const IndexPage = ({ page, icons, albums }: any): React.ReactElement => {
    const { title } = config

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
            <HomeHeader stats={page.stats.items} text={page.introText} />
            <HomeTech
                text={page.skillsText}
                icons={icons}
                skills={page.skills.items}
            />
            <CaseStudies data={page.caseStudies.items} />
            <Projects data={page.projects.items} />
            <Clients data={page.logos.items} icons={icons} />
            <LastFM initialAlbums={albums} />
        </>
    )
}

export default IndexPage
