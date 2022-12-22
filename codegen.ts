import type { CodegenConfig } from "@graphql-codegen/cli"
import * as dotenv from "dotenv"
dotenv.config()

const config: CodegenConfig = {
    overwrite: true,
    ignoreNoDocuments: true,
    documents: ["src/queries/graphql"],
    schema: `https://graphql.contentful.com/content/v1/spaces/z41luxcckja5/environments/master?access_token=${process.env.ACCESS_TOKEN}`,
    generates: {
        "./schema/index.ts": {
            plugins: ["typescript", "typescript-operations"],
            config: {
                flattenGeneratedTypes: true,
                ignoreEnumValuesFromSchema: true,
                flattenGeneratedTypesIncludeFragments: true,
                skipTypename: false,
                dedupeFragments: true,
            },
            presetConfig: {
                fragmentMasking: false,
            },
        },
    },
}

export default config
