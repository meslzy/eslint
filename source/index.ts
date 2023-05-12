import eslintRules from "./rules/eslint";
import reactRules from "./rules/react";
import typescriptRules from "./rules/typescript";

export default {
  env: {
    es6: true,
    node: true,
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
    project: true,
    sourceType: "module",
    ecmaVersion: "latest",
  },
  configs: {
    react: {
      env: {
        browser: true,
      },
      plugins: [
        "react",
      ],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
      ],
      parserOptions: {
        ecmaFeatures: {
          "jsx": true,
        },
      },
      rules: {
        ...reactRules,
      },
    },
  },
  rules: {
    ...eslintRules,
    ...typescriptRules,
  },
};