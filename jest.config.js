const { defaults: tsjPreset } = require("ts-jest/presets")

module.exports = {
  ...tsjPreset,
  preset: "@testing-library/react-native",
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
  cacheDirectory: ".jest/cache",
  bail: true,
  testMatch: ["<rootDir>/src/**/?(*.)test.{ts,tsx}"],
  transform: {
    "\\.tsx?$": "ts-jest",
  },
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: 
    [
      'node_modules/(?!((jest-)?react-native|react-router-native|react-clone-referenced-element|expo(nent)?|@unimodules/.*|jest-expo/.*|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|native-base))',
    ],
}
