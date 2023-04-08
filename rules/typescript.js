const {off, warn, error} = require("./utils/value");

module.exports = {
  "@typescript-eslint/ban-types": error,
  "@typescript-eslint/consistent-type-exports": error,
  "@typescript-eslint/consistent-type-imports": [
    error, {
      prefer: "type-imports",
    },
  ],
  "@typescript-eslint/no-duplicate-enum-values": error,
  "@typescript-eslint/no-empty-interface": warn,
  "@typescript-eslint/no-explicit-any": off,
  "@typescript-eslint/no-floating-promises": off,
  "@typescript-eslint/no-import-type-side-effects": error,
  "@typescript-eslint/no-meaningless-void-operator": error,
  "@typescript-eslint/no-misused-new": error,
  "@typescript-eslint/no-mixed-enums": error,
  "@typescript-eslint/no-namespace": off,
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": error,
  "@typescript-eslint/no-non-null-asserted-optional-chain": off,
  "@typescript-eslint/no-require-imports": off,
  "@typescript-eslint/no-this-alias": off,
  "@typescript-eslint/no-useless-empty-export": off,
  "@typescript-eslint/no-var-requires": off,
  "@typescript-eslint/prefer-as-const": error,
  "@typescript-eslint/prefer-enum-initializers": error,
  "@typescript-eslint/prefer-for-of": warn,
  "@typescript-eslint/prefer-function-type": error,
  "@typescript-eslint/default-param-last": error,
  "@typescript-eslint/no-dupe-class-members": error,
  "@typescript-eslint/no-extra-semi": error,
  "@typescript-eslint/no-invalid-this": error,
  "@typescript-eslint/no-unused-vars": [
    warn, {
      argsIgnorePattern: "^_",
    },
  ],
  "@typescript-eslint/ban-ts-comment": off,
};