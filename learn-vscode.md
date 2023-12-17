# Learn vscode

- **My Vscode _settings.json_ and _keybindings.json_:** [Click here](https://github.com/sahilrajput03/config/tree/main/Code/User)
- **Vscode Tips and Trick (Official Docs):** [Click here](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
- **Open same solder in two windows of Vscode:** From command pallete(ctrl+shift+p), use `Workspaces: Duplicate Workspace in New Window` option. [Source](https://stackoverflow.com/a/51426734/10012446). Tip: Use dupl as filter to get that option faster.
- Terminal Renaming and Colouring: [Click here](https://www.youtube.com/shorts/9QC2SDkWyvI?feature=share)
- Set **git-bash** as default terminal for vscode: Add `"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"` to **settings.json**.
- VsCode for Web (Official): [Click here](https://code.visualstudio.com/docs/editor/vscode-web)

## VScode Amazing shortcuts

- `fn+f12` - Go to Definition (**mostly useful**)
- `fn+shift+f12` - Go to References
- `fn+ctrl+f12` - Go to implementations
- `fn+rightCtrl` - Show right click menu (**Awesome**)
- 🛑 `f8` to cycle through errors
- 🚫 💣 `ctrl+k ctrl+i` replicate mouse over for e.g., to see an error
- 🚀🚀 `ctrl+alt+rightArrow` and `ctrl+alt+leftArrow` to move a tab from one of two split editors to another
- 👻 `ctrl+alt+j` to open `Join collaboration link text input`

## Duet AI in vscode ~ Google

- **Duet AI for Developers (Free until -  February 1, 2024):** [Click here](https://cloud.google.com/duet-ai?hl=en)
- **Docs:** [Click here](https://cloud.google.com/code/docs/vscode/auth_success)
- **Fireship Io's Video:** [Click here](https://youtu.be/7h732qLxtAk)

1 / n

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/3a7fd9a5-073e-41e5-b33c-e39627cd193d)

2 / n

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/1fed5bf7-33b2-4882-bd50-f36aa6016af4)

3 / n

I am selecting my project from google

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/ff7bdca4-3827-4e3b-8e71-0ee507d9cf0f)

4 / n

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/3b22de84-7338-4735-a76f-bd441b777cb2)

5 / n

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/76d2b7ba-b611-4914-b6dc-e89b475308e1)

## Add eslint settings to your vscode directly

`settings.json`

```json
"eslint.options": {
	"overrideConfig": {
		"rules": {
			"no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
		}
	}
}
```

## Useful new shortcuts - DATE - 27 August, 2023

1. Use `ctrl+enter` in **Pallete** to open file with `Open to the Side` feature. **This always open the file in the right column of the currently active column.**
2. `ctrl+g g` for switching git section in vscode.
3. `ctrl+1` to switch from any left bar menu (search/git/etc) to code editor.
4. `ctrl shift -` to go forward in history (shift means uppercase i.e., move forward in time)
5. `ctrl alt -` to go backward in history (move backward in time)
6.  `alt+k s` to open VS Code keybindings

**Some more information on above above keybindings:**

```txt
1. (default from vscode)
2. (default from vscode)
3. (default from vscode)
4. (default from vscode) { "key": "ctrl+shift+-", "command": "workbench.action.navigateForward", "when": "canNavigateForward" }
5. (default from vscode) { "key": "ctrl+alt+-", "command": "workbench.action.navigateBack", "when": "canNavigateBack" }
6. (my custom keybinding)
```

**Navigate Errors fastly ❤️ ❤️:**

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/7b94c99c-4a5e-4a3e-aa78-c8d178ea3dcb)

## Useful **Refresh** button to update recenty made commits locally on current branch

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/f2e572bb-3010-4225-899b-3e218eb12c32)

## That's how you track which remote the vscode is tracking

You need to hover that area on the bottom of vscode where the branch-name is shown like that-

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/05e7860d-fae4-4987-83f9-545fe29204bc)

## Use `Git Delete Branch` to delete branch

**Why? Because it is more handy than to type branch's name in the terminal ♡ 💜**

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/b3b500b9-b8b0-44e1-a755-1c5087983bf8)

## Primary Sidebar vs. Secondary Sidebar

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/fcd868ec-19ba-42bf-8484-4058a9ef8065)

