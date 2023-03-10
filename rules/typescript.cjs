const {off, warn, error} = require("./utils/value");

module.exports = {
    "@typescript-eslint/adjacent-overload-signatures": error,
    "@typescript-eslint/array-type": warn,
    "@typescript-eslint/ban-types": error,
    "@typescript-eslint/consistent-type-exports": error,
    "@typescript-eslint/consistent-type-imports": [
        error, {
            prefer: "type-imports",
        }
    ],
    "@typescript-eslint/member-ordering": [
        error, {
            default: [
                "field",
                "constructor",
                "signature",
                "method"
            ],
            classes: [
                // Fields
                "#private-static-field",
                "private-static-field",
                "protected-static-field",
                "public-static-field",

                "private-decorated-field",
                "protected-decorated-field",
                "public-decorated-field",

                "#private-instance-field",
                "private-instance-field",
                "protected-instance-field",
                "public-instance-field",

                "protected-abstract-field",
                "public-abstract-field",

                "#private-field",
                "private-field",
                "protected-field",
                "public-field",

                "abstract-field",
                "instance-field",
                "static-field",
                "decorated-field",
                "field",
                // Getters
                "#private-static-get",
                "private-static-get",
                "protected-static-get",
                "public-static-get",

                "private-decorated-get",
                "protected-decorated-get",
                "public-decorated-get",

                "#private-instance-get",
                "private-instance-get",
                "protected-instance-get",
                "public-instance-get",

                "protected-abstract-get",
                "public-abstract-get",

                "#private-get",
                "private-get",
                "protected-get",
                "public-get",

                "abstract-get",
                "instance-get",
                "static-get",
                "decorated-get",
                "get",

                // Setters
                "private-static-set",
                "#private-static-set",
                "protected-static-set",
                "public-static-set",

                "private-decorated-set",
                "protected-decorated-set",
                "public-decorated-set",

                "#private-instance-set",
                "private-instance-set",
                "protected-instance-set",
                "public-instance-set",

                "protected-abstract-set",
                "public-abstract-set",

                "#private-set",
                "private-set",
                "protected-set",
                "public-set",

                "abstract-set",
                "instance-set",
                "static-set",
                "decorated-set",
                "set",
                // Constructors
                "private-constructor",
                "protected-constructor",
                "public-constructor",
                "constructor",
                // Static initialization
                "static-initialization",
                // Index signature
                "signature",
                "call-signature",
                // Methods
                "#private-static-method",
                "private-static-method",
                "protected-static-method",
                "public-static-method",

                "private-decorated-method",
                "protected-decorated-method",
                "public-decorated-method",

                "#private-instance-method",
                "private-instance-method",
                "protected-instance-method",
                "public-instance-method",

                "protected-abstract-method",
                "public-abstract-method",

                "#private-method",
                "private-method",
                "protected-method",
                "public-method",

                "abstract-method",
                "instance-method",
                "static-method",
                "decorated-method",
                "method"
            ],
        }
    ],
    "@typescript-eslint/method-signature-style": [
        error, "property"
    ],
    "@typescript-eslint/naming-convention": [
        error, {
            selector: "default",
            format: [
                "camelCase"
            ],
        }
    ],
    "@typescript-eslint/no-confusing-non-null-assertion": error,
    "@typescript-eslint/no-confusing-void-expression": warn,
    "@typescript-eslint/no-duplicate-enum-values": error,
    "@typescript-eslint/no-empty-interface": warn,
    "@typescript-eslint/no-explicit-any": off,
    "@typescript-eslint/no-extra-non-null-assertion": error,
    "@typescript-eslint/no-extraneous-class": warn,
    "@typescript-eslint/no-floating-promises": off,
    "@typescript-eslint/no-import-type-side-effects": error,
    "@typescript-eslint/no-meaningless-void-operator": error,
    "@typescript-eslint/no-misused-new": error,
    "@typescript-eslint/no-misused-promises": error,
    "@typescript-eslint/no-mixed-enums": error,
    "@typescript-eslint/no-namespace": off,
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": error,
    "@typescript-eslint/no-non-null-asserted-optional-chain": off,
    "@typescript-eslint/no-require-imports": off,
    "@typescript-eslint/no-this-alias": error,
    "@typescript-eslint/no-unnecessary-condition": [
        error, {
            allowConstantLoopConditions: true,
        }
    ],
    "@typescript-eslint/no-useless-empty-export": off,
    "@typescript-eslint/no-var-requires": error,
    "@typescript-eslint/prefer-as-const": error,
    "@typescript-eslint/prefer-enum-initializers": error,
    "@typescript-eslint/prefer-for-of": warn,
    "@typescript-eslint/prefer-function-type": error,
    "default-param-last": off,
    "@typescript-eslint/default-param-last": error,
    "no-dupe-class-members": off,
    "@typescript-eslint/no-dupe-class-members": error,
    "no-extra-semi": off,
    "@typescript-eslint/no-extra-semi": error,
    "no-invalid-this": off,
    "@typescript-eslint/no-invalid-this": error
};