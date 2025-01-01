import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/double";
const baseTestDir = "<rootDir>/src/test/double";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/**.ts`],
  testMatch: [`${baseTestDir}/**/**.ts`],
};

export default config;
