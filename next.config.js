module.exports = {
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
