# Learn vscode

- **My Vscode _settings.json_ and _keybindings.json_:** [Click here](https://github.com/sahilrajput03/config/tree/main/Code/User)
- **Vscode Tips and Trick (Official Docs):** [Click here](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
- **Open same solder in two windows of Vscode:** From command pallete(ctrl+shift+p), use `Workspaces: Duplicate Workspace in New Window` option. [Source](https://stackoverflow.com/a/51426734/10012446). Tip: Use dupl as filter to get that option faster.
- Terminal Renaming and Colouring: [Click here](https://www.youtube.com/shorts/9QC2SDkWyvI?feature=share)
- Set **git-bash** as default terminal for vscode: Add `"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"` to **settings.json**.

## Extensions:

- [Error lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

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
