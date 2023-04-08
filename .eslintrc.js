const eslintRules = require("./rules/eslint");
const typescriptRules = require("./rules/typescript");

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  globals: {
    NodeJS: true,
  },
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    ...eslintRules,
    ...typescriptRules,
  },
};