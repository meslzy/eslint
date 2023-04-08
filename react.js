const {off, error} = require("./rules/utils/value");

const eslintRules = require("./rules/eslint");
const typescriptRules = require("./rules/typescript");

const reactRules = {
  "@typescript-eslint/no-non-null-assertion": off,
  "react/function-component-definition": [
    error, {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    },
  ],
  "react/jsx-closing-bracket-location": [
    error,
    "tag-aligned",
  ],
  "react/jsx-closing-tag-location": error,
  "react/jsx-curly-brace-presence": [
    error, {
      props: "always",
      children: "never",
      propElementValues: "always",
    },
  ],
  "react/jsx-curly-spacing": [
    error, {
      when: "always",
    },
  ],
  "react/jsx-equals-spacing": [
    error,
    "never",
  ],
  "react/jsx-indent": [
    error,
    2,
  ],
  "react/jsx-key": error,
  "react/jsx-no-duplicate-props": error,
  "react/jsx-pascal-case": error,
  "react/jsx-props-no-multi-spaces": error,
  "react/jsx-sort-props": [
    error, {
      ignoreCase: true,
      shorthandLast: true,
      callbacksLast: true,
      multiline: "last",
    },
  ],
};

module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  globals: {
    NodeJS: true,
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      "jsx": true,
    },
  },
  rules: {
    ...eslintRules,
    ...typescriptRules,
    ...reactRules,
  },
};