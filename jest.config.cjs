/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  resolver: "jest-ts-webcompat-resolver",
  testMatch: ["**/src/**/*.test.ts"],
};
