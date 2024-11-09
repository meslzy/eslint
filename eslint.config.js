import markdown from "eslint-plugin-markdown";
import perfectionist from "eslint-plugin-perfectionist";
import reactHooks from "eslint-plugin-react-hooks";
import unicorn from "eslint-plugin-unicorn";

import stylistic from "@stylistic/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";
import { config } from "typescript-eslint";

const defineRules = (id, rules) => {
  return Object.keys(rules).reduce((acc, key) => {
    acc[`${id}/${key}`] = rules[key];
    return acc;
  }, {});
};

const ignorePatterns = ["node_modules/**", "dist/**"];

const scriptConfig = config({
  name: "script",
  files: [
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
  ],
  ignores: ignorePatterns,
  languageOptions: {
    globals: globals.builtin,
    parser: typescriptParser,
    parserOptions: {
      jsx: true,
    },
  },
  plugins: {
    unicorn,
    stylistic,
    perfectionist,
  },
  rules: {
    ...defineRules("unicorn", {
      "better-regex": ["error"],
      "no-array-for-each": ["error"],
      "no-console-spaces": ["error"],
      "no-for-loop": ["error"],
      "no-instanceof-array": ["error"],
      "no-negated-condition": ["error"],
      "prefer-at": ["error"],
      "prefer-node-protocol": ["error"],
      "switch-case-braces": ["error"],
      "throw-new-error": ["error"],
    }),
    ...defineRules("stylistic", {
      "arrow-parens": ["error"],
      "arrow-spacing": ["error"],
      "block-spacing": ["error"],
      "brace-style": ["error"],
      "comma-dangle": ["error", "always-multiline"],
      "comma-spacing": ["error"],
      "comma-style": ["error", "last"],
      "computed-property-spacing": ["error", "never"],
      "dot-location": ["error", "property"],
      "eol-last": ["error"],
      "function-call-spacing": ["error", "never"],
      "generator-star-spacing": ["error", {
        "before": false,
        "after": true,
      }],
      "implicit-arrow-linebreak": ["error", "beside"],
      "indent": ["error", 2],
      "indent-binary-ops": ["error", 2],
      "jsx-closing-bracket-location": ["error", {
        "selfClosing": "line-aligned",
        "nonEmpty": "line-aligned",
      }],
      "jsx-closing-tag-location": ["error"],
      "jsx-curly-brace-presence": ["error", {
        "props": "always",
        "propElementValues": "always",
      }],
      "jsx-curly-newline": ["error", {
        "multiline": "consistent",
        "singleline": "consistent",
      }],
      "jsx-curly-spacing": ["error", {
        "when": "always",
        "children": true,
        "attributes": false,
        "spacing": {
          "objectLiterals": "never",
        },
      }],
      "jsx-equals-spacing": ["error", "never"],
      "jsx-indent": ["error", 2],
      "jsx-indent-props": ["error", 2],
      "jsx-props-no-multi-spaces": ["error"],
      "jsx-quotes": ["error", "prefer-double"],
      "jsx-sort-props": ["error", {
        "callbacksLast": true,
        "shorthandLast": true,
        "multiline": "last",
        "noSortAlphabetically": true,
        "reservedFirst": true,
      }],
      "jsx-tag-spacing": ["error", {
        "closingSlash": "never",
        "beforeSelfClosing": "never",
        "afterOpening": "never",
        "beforeClosing": "never",
      }],
      "jsx-wrap-multilines": ["error", {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line",
      }],
      "key-spacing": ["error", {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict",
      }],
      "keyword-spacing": ["error"],
      "member-delimiter-style": ["error", {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true,
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": true,
        },
      }],
      "no-extra-semi": ["error"],
      "no-mixed-spaces-and-tabs": ["error"],
      "no-multi-spaces": ["error"],
      "no-whitespace-before-property": ["error"],
      "quotes": ["error", "double"],
      "semi": ["error"],
      "semi-spacing": ["error", {
        "before": false,
        "after": true,
      }],
      "semi-style": ["error", "last"],
      "space-before-blocks": ["error"],
      "space-unary-ops": ["error"],
      "switch-colon-spacing": ["error", {
        "before": false,
        "after": true,
      }],
      "template-curly-spacing": ["error", "never"],
      "template-tag-spacing": ["error", "never"],
      "type-annotation-spacing": ["error", {
        "before": true,
        "after": true,
        "overrides": {
          "colon": {
            "before": false,
            "after": true,
          },
        },
      }],
      "type-generic-spacing": ["error"],
      "type-named-tuple-spacing": ["error"],
      "wrap-regex": ["error"],
      "yield-star-spacing": ["error", {
        "before": true,
        "after": true,
      }],
      "array-bracket-newline": ["error", "consistent"],
      "object-property-newline": ["error"],
      "object-curly-newline": ["error", {
        "ObjectPattern": "never",
        "ObjectExpression": {
          "consistent": true,
        },
        "ExportDeclaration": {
          "consistent": true,
        },
      }],
    }),
    ...defineRules("perfectionist", {
      "sort-imports": ["error", {
        "type": "alphabetical",
        "order": "asc",
        "newlinesBetween": "always",
        "internalPattern": [
          "~/**",
        ],
        "groups": [
          "side-effect",
          ["bun-type", "bun"],
          ["bun-namespace-type", "bun:*"],
          ["builtin-type", "builtin"],
          ["react-type", "react"],
          ["react-dom-type", "react-dom"],
          ["next-type", "next"],
          ["next-related-type", "next-related"],
          ["elysia-type", "elysia"],
          ["elysia-related-type", "elysia-related"],
          ["supabase-type", "supabase"],
          ["mantine-type", "mantine"],
          ["tabler-type", "tabler"],
          ["plugin-type", "plugin"],
          ["external-type", "external"],
          ["internal-type", "internal"],
          ["parent-type", "parent"],
          ["sibling-type", "sibling"],
          ["index-type", "index"],
          "style",
          "side-effect-style",
        ],
        "customGroups": {
          "value": {
            "bun": "bun",
            "bun-namespace": "bun:*",
            "react": ["react"],
            "react-dom": ["react-dom"],
            "next": ["next"],
            "next-related": ["next/**"],
            "elysia": ["elysia"],
            "elysia-related": ["{*elysiajs**,*elysiajs/**}"],
            "supabase": ["{*supabase**,*supabase/**}"],
            "mantine": ["{*mantine**,*mantine/**}"],
            "tabler": ["{*tabler**,*tabler/**}"],
            "plugin": ["*-plugin-*"],
          },
          "type": {
            "bun-type": ["bun"],
            "bun-namespace-type": ["bun:*"],
            "react-type": ["react"],
            "react-dom-type": ["react-dom"],
            "next-type": ["next"],
            "next-related-type": ["next/**"],
            "elysia-type": ["elysia"],
            "elysia-related-type": ["{*elysiajs**,*elysiajs/**}"],
            "supabase-type": ["{*supabase**,*supabase/**}"],
            "mantine-type": ["{*mantine**,*mantine/**}"],
            "tabler-type": ["{*tabler**,*tabler/**}"],
            "plugin-type": ["*-plugin-*"],
          },
        },
        "environment": "node",
      }],
      "sort-named-imports": ["error", {
        "type": "line-length",
        "groupKind": "values-first",
      }],
    }),
  },
});

const reactConfig = config({
  name: "react",
  ignores: ignorePatterns,
  files: [
    "**/*.jsx",
    "**/*.tsx",
  ],
  plugins: {
    reactHooks,
  },
  rules: {
    ...defineRules("reactHooks", {
      "rules-of-hooks": ["error"],
      "exhaustive-deps": ["warn"],
    }),
  },
});

const markdownConfig = config({
  name: "markdown",
  ignores: ignorePatterns,
  files: [
    "**/*.md",
  ],
  languageOptions: {
    globals: globals.builtin,
    parser: typescriptParser,
    parserOptions: {
      jsx: true,
    },
  },
  plugins: {
    markdown,
  },
  processor: "markdown/markdown",
  rules: {
    ...defineRules("markdown", {
      "remark": ["error"],
    }),
  },
});

export default config(
  ...scriptConfig,
  ...reactConfig,
  ...markdownConfig,
);
