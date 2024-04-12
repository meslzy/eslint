import parser from "@typescript-eslint/parser";

import stylistic from "@stylistic/eslint-plugin";

const stylisticId = "@stylistic";

const defineRules = (id, rules) => {
  return Object.keys(rules).reduce((acc, key) => {
    acc[`${id}/${key}`] = rules[key];
    return acc;
  }, {});
};

const meslzyConfig = {
  files: [
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
  ],
  ignores: [
    "**/dist/**",
  ],
  plugins: {
    [stylisticId]: stylistic,
  },
  languageOptions: {
    parser: parser,
    parserOptions: {
      jsx: true,
    },
  },
  rules: defineRules(stylisticId, {
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
};

export default meslzyConfig;
