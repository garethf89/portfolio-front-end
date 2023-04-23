import { Handler } from "@netlify/functions"
import { MongoClient } from "mongodb"
import axios from "axios"

type AlbumImageServer = { size: string; "#text": string }
type AlbumServer = {
    name: string
    url: string
    image: AlbumImageServer[]
    artist: { url: string; name: string }
}

type AlbumImageFormatted = { size: string; src: string }
export type AlbumServerFormatted = {
    name: string
    url: string
    image: AlbumImageFormatted[]
    artist: { url: string; name: string }
}

type LastFMServerResponse = {
    data: {
        topalbums: { album: AlbumServer[] }
    }
}
const period = "1month"
const name = "Gazmatron1"

const refreshUrl = `${process.env.NEXT_PUBLIC_REACT_APP_FE_URL}/api/revalidate?secret=${process.env.API_SECRET}`

const buildUrl = (): string =>
    "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&api_key=" +
    process.env.LASTFMKEY +
    "&format=json&limit=3"

const handler: Handler = async () => {
    try {
        const connStr = `mongodb+srv://${process.env.MONGO}`
        const client = new MongoClient(connStr)
        await client.connect()

        const database = client.db("garethferguson")
        const lastfms = database.collection("lastfms")

        const values: LastFMServerResponse = await axios.get(
            `${buildUrl()}&user=${name}&period=${period}`
        )

        const valuesFromDatabase = await lastfms.findOneAndReplace(
            { _id: name },
            {
                _id: name,
                data: {
                    album: values.data.topalbums.album,
                },
            }
        )

        // trigger rebuild
        await axios.get(refreshUrl)

        return { body: JSON.stringify(valuesFromDatabase), statusCode: 200 }
    } catch (e) {
        throw new Error("Lastfm fetch error")
    }
}

export { handler }
