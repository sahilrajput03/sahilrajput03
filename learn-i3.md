# Learn i3

## Finding window name for making them float

1. ♥ Source: [Click here](https://unix.stackexchange.com/a/494168/504112)

  ![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/21c9eb94-7780-40dc-838c-924331dad30d)

2. ♥ Get only `WM_NAME`, `WM_CLASS`, `WM_WINDOW_ROLE` and `WM_WINDOW_TYPE` (source - Same above stackoverflow answer of point 1).

  `xprop2i3` is amazing you can check it here i.e, [`xprop213.sh`](https://github.com/sahilrajput03/config/blob/main/scripts/xprop2i3.sh) in my own config repository.

  Tip: You can use my **alias** for it as well ie., `xprop213.sh` as well.

## My Current Setup of manjaro-i3 (♥ _please_keep_this_post _top)

- i3-manjaro comes with utility browser: `palemoon`
- `dmenu` not working: [Click here](https://unix.stackexchange.com/a/573770/504112)
- You can fix private-key ssh file permission access denied issue when you try to clone: `cd ~/.ssh/myKeys; chmod 0400 *`
- Dell Laptop: 3 may, 2023 (manjaro-i3), Follow manual partitioning guide here on youtube: [Click here](https://www.youtube.com/watch?v=4KSf_ZfvMlM)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/db01f600-ce91-46da-9f82-cdb08d15d7e2)

## ♥💕❤ New learning from monajaro-i3 installation (default setup)

1. `mod+m` makes the taskbar autohide and to see taskbar show automatically you need to press `mod` anytime you want).
2. `mod+b` toggle b/w last workspace.
3. `mod+ <anyWorkspaceNumber>` switched to target workspace but when pressed again act as switching b/w current and last workspace.

## Installed `xorg-xprop` to find info for windows

```bash
sudo pacman -S xorg-xprop

# Now you can use:
xprop
# Now use cross-hair cursor to click any window and get all the details of that window!! Its good for doing stuff (like making certain windows always float in i3 tiling manager or other similar stuff).
```


## Fixing flameshow in new manajaro-i3 install

You need to disable below lines as shown i.e, by adding a prefix of # for each of these lines:

```
# bindsym Print exec --no-startup-id i3-scrot
# bindsym $mod+Print --release exec --no-startup-id i3-scrot -w
# bindsym $mod+Shift+Print --release exec --no-startup-id i3-scrot -s
```

and you need to add this line for flameshot:

```
bindsym Print exec /usr/bin/flameshot gui
```
