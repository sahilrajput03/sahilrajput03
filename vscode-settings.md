# Vscode settings

## User Settings

Source `/home/array/.config/Code/User/settings.json`

```json
{
  "workbench.colorTheme": "Default Dark+",
  "explorer.confirmDelete": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.minimap.enabled": false,
  "files.exclude": {
    "**/node_modules": true,
    "**/package-lock.json": true,
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "editor.cursorSmoothCaretAnimation": true,
  "keyboard.dispatch": "keyCode",
  "update.mode": "manual",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "explorer.confirmDragAndDrop": false,
  "editor.inlineSuggest.enabled": true,
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": true,
    "markdown": true
  },
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "java.imports.gradle.wrapper.checksums": [
    {
      "sha256": "e2b82129ab64751fd40437007bd2f7f2afb3c6e41a9198e628650b22d5824a14",
      "allowed": true
    }
  ],
  "editor.formatOnPaste": true,
  "prettier.printWidth": 120,
  "workbench.activityBar.visible": false,
  "editor.formatOnType": true,
  "editor.insertSpaces": false,
  "[rust]": {
    "editor.defaultFormatter": "matklad.rust-analyzer",
    "editor.tabSize": 4,
    "editor.detectIndentation": false,
    "editor.insertSpaces": false,
    "editor.formatOnType": true,
    "editor.formatOnSaveMode": "file"
  },
  "window.zoomLevel": 1
}
```

## Key Bindings:

```json
// Place your key bindings in this file to override the defaultsauto[]
[
  {
    "key": "alt+b",
    "command": "workbench.action.toggleSidebarVisibility"
        // Comments here works too
  },
  {
    "key": "ctrl+b",
    "command": "-workbench.action.toggleSidebarVisibility"
  },
  {
    "key": "ctrl+shift+b",
    "command": "-workbench.action.tasks.build"
  },
  {
    "key": "alt+k alt+s",
    "command": "workbench.action.openGlobalKeybindings"
  },
  {
    "key": "ctrl+k ctrl+s",
    "command": "-workbench.action.openGlobalKeybindings"
  },
  {
    "key": "alt+w",
    "command": "workbench.action.closeActiveEditor"
  },
  {
    "key": "ctrl+w",
    "command": "-workbench.action.closeActiveEditor"
  },
  {
    "key": "ctrl+tab",
    "command": "workbench.action.nextEditor"
  },
  {
    "key": "ctrl+pagedown",
    "command": "-workbench.action.nextEditor"
  },
  {
    "key": "ctrl+shift+tab",
    "command": "workbench.action.previousEditor"
  },
  {
    "key": "ctrl+pageup",
    "command": "-workbench.action.previousEditor"
  },
  {
    "key": "ctrl+shift+alt+enter",
    "command": "github.copilot.generate",
    "when": "editorTextFocus && github.copilot.activated"
  },
  {
    "key": "ctrl+enter",
    "command": "-github.copilot.generate",
    "when": "editorTextFocus && github.copilot.activated"
  }
]
```
