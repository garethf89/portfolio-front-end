module.exports = {
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
    experimental: {
        outputFileTracingExcludes: {
            "/api/**": ["node_modules/sharp/**"],
        },
    },
}
