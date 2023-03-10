const eslintRules = require("./rules/eslint");
const typescriptRules = require("./rules/typescript.cjs");

module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: [
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        ...eslintRules,
        ...typescriptRules
    },
};