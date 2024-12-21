import stylistic from "@stylistic/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import perfectionist from "eslint-plugin-perfectionist";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import { config } from "typescript-eslint";

import { defineRules } from "./utils/rules";

export const stylisticId = "stylistic";
export const unicornId = "unicorn";
export const perfectionistId = "perfectionist";

export interface MeslzyOptions {
  files?: string[];
  moreFiles?: string[];
  ignores?: string[];
  moreIgnores?: string[];
  rules?: Record<string, any>;
}

export const meslzyConfigs = (options?: MeslzyOptions) => {
  return config({
    files: options?.files ?? [
      "**/*.js",
      "**/*.jsx",
      "**/*.ts",
      "**/*.tsx",
      ...options?.moreFiles ?? [],
    ],
    ignores: options?.ignores ?? [
      "**/*.d.ts",
      "**/node_modules/**",
      "**/dist/**",
      "**/out/**",
      "**/build/**",
      "**/.next/**",
      ...options?.moreIgnores ?? [],
    ],
    plugins: {
      [stylisticId]: stylistic,
      [unicornId]: unicorn,
      [perfectionistId]: perfectionist,
    },
    languageOptions: {
      parser: typescriptParser,
      globals: globals.builtin,
      parserOptions: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...defineRules(stylisticId, {
        "array-bracket-newline": ["error", "consistent"],
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": ["error", "consistent"],
        "arrow-parens": ["error", "always"],
        "arrow-spacing": ["error", {
          before: true,
          after: true,
        }],
        "block-spacing": ["error"],
        "brace-style": ["error", "1tbs", {
          allowSingleLine: true,
        }],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", {
          before: false,
          after: true,
        }],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "curly-newline": ["error", {
          multiline: true,
          consistent: true,
          minElements: 2,
        }],
        "dot-location": ["error", "property"],
        "eol-last": ["error"],
        "function-call-spacing": ["error", "never"],
        "generator-star-spacing": ["error", {
          before: false,
          after: true,
        }],
        "implicit-arrow-linebreak": ["error", "beside"],
        "indent": ["error", 2],
        "indent-binary-ops": ["error", 2],
        "jsx-closing-bracket-location": ["error", {
          selfClosing: "line-aligned",
          nonEmpty: "line-aligned",
        }],
        "jsx-closing-tag-location": ["error"],
        "jsx-curly-brace-presence": ["error", {
          props: "always",
          propElementValues: "always",
        }],
        "jsx-curly-newline": ["error", {
          multiline: "consistent",
          singleline: "consistent",
        }],
        "jsx-curly-spacing": ["error", {
          when: "always",
          children: true,
          attributes: false,
          spacing: {
            objectLiterals: "never",
          },
        }],
        "jsx-equals-spacing": ["error", "never"],
        "jsx-indent": ["error", 2],
        "jsx-indent-props": ["error", 2],
        "jsx-newline": ["error", {
          allowMultilines: false,
          prevent: true,
        }],
        "jsx-props-no-multi-spaces": ["error"],
        "jsx-quotes": ["error", "prefer-double"],
        "jsx-sort-props": ["error", {
          ignoreCase: false,
          callbacksLast: true,
          shorthandLast: true,
          multiline: "last",
          noSortAlphabetically: true,
          reservedFirst: true,
        }],
        "jsx-tag-spacing": ["error", {
          closingSlash: "never",
          beforeSelfClosing: "never",
          afterOpening: "never",
          beforeClosing: "never",
        }],
        "jsx-wrap-multilines": ["error", {
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
        }],
        "key-spacing": ["error", {
          beforeColon: false,
          afterColon: true,
          mode: "strict",
        }],
        "keyword-spacing": ["error"],
        "linebreak-style": ["error", "unix"],
        "member-delimiter-style": ["error", {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: true,
          },
        }],
        "no-extra-semi": ["error"],
        "no-mixed-operators": ["error", {
          allowSamePrecedence: true,
        }],
        "no-mixed-spaces-and-tabs": ["error"],
        "no-multi-spaces": ["error", {
          ignoreEOLComments: true,
        }],
        "no-multiple-empty-lines": ["error", {
          max: 2,
          maxBOF: 0,
          maxEOF: 0,
        }],
        "no-whitespace-before-property": ["error"],
        "nonblock-statement-body-position": ["error", "beside"],
        "object-curly-newline": ["error", {
          ObjectPattern: "never",
          ObjectExpression: {
            consistent: true,
          },
          ExportDeclaration: {
            consistent: true,
          },
        }],
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": ["error", "after"],
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": ["error", "double", {
          avoidEscape: true,
        }],
        "rest-spread-spacing": ["error", "never"],
        "semi": ["error", "always"],
        "semi-spacing": ["error", {
          before: false,
          after: true,
        }],
        "semi-style": ["error", "last"],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        }],
        "space-in-parens": ["error", "never"],
        "switch-colon-spacing": ["error", {
          after: true,
          before: false,
        }],
        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": ["error", "never"],
        "type-annotation-spacing": ["error", {
          before: true,
          after: true,
          overrides: {
            colon: {
              before: false,
              after: true,
            },
          },
        }],
        "type-generic-spacing": ["error"],
        "type-named-tuple-spacing": ["error"],
        "wrap-regex": ["error"],
        "yield-star-spacing": ["error", {
          before: true,
          after: true,
        }],
      }),
      ...defineRules(unicornId, {
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
      ...defineRules(perfectionistId, {
        "sort-imports": ["error", {
          type: "alphabetical",
          order: "asc",
          newlinesBetween: "always",
          internalPattern: [
            "~/.+",
          ],
          groups: [
            "side-effect",
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
            ["external-type", "external"],
            ["internal-type", "internal"],
            ["parent-type", "parent"],
            ["sibling-type", "sibling"],
            ["index-type", "index"],
            "style",
            "side-effect-style",
          ],
          customGroups: {
            value: {
              "react": ["react"],
              "react-dom": ["react-dom"],
              "next": ["next"],
              "next-related": ["next/.+"],
              "elysia": ["elysia"],
              "elysia-related": ["elysiajs.+"],
              "supabase": ["supabase.+"],
              "mantine": ["mantine.+"],
              "tabler": ["tabler.+"],
            },
            type: {
              "react-type": ["react"],
              "react-dom-type": ["react-dom"],
              "next-type": ["next"],
              "next-related-type": ["next/.+"],
              "elysia-type": ["elysia"],
              "elysia-related-type": ["elysiajs.+"],
              "supabase-type": ["supabase.+"],
              "mantine-type": ["mantine.+"],
              "tabler-type": ["tabler.+"],
            },
          },
          environment: "node",
        }],
        "sort-named-imports": ["error", {
          type: "line-length",
          groupKind: "values-first",
        }],
      }),
    },
  });
};
