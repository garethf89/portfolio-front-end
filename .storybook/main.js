const path = require("path")
const toPath = _path => path.join(process.cwd(), _path)

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        {
            name: "@storybook/addon-essentials",
        },
        "@storybook/addon-a11y",
        "@storybook/addon-graphql",
        "storybook-formik/register",
    ],
    core: {
        builder: "webpack5",
    },
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
    webpackFinal: async config => {
        // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
        config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

        config.module.rules[0].use[0].loader = require.resolve("babel-loader")

        // use @babel/preset-react for JSX and env (instead of staged presets)
        config.module.rules[0].use[0].options.presets = [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-env"),
        ]

        // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
        config.resolve.mainFields = ["browser", "module", "main"]
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [["react-app", { flow: false, typescript: true }]],
                plugins: [
                    require.resolve("@babel/plugin-proposal-class-properties"),
                    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
                    require.resolve("babel-plugin-remove-graphql-queries"),
                    require.resolve("babel-plugin-react-require"),
                ],
            },
        })
        config.resolve.extensions.push(".ts", ".tsx")
        config.resolve.alias = {
            ...config.resolve.alias,
            "@emotion/core": toPath("node_modules/@emotion/react"),
            "emotion-theming": toPath("node_modules/@emotion/react"),
        }

        return config
    },
}
