import type { StorybookConfig } from "@storybook/nextjs"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-onboarding",
        "@storybook/addon-docs"
    ],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: false,
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: prop =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
    },
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {},
    webpackFinal: async config => {
        if (!config?.resolve) {
            return config
        }
        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
            new TsconfigPathsPlugin({
                extensions: config.resolve.extensions,
            }),
        ]

        // Add aliases for Storybook
        config.resolve.alias = {
            ...config.resolve.alias,
            "@storybook-home-dir": require("path").resolve(__dirname, "."),
            "next/navigation": require("path").resolve(
                __dirname,
                "./mocks/next-navigation.js"
            ),
        }

        return config
    },
}
export default config
