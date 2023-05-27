# Learn Eslint

## With Piyush - Setup Eslint in a backend project

1. Install dependencies -

```ts
npm i -D @typescript-eslint/parser eslint-plugin-jest @typescript-eslint/eslint-plugin eslint eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-config-standard-with-typescript@33.0.0 ts-jest @types/jest jest
```

2. Add a eslint config file `.eslintrc.js` with following contents -

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  env: {
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    'no-unused-vars': 'warn',
    'comma-dangle': 'off',
    'jest/expect-expect': [
      'error',
      { assertFunctionNames: ['expect', 'request.**.expect'] },
    ],
    'no-console': 'warn',
    '@typescript-eslint/no-extra-semi': 'warn',
    '@typescript-eslint/semi': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/require-await': 'off',
  },
  overrides: [],
}
```

## Autofix and Add missing imports on file save

```json
"[javascript]": {
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.addMissingImports": true
  },
  "editor.defaultFormatter": "vscode.typescript-language-features"
},
"[javascriptreact]": {
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.addMissingImports": true
  },
  "editor.defaultFormatter": "vscode.typescript-language-features"
},
"[typescript]": {
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.addMissingImports": true
  },
  "editor.defaultFormatter": "vscode.typescript-language-features"
},
"[typescriptreact]": {
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.addMissingImports": true
  },
  "editor.defaultFormatter": "vscode.typescript-language-features"
},
```

- **Fix all autofixable problems:**

  FYI: You ca access this option from vscode's pallet as well.

  ![image](https://user-images.githubusercontent.com/31458531/209343939-cc7690db-f8fd-489a-b674-61bfe15a0376.png)

- Thats where you can find eslint configurations of airbnb: [Click here](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb/rules)

![image](https://user-images.githubusercontent.com/31458531/209343864-b004171b-fc09-43f4-901b-f2b6dadea23b.png)

- Clean Code Linters

Source: [Click here](https://github.com/collections/clean-code-linters)

![image](https://user-images.githubusercontent.com/31458531/210177248-99ecbd73-cea2-4738-9d74-1a5570dc7a78.png)
