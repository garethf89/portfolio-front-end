import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@containers": path.resolve(__dirname, "./src/containers"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@queries": path.resolve(__dirname, "./src/queries"),
            "@schema": path.resolve(__dirname, "./schema"),
            "@types": path.resolve(__dirname, "./@types"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@theme": path.resolve(__dirname, "./src/theme"),
            "@styled-system": path.resolve(__dirname, "./src/styled-system"),
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./test/vitest.ts"],
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html"],
            exclude: [
                "node_modules/",
                "src/stories/",
                "**/*.stories.tsx",
                "**/*.test.tsx",
                "**/*.test.ts",
                "coverage/",
                "dist/",
                ".next/",
                "out/",
            ],
        },
    },
})
