module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  // parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ["server.js", "src/store/**/*.ts", "dist/*"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": "off",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/ban-ts-ignore": "off",
    "prettier/prettier": [
      "warn",
      {
        editorconfig: true,
        singleQuote: false,
        semi: false,
        trailingComma: "es5",
        printWidth: 100,
      }
    ]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
        es6: true,
      },
    },
  ],
};
