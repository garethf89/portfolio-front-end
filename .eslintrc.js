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
        "@typescript-eslint/camelcase": "off",
        "comma-dangle": "off",
        curly: "error",
        "dot-notation": "off",
        "eol-last": "error",
        eqeqeq: ["error", "smart"],
        "guard-for-in": "error",
        "id-blacklist": [
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
        "no-multiple-empty-lines": "off",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-shadow": [
            "error",
            {
                hoist: "all",
            },
        ],
        "no-trailing-spaces": "error",
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
        "quote-props": ["error", "as-needed"],
        radix: "error",
        "spaced-comment": "error",
        "space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                asyncArrow: "always",
                named: "never",
            },
        ],
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
        "value-keyword-case": "off",
        // TODO - think about this one
        // "sort-imports": [
        //     "error",
        //     {
        //         ignoreCase: false,
        //         ignoreDeclarationSort: false,
        //         ignoreMemberSort: false,
        //         // memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        //         allowSeparatedGroups: false,
        //     },
        // ],
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
}
