module.exports = {
    typescript: {
        tsconfigPath: "tsconfig.build.json",
    },
    reactStrictMode: false,
    images: {
        loader: "custom",
        loaderFile: "./imageLoader.ts",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                pathname: "/**",
            },
        ],
    },
}
