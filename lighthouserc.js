module.exports = {
    ci: {
        collect: {
            startServerCommand: "npm start",
            staticDistDir: "./public",

        },
        upload: {
            target: "temporary-public-storage",
        },
    },
}
