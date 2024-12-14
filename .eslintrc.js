module.exports = {
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:@next/next/recommended",
        "prettier",
    ],
    plugins: ["@typescript-eslint", "prefer-arrow", "prettier"],
    env: {
        es6: true,
        browser: true,
        jest: true,
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
        react: {
            version: "detect",
        },
    },
    rules: {
        "prettier/prettier": "error",
        "no-unsafe-finally": "off",
        curly: "error",
        "dot-notation": "off",
        eqeqeq: ["error", "smart"],
        "guard-for-in": "error",
        "id-denylist": [
            "error",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined",
        ],
        "id-match": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-debugger": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-shadow": [
            "error",
            {
                hoist: "all",
            },
        ],
        "no-underscore-dangle": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-var": "error",

        "prefer-arrow/prefer-arrow-functions": [
            "warn",
            {
                disallowPrototype: true,
                singleReturnOnly: true,
                classPropertiesAllowed: true,
            },
        ],
        radix: "error",
        "use-isnan": "error",
        "no-use-before-define": [0],
        "@typescript-eslint/no-use-before-define": [1],
        // "no-unused-vars": "error",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: true,
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            },
        ],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/member-delimiter-style": [
            "off",
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            },
        ],
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "react/prop-types": 0,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
}
