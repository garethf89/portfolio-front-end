module.exports = {
    images: {
        formats: ["image/avif", "image/webp", "image/jpg"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                pathname: "/**",
            },
        ],
    },
}
