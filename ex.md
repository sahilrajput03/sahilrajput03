# Browser Code Explorer - Edit from website

Build a front-end-only, web-based code explorer with CodeMirror 6. The app must let a user select a local folder, browse every nested file, search files quickly, open and edit several files in tabs, and work comfortably on mobile.

## Browser filesystem support

- Primary API: use the File System Access API:

  ```ts
  const directoryHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
  ```

- Recursively walk `directoryHandle.entries()` and retain each file's `FileSystemFileHandle`, relative path, name, and extension.
- Open a file with `handle.getFile()` and save it with `handle.createWritable()` followed by `write(content)` and `close()`.
- Feature-detect `showDirectoryPicker`. For unsupported browsers, offer `<input type="file" webkitdirectory multiple>` as a read-only fallback, clearly noting that browser security restrictions prevent writing files back in that mode.
- Do not send files to a backend; all indexing, searching, editing, and saving happens locally in the browser.

## Required UX

1. **Folder selection and explorer**
   - Show a prominent “Open Folder” action on first load.
   - Render an expandable directory tree after a folder is selected.
   - Ignore common noise directories by default (`node_modules`, `.git`, `dist`, `build`, `.next`, coverage), with a setting to include them if needed.

2. **Fuzzy file search**
   - Use `fuse.js` over both relative paths and filenames.
   - Support `Cmd/Ctrl + P` to open a search dialog and auto-focus the input.
   - Results should display the filename plus its relative path and be keyboard accessible: arrows to navigate, Enter to open, Escape to close.
   - Selecting a result opens it in an existing tab when already open; otherwise it creates and activates a tab.

3. **Multi-file tabs**
   - Allow multiple open tabs, each with a close button and unsaved-change indicator (`•`).
   - Keep one CodeMirror instance and swap its document/state when changing tabs, preserving per-tab cursor position and scroll position.
   - On mobile, make the tab row horizontally scrollable with touch scrolling; active tabs must scroll into view. Keep close targets at least 44×44 px.
   - Confirm before closing a dirty tab. Provide `Cmd/Ctrl + S` to save the active file.

4. **Editing**
   - CodeMirror must be editable and use line numbers, bracket matching, close brackets, autocompletion, search, selection highlighting, and history.
   - Load file content lazily when a file is opened. Track dirty state after changes.
   - Saving writes the current content through the original `FileSystemFileHandle`; update the saved snapshot and remove the dirty marker only after a successful write.
   - Warn users about unsaved open tabs before page unload.

5. **Theme and language support**
   - Use a VS Code-like default dark theme, preferably `@uiw/codemirror-theme-vscode` (VS Code Dark style). Respect `prefers-color-scheme` if a light companion theme is included.
   - Add TypeScript support with `@codemirror/lang-javascript` using `javascript({ typescript: true })` for `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs`, and `.cjs` files.
   - Select extensions per file type; at minimum include JSON, HTML, CSS, Markdown, and TypeScript/JavaScript. Unknown extensions should open as plain text.

## Suggested dependencies

```sh
npm install @codemirror/state @codemirror/view @codemirror/commands \\
  @codemirror/autocomplete @codemirror/search @codemirror/language \\
  @codemirror/lang-javascript @codemirror/lang-json @codemirror/lang-html \\
  @codemirror/lang-css @codemirror/lang-markdown \\
  @uiw/codemirror-theme-vscode fuse.js
```

## State model

```ts
type IndexedFile = {
  id: string;                 // relative path
  name: string;
  relativePath: string;
  extension: string;
  handle?: FileSystemFileHandle;
  fallbackFile?: File;
};

type OpenTab = {
  file: IndexedFile;
  content: string;
  savedContent: string;
  dirty: boolean;
  selection: { anchor: number; head: number };
  scrollTop: number;
};
```

Keep `indexedFiles`, `openTabs`, and `activeTabId` in application state. Persist only lightweight UI state (recent paths, expanded folders, tab order) in `localStorage`; never pretend handles survive browser permissions unless they are revalidated with `queryPermission()` / `requestPermission()`.

## Responsive layout

- Desktop: resizable left explorer panel and editor on the right.
- Mobile (< 768 px): explorer becomes a slide-over drawer, toolbar actions remain visible, and tabs use a single-line horizontal scroller.
- Search dialog should fill most of the mobile viewport and account for safe-area insets.
- Use accessible buttons, focus management, visible keyboard focus, and ARIA labels for icon-only controls.

## Acceptance checklist

- A user can choose a folder and find a deeply nested file using fuzzy search.
- Multiple files can be opened, switched, edited, closed, and saved without losing each file's edits or cursor location.
- `.ts` and `.tsx` files have TypeScript syntax highlighting and editing support.
- The default editor appearance closely matches VS Code's dark theme.
- The app remains usable on a narrow mobile screen.
- In Chromium-based browsers, edits save back to the chosen local folder; unsupported browsers fail gracefully with a clear read-only fallback message.
