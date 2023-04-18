import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions"
import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs"
import { z } from "zod"

const fromDefault = process.env.DEFAULT_EMAIL

export type MailOptions = {
    personEmail: string
    personEnq: string
    personName: string
}

const EmailSchema = z.object({
    personName: z.string(),
    personEmail: z.string().email(),
    personEnq: z.string(),
})

export const createHtml = (data: MailOptions): string =>
    `${data.personEnq} <br/><br/> from: ${data.personName} , ${
        data.personEmail || "No Email"
    }`

export const buildEmail = (values: MailOptions) => ({
    from: fromDefault,
    to: fromDefault,
    subject: "Enquiry from Website",
    text: "Hello world",
    html: values.personEnq ? createHtml(values) : "<b>Hello world</b>",
})

const handler: Handler = async (
    event: HandlerEvent,
    _context: HandlerContext
) => {
    try {
        if (!event.body) {
            throw new Error("No values have been passed to function")
        }

        const values = JSON.parse(event.body) as MailOptions

        EmailSchema.parse(values)

        const email = buildEmail(values)

        const params = {
            MessageBody: JSON.stringify(email),
            QueueUrl: process.env.SQS_URL_EMAIL,
        }

        const client = new SQSClient({
            region: "eu-west-2",
            credentials: {
                accessKeyId: process.env.USER_AWS_ACCESS_KEY_ID as string,
                secretAccessKey: process.env.USER_AWS_SECRET_KEY as string,
            },
        })
        const command = new SendMessageCommand(params)

        await client.send(command)

        return { body: "Success", statusCode: 200 }
    } catch (e) {
        throw new Error(e)
    }
}

export { handler }
