module.exports = {
    typescript: {
        tsconfigPath: "tsconfig.build.json",
    },
    reactStrictMode: false,
    images: {
        disableStaticImages: true,
        formats: ["image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                pathname: "/**",
            },
        ],
    },
}
