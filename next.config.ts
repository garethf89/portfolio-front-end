import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    typescript: {
        tsconfigPath: "tsconfig.build.json",
    },
    reactStrictMode: false,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                pathname: "/**",
            },
        ],
    },
    turbopack: {
        root: process.cwd(),
    },
}

export default nextConfig
