import { Handler } from "@netlify/functions"
import { MongoClient } from "mongodb"

const connStr = `mongodb+srv://${process.env.MONGO}`

const handler: Handler = async () => {
    try {
        const client = new MongoClient(connStr)
        await client.connect()
        const database = client.db("portfolio")
        const lastfms = database.collection("lastfms")

        const options = {}
        const values = await lastfms.findOne({}, options)

        return { body: JSON.stringify(values), statusCode: 200 }
    } catch (e) {
        throw new Error("Lastfm fetch error")
    }
}

export { handler }
