module.exports = {
  preset: "@shelf/jest-mongodb",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      diagnostics: false,
    },
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testEnvironment: "node",
  collectCoverageFrom: [
    "**/src/**",
    "!src/index.ts",
    "!src/testDbSetup.ts",
    "!src/utils/db.ts",
  ],
  testMatch: ["**/src/**/*.test.js", "**/src/**/*.test.ts"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  setupFilesAfterEnv: ["./src/testDbSetup.ts"],
};
