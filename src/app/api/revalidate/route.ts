process.env.SHARP_IGNORE_GLOBAL_LIBVIPS = "1"
process.env.NEXT_SHARP_PATH = ""

import { NextRequest } from "next/server"
import { revalidatePath } from "next/cache"

export async function GET(request: NextRequest): Promise<Response> {
    const secret = request.nextUrl.searchParams.get("secret")

    if (secret !== process.env.API_SECRET) {
        return Response.json({ message: "Invalid token" }, { status: 401 })
    }

    try {
        revalidatePath("/")
        return Response.json({ revalidated: true, now: Date.now() })
    } catch (err) {
        return new Response("Error revalidating", { status: 500 })
    }
}
