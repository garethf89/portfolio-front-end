module.exports = {
    stories: ["../src/components/**/*.stories.js"],
    addons: [
        "@storybook/addon-knobs/register",
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/addon-a11y",
        "@storybook/addon-graphql",
    ],
}
