import { fileURLToPath } from "node:url"
import { dirname } from "node:path"
import type { StorybookConfig } from "@storybook/nextjs-vite"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-onboarding",
        "@storybook/addon-docs",
    ],
    typescript: {
        check: false,
        reactDocgen: false,
    },
    framework: {
        name: "@storybook/nextjs-vite",
        options: {},
    },
    viteFinal: async config => {
        config.resolve = config.resolve || {}
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            "@storybook-home-dir": __dirname,
        }
        return config
    },
}
export default config
