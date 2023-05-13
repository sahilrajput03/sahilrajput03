# Learn Eslint

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
