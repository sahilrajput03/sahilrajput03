# Learn Eslint

**Quick Links:**
- My eslint files: [Click here](https://github.com/sahilrajput03/config/tree/main/files)

## Install eslint in JSX for `no-multiple-empty-lines`

```bash
npm install eslint-plugin-react --save-dev
```

In your eslint config file you can do:

```bash
module.exports = {
  // ... other ESLint settings
  rules: {
    // Never have multiple empty lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1, // Set the maximum number of empty lines to 1 (or any other value you prefer)
        maxBOF: 1, // Set the maximum number of empty lines at the beginning of the file
        maxEOF: 1, // Set the maximum number of empty lines at the end of the file
      },
    ],

    // Always have empty line in the end of file
    'eol-last': ["error", "always"]
  },
};
```

## This is really great playground feature to test eslint rules of typescript

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/de67d39f-4dd0-4151-b753-2f4bb5902d29" width="600" />

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/2d6ad63a-0d1c-427e-b201-cab3e6da707c" width="600" />

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/afee3825-2727-4131-9b1e-6c87134efc2b" width="600" />


## Custom eslint plugin

- file: `./utils/logger-utils.ts`

```
// file: ./utils/logger-utils.ts
// eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
export const jestLogger = require('console').log;
```

- file: `./eslint-custom-plugins/eslint-plugin-noJestLogger.js`

```js
// file: ./eslint-custom-plugins/eslint-plugin-noJestLogger.js
/**
 * Installing this to any project requires you to run:
 * npm i --dev eslint-plugin-noJestLogger@file:./eslint-custom-plugins/eslint-plugin-noJestLogger.js
 *
 * In your .eslint.js file, you can add this plugin like this:
 *
 *   plugins: [
 *     "@typescript-eslint/eslint-plugin",
 *     'noJestLogger',
 *   ],
 *
 *
 * Now, you can define, warning level for it like this:
 *
 *   rules: {
 *     /* Other rules here...*
 *     "noJestLogger/noJestLogger": "warn",
 *   }
 */

const functionName = 'jestLogger';

module.exports = {
  rules: {
    noJestLogger: {
      create(context) {
        return {
          CallExpression(node) {
            if (node.callee.name === functionName) {
              context.report({
                node,
                message: 'Unexpected jestLogger statement',
              });
            }
          },
        };
      },
    },
  },
};
```

## Disable eslint temporarily for a file (slasher tested)

```
// ! Please remove below line before making PR
/* eslint-disable */
```

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
