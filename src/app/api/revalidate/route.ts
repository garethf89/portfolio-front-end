import { NextRequest } from "next/server"
import { revalidateTag } from "next/cache"

export async function GET(request: NextRequest): Promise<Response> {
    const secret = request.nextUrl.searchParams.get("secret")

    if (secret !== process.env.API_SECRET) {
        return Response.json({ message: "Invalid token" }, { status: 401 })
    }

    try {
        revalidateTag("/")
        return Response.json({ revalidated: true })
    } catch (err) {
        return new Response("Error revalidating", { status: 500 })
    }
}