[Click here](https://marketplace.visualstudio.com/items?itemName=RamiroBerrelleza.bitbucket-pull-requests)

## Open Jira tickets or other work management tickets via `Autolinks` feature of git-lens

![image](https://user-images.githubusercontent.com/31458531/233838213-2f0fb290-1428-4250-9e15-18c20d6f194c.png)

## Git lens - Viewing diff for current file or all files of a commit

![image](https://user-images.githubusercontent.com/31458531/233828591-713230ce-fb0d-427c-b847-ac54bd993aa0.png)

## Amazing three way commit view and comparing with base for both (current,incoming changes)

Superawesome video: [Click here](https://youtu.be/HosPml1qkrg)

## Git lens - Viewing previous commits of current branch - Awesome

![image](https://user-images.githubusercontent.com/31458531/229890350-e5150491-5602-4de2-840e-ea20a230a945.png)

## Git lens - Opening git diffs active file or all files of the commit

![image](https://user-images.githubusercontent.com/31458531/233828499-8dfd4a2a-2897-4f09-9049-578d481d61ed.png)

## Git lens

![image](https://user-images.githubusercontent.com/31458531/229564560-d7e9518a-1a1f-45db-a2f4-7d0d51bc1a21.png)

## viewing latest contributions made by you

 It is so awesome like that as you can see diff in vscode itself with that!

![image](https://user-images.githubusercontent.com/31458531/229558746-bb520f63-c9dc-459c-968e-55d02b782b1c.png)


## creating branch and switching branch like that is very very effecient and handy

![image](https://user-images.githubusercontent.com/31458531/229558215-fa88e3e6-6785-4c3c-995c-9bca2b9f2bc9.png)

## Using a two-level fold works so awesome in a function/class where we hav lots of methods/functions

![image](https://user-images.githubusercontent.com/31458531/217962827-95c039f4-8d31-4d45-a565-3d9802c63e3c.png)

## You can automatically organize imports as well via that:

![image](https://user-images.githubusercontent.com/31458531/215856355-b1d9f21b-81dc-4023-8976-41e8c27bc698.png)

## Go to matching pair emmet

I added a new shortcut.

![image](https://user-images.githubusercontent.com/31458531/215576861-6496664b-db65-4f13-85b1-409e4b1d1c86.png)


## Make vscode autoimport paths to to be relative path instead of absolute path

Source: [Click here](https://stackoverflow.com/a/53137571/10012446)

Below worked awesomely for me:

![image](https://user-images.githubusercontent.com/31458531/215534923-b4cfd663-90ce-4f92-b8ce-5f70360b45a3.png)

## In vscode you can reference file as links as well

Source: [Click here](https://stackoverflow.com/a/3760547/10012446)

```js
// For example the following text would act as link in vscode: file://./scripts/deployKryptoBird.js
```

## vscode cli options

![image](https://user-images.githubusercontent.com/31458531/173615265-fc5ec69c-7641-46f1-b81a-4878e33891fd.png)

## Swithing to terminal to run a bash script or npm command very often?

Consider using a `.vscode/tasks.json` file (you can autogenerate this file with vscode very easily). I personally use `ctrl+alt+r` keybinding to launch run tasks, yo!!

```json
{
	"version": "2.0.0",
	"tasks": [
		{
			"type": "shell",
			// "command": "pwd", // for testing.
			"command": "./fso-part13/curls/post_note.sh",
			"label": "post a note ~Sahil"
		},
		{
			"type": "shell",
			"command": "./fso-part13/curls/get_a_note.sh",
			"label": "Get a note ~Sahil"
		},
		{
			"type": "shell",
			"command": "./fso-part13/curls/resetNotes.sh",
			"label": "Reset notes table! ~Sahil"
		}
	]
}
```

## Vscode Extensions

**Install All my Extensions:** [Click here](https://github.com/sahilrajput03/config/blob/main/__manjaro_current/.config/Code/User/MyExtensionInstaller.sh)

- [Error lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- Create Bitbucket pull request, Extension id: `ramiroberrelleza.bitbucket-pull-requests`
- TODO Tree Extension: [officia vscode video](https://www.youtube.com/shorts/GNJfxriE83Q)
- Bookmarks Extension: [source-stackoverflow](https://stackoverflow.com/a/41757766/10012446)

![image](https://user-images.githubusercontent.com/31458531/202106832-5ce4fdc5-b644-42dd-b252-297f3d647426.png)


## Change project folder very fast

**Press `ctrl+r` and choose from recent projects:**

![image](https://user-images.githubusercontent.com/31458531/202643453-bd4d4298-d208-45cd-9973-2c5eb2edc282.png)

or you can do it like that:

![image](https://user-images.githubusercontent.com/31458531/202643541-aad07dfb-153c-4886-b8fc-2db7e83a023c.png)
