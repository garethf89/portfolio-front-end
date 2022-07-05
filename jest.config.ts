export default {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: "v8",

    preset: "ts-jest",

    // The root directory that Jest should scan for tests and modules within
    rootDir: "",

    // A list of paths to directories that Jest should use to search for files in
    roots: ["src"],

    setupFiles: ["jest-canvas-mock"],
    setupFilesAfterEnv: ["<rootDir>/jest/setup.ts"],

    // The test environment that will be used for testing
    testEnvironment: "jsdom",

    // The glob patterns Jest uses to detect test files
    testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
}
