const {off, warn, error} = require("./utils/value");

const possibleProblems = {
    "array-callback-return": [
        warn, {
            allowImplicit: true,
        }
    ],
    "constructor-super": error,
    "for-direction": error,
    "getter-return": [
        error, {
            allowImplicit: true,
        }
    ],
    "no-async-promise-executor": off,
    "no-await-in-loop": off,
    "no-class-assign": error,
    "no-compare-neg-zero": error,
    "no-cond-assign": [
        error, {
            always: true,
        }
    ],
    "no-const-assign": error,
    "no-constant-binary-expression": error,
    "no-constant-condition": [
        error, {
            checkLoops: false,
        },
    ],
    "no-constructor-return": error,
    "no-control-regex": error,
    "no-debugger": error,
    "no-dupe-args": error,
    "no-dupe-class-members": error,
    "no-dupe-else-if": error,
    "no-dupe-keys": error,
    "no-duplicate-case": error,
    "no-duplicate-imports": off,
    "no-empty-character-class": error,
    "no-empty-pattern": error,
    "no-ex-assign": error,
    "no-fallthrough": error,
    "no-func-assign": error,
    "no-import-assign": error,
    "no-inner-declarations": [
        error, {
            functions: true,
        }
    ],
    "no-invalid-regexp": error,
    "no-irregular-whitespace": [
        error, {
            skipStrings: false,
        },
    ],
    "no-loss-of-precision": error,
    "no-misleading-character-class": error,
    "no-new-native-nonconstructor": error,
    "no-new-symbol": error,
    "no-obj-calls": error,
    "no-promise-executor-return": off,
    "no-prototype-builtins": off,
    "no-self-assign": error,
    "no-self-compare": error,
    "no-setter-return": error,
    "no-sparse-arrays": error,
    "no-template-curly-in-string": error,
    "no-this-before-super": error,
    "no-undef": error,
    "no-unexpected-multiline": error,
    "no-unreachable": warn,
    "no-unreachable-loop": off,
    "no-unsafe-finally": error,
    "no-unsafe-negation": error,
    "no-unsafe-optional-chaining": [
        error, {
            disallowArithmeticOperators: true,
        }
    ],
    "no-unused-vars": warn,
    "no-use-before-define": [
        error, {
            functions: true,
            classes: true,
            variables: true,
        }
    ],
    "no-useless-backreference": error,
    "use-isnan": error,
    "valid-typeof": [
        error, {
            requireStringLiterals: true,
        }
    ],
};

const suggestions = {
    "arrow-body-style": [
        error, {
            "as-needed": true,
        },
    ],
    "camelcase": [
        error, {
            properties: "always",
        },
    ],
    "consistent-return": error,
    "curly": [
        error, "multi-line",
    ],
    "eqeqeq": [
        error, "always",
    ],
    "new-cap": error,
    "no-bitwise": error,
    "no-else-return": [
        error, {
            allowElseIf: true,
        },
    ],
    "no-empty": warn,
    "no-empty-function": warn,
    "no-extra-boolean-cast": error,
    "no-extra-semi": error,
    "no-floating-decimal": error,
    "no-global-assign": error,
    "no-lonely-if": error,
    "no-unused-labels": error,
    "no-useless-catch": error,
    "no-useless-constructor": error,
    "no-useless-escape": warn,
    "prefer-arrow-callback": error,
    "prefer-const": error,
    "prefer-named-capture-group": error,
    "prefer-object-has-own": error,
    "prefer-rest-params": error,
    "require-await": error,
    "require-yield": error,
    "sort-imports": [
        error, {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            allowSeparatedGroups: false,
            memberSyntaxSortOrder: [
                "all",
                "single",
                "multiple",
                "none",
            ],
        }
    ],
    "spaced-comment": [
        error, "always"
    ],

};

const layoutFormatting = {
    "array-bracket-newline": [
        error, {
            multiline: true,
        },
    ],
    "array-bracket-spacing": [
        error, "always",
    ],
    "arrow-parens": [
        error, "always",
    ],
    "arrow-spacing": [
        error, {
            before: true,
            after: true,
        },
    ],
    "block-spacing": [
        error, "always",
    ],
    "brace-style": [
        error, "1tbs",
    ],
    "comma-spacing": [
        error, {
            before: false,
            after: true,
        },
    ],
    "comma-style": [
        error, "first",
    ],
    "computed-property-spacing": [
        error, "always", {
            enforceForClassMembers: false,
        },
    ],
    "generator-star-spacing": [
        error, {
            before: true,
            after: false,
        },
    ],
    "indent": [
        error, "tab"
    ],
    "jsx-quotes": [
        error, "prefer-double",
    ],
    "key-spacing": [
        error, {
            beforeColon: false,
            afterColon: true,
        },
    ],
    "keyword-spacing": error,
    "linebreak-style": [
        error, "unix",
    ],
    "lines-between-class-members": [
        error, "always",
    ],
    "no-multi-spaces": error,
    "no-multiple-empty-lines": [
        error, {
            max: 2,
        },
    ],
    "quotes": [
        error, "double",
    ],
    "semi": [
        error, "always",
    ],
    "semi-spacing": [
        error, {
            before: false,
            after: true,
        },
    ],
    "space-in-parens": [
        error, "always"
    ],
    "template-curly-spacing": [
        error, "always",
    ],
};

module.exports = {
    ...possibleProblems,
    ...suggestions,
    ...layoutFormatting,
};