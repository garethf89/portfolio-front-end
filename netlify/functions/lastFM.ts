import { Handler } from "@netlify/functions"
import { MongoClient } from "mongodb"

const handler: Handler = async () => {
    let client: MongoClient | null = null
    try {
        const connStr = `mongodb+srv://${process.env.MONGO}`
        client = new MongoClient(connStr)
        await client.connect()

        const database = client.db("garethferguson")
        const lastfms = database.collection("lastfms")

        const options = {}
        const values = await lastfms.findOne({}, options)

        return { body: JSON.stringify(values), statusCode: 200 }
    } catch (e) {
        console.error("LastFM fetch error:", e)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Lastfm fetch error" }),
        }
    } finally {
        if (client) {
            await client.close().catch(err => {
                console.error("Error closing MongoDB connection:", err)
            })
        }
    }
}

export { handler }
