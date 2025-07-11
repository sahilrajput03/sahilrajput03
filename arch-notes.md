# 🚀🚀🚀 In PROCESS OF MIGRATION TO [THIS DOC](https://docs.google.com/document/d/1o2UE4d3E5nMvfoaQP2_3G-dPjjf1719h8uLRltn3C1w/edit?tab=t.0#heading=h.z9nhm6c5om48)

# ⚠️⚠️⚠️ DO NOT EDIT THIS DOC (starting from 10 May 2025) ⚠️⚠️⚠️

# archlinux-notes 🚀 ⚡

**TODO:**
- Move my files from https://github.com/sahilrajput03/my_bin repo to my current notes.

**Quick Links:**
- Learn Bash: [Click here](https://github.com/sahilrajput03/learning-bash)
- MANJARO:
	- Manjaro pacman update issues Notes in Google Doc: [Click here](https://docs.google.com/document/d/1DY9H2ahQbg7wMEVyKKJvJm7bNBS0-dy97gK6ZvSn1gc/edit?tab=t.0#heading=h.bjq9i04dl4fe)
	- Open system settings in Manjaro: Run command in terminal - `system-settings`
	- Settings: Opening via `mod+z` > Settings > **Manjaro settings manager**
- ❤️❤️❤️❤️  Process Signals - SIGNINT, SIGTERM, SIGKILL: [Click here](https://docs.google.com/document/d/17Hi8uflq0FDrPjHA76I0Uxgiya579kn9p9JSs2Po8AU/edit?tab=t.0#heading=h.xd4w27931f3h)
- `config` Repo: [Click here](https://github.com/sahilrajput03/config)
- `my_bin` Repo: [Click here](https://github.com/sahilrajput03/my_bin) (in process of moving data to my current notes pages)
- **PopOS Notes:** [sahilrajput03/my_bin/blob/master/notes/linux-notes.txt](https://github.com/sahilrajput03/my_bin/blob/master/notes/linux-notes.txt)
- **🚀🚀🚀 Arch firstInstallNotes**: [Click here](archlinux-firstIntallNotes.md)
- **Learn i3:** [Click here](learn-i3.md)
- **Learn systemd service files: [Click here](learn-systemd-service-files.md)**
- **Linux Kernel Source Code:** [https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git) ([source](https://en.wikipedia.org/wiki/Linux_kernel))
	- cgit: A hyperfast web frontend for git repositories written in C: [Click here](https://git.zx2c4.com/cgit/about/) (only for linux)
 - Bootable USB with `dd`: [Click here](https://docs.google.com/document/d/1PCd6bBOs8mxzfoUrKATMH_P1o0eCLRvtTZav045xaN0/edit#heading=h.3sb1xtx1yd1d) (Doc)
- **Learn KVM:** [Click here](https://docs.google.com/document/d/1DnasbjTtdT44wsWCQxQWVvTRLACRX1yalBiuRYN_Eg4/edit)

**FYI:**
- `makepkg -si` is functions internally to do both of these following command `makepkg -s` and `sudo pacman -U myfile.pkg.tar.zst`.
- `config` files : [sahilrajput03/config](https://github.com/sahilrajput03/config)
- Other people's config files: https://github.com/jonhoo/configs/, https://github.com/davidpdrsn/dotfiles/, https://github.com/anishathalye/dotfiles, https://github.com/JJGO/dotfiles
- ❤️ You can say yes to all question for **`pacman`** or **`yay`** cli using `--noconfirm` command. E.g., `sudo pacman -Syu --noconfirm`. Also, another genral way is to do it like this: `yes | pacman blah blah blah`. Wow 🤩, you can test it via this as well - `yes | cat`.
- 🚀🚀 Learn mocp (Music on Console): [Click here](learn-mocp.md)

**How to use sshd config file to restrict access of a user to particular folder only?**
- [Claude.ai](https://claude.ai/chat/e6c4b718-ebb0-453c-91b3-f6e2975787fe)
	- [I tried on macbook but I couldn't do it propertly because in macbook I feel lot of configurations need to be done].
		- You can check some config files in the bottom of this ssh config file - `sudo code /etc/ssh/sshd_config` (from [chatGPT](https://chatgpt.com/c/67cfdb88-b4bc-8007-9ad2-e5e439f5bf76)) but the issue with that I couldn't connect with vscode-ssh way probably because I was trying the easy way via - `ForceCommand /bin/bash -c "cd /Users/user1/Documents && /bin/bash"` and I need to propertly set it up as mentioned in the claudeai's prompt above instead. TODO_LATER: I'll try this later again when I have motivation to do this and for now I don't have any purpose to solve via this.

## ❤️ Updating archlinux for existing users

From: [https://archlinux.org/download](https://archlinux.org/download/)

[Check this page to help update mirrors.](https://archlinux.org/mirrorlist/)

## Recover default `.bashrc` file in archlinux from skel directory

```sh
cp /etc/skel/.bashrc .
```

## Crontab Formats

```txt
*     *     *     *     *     command_to_run
-     -     -     -     -
|     |     |     |     |
|     |     |     |     +----- Day of week (0 - 7) (Sunday=0 or 7)
|     |     |     +------- Month (1 - 12)
|     |     +--------- Day of month (1 - 31)
|     +----------- Hour (0 - 23)
+------------- Minute (0 - 59)


✅ EXAMPLE CRONTAB ENTRIES
=======================
Every minute
* * * * * /path/to/script.sh
* * * * * date > ~/.crontabTest.txt

Every day at 7:30 AM
30 7 * * * /path/to/script.sh

Every Monday at 1:00 PM
0 13 * * 1 /path/to/script.sh

Every 5 minutes
*/5 * * * * /path/to/script.sh
```

## I just added this to my alias in macos to list ssh profiles easily

```bash
alias sshShow="grep -i '^host ' ~/.ssh/config"
```

## VNC

Source: [Reddit Post](https://www.reddit.com/r/archlinux/comments/y70dbt/is_vnc_the_best_way_to_connect_remotely_to_a_arch/?rdt=62877)

Archlinux Packages:
- Tiger VNC: [Click here](https://archlinux.org/packages/extra/x86_64/tigervnc/)
	- [website](https://tigervnc.org/)
	- [Github](https://github.com/TigerVNC/tigervnc) 5.3k*
	- Wiki: [Click here](https://wiki.archlinux.org/title/TigerVNC)
 - X11Vnc: [Click here](https://archlinux.org/packages/extra/x86_64/x11vnc/)
 	- Wiki: [Click here](https://wiki.archlinux.org/title/X11vnc)
	- [Github](https://github.com/LibVNC/x11vnc) 735*
  - WayVNC: [Click here](https://archlinux.org/packages/extra/x86_64/wayvnc/)
  	- General Commands Manual: [Click here](https://man.archlinux.org/man/wayvnc.1)
	- [Github](https://github.com/any1/wayvnc) 1.2k*
  - RealVNC Server: [Click here](https://aur.archlinux.org/packages/realvnc-vnc-server) (15 upvote, 0.00 Popularity)

Currently I'm using: RealVNC Server because it simply works!

```bash
# Install
yay -S x11vnc

# Run vnc server
x11vnc
# You can connect from mobile or any other system using: 192.168.1.53:5900 using RealVNC (client) in android or RealVNC from your MacOS
```

## Removing a program with all its subdependencies together to by pass the uninstall error by pacman (Tags: #uninstall i3wm, #remove i3wm, #delete i3wm)

It is reality in case of practising uninstalling i3-wm. You can simply run below command to fix such cases for similar uninstallation as it does with the case of i3-wm.

```bash
sudo pacman -Rsc i3-wm
```

## Available Login Shells in manjaro-i3

```bash
cat /etc/shells
# Output:
# Pathnames of valid login shells.
# See shells(5) for details.

/bin/sh
/bin/bash
/bin/zsh
/usr/bin/zsh
/usr/bin/git-shell
/bin/rbash
/usr/bin/rbash
```

## Fixed bug of time not syncing on system startup (and also on reboot).

*Moved to Google Doc on 26 May 2025.*

## Lx appearance

Change theme in manajaro.

Default Theme: *Matcha-light-sea*

```bash
lxappearance
```

## Default file manager in i3

```bash
pcmanfm
```

**Amazing:** It shows your connected pendrives and harddisks automatically (wihout manully mounting, tested with my Backup+ 3tb harddisk)

Note: You just need to simply open pcmanfm from dmenu or terminal and you'll see your harddisk there.

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/a0dc240f-3965-4ba0-a602-54f914161f0b)

**Learn:** In pcmanfm, the best folder/file view is `Thumbnail` view (ctrl+3). To set via gui, you can go to `View > Folder View Mode > Thumbnail View`

**To open current folder in terminal you can simply use shortcut `f4` as shown in this screenshot:**

![image](https://github.com/user-attachments/assets/1ad1b5af-da85-45c6-8872-46c6460fa219)


## Clipboard in manjaro

It is installed by default in manjaro but if you're using archlinux then you can install it via from this AUR - [clipit](https://aur.archlinux.org/packages/clipit)

- View Clipboard History: `Ctrl+alt+h` or you can always manage it from the bottom right tray icon.
- Manage Clipboard History: `Ctrl+alt+f`
  - Select few using `ctrl` key and click on "Remove" to delete those.
  - Click on "Remove all" to remove all entries.

## Running github pages locally

You might need to create gem file because by default github repos doesn't have but under the hood when the website is deployed; github actions installs ruby, bundler, jekyll, other necessary dependencies in the deployment pipeline.

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/ae5aed94-c284-4029-99c5-c6309b149dca" size="500" />

We can generate the gem file like this:

```bash
bundle init
# insatll gems (ruby libraries)
bundle install
```

A `Gemfile` will be created by above command with following text:

```bash
# frozen_string_literal: true

source "https://rubygems.org"

# gem "rails"
```

We add jekyll to the project i.e, update to `Gemfile` is by running  `bundle add jekyll`. 

Also, you may use `bundle install` to install the depencies of ruby project to install ruby libraries defined in `Gemfile`.

**Install Jekyll, source -** https://stackoverflow.com/a/78101514

```
# Install Jekyll
bundle add jekyll
```

**Run jekyll development server**

```bash
jekyll serve --livereload
```

## Install Jekyll on archlinux

Requirements: Ruby must be installed. (search for "Install Ruby on Archlinux" section on this page).

```bash
gem update --user-install
gem install jekyll --user-install

jekyll -v
# Output:
jekyll 4.3.3
```

# Install Ruby on Archlinux

Source: [Click here](https://gist.github.com/bast/9f5c2843d3e9bc4744e7016b56d8fe8e)

```bash
sudo pacman -S ruby ruby-rdoc gcc make

gem update --user-install
gem install jekyll --user-install
```

Add below to `.bashrc` file:

```bash
ruby_path=".local/share/gem/ruby/3.0.0/bin/"
export PATH="$ruby_path:$PATH"
```

## Kitty Config File (Tags: kitty)

You can open kitty config file directly by using `ctrl+shift+f2` or you open with code via `co .config/kitty/kitty.conf`. You might need to create this file if this file doesn't already exists there.

```bash
# Turn off the bell sound in kitty terminal when you press ESC or when pressing TAB key multiple times 
enable_audio_bell no

# set font size (1)
font_size 8.0
```

[(1)](https://www.reddit.com/r/KittyTerminal/comments/l2iuyr/comment/gk5obvw/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

## Install yarn

```bash
sudo pacman -S yarn
```

## Install `gromit-mpx`

Github: [Click here](https://github.com/bk138/gromit-mpx) (832*)

This is really "screen annotation" or "screen drawing" app. 

```bash
# install
yay -S gromit-mpx --noconfirm
```

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/72b89a14-1b4f-41c2-94c1-3c39555f78a7)


## install steam

```bash
sudo pacman -S steam

# you need to run below command otherwise your pc may logout when you try to run steam
# src: https://www.reddit.com/r/archlinux/comments/q41nuc/launching_a_game_from_steam_logs_me_out_of_my/
sudo pacman -R xf86-video-intel
```

## Format pendrive as exfat

- Formatting pendrive using gparted in archlinux: 

```bash
sudo pacman -S gparted
```

- Using CLI: The best format for a USB pendrive that needs to work on both Linux and Windows systems is typically FAT32 or exFAT. These file systems are widely supported by both operating systems and offer good compatibility.

Also, exfat is a good choice for larger USB drives and when dealing with large files because FAT32 has limited functionality to store a maximum file size of 4 GB. So, `exfat` rocks!

```bash
sudo pacman -S exfat-utils

# check the device path via
sudo fdisk -l

# unmount
sudo umount /dev/sda1

# format the partition to exFAT
sudo mkfs.exfat /dev/sda1

# remount
sudo mount /dev/sda1 /mnt/sda1
```

## Install flutter

```bash
pacman -S flutter
```

## Install deno

Docs: [Click here](https://docs.deno.com/runtime/manual/getting_started/installation)

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh

# NOW ADD BELOW LINES TO YOUR .bashrc FILE
# deno
export DENO_INSTALL="/home/array/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

deno_path="/home/array/.deno"
export PATH="$ruby_path:$PATH"
```

## Default terminal application in manjaro-i3 ?

**UPDATE: 20, Nov, 2023 - I do not use urxvt and use `kitty` instead.**

`urxvt`

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/e4ae0ba6-c83e-40da-81fc-68db0daf5624)

## Check if port is used by currently running application

```bash
lsof -i :5600
```

## Tracking screen time of apps `activitywatch-bin`

- website: https://activitywatch.net/
- github: https://github.com/ActivityWatch/activitywatch

```bash
yay -S activitywatch-bin

# To enable this on system startup, add below line to your ~/.profile file
[ -f /usr/bin/aw-qt ] && /usr/bin/aw-qt &
```

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/ddb1b4fa-7ee9-4d68-9cf6-9ec7962a1e01)

## ❤️ Stop using `youtube-dl` and use `yt-dlp`

- Amazing reddit post: [Click here](https://www.reddit.com/r/archlinux/comments/119hsoj/stop_using_youtubedl_and_use_ytdlp_instead/)
- Archlinux Wiki Page: [Click here](https://wiki.archlinux.org/title/Yt-dlp)

`yt-dlp` is a command-line program that lets you easily download videos and audio from more than a thousand websites. See the list of supported sites.

Note: `yt-dlp` is a fork of youtube-dl that was created after the parent project became stagnant. The upstream youtube-dl[dead link 2023-09-16 ⓘ] can still be installed as youtube-dlAUR; commands on this page should still work, but check the list of differences.

```bash
pacman -S yt-dlp

# for usage, please refer - https://wiki.archlinux.org/title/Yt-dlp


#### Common Usage (from: https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file) ####
# Download 1080p video with audio form youtube
yt-dlp -f "bestvideo[height=1080]+bestaudio" "<YouTube-URL>"
```

TOOD: Checkout some gui software as well for much better usage (refer same above archlinux page) -

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/71315aa2-2b82-480c-9d7e-1059ab224320)

## `youtube-dl` and ❤️ `youtube-dl-gui`

youtube-dl-guil:
- Github (6k*): [Click here](https://github.com/jely2002/youtube-dl-gui)

```bash
sudo pacman -S youtube-dl
```


```bash
# for gui (LEARN: yay fails to install this as mentioned by a user on the AUR page - https://aur.archlinux.org/packages/youtube-dl-gui:
git clone https://aur.archlinux.org/youtube-dl-gui.git
cd youtube-dl-gui
makepkg -si
# Usage:
youtube-dl-gui
```

## install `mpv` player(its good player for streaming youtube videos(it internally uses `youtube-dl`)) and `youtube-dl`

```bash
yay -S mpv
```

## ❤️ ❤️ Default timeout for password asking delay for sudo commands in archlinux?

Date: 8 Oct, 2023

Tags: #diable password timeout, disable asking password on sudo, sudo password disable, timeout sudo password, delay sudo password ask

- Archlinux Docs (sudo.8): [Click here](https://man.archlinux.org/man/sudo.8.en)
- Archlinux Docs (sudoers.5): [Click here](https://man.archlinux.org/man/sudoers.5.en)
- Arch Docs \| Disable per-terminal sudo: [Click here](https://wiki.archlinux.org/title/sudo#Disable_per-terminal_sudo)
- Arch Docs \| Reduce the number of times you have to type a password: [Click here](https://wiki.archlinux.org/title/sudo#Reduce_the_number_of_times_you_have_to_type_a_password)

Default value = 5 (Number of minutes)

To disable password timeout, open the file `/etc/sudoers` by - `sudoCode /etc/sudoers` or `sudo visudo /etc/sudoers` and add below lines to the end of the file:

- **(NOTE: you must logout and login to take this file into effect)**
- **(NOTE: you must replace `array` with your own username you want to apply the settings to)**

```bash
# ~ Sahil ~
# LEARN: Default value is 5 (in mins)
# LEARN: Value can't be a fraction i.e, 3.5
# LEARN: Setting a value less than 0 means to never ask again ever
Defaults:array timestamp_timeout=-1
## ~ Sahi ~ Don't require password for each new terminal
Defaults:array timestamp_type=global
```

## Fix emoji fonts in i3 + manajaro

Source: [Click here](https://unix.stackexchange.com/a/685714/504112)

```bash
sudo pacman -S noto-fonts noto-fonts-cjk noto-fonts-emoji noto-fonts-extra

# Please logout and login again to take this into effect
```

## Pipewire sound controls with commands

```bash
# install
sudo pacman -S pamixer

# to increase 5%
pamixer -i 5

# to decrease 5%
pamixer -d 5


##### Old i3 config file commands work directly in cli as well
# increase 10%
pactl set-sink-volume @DEFAULT_SINK@ +10%
# decrease 10%
pactl set-sink-volume @DEFAULT_SINK@ -10%
# toggle mute/unmute
pactl set-sink-mute @DEFAULT_SINK@ toggle
```

## Setting `typematic` (also mentioned in my feed)

**Why?:** So that navigating in vscode is a bit faster with arrow keys.

The initial delay between pressing a key and the start of repetition is called the *typematic delay*. The time between key repeats once repetition begins is called the *typematic rate*.

```bash
# set a typematic delay to 200ms and a typematic rate to 30Hz
xset r rate 360 25

# set default typematic delay to 660ms and a typematic rate to 25Hz
xset r rate
```


## Google drive upload doesn't work in manjaro

Tested in my current Dell - Latutude 5400 and my HP - ac179tx laptop.

## Manjaro Settings, switching manjoaro kernel

```bash
# open manjaro settinsg
manjaro-settings-manager

# open kernel switcher directly
manjaro-settings-manager -m msm_kernel
```

## Using mouse as trackpad and keyboard

```bash
yay -S remotemouse

# on mobile you can use application named `remotemouse` from PlayStore as well
```

## Get list of apps - manjaro linux

Get a list of your apps:

```bash
ls -la /usr/share/applications
```
To save changes press Ctrl+O and ENTER.

```bash
sudoCode /usr/share/applications/<app-name>.desktop
```

Edit the `.desktop` file for your app(s) to read `Terminal=true`.

## Setting google-chrome as default application with `xdg-open`?

Check the file `.config/mimeapp.list` in `sahilrajput03/config` repository.

## Capacitor changes in .bashrc file

UPDATE: 15 May, 2023

```bash
# android studio path to environment variable (I don't remember if it were any useful or not ~Sahil)
export CAPACITOR_ANDROID_STUDIO_PATH=/usr/bin/android-studio
```

## Setup softwares quickly (♥ _please_keep_this_post _top)

```bash
sudo pacman -S vlc obs-studio docker qbittorrent docker-compose tmux
# To make docker work
sudo systemctl enable docker.service
sudo systemctl start docker
sudo chmod 666 /var/run/docker.sock
# PLEASE REBOOT(reboot means reboot and not just logout and login) THE SYSTEM ONCE PLEASE TO BE ABLE TO GET DOCKER FUNCTIONING. src: https://stackoverflow.com/a/55911400/10012446

# IMPORTANT: Add your user to docker group so that I don't need to run `sudo chmod 666 /var/run/docker.sock` after on each system boot
sudo usermod -aG docker $USER
# **NOTE**: You need logout and login so that user is added successfully to docker group
# Veify if user is added successfully to docker gropu
groups | grep docker
# OUTPUT: sys network power libvirt autologin docker lp wheel array # Here we can see the `docker` entry here now.

yay -S google-chrome skypeforlinux-stable-bin visual-studio-code-bin mongodb-compass postman-bin nvm android-studio

# Make nvm accessible via cli
echo 'source /usr/share/nvm/init-nvm.sh' >> ~/.bashrc
source /usr/share/nvm/init-nvm.sh
# For NVM notes, please refer - https://github.com/sahilrajput03/nvm-autoswitching/blob/main/README.md


# First install andoid studio by running below command
android-studio
# Also add below line to your .bashrc file
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
# install java/javac in system.
sudo pacman -S jre11-openjdk
java --version
# install jdk
sudo pacman -S jdk11-openjdk
javac --version

#########
#### NOTE for capacitor v5: you have to use `jdk17-openjdk` and `jre17-openjdk`
# And add below line in .bashrc to make use version 17 (this would work along with version 11 installed)
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
#########

# Now to make `adb` and `emulator` accessible via cli, we can run below commands
sudo ln -s ~/Android/Sdk/platform-tools/adb /bin/adb
sudo ln -s ~/Android/Sdk/emulator/emulator /bin/emulator

# ♥ IMPORTANT (capacitor): If you are getting error while building an apk with capacitor `ERR_UNSUITABLE_API_INSTALLATION`, you must install sdk for Android 10 to fix it. (see screenshot help below on this page)
```

## Get bios version date

```bash
sudo dmidecode
```

![image](https://user-images.githubusercontent.com/31458531/235857732-47d0f580-6889-44c2-8eae-71c5068072d1.png)


## Install `cloc` to show lines of code (LOC) (25 April, 2023)

```bash
pacman -S cloc

# Usage:
cloc --exclude-dir=node_modules .

# calculating lines of code by ignoring some folders and some types of languages
cloc --exclude-dir=node_modules,.vscode,android,ios,build --exclude-lang=JSON,Text,SVG,Markdown,YAML,XML,HTML ./src
```

![image](https://user-images.githubusercontent.com/31458531/234203959-baf6067f-edc6-f4c70-9a0a-f38ee67879f0.png)

![image](https://user-images.githubusercontent.com/31458531/234204069-15a8318f-5730-400b-9a90-c602aa27ceb4.png)


## New version of linux released on 20 April, 2023

Source: [Click here](https://www.kernel.org/)

![image](https://user-images.githubusercontent.com/31458531/233806792-b487f274-66c3-49f6-8dee-2d30d7610300.png)

## Fixing the `No disk drives found` issue in my new dell laptop (error shown in manjaro installer)

![image](https://user-images.githubusercontent.com/31458531/233633405-4db348af-4f8c-4c97-9e62-61157da6a8d2.png)

- It was setup with "RAID On" when windows was installed.
- In manjaro installer I was not getting the "disk drives not found" issue so changing this to AHCI now.
- I found this recommendation @ [Click here](https://forum.manjaro.org/t/manjaro-not-detecting-my-harddisk/39847/2)

## Using red filter on archlinux

Docs: [Click here](https://linuxhint.com/night-light-apps-linux/)

```bash
# Install
sudo pacman -S redshift

# Usage: red TEMPERATUR, e.g., red 1000, red 25000
alias red='redshift -P -O'

# Usage: redReset
redshift -x
```

## wifi doesn't start on boot? (manjaro problem)

```bash
sudo pacman -Syu
# restart network manager
sudo systemctl restart NetworkManager
```

## install `unrar` to extract .rar files

Source: [Click here](https://unix.stackexchange.com/a/246537/504112)

```bash
sudo pacman -S unrar

# extracting .rar file
unrar x ./file-path-here.rar
```

## insatll mongodump, mongorestore, etc

```bash
yay -S mongodb-tools-bin
```

## Installed `kruler` a screen ruler

```bash
sudo pacman -S kruler
```

## install mongodb compass

```bash
yay -S mongodb-compass
```

## Install postman on archlinux

```bash
yay -S postman-bin
```

## is UUID of disk remains same all the time?

Source: [Click here](https://serverfault.com/a/550401)

![image](https://user-images.githubusercontent.com/31458531/209157278-290551d4-fc8c-406b-a020-2ce9180bb905.png)


## install ls alternate `exa`

```bash
sudo pacman -S exa
```

## install keepassxc

```bash
sudo pacman -S keepassxc
```

## You should use `pacman -Syu` instead of `pacman -Syy`

[Click here](https://unix.stackexchange.com/questions/415301/how-can-net-upgrade-size-be-negative)

## Installing manjaro

- Installed i3 window manager community version of official Manjaro Iso: [Click here](https://manjaro.org/download/)
- Using opensoure drivers for installation, reference: [Click here](https://www.reddit.com/r/ManjaroLinux/comments/kdptte/help_i_dont_know_which_driver_to_install_on/)

```bash
# for installing yay from aur you might face error i.e, `gcc not found` so you would need to do
sudo pacman -S base-devel
# and now using `makepkg -si` should work, Yikes!!!
```

## install playwright on archlinux

Source: [Click here](https://playwright.bootcss.com/python/docs/installation)

```bash
# 11 Nov, 2023: This doesn't work because it requires me to set up an venv environment first
pip install playwright
```

## Install shotcut

```bash
sudo pacman -S shotcut

#you can also use their AppImage version and move that file to /usr/bin/ directory as well.
```

## Install kdenlive

```bash
sudo pacman -S kdenlive

# Install ladspa for noise reduction
sudo pacman -S ladspa # may be optional, but it doesn't hurt at all

# Necessary to get "Noise supression for Noise" option in *EFFECTS* under "LADSPA Plugins" category
# hint of this package - https://www.reddit.com/r/kdenlive/comments/10sjsbw/comment/j71xna7/?utm_source=share&utm_medium=web2x&context=3
sudo pacman -S noise-suppression-for-voice


# ----
# You can also use their AppImage version and move that file to /usr/bin/ directory as well.
```

## install mongod on raspberry pi

Source: [Click here](https://pimylifeup.com/mongodb-raspberry-pi/)

Date: 6 Nov, 2022

```bash
sudo apt update
sudo apt upgrade
sudo apt install mongodb
sudo systemctl enable mongodb
sudo systemctl start mongodb

# Test if service is accessible from outside
nc -zv mongodb_server_ip 27017
telnet ip 27017

# Connection via cli
mongo "mongodb://mongo_server_ip:27017"

# src: https://www.digitalocean.com/community/tutorials/how-to-configure-remote-access-for-mongodb-on-ubuntu-20-04
# Make databaes service accept from all ips
sudo vi /etc/mongodb.conf
# bind_ip = 127.0.0.1
# port = 27017
# from above line to below line:
bind_ip = 0.0.0.0


#uninstal
sudo apt purge mongo*
```

## controlling mpc player speed

![image](https://user-images.githubusercontent.com/31458531/198284844-1a82e7cc-2192-4751-abcf-859ab2d8f6a3.png)

## install `geth` (aka Go ETHereum)

Source: [Click here](https://geth.ethereum.org/docs/install-and-build/installing-geth#arch-linux-via-pacman)

```bash
pacman -S geth
```

## install ganache-ui

Download AppImage simply via: https://trufflesuite.com/ganache/

```bash
sudo mv ~/Downloads/ganache-2.5.4-linux-x86_64.AppImage /usr/bin/ganache-ui
```

## Installed xournalpp (pp means ++ i.e, xournal++)

- Github (9.4k*): [xournalpp/xournalpp](https://github.com/xournalpp/xournalpp)
- Amazing pdf annotater: Source - [Stackoverflow Answer](https://askubuntu.com/a/1288079/702911)
- [Donwloaded appImage version](https://github.com/xournalpp/xournalpp/releases), then rename it via `mv xournalpp-1.1.1-x86_64.AppImage xournalpp`. Finally move it to user installed binaries so its accessible by all users and demnu as well by running `sudo mv xournalpp /usr/bin/`. Also, you also had a alias for it `xo`, but usually you would want to run `xournal` from dmenu.
- **Example use of sample pdf file with Xournalpp**:
	- Sample PDF: [Click here](./sample-files/sample.pdf)
	- Xournalpp file of above file: [Click here](./sample-files/sample.xopp)
	  - *Note: When exporting above `.xopp` file to pdf and saving over original pdf file then it warns us not to overwrite over background pdf file as that would create issues. By default Xournalpp exports the pdf file with the same name as of pdf file with a suffixes of `_annotated`.*
	- **Annotated PDF file (exported via `File > Export as PDF` feature using above `xopp` file): [Click here](./sample-files/sample_annotated.pdf)**
- ❤️ Use this website to invert colors of any pdf to get PDF in dark mode: [Click here](https://www.pdfconvertonline.com/invert-pdf/)
- **🚀 Saving the annotated PDF file: "File > Export as PDF"**
- 😍 I used this for annotating notes of blockchain pdf's: [Click here](https://github.com/sahilrajput03/learn-blockchain/tree/main/docs__tokenStandards__yellowPaper)
- 🤑 Set toolbar position by **View > Toolbar > `Minimal Left` or `Xournal++`**
- **Fix issue of 1st page is aligned towards to right:** You can fix this (below) issue by going to `Edit > Preferences > Drawing Area > Paired Pages` (source of fixing this issue: [Click here](https://github.com/xournalpp/xournalpp/issues/3522))

	Step: 1/3
  
	![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/b6b1f398-3893-484c-a3b1-f6c02c5b6bbc)

	Step: 2/3

	![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/1f56401c-81ff-4e53-9b40-77850c18383a)

	**Step: 3/3 - After doing above setting you must uncheck and then recheck `Pair Pages` option from `Edit` menu.**


- Downlaod Source: https://github.com/xournalpp/xournalpp/releases

	1/5

	![image](https://user-images.githubusercontent.com/31458531/195139957-04e120dc-8098-4ff2-8e9e-89efdfe7a628.png)
	
	2/5

	![image](https://user-images.githubusercontent.com/31458531/195139681-60b8cbfc-058b-482e-9367-296417bc5e9e.png)
	
	3/5

	![image](https://user-images.githubusercontent.com/31458531/195135088-eb28f3dc-e2d8-476e-9990-2d9b8473ab30.png)

	4/5

	![image](https://user-images.githubusercontent.com/31458531/195132041-2998b19c-b007-49de-b3ff-c4f5a03592fc.png)
	
	5/5

	![image](https://user-images.githubusercontent.com/31458531/195132850-7ef4505a-9f58-43d0-ac38-9ae5e67e0b93.png)

## Installed `kitty` terminal and made it as default termial

**TIP:** Open http links by `ctrl+shift+click`, [source](https://github.com/kovidgoyal/kitty/issues/371#issuecomment-879919497).

```bash
sudo pamcman -S kitty
# Now we need to set below line in i3config file:
# bindsym $mod+Return exec kitty
```

## Add a binary to dmenu list of executables?

Simply move the binary to `/usr/bin` directory or you can make a symlink in the `/usr/bin` directory as well.

```bash
sudo ln -s /home/array/test/b.sh /usr/bin/
```

## Install `insomnia` - a postman's opensource alternative

```bash
# Download official appImage version of the release from its official page @ https://github.com/Kong/insomnia/releases/tag/core@2022.5.1
# now you can simply add this to /usr/bin directory to be available to all users.
```

## Best mail servers linux

- Article: https://cloud7.news/linux/7-best-linux-mail-servers/
- Postal (12k*): https://github.com/postalserver/postal

**H-educate:**

- Amazing Installation Article: https://h-educate.com/free-smtp-server-postal/
- His old youtube video: https://www.youtube.com/watch?v=iNX8wFqmk0Y

## installed ngrok

**Ngrok alternatives**
- Is there any free port forwarding service like ngrok? ChatGPT: [Click here](https://chatgpt.com/c/67cef4de-5ec0-8007-abe3-3b515729e982)
	- [localtunnel](https://theboroer.github.io/localtunnel-www/): [github](https://github.com/localtunnel/localtunnel)
 		- Usage: `npm install -g localtunnel`, `lt --port 3000`
   		- View password by going to: [https://loca.lt/mytunnelpassword](https://loca.lt/mytunnelpassword)
	- [serveo.net](https://serveo.net)
 	- cloudflare tunnel
	- ❤❤ tailscale: `sudo pacman -S go && yay -S tailscale-git && sudo systemctl status tailscaled && sudo systemctl enable tailscaled && sudo systemctl start tailscaled`. (Note: I was having issues to get the service start as it was restarting again and again. I checked with Claudeai and I resolved the issue by simply restarting the issue and that's it.)
		- I generated a script for linux in tailscale's admin panel for linux and run this command to setup - `sudo tailscale up --auth-key=tskey-auth-xxxxxxx` to set it up. (Check keepass for original command). I used 90 days period while generating above because that's the most it offers).
		- It is a tool for vpn support to be able to ssh to friend's system for collaboration.
		- [https://tailscale.com](https://tailscale.com/)

```bash
yay -s ngrok

# Usage:
ngrok http 3002
# fyi: you may use `ngrokinfo` as its my alis to know about ngrok anytime.
```

### ❤️ tailscale experience

**NOTE: ❌❌ Tailscale vpn's ip and hostname is not at all accessible form out of the VPN network. [TESTED & CONFIRMED] ❌❌**

I tried to setup my systems to connect via vpn on macos, linux and android and it works pretty smooth. The experience with vscode ssh login is cool too but I need to setup in a way that user `user1` is not able view files of my current user (currently it can view files of my active user).

**Does ip of a device on tailscale changes or stay consistent?**
- Tailscale assigns each device a unique, static IP address within your tailnet, typically in the 100.x.x.x range. This IP does not change as long as the device remains part of the tailnet.
- However, if you remove and re-add a device, it might get a new IP. Additionally, the device’s public IP (used for internet connections) can change based on the network it connects to, but that doesn’t affect the Tailscale internal IP.

- `ssh mbp-tailscale` can be used on both linux and mbp to login to `user1` in mbp. (10 march 2025).

## installed skype

```bash
yay -S skypeforlinux-stable-bin
```

## failed to update system with `sudo pacman -Syyu` due to oudated pgp keys?

https://unix.stackexchange.com/a/574496/504112

tldr: 

```bash
pacman -Sy archlinux-keyring

# Now you can run:
sudo pacman -Syyu
```

## Installed boomer for screen magnification

https://github.com/tsoding/boomer

```bash
yay -S boomer-git
```

## Install upwork on archlinux

Source: Comment from aur page: https://aur.archlinux.org/packages/upwork

```bash
# Downlaod '.deb' file from official upwork site coz upwork only allows to download for loggedinusers
# from: https://www.upwork.com/ab/downloads/os/linux/

gcl https://aur.archlinux.org/upwork.git
cd upwork
mv ~/Downloads/upwork_*_*.deb .
makepkg -si


# Now you need to fix the segmentation fault error
# Just make a bash function:
runUpwork (){
	cd /opt/Upwork
	air ./upwork 
}
# fyi: air my another function that runs anytihng detached from current shell, yo!!
```

## installed lsusb

```bash
sudo pacman -S usbutils

# Usage:
lsusb
```

## Installed `epiphany`

```bash
sudo pacman -S epiphany
```

## install `bun`

[Source1](https://aur.archlinux.org/packages/bun-bin), [Source2](https://aur.archlinux.org/packages/bun).

```bash
# Official way of installing (29 Sept, 2022)
curl -fsSL https://bun.sh/install | bash


# yay -S bun-bin
# used source1
```

## Install flatpak

```bash
# usng os independent package managers solution to avoid building the package myself
# since flatpak is most popular among flatpack, appimage or snap, src: https://www.makeuseof.com/snap-vs-appimage-vs-flatpak/
# install flatpak
# sudo pacman -S flatpak
# Using flatpak: https://docs.flatpak.org/en/latest/using-flatpak.html

# Usage:
flatpak install pkg-name
## DRAWBACK: It needs lots of dependencies to dowload even for one single application to work, so not using it for anything at all till now.
```

## Install flameshot

```bash
# archpackage is an older version i.e., version 11, https://archlinux.org/packages/community/x86_64/flameshot/
# and that has bug i.e., selecting any field after text element tool causes flameshot to crash.

# FIX: Install latest via:
# src: https://github.com/flameshot-org/flameshot/issues/2514
# version 12 was released on jan 15, 2022 and arch package has no update for this yet..

## USING .AppImage version of `flameshot` which is pretty insane that it doesn't require installation at all.
# I simply needed to download the `flameshot-version-here.AppImage` from https://github.com/flameshot-org/flameshot/releases
# sudo mv flameshot /usr/bin
```

## Install `handbrake` vide encoder that compresses a ton

Why? https://youtu.be/WgZq6Sakcog

```bash
sudo pacman -S handbrake

# Usage
ghb
# or make alias as:
alias handbrake='ghb/'
```

## Install `texstudio`

Tool to help making/editing latex files.

```bash
sudo pacman -S texstudio
```

## Install `django`

```bash
sudo pacman -S python-django
# Wikipage: https://wiki.archlinux.org/title/Django

###### Verify if django is installed correctly and python can access it ######
# Way1: python-cli
python -m django --version
# Output: 4.0.5

# Way2: python subshell
python
# And try running below code:
import django
print(django.get_version())
# Output: 4.0.5
```

Starting with django: https://www.djangoproject.com/start/

## Using pureftpd

A ftp server

```
# src: https://aur.archlinux.org/packages/pure-ftpd
yay -S pure-ftpd

# ALERT
# ALERT
# ALERT
# ALERT
# FYI: I was not able to set up the ftp server with this though :(
```

## `redis`

```bash
sudo pacman -S redis
```

## Take screenshot with scrot

```bash
scrot filename
# tip: filename will be created!
```

## format c/c++/other c family languages code

```bash
pacman -S clang

# Usage:
clang-format -i myFile.c
# -i is for inplace formatting of file(replace existing file).

# Usage: (my bash function, check my .bash_function file)
clangFormatWatch myFile.c
# or you can watch for all file as well:
clangFormatWatchAll
```

## Install gtk4 and develop apps

List of applications made using gtk: https://en.wikipedia.org/wiki/List_of_GTK_applications

[@Gitlab](https://gitlab.gnome.org/GNOME/gtk), [@Github](https://github.com/GNOME/gtk)

```bash
sudo pacman -S gtk4

# Usage:
# Checkout my gtkmon script from `.bash_function` script for a watching service.
```

## Install pandoc to preview markdown file

Pandoc has 25.5 K github stars. Github: https://github.com/jgm/pandoc

Try pandoc playground @ https://pandoc.org/try

```bash
sudo pacman -S pandoc

# Usage
pandoc -t plain file.md | less

# I have a function to convert markdown to htlm files locally though:

m2htm (){
	pandoc -t html "$@" > /tmp/v.htm
	echo Try opening /tmp/v.htm in your browser now!
}

# USAGE
# m2htm myFile.md
```

## show off hacky hollywood hacking in your terminal

Source: https://www.youtube.com/watch?v=RUlhGpDF25E

```bash
yay -S hollywood

# Usage:
hollywood

sudo pacman -S cmatrix
# Usage:
cmatrix

yay -S no-more-secrets
# Usage
ls -l | nms
# You can do sneakers with this as well:
sneakers
```

Some websites:

1. https://hackertyper.net/
2. http://geektyper.com/
3. https://geekprank.com/hacker/
4. http://fakeupdate.net/

## not hide tabs in fullscreen in tor browser

Source: https://support.mozilla.org/en-US/questions/1168777

## installed yaourt

```bash
yay -S package-query

git clone https://aur.archlinux.org/yaourt.git
cd yaourt
makepkg -si
```

## Installed `telegram-cli-git`

```bash
yay -S telegram-cli-git
```


## Install figlet

Source: https://archlinux.org/packages/extra/x86_64/figlet/

```bash
sudo pacman -S figlet

# Usage:
figlet I am superman!
# Output:
#  ___                                                                     _
# |_ _|   __ _ _ __ ___    ___ _   _ _ __   ___ _ __ _ __ ___   __ _ _ __ | |
#  | |   / _` | '_ ` _ \  / __| | | | '_ \ / _ \ '__| '_ ` _ \ / _` | '_ \| |
#  | |  | (_| | | | | | | \__ \ |_| | |_) |  __/ |  | | | | | | (_| | | | |_|
# |___|  \__,_|_| |_| |_| |___/\__,_| .__/ \___|_|  |_| |_| |_|\__,_|_| |_(_)
                                |_|
# It is very similar to cowsay!
```

## Install Drakula theme for `gitk` - an amazing git diff viewer

Source: https://draculatheme.com/gitk

```bash
cd ~/test

git clone https://github.com/dracula/gitk.git
mkdir ~/git
cp gitk/gitk ~/git/

# Now if you use
gitk
# you'll notice beautiful drakula theme.
##FYI: I changed colors of normal git diff as well so now command line `git diff` simply looks super nice as well.
## USING gitk is super amazing with dracula and in its asthetics though.
```

## Install `tk` to fix `gitk`

Using `gitk` (a gui tool for git, really good imo ~Sahil), I encountered error i.e.,

```bash
gitk
# Output: /usr/bin/gitk: line 3: exec: wish: not found.


# So I FIXED it by installing `tk`
sudo pacman -S tk
# src: https://bbs.archlinux.org/viewtopic.php?id=78595
```

## You cannot use ctrl+tab or ctrl+shift+tab to switch tmux-windows in xfce-terminal!

Source: https://superuser.com/questions/1088058/how-can-i-bind-a-key-shortcut-that-includes-a-tab

## Why Flameshot?

Source: [https://github.com/sahilrajput03/sahilrajput03/blob/master/README.md#why-flameshot](https://github.com/sahilrajput03/sahilrajput03/blob/master/README.md#why-flameshot)

## install `prisma studio`

```bash
yay -S prisma-studio-appimage

# Usage
prisma-studio
```


## install heroku

```bash
yay -S heroku-cli
# source: https://aur.archlinux.org/packages/heroku-cli
# FYI: It took a long time to install though.
```

## Remove packages installed via aur?

```bash
# Find exact package name first from the currently installed packages list:
pacman -Q asterisk
# SHOULD RETURN THE PACKAGE NAME.

# Now remove the package
pacman -R asterik
```

## install `prgress`

Helpful to know the progress of a running command say `cp` and `mv`

```bash
pacman -S progress
# src: https://github.com/Xfennec/progress
```

## insatll `gnome-characters` (These are really awesome to use!!) ~updated 20 Jun, 2022

```bash
sudo pacman -S gnome-characters
```

## Install `xdotool` to send key sequence to any application

```bash
sudo pacman -S xdotool
# For usage example: Refer my snippy script execution.

# Usage
xdotool key ctrl+v
# This will send ctrl+v signal to current application.
```

## Install `hub`

```bash
sudo pacman -S hub


# Creating repo on github from inside a local repo
hub create
# or my alias
git create


# Set hub to use my ssh configuration by running below command
git config --global hub.protocol ssh
# FYI: ^^^^ This command simply adds below content to your `~/.gitconfig` file(NOTE: So if you already have below in your `.gitconfig` file then its nor required to do it again!)
# [hub]
#	protocol = ssh



# source: https://github.com/github/hub
```

## .deskto files?

Where are my .desktop files installed with pacman ?

```bash
pacman -Ql | grep google-chrome.desktop
# Output:
# google-chrome /usr/share/applications/google-chrome.desktop
```

Source: https://bbs.archlinux.org/viewtopic.php?id=243875

Q. What is a `.desktop` files?

A `.desktop` file is simply a shortcut that is used to launch application in Linux. Without the .desktop file, your application won’t show up in the Applications menu and you can’t launch it with third-party launchers such as Synapse and Albert. Source: https://www.maketecheasier.com/create-desktop-file-linux/

Q. Where are all of my .desktop files by default?

Ans. `ls ~/.local/share/applications/`

## find your bluetooth apapter's mac address

```bash
yay -S bluez-hcitool

# Usage
hcitool dev
# This will show you the mac address of your bluetooth adapter

hcitool scan
# This will list all bluetooth list devices available nearby
```

## Install `asterisk` - ivr software

Source: https://wiki.archlinux.org/title/asterisk

```bash
git clone https://aur.archlinux.org/asterisk.git
cd asterisk
# do the work as guided by `emersonjr` @ https://aur.archlinux.org/packages/asterisk in comments.
makepkg -si

# IMPORTANT: Using below line in PKGBUILD file as suggested by `emersonjr` simply helps to install without any error, yikes!
sed -i 's/,5,/,10,/g' third-party/Makefile.rules
```

## Install `flux` from aur

```bash
yay -S flux-bin
```

## Install `act` to be able to run github actions locally

Source: https://github.com/nektos/act

```bash
yay -S act
```

## Amazing `bash` script linter

Source: https://www.shellcheck.net/

## install `yay` - a aur package manager

```bash
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si

# Usage:
yay -S google-chrome
# source: https://linuxhint.com/install-google-chrome-manjaro/
```

## insatll `helm`

```bash
sudo pacman -S helm
```

## Autocomplete any alias now!!

Another article on making autocomplete functions: https://iridakos.com/programming/2018/03/01/bash-programmable-completion-tutorial

```bash
alias ke='kubectl exec -it'
complete -F _complete_alias ke

# I can autocomplete any alias now using a entry like above!! Yo!! # src: https://unix.stackexchange.com/a/332522/504112
# STEPS:
#
# 1. Install `bash-complete-alias` from AUR, SRC: https://github.com/cykerway/complete-alias
yay -S bash-complete-alias
#
# 2. Install `bash-completion`
sudo pacman -S bash-completion
#
# 3. Setup file: ~/.bash_completion (or you can simply this file from your `config` repository as well), such that:
cat ~/.bash_completion
if [ -f /usr/share/bash-complete-alias/complete_alias ] ; then
        . /usr/share/bash-complete-alias/complete_alias
fi
#
```

## install `jiq`

A json path finder.

```bash
git clone https://aur.archlinux.org/jiq-bin.git
cd jiq-bin
makepkg -si

# Usage:
cat myjson.json | jiq
# Now you tab and . and [0],[1] syntax to navigate into the json.
```

## install age

Src: https://github.com/FiloSottile/age

```bash
sudo pacman -S age
# binaries included: age, age-keygen

sudo pacman -S soaps
# binaries included: sops
```

## insatll `kubectx`

It has both `kubectx`(to change context) and `kubens` (to change namespace) cli tools

Source: https://github.com/ahmetb/kubectx

```bash
sudo pacman -S kubectx
```

## intall zoom

```bash
git clone https://aur.archlinux.org/zoom.git
cd zoom
makepkg -si
```

## what is `busybox`?

Awesome examplanation and usage details: https://www.youtube.com/watch?v=wWA6SvzvElU

Arch package: https://archlinux.org/packages/community/x86_64/busybox/

Arch wiki: https://wiki.archlinux.org/title/BusyBox

Official website: https://busybox.net/

tldr;

- This is basically a collection of 300+ programs useful in unix, linux, bsd operating systems.

- **Also, this is useful in alpine linux coz if you see `ls -al /usr/bin/` you'll in see a whole bunch of executables are symlinked to `busybox` actually. So its leveraging from busy box actually.**

## install `yq` (a `jq` like parser but for yaml, xml, etc)

Source: https://github.com/kislyuk/yq

```bash
sudo pacman -S yq

# Usage:
yq .apiVersion persistentvolume.yaml
# <<<outputs that property value IN JSON to stdoutput here>>>

yq .spec persistentvolume.yaml
# <<<outputs that property value IN JSON to stdoutput here>>>

# convert complete file yaml to json, using `.` selector
 yq . persistentvolume.yaml
## <<<<outputs json to stdout here>>>

# print specific property of all array items
yq .spec.template.spec.containers[].name deployment-persistent.yaml

```

## install `lolcat`

```bash
sudo pacman -S lolcat

# Usage:
lolcat myFile
# Output: lovely rainbow text!
```

## installed `jq`

```bash
sudo pacman -S jq
# it is a json modifying tool. (21.5k stars on github)

# Usage:
# Chek out @ https://jqplay.org/#
```

## installed `perf`

System level benchamarking tool (missing semester - lecture 11)

```bash
sudo pacman -S perf

# Usage:
perf stat ls
# Source: https://www.brendangregg.com/perf.html
```

## installed `sshfs`

Tags: `#mout remote`, `#mount over ssh`, `#mimic remote folder`, `#mimic remote drive`, `#folder mount with ssh`.

- Github: [github.com/libfuse/sshfs](https://github.com/libfuse/sshfs) (4.5k*)

**More Tools: `rsync` and `scp` to copy files b/w host and remote server.** You can refer [previous experience here](https://github.com/sahilrajput03/sahilrajput03/tree/main/missing-semester).

Mount remote machine path to local directory using `sshfs`, amazing mounting tool! `sshfs` uses ssh protocol to do this. Also `sshfs` recognises your `.ssh/config` file thus you can make use of aliases very well as I have used `own` alias for my own system.

```bash
# For archlinux
sudo pacman -S sshfs
# ❤️ For Installing sshfs and its usage in macos, please refer you *Learn MacOS Google Doc*


# Usage - Mount remote directory on host machine
sshfs remoteuser@remotehostname:/remote/path /local/path -C -p 9876
# Unmounting (src: https://wiki.archlinux.org/title/SSHFS)
fusermount3 -u mountpoint/
```

**Example test:**

```bash
# create directory on remote machine
mkdir one

# create directory on host machine
mkdir two

# Mounting remote server's directory (one) to host machine (two)
sshfs own:test/test-sshfs/one ./two

# create file in remote machine:
touch one/file1.txt
ls two/
# Output: file1.txt

# create file in host machine:
touch two/file2.txt

ls one/
# Output: file1.txt  file2.txt

# Unmounting
fusermount3 -u two/
```

## installed `pdflatex`

```bash
sudo pacman -S textlive-most

# Usage:
pdflatex paper.tex
```

## installed `hyperfine` - a benchmarking tool for linux

```bash
sudo pacman -S hyperfine

# Docs: https://github.com/sharkdp/hyperfine

# Sample usage:
hyperfine 'sleep 0.3'
hyperfine --runs 5 'sleep 0.3'

# If you want to compare the runtimes of different programs, you can pass multiple commands:
hyperfine 'hexdump file' 'xxd file'

### warmup and cold runs: https://github.com/sharkdp/hyperfine#warmup-runs-and-preparation-commands

# Warmup runs and preparation commands: For programs that perform a lot of disk I/O, the benchmarking results can be heavily influenced by disk caches and whether they are cold or warm. If you want to run the benchmark on a warm cache, you can use the -w/--warmup option to perform a certain number of program executions before the actual benchmark:
hyperfine --warmup 3 'grep -R TODO *'

# Conversely, if you want to run the benchmark for a cold cache, you can use the -p/--prepare option to run a special command before each timing run. For example, to clear harddisk caches on Linux. Conversely, if you want to run the benchmark for a cold cache, you can use the -p/--prepare option to run a special command before each timing run. For example, to clear harddisk caches on Linux, you can run
hyperfine --prepare 'sync; echo 3 | sudo tee /proc/sys/vm/drop_caches' 'grep -R TODO *'
```

## installed `ncdu` to know the disk usage of the system

```
sudo pacman -S ncdu

# Usage:
ncdu


#FYI: It is a similar tool to du
#FYI: du stands for `disk usage`
```

## installed `bash-git-prmpt` (but not configured, coz it clutters up shell)

Source: https://github.com/magicmonty/bash-git-prompt

```bash
git clone https://aur.archlinux.org/packages/bash-git-prompt
cd bash-git-prompt
makepks -si
```

## installed `rsync`

```
sudo pacman -S rsync
# helps to copy files to remote server, (~from missing-semester)
```

## installed `screenkey`

Source: https://www.thregr.org/~wavexx/software/screenkey/

```bash
sudo pacman -S screenkey

# to run in background
nohup screenkey &

# to kill it
pkill screenkey
```

## installed `figma`

```bash
git clone https://aur.archlinux.org/figma-linux.git
cd figma-linux
makepkg -si
```

## insatlled `gfortran`

Source: https://archlinux.org/packages/core/x86_64/gcc-fortran/

```
sudo pacman -S gcc-fortran

#Usage:
gfortran --version
```

## install noisetorch

Source: https://youtu.be/WSYLWWxiD8U

Github: https://github.com/lawl/NoiseTorch

Test your supressed mic noise with this: https://webcammictest.com/check-mic.html (IMPORATNT: Remeber to choose your microphone from inside the website menu, `Settings > Microphone > Choose 'NoiseTorch Microphone'` from the dropdown.)

```
git clone https://aur.archlinux.org/noisetorch.git
cd noisetorch
makepkg -si

#Usage:
noisetorch

#You might need to logout/login (or completely restart to see the Noisetorch audio in your chrome, firefox works straightaway though)
```

## install `gcloud` from google cloud

```bash
# source: https://aur.archlinux.org/packages/google-cloud-sdk
git clone https://aur.archlinux.org/google-cloud-sdk.git
cd google-cloud-sdk
makepkg -si
```

## insatll `R` language compiler

```
sudo pacman -S r

# Usage
R
```

## install `st`

```
git clone st_from_AUR
cd st
makepkg -si
```

## install `gnuplot`

```
sudo pacman -S gnuplot
```

## Install `st`

```
git clone https://aur.archlinux.org/packages/st
cd st
makepkg -si
```

## install gvim

```
sudo pacman -S gvim
```

## install qutebrowser

Website: https://qutebrowser.org/, Github: https://github.com/qutebrowser/qutebrowser

Usage: https://qutebrowser.org/doc/help/

```
sudo pacman -S qutebrowser
```

## other tiling managers

https://github.com/xmonad/xmonad (2.4k github stars)

https://github.com/baskerville/bspwm (6k github stars)

https://github.com/i3/i3 (7k github stars)

## Installed bash-completion tool

FYI: It heps to show branches when you do `git checkout <TAB>` and I don't konw other usefulness of this utility yet. TODO: Add more here.

```bash
pacman -S bash-completion
```

## Installed `vimgolf`

```bash
git clone https://aur.archlinux.org/python-vimgolf.git
makepkg -si

#source: https://aur.archlinux.org/packages/python-vimgolf
```

## Installed `tldr` a binary for tldr for its documentation

```bash
Source: https://archlinux.org/packages/community/any/tldr/
sudo pacman -S tldr
```

## installed `7zz` for .7z file extensions

Docs of 7z: https://wiki.archlinux.org/title/p7zip

```bash
git clone https://aur.archlinux.org/uasm.git
cd uasm
makepkg -si

git clone https://aur.archlinux.org/packages/7-zip
cd 7-zip
makepkg -si

# Usage:
7zz
# Extracting 7x extension file:
7zz e documentation-dump.7z

```

## Installed `todo.txt-cli`

Source: https://aur.archlinux.org/packages/todotxt

```bash
git clone https://aur.archlinux.org/todotxt.git
cd todotxt
makepkg -si
```

## insatlled `noefetch`

```bash
sudo pacman -s neofetch

# Usage:
neofetch
```

## installed `feh` image viewer archlinux

```bash
sudo pacman -S feh

#Usage:
feh <image-path-here>
```

## installed obs-studio in archlinux

```bash
sudo pacman -S obs-studio

# start with:
obs
```

## insalled droid cam(fixed the v4l2loopback issue)

```bash
git clone https://aur.archlinux.org/packages/droidcam
cd droidcam
makepkg -s
sudo pacman -U *.zst #NOTE: Install both ``droidcam`` and ``v4l2loopback`` file.

sudo modprobe v4l2loopback #this is probably activating v4l2loopback thing IMO.
# HELP:: Source: https://askubuntu.com/questions/1246096/error-installing-droidcam-in-ubuntu-20-04
# ^^ This worked for Priyam's ubuntu though.

# FYI: If you haven't restarted your sytem (complete reboot) you won't be able to see your camera option in chrome or chromium (but it'll be visible in firefox/obs-studio/other softwares though).

sudo droicam #Should simply work now!

# FYI: I DO HAVE linux-headers package installed as well: (dated: 15 feb, 2022):
sudo pacman -S linux-headers
# Source: https://archlinux.org/packages/core/x86_64/linux-headers/


```

## Installed `libreoffice` in archlinux

Source: https://archlinux.org/packages/extra/x86_64/libreoffice-fresh/

```bash
sudo pacman -S libreoffice-fresh
```

## Installed `tor-browser`

```bash
gpg --auto-key-locate nodefault,wkd --locate-keys torbrowser@torproject.org
git clone https://aur.archlinux.org/tor-browser.git
makepkg
sudo pacman -U *.zst file #Fix the filename here.
```

## FYI:

```bash
# To install, use -i/--install (same as pacman -U pkgname-pkgver.pkg.tar.zst):
makepkg -i
# Source: https://wiki.archlinux.org/title/makepkg#Usage
```

## See default applications settings in archlinux

- Archlinux: https://man.archlinux.org/man/xdg-settings.1
- Archlinux(*not so useful*): https://wiki.archlinux.org/title/Default_applications
- Changing default browser issue: https://bbs.archlinux.org/viewtopic.php?id=140028

```bash
# I set my video player to `mpv` by removing the handbrake from the order of applications preference, and thats it!
sudoCode /usr/share/applications/mimeinfo.cache
# So I have a line like that for `video/mp4` and `video/x-matroska` mimetype respective for .mp4 and .mkv files:
# video/mp4=mpv.desktop;vlc.desktop;
# video/x-matroska=mpv.desktop;vlc.desktop;

# now I can open video files with mpv directly using that command:
open myVideoFile.mp4
open myVideoFile.mkv
```

**To learn what all that means, refer that screenshot:**

![image](https://user-images.githubusercontent.com/31458531/203566716-160a4bcf-3a69-425c-9f0f-c9ab7988a54e.png)

## Check your old time versions of packages you have insalled earlier with pacman

Source: https://unix.stackexchange.com/a/103868/504112

```bash
cd /var/cache/pacman/pkg/
ls -l
# Now you can use pkg-name to install any versioned package:
pacman -U <pkg-name
```

## installed `fish`

```bash
sudo pacman -S fish
```

## Installed `fzf`

**THIS HAS 42k stars on github. Yo!**

Source: https://github.com/junegunn/fzf#fuzzy-completion-for-bash-and-zsh

**HIGHLIGHTS: [AMAZING article](https://betterprogramming.pub/boost-your-command-line-productivity-with-fuzzy-finder-985aa162ba5d) MUST READ**

**_fzf love_**

```txt
ctrl+c #Cd into searched folder
ctrl+t #Search for file/folder
ctrl+r #Search command history
```

?? I don't remember how I installed it lately..

Usage is pretty awesome!!

```bash
# Files under the current directory
# - You can select multiple items with TAB key
vim **<TAB>

# Files under parent directory
vim ../**<TAB>

# Files under parent directory that match `fzf`
vim ../fzf**<TAB>

# Files under your home directory
vim ~/**<TAB>


# Directories under current directory (single-selection)
cd **<TAB>

# Directories under ~/github that match `fzf`
cd ~/github/fzf**<TAB>
```

## Installed `nginx`

**Content updated in the new Google Doc on 14 may, 2025.**

## Installed `ab` i.e., `Apache HTTP server benchmarking tool`

Source: https://man.archlinux.org/man/ab.1.en

```bash
sudo pacman -S apache

#Now you have access to `ab` cli.
```

## Installed neovim

[neovim - Archwiki](https://wiki.archlinux.org/title/Neovim), [neovim - Arch package](https://archlinux.org/packages/community/x86_64/neovim/).

```
sudo pacman -S neovim
# neovim uses your .vimrc file as well (idk, update 28 april 2022)


#### Installing on debian based (works well on ubuntu)
# 1. Download a release build from below i.e., a `.deb` file
# https://github.com/neovim/neovim/releases
wget https://github.com/neovim/neovim/releases/download/stable/nvim-linux64.deb

# 2. Install it and done!
sudo apt install ./my-package.deb



## Problems with installation on any server?
# With ubuntu all went well but cursor doesn't change to line shape coz the os doesn't support.
# With debian all went well + cursor shaping in insert mode works very good so it confirms that ubuntu lacks something that prevents cursor shaping when we go in insert mode. Yikes! DEBIAN rocks!
```

## Installed tmux:

````bash
sudo pacman -S tmux
# Get tmux config file from: https://github.com/sahilrajput03/arch_os/blob/main/.tmux.conf

## Another tmux cheatsheet: https://gist.github.com/andreyvit/2921703

### 10 August, 2022: Respawn current pane with prefix a
# as I added below to tmuxconfig file:
# Respawn with love with `prefix a`, src: https://unix.stackexchange.com/a/88393
# bind a "respawn-pane -k"


## Command to run a command in new pane ? 
# Ans. tmux split-window "echo hello;sleep 100"       ###so this will run the command in new pane, yikes!!
# src: https://unix.stackexchange.com/a/152740/504112

## You can switch between sessions in tmux via: ctr+( or ctrl+) and also you can do something like `ctrl+t s` to switch using a preview as well. Yikes! Src: https://stackoverflow.com/questions/32790061/switch-between-sessions-in-tmux

## Enable synchronize-panes by pressing `ctrl+t` followed by `shift+:` and next type `set synchronize-panes` on at the prompt. Now all the panes in the current window will be synced such that any thing you type will be done to all the panes. To disable synchronization: set synchronize-panes off.
#src: https://github.com/kelseyhightower/kubernetes-the-hard-way/blob/master/docs/01-prerequisites.md

# When in copy mode you accidentally selected some text using `v` or `V` but now you want to undo the select mode(deselect text), then you can press r to exit that select mode. YO!

# When in copy mode and you have selected some text, you can press o to move the cursor to the other end in the selected text. Yo!

# TODO: Good tmux blog(suggested by missing-semester): https://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/
# TODO: Good tmux blog (suggested by missing-semester): https://www.hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/

## You can swap a window pane with the upward pane in the upward with ctrl+t {
## You can swap a window pane with the upward pane in the downward with ctrl+t }


## You can attach to all the available tmux sessions currently alive via: ctrl+t ( or ctrl+t )

## You can use `shift+right click` to get default rightclick terminal behaviour. YO!!
# src: https://superuser.com/a/1543302/776589

# INTERESTING:
# To switch to previous active window
ctrl+t p

#Create new window (WHATS SPECIAL? *THIS CREATES TERMINAL IN SAME FOLDER, yo!)
ctrl+t n

## convert two horizontal into vertical layout
ctrl+t alt+1 # Even horizontal
ctrl+t alt+2 # Even vertical

ctrl+t alt+3 # main horizontal
ctrl+t alt+4 # main vertical
src: https://superuser.com/a/493057/776589

 Arrange panes in one of the five preset layouts: even-
            horizontal, even-vertical, main-horizontal, main-
            vertical, or tiled.



# Usage:
tmux    # Good to go now!
tmux -V # Know your tmux version.

# So, your ```bind-key``` is C-t (i.e., control+t, but otherwise it is control-b by default IMO ~sahil.)
# FYI: ```C-t C-? List of key bindings.``` (i.e., control+a control+? to open list of shortcuts, FYI: press ```q``` to exit it).

# WOW:: For selecting text from command ouput: Use ```C-a [``` to enter the ```copy mode``` and then you are in vim mode and simply use v or V and y to yank text and press ```q``` to exit. Yikes!!!
# WOW:: Use ```C-t ?``` to open the help menu in tmux and press ```q``` to exit it.
# Others:

C-t & to kill the current window
C-t x to kill the current pane
C-t <space> to change current panes to horizontal, vertical, or comple multiple adjustments.

# witching to a pane with pane numbers:
C-t q to show the pane numbers (press esc to exit that)
FYI: While the numbers are on top of panes you can switch to that pane by pressign the corresponding pane number as well.
FYI: You need to confirm killing the window with x by default but you can disable the confirmation for both pane and window by following this:  https://unix.stackexchange.com/a/30283/504112

C-t % to make new pane towards right.
C-t " to make new pane downwards.
C-t n to make a new window. # My custom hotkey.
# ALSO: Use ctrl+d to kill pane (this is a general terminal keybinding to kill any terminal though).

# Configuring tmux to start as default in any shell:
# Source: https://unix.stackexchange.com/a/113768/504112

# Setting new prefix key in config doesn't work for you? (HINT: You haven't stopped your earlier tmux server, do it via ```pkill tmux``` command.
# Answer: https://superuser.com/a/1287433/776589

#Kill all tmux windows and panes ?
pkill tmux

# Opening tmux without config file:
tmux -f /dev/null # Source: https://unix.stackexchange.com/a/411552/504112
````

Also, `screen` is another multi terminal managing utility but it isn't as good and popular as tmux:

````
sudo pacman screen
# Usage:
screen

# screen is tmux like software but it isn't that good coz::
# Why to use tmux and not screen: https://superuser.com/a/236160/776589
# though you can use screen it works very similar to tmux but isn't very popular for some reasons though its decent but i couln't able to start screen automatically with .bashrc setup idk why!

# Now refer this blos post: https://linuxize.com/post/how-to-use-linux-screen/
# Also do use .screenrc file and add ```startup_message off``` as suggested in above article to open it without initial message.

screen -wipe # To kill the detached session.
screen -wipe <ID> # TO kill a session with a particular id (you need this command only when there are more than 1 active sessions). Src: https://unix.stackexchange.com/questions/94527/how-do-i-kill-all-screens/170949#170949
````

## Installed pdf opening utility (`llpp`\* or `mupdf`)

```
sudo pacman -S llpp

#or you can use:
sudo pacman -S mupdf #mupdf doesn't allow continuous page scrolling so llpp is a better alternative.

#Usage:
llpp/mupdf myfile.pdf
```

## Installed auto-jump in archlinux

```bash
git clone https://aur.archlinux.org/autojump.git
cd autojump
makepkg -s
sudo pacman -U ./autojump-22.5.3-9-any.pkg.tar.zst

#Reading post install instructions I see it recommends to add below line:
[[ -s /etc/profile.d/autojump.sh ]] && source /etc/profile.d/autojump.sh #Making autojump work!

#Now restarting the terminal make me use it via:
j <anyRecentlyUsedFolderName>
```

**Q. Why autojump is awesome?**

*Ans. Coz it also does this:*

![image](https://user-images.githubusercontent.com/31458531/167282003-5af0f4bd-06f5-4c68-accc-80a85d6669a0.png)


## Installed mutt - a cli email client utility

**IMPORTANT NOTICE: Starting from May 30, 2022 you need to have `APP_PASSWORD` to make mutt work.** [READ HERE](https://support.google.com/accounts/answer/6010255?hl=en)

```
sudo pacman -S mutt
```

Configuring your email client [help here](https://linuxconfig.org/how-to-install-configure-and-use-mutt-with-a-gmail-account-on-linux).

_Using mutt from cli form this [blog post](https://www.tecmint.com/send-mail-from-command-line-using-mutt-command/)._

UPDATED: 4 Aug, 2022: Use this [address to create app password](https://security.google.com/settings/security/apppasswords). Source: [Article](https://linuxconfig.org/how-to-install-configure-and-use-mutt-with-a-gmail-account-on-linux).

**Do interesting stuff with mutt:**

```bash
echo I need more things and all this text goes to body. | mutt -s 'MySubject' sahilrajput03@gmail.com
# Here I am sending subject and above body to myself.
```

```bash
mutt -s 'MySubject' sahilrajput03@gmail.com < myFile.txt
# Here I am sending subject and body from myFile.txt to my own email.
```

**IMPORTANT**: You must enable [this option](https://stackoverflow.com/a/59129162/10012446) in your gmail account so be able to login via `mutt`.

## Installed crontab in archlinux

Source: https://unix.stackexchange.com/a/261871/504112

Cron docs @ archlinux: https://wiki.archlinux.org/title/cron

````bash
sudo pacman -Syu cronie

# enable service
systemctl enable --now cronie.service

# get status of cronjob service
systemctl status --now cronie.service

# Help of `crontab` cli tool
crontab -h
# OUTPUT
# crontab: invalid option -- 'h'
# crontab: usage error: unrecognized option
# usage:  crontab [-u user] file
#         crontab [ -u user ] [ -i ] { -e | -l | -r }
#                 (default operation is replace, per 1003.2)
#         -e      (edit user's crontab)
#         -l      (list user's crontab)
#         -r      (delete user's crontab)
#         -i      (prompt before deleting user's crontab)


# For editing cron files
# NOTE: Make sure yo have EDITOR variable set in ~/.bashrc i.e,	export EDITOR=/usr/bin/vim
crontab -e

# For viewing current cron jobs
crontab -l

# SAMPLE
@reboot sleep 60;/home/pi/Documents/skype-bot-with-heroku-webhook-for-build-notifications/skype-bot/scriptRaspiHTTPS.sh
````

## Installed workrave in archlinux

Source: https://github.com/rcaelers/workrave

```
sudo pacman -S workrave
```

## Installed hstr (`hh`)

A search engine for command line history

Source: [AUR](https://aur.archlinux.org/packages/hstr/)

```bash
git clone https://aur.archlinux.org/hstr.git
cd hstr
makepkg -s
sudo pacman -U hstr-x.x.x.x-x86_64.pkg.tar.zst

# Usage:
hh
```

FYI:

- You can use `ctrl+j`/`ctrl+k`(same as vim) to go up/down in the command list.
- `Esc`/`ctrl+c` to exit the search dialog.

Also `mcfly` seems another fascinating solution for this as well, i.e., [source](https://stackoverflow.com/a/64895550/10012446) and it [github](https://github.com/cantino/mcfly) (3.5k stars WOW).

## Installed zip in archlinux:

My Usage Guide in [learn-bash](https://github.com/sahilrajput03/sahilrajput03/blob/master/learn-bash.md)

```bash
sudo pacman -S zip
```

## Install yarn on archlinux

```bash
sudo pacman -S yarn
```

## Installed vnstat - a network bandwidth and speed monitoring service

```
sudo pacman -s vnstat
# Read awesome docs @ https://wiki.archlinux.org/title/vnStat

# Issue using `vnstat` like permission issue then this is what u need to fix it:
# src: https://github.com/vergoh/vnstat/issues/134#issuecomment-663836557
systemctl start vnstat.service
systemctl enable vnstat.service

# Usage:
vnstat --add -i wlp3s0 #or your network card name via command: ip addr

#Fav use case:
vnstat --live
```

## Installed any-desk

```
git clone https://aur.archlinux.org/anydesk-bin.git
cd anydesk-bin
makepkg -s
sudo pacman -U anydesk-bin-xxx.xx.tar.zst
```

## Installed `inotify-tools` for `inotifywait`

Wow, even facebook's watchman also uses `inotifywait` underneath [src](https://facebook.github.io/watchman/docs/install.html).

```bash
sudo pacman -S inotify-tools
```

````bash
# BEAUTIFUL READY MADE SCRIPT:
inotifywait -q -m -r -e close_write --exclude '.git/*' --format 'Wrote file %w%f' . # We're watching complete directory and recursively as well.
# FYI You can append ```| sh``` at the end of above command to execute the formatted message as shell commands DIRECTLY as well. (See below source link to know 1 usecase of this).
# source: https://stackoverflow.com/a/420172/10012446 ((But the problem with << this answer is that it watches over a file and when we watch over a single file like that (i.e., say `file.txt`) then %f doesn't seem to work at all IDK WHY, but it simply works if we watch over a complete directory via a . {period} )).
# FYI: %f is the filename and %w is the directory path in which the just changed file exists.

# Another way of doing it if you want to include a while loop (IMO{sahil}: its not at all necessary coz above one-liner performs all good!).
inotifywait -q -m -r -e close_write --exclude '.git/*' --format '%f' . | while read FILE; do echo "$FILE written."; done
# source: same above stackoverflow's answer.
# inotifywait has a javascript implementaion as well: https://www.npmjs.com/package/inotifywait


########################################

#1.sh
#!/bin/bash
echo helloworld
sleep 3
echo byeworld



# ~sahil: Watch over file and execute that file i.e., ```1.sh```. Inspired from a comment in answer from below stackoverflow's answer.
# The drawback of this way instead of original answer's way i.e. using `read -r` is that when the command is in the process of execution(i.e., 1.sh) inotifywait won't be able to get signal of file write event, thus this simple looking way fails to work good enough for cases like running a express's node server which runs indefinitely and one needs to kill the process and start it again on file write changes. Yikes!
while inotifywait -q -e close_write 1.sh > /dev/null; do
  ./1.sh
done




# Watch over file and execute that file i.e., ```1.sh```.
# src: https://superuser.com/a/181543/776589
# tl;dr: Since we're using `-m` (monitor) flag so our the command(./1.s) is queued and run sequentially only when the last instance completely finishes!
# The problem with this solution is that when the file is in execution phase (i.e., 1.sh) the script doesn't kill the existing running process but instead for getting it completed/exited and then only the event of running the file starts. So in simple terms it does listen to file changes even when the file (1.sh) is in execution phase but the problem is it doesn't kill the existing process and thus all write events triggered actions are queued. So such mechanish is not good for cases like running a express's node server which runs indefinitely and one needs to kill the process and start it again on file write changes. Yikes!
inotifywait -q -m -e close_write 1.sh |
while read -r filename event; do
  ./1.sh
done


# ~sahil: Watch over current directory recursively and execute ```1.sh``` file.
inotifywait -q -m -e close_write -r . |
while read -r filename event; do
  ./1.sh
done
# Note the ```-r .``` option will watch over the current directory in recursive manner.



# Usage:
inotfywait

# Docs:
man inotifywait
# github: https://github.com/inotify-tools/inotify-tools/wiki#arch-linux

# From: ```inotifywait --help```
# -e|--event <event1> [ -e|--event <event2> ... ]
# Listen for specific event(s).  If omitted, all events are listened for.

# -m|--monitor
# Keep listening for events forever or until --timeout expires. Without this option, inotifywait will exit after one event is received.

# -q|--quiet
# Print less (only print events).

# -r|--recursive
# Watch directories recursively.

# --format <fmt>
# Print using a specified printf-like format string; read the man page for more details.
# e.g., --format 'Wrote file %w%f'
# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ (TESTED ~sahil)
````

## Install android studio ♡ ♥💕❤😘 

```bash
yay -S android-studio
# Now you would need to complete installation by running
android-studio
# Also add below line to your .bashrc file
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
# install java/javac in system.
sudo pacman -S jre11-openjdk
java --version
# install jdk
sudo pacman -S jdk11-openjdk
javac --version


#########
#### NOTE for capacitor v5: you have to use `jdk17-openjdk` and `jre17-openjdk`
# And add below line in .bashrc to make use version 17 (this would work along with version 11 installed)
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
#########


# Installed on manjaro-i3 version (2 May, 2023):
# SDK Location: /home/array/Android/Sdk
# JDK Location: /opt/android-studio/jbr

# ISSUE: -bash: adb: command not found
# LEARN: adb is included in the Android SDK Platform Tools package. Download this package with the SDK Manager, which installs it at ~/Android/Sdk/platform-tools/adb
# Solution:
# sudo ln -s ~/Android/Sdk/platform-tools/adb /bin/adb
# ♥ IMPORTANT (capacitor): If you are getting error while building an apk with capacitor `ERR_UNSUITABLE_API_INSTALLATION`, you must install sdk for Android 10 to fix it. (see screenshot help below on this page)

# ISSUE: -bash: emulator: command not found
# Solution:
# sudo ln -s ~/Android/Sdk/emulator/emulator /bin/emulator

##### LEARN `emulator` cli
# List available AVDs
emulator -list-avds
# OUTPUT:
# Pixel_3_XL_API_33
# Pixel_3a_API_33_x86_64
# Pixel_4_API_33

# Run avd
emulator -avd Pixel_3a_API_33_x86_64
```

**Getting error ⚠️⚠️⚠️⚠️⚠️ like: `ERR_UNSUITABLE_API_INSTALLATION` when to try to build an apk using capacitor?**

Also, to make a build you must have sdk for android 10, you can install it like that:

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/2d34a62d-b39c-4719-9c1d-ba29dca7532c)


## Setting up android environment with vscode (*Not works in the end part i.e, with vscode extension we're not able to generate apk 
builds*)

Arch's article: https://wiki.archlinux.org/title/android#SDK_packages

##### Permission of certificates permission denied ISSUE FIXED !! :

Installed sdkmanager in archos

Fixed as: https://stackoverflow.com/a/54273442/10012446

Vscode Extension: _Android full Support_ helps to create fresh projects and also facilitates sdkmanager from command pallete in android studio.

https://developer.android.com/guide/topics/resources/providing-resources

[Build your app from the command line @ Android Studio Docs](https://developer.android.com/studio/build/building-cmdline)

#### 1. java

```
# install java/javac in system.
sudo pacman -S jre11-openjdk
java --version

# install jdk
sudo pacman -S jdk11-openjdk
javac --version


#########
#### NOTE for capacitor v5: you have to use `jdk17-openjdk` and `jre17-openjdk`
# And add below line in .bashrc to make use version 17 (this would work along with version 11 installed)
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
#########
```

#### 2. install platform-tools

````
git clone https://aur.archlinux.org/packages/android-sdk-platform-tools/
cd android-sdk-platform-tools
makepkg -s
sudo pacman -U android-platform-sdk-tools-x.x.x....tar.zst

# https://stackoverflow.com/a/9210397/10012446
# that helped me to get rid of ```adb devices``` error of no-permission, Yikes!! ALSO You would need to accept the permission on this very time when you connect the device again. And it'll show the device as ```adb devices``` >> ```<device-id> device```

# You need to source /etc/profile or relogin to add the Android SDK platform tools to your path.

# For vscode's extension use the platform-tools you can define `ANDROID_SDK_ROOT` variable must be pointing to platform-tools directory.
# So add a variable entry in /etc/environment file as
ANDROID_SDK_ROOT='/opt/android-sdk'

and run so vscode get permission to read/write to /opt/android-sdk folder.
sudo chmod g+rwx /opt/android-sdk
sudo chmod o+rwx /opt/android-sdk

# and logout and login, now vscode's extension would pick right path for android-sdk and you would be able to access adb cli's tool as well. If above android-platform-sdk-tools cause issue you can simply remove and reinstall the the tools again from the sdk manager in vscode. Yikes!
````

Platform-tools installed @ `/opt/android-sdk/platform-tools/`

#### 3. Android sdk

Installing `Android 10 (API 29)` from the _Open SDK Manager_ in the vscode's extension.

In the Android 10(API 29): Choose `SDK Platform`, `Google APIs Intelx86 Atom_64 System Image` and `Sources for AndroidSDK`. Also, you can choose to install `Android SDK Platform-tools` or ignore if you installed that from _arch's AUR_ before.

## installed kotlin archos

```
sudo pacman -Syyu
sudo pacman kotlin
```

Official installation [source](https://kotlinlang.org/docs/command-line.html#create-and-run-an-application),

## Installed mongodb - archos

Src: [1](https://wiki.archlinux.org/title/MongoDB), [2](https://aur.archlinux.org/packages/mongodb-bin/).

```bash
git clone https://aur.archlinux.org/mongodb-bin.git
cd mongodb-bin
makepkg -s
sudo pacman -U mongodb-bin....tar.zst

# Run mongodb server:
sudo systemctl start mongodb

# To enable mongodb service to run on system startup:
sudo systemctl enable mongodb
```

## Set vim as editor via git instead of vi (it throws errror bcoz of that)

```
git config --global core.editor vim
```

## Installed speedtest on arch

```
sudo pacman -S speedtest-cli
# Usage:
speedtest
```

Src: https://archlinux.org/packages/community/any/speedtest-cli/

## Recursiveness in ls or tree

```
ls -R -I node_modules* -I debug* -I build* -I deps*
# Prints everything recursively (-R) and ignored patters like node_modules, build, deps. Yikes!!

tree -I 'arch_os|target|rustlings|target|node_modules'
# PRints everything recursively, src: https://unix.stackexchange.com/a/47806/504112
```

## head and tail

```bash
head -n 5 someFile #prints first 5 lines of file.
tail -n 5 someFile #prints last 5 lines of file.
```

## Terminal - seaching previous commands ?

Type some text in terminal and press `ctrl+r` - Activate search mode.

Now press `ctrl+r` multiple times to search back in order(fyi: there's no way to forward search, :( sad). **FYI**: Its not really good experience to use that. ~Sahil.

`ctrl+g` - Exit search mode.

Other good way to seach in previous commands in like:

```bash
history n # n is number and it give last n number of commands(including the commands you executed in current shell as well).
history 300 | grep scp | grep important$
```

The most amazing experience to solve this is via using `hh` cli tool, i.e., #see `hstr` in this file for help for using that.

## Installed docker, docker-compose in archos

````bash
sudo pacman -S docker docker-compose

sudo systemctl enable docker.service #So that docker automatically starts on system boot.
sudo systemctl start docker
# Fix permission issue for socket i.e., ```/var/run/docker.sock``` # Source: https://www.digitalocean.com/community/questions/how-to-fix-docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket#)
sudo chmod 666 /var/run/docker.sock

# PLEASE REBOOT(reboot means reboot and not just logout and login) THE SYSTEM ONCE PLEASE TO BE ABLE TO GET DOCKER FUNCTIONING. src: https://stackoverflow.com/a/55911400/10012446

# Test if docker is running GOOD via:
sudo systemctl status docker # OR
docker info # OR
docker ps -aux
````

## Installed postgresql in archos

```
sudo pacman -S postgresql
To setup the configuration now please follow @ https://github.com/sahilrajput03/learning_sql/blob/main/setup-postgres.md)
```

## Installed Watchexec ( a program watch execution on modification, written with rust!

```
sudo pacman -S watchexec
# Usage: watchexec -c ./fly.sh    # -c is option for clearning screen on each run.
```

FYI: The problem with `nodmeon -x "bash $@"` was that it seemed to supress some message like when have a script like:

```bash
read -p "Enter your name" name # with nodemon it does print ""Enter your name"" which get printed when you run wihtout nodemon. So watchexec rocks!
echo $name
```

## Installed gui interface for postgres i.e., pgadmin4

```bash
### installation via pip :)
# Browse: https://github.com/sahilrajput03/learning_sql/blob/main/Notes_pgadmin4_install.md


################# INSTALLATION VIA arch package is brocken at the moment (from a long time I guess i.e., 1 whole year)
################# sudo pacman -Syu
################# sudo pacman -S pgadmin4
################# src: https://archlinux.org/packages/community/x86_64/pgadmin4/
```

## Installed qbittorrent

```
sudo pacman -S qbittorrent
```

[Src](https://archlinux.org/packages/community/x86_64/qbittorrent/)

## Intalled telegram-desktop

```
sudo pacman -Syu
sudo pacman -S telegram-desktop
```

## Creaing symlink of a folder to desicred folder

```bash
ln -s file/folder .
# ^^ creates link of file/folder to current directory with same name.

unlink file/folder
# ^^ this will remove the symlink that you created earlier.
```

[Source](https://linuxize.com/post/how-to-create-symbolic-links-in-linux-using-the-ln-command/)

## Fix authentication for github co-pilot in archos

Simply install keyring: `sudo pacman -S gnome-keyring`
^^ this was required to make the auth with github copilot when the login with browesr happens for auth of github account.

Source: [parent](https://code.visualstudio.com/docs/editor/settings-sync#_troubleshooting-keychain-issues) => [child](https://github.com/microsoft/vscode/issues/92972#issuecomment-625751232).

## Installed pip on arch

`sudo pacman -S python-pip`

[Source](https://linuxhint.com/install_pip_archlinux/)

Installed jupyter notebooks with pip: `pip install notebook`, [Source](https://jupyter.org/install).

**_Also if you can't access_ `jupyter` cli binary from terminal make sure you add `export PATH=$PATH:~/.local/bin` to your `~/.bashrc` file.**

[Source](https://hub.gke2.mybinder.org/user/ipython-ipython-in-depth-7y35qkm4/notebooks/binder/Index.ipynb)

## Mounting my kindle/portable hdd on linux

```
sudo mount /dev/sdc sdc1/

sudo umount /dev/sdc #To un mount.
```


## insatlled sqliteman

Source: [stackoverflow answer](https://unix.stackexchange.com/a/38623)

Docs: http://sqliteman.yarpen.cz/

```
git clone https://aur.archlinux.org/packages/sqliteman/
cd sqliteman
makepkg -s
sudo pacman -U sqliteman-1.2.2-12-x86_64.pkg.tar.zst
```

#### Insall yarn my arch setup

`npm i -g yarn`

## Linux fun:

```bash
. --help # is same as
source --help
```

## Define variables in arch-os

```
sudoCode /etc/environment
# Now add some value pairs, i.e., v1=value1 one in each line and you would be able to test them i.e., `echo $v1` once after logout/login event.
# Tip if you want to access the variables in current bash in hurry.., simply do like `. /etc/environment` to test your `/etc/environment` file in current bash shell only.
```

## Installed dig cli tool

```
sudo pacman -Sy dnsutils
```

[Source](https://www.tecmint.com/install-dig-and-nslookup-in-linux/#digarch)

## Pushing archLinux.iso to a usb:

```
dd: disk dump (people also call it as disk destroyer, coz if not used correct drive it'll destroy the target drive).
man dd: to read its documentation.


dd if=Downloads/archlinux_64.iso of=/dev/sdb
# if=inputFile, of=ouputFile.
# be careful that your of (output file) i.e., if its gonna be extremely right device you want the iso file's data to be dumped off.
```

## Why prefer pacman ?

Bcoz if you ever run `pacman -Syu` then all your packages installed via pacman will be updated.

## Installed chromium

```
sudo pacman -S chromium
```

If you get some error then you can use `sudo pacman -Syu` to upgrade the system and probably the problem will be fixed as [this](https://stackoverflow.com/a/67552506/10012446) helped me.

## Update system

```bash
sudo pacman -Syu
```

## Installed code-server via below commands (#vscode  in browser, #editor in browser)

For macos, [click here](https://docs.google.com/document/d/1d4Tq28JC17lFqkoz3lqodACnOlCihFj-MnzNb2Vcqd8/edit?tab=t.0).

src:

```
# Install code-server from the AUR with plain makepkg.
git clone https://aur.archlinux.org/code-server.git
cd code-server
makepkg -si
sudo systemctl enable --now code-server@$USER
# Now visit http://127.0.0.1:8080. Your password is in ~/.config/code-server/config.yaml
```

## setting up ssh

```bash
sudo pacman -S openssh

# check the status:
sudo systemctl status sshd

#start service if above command shows ``inactive``
sudo systemctl start sshd

# now check again the status and it should be active for sure.

# to stop ssh server:
sudo systemctl stop sshd
```

src: https://linuxhint.com/arch_linux_ssh_server/

## Ranger

- Ranger Docs in Archlinux: [Click here](https://wiki.archlinux.org/title/ranger#Configuration)
- Ranger - [Github](https://github.com/ranger/ranger)

- **Use `S` in ranger to return to shell in current folder.**

### Ranger shwoing images in terminal is awesome

Source: https://askubuntu.com/a/1268970/702911

```bash
# create a user specific rangerconfig file if it doesn't exist already
cp /usr/share/doc/ranger/config/rc.conf ~/ranger/

# edit config file
vi ~/ranger/rc.conf

# Then make below changes:
set preview_images true
```

![image](https://user-images.githubusercontent.com/31458531/193551184-39b6f9ed-e987-4275-b8df-9c0d02120ead.png)


### Configuring`ranger` and setting `google-chrome-stable` as defautl pdf viewwer:

```bash
# copy default config file of ranger to .config/ranger/rifle.conf path, so we can customise it on user basis.
ranger --copy-config=rifle

# move config folder to /home/array path becoz reading from `man rifle` command we need to have the `ranger` config folder at `/home/array` becoz we have already have set `XDG_CONFIG_HOME=/home/array` so rifle is gonna look for the config file in `/home/array/ranger/rifle.conf` path
mv /home/array/.config/ranger/ /home/array/

# modifying user config file
vi.ranger # which is aliased to below `vi ~/ranger/rifle.conf`
```

and now add below line where you have other pdf extension openers defined in there:

```bash
ext pdf, has google-chrome-stable,     X, flag f = google-chrome-stable "$@"
```


### Config file of rifle not working?

Since I have set my variable `XDG_CONFIG_HOME` set as `/home/array` (see in .bashrc) to konw whey I set that varaible to that value(spoiler: to make neovim's config work).

![image](https://user-images.githubusercontent.com/31458531/193546601-493d1af4-4e5d-449d-8538-b8a4629372a4.png)

And also, from output of command: `man rifle`

![image](https://user-images.githubusercontent.com/31458531/193546326-692727ff-2d42-4f92-8636-72122a779170.png)

so we need to run below command to fix the config folder path to make ranger and rifle work (ranger uses rifle internally to select set default program openers for different types of files):

```bash
mv /home/array/.config/ranger/ /home/array/
```

## Installing `comfortable-motion` and `vim-plug`

Install vim-plug(a vim plugin manager):
LEARN vim-plug -> https://github.com/junegunn/vim-plug#example

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

now, add config to `~/.vimrc` file i.e., code from: https://github.com/junegunn/vim-plug#example.

**OR tl;dr; add below code directly:**

```
call plug#begin('~/.vim/plugged')

Plug 'yuttie/comfortable-motion.vim'
" More plugins here.

call plug#end()
```

**IMPORTANT:** Reload `.vimrc` and `:PlugInstall` to install plugins.

## Disable capslock completely (ROCKS!)

Updated on: 16th April, 2022

**FYI: The file `/etc/X11/xorg.conf.d/00-keyboard.conf` is backuped at `config` repository as well!! So you can directly copy that file to its needed location anytime to get your settings.**

Stackoverflow Amazing Answer - [xmodmap - remap Caps_Lock to Escape and Shift+Caps_Lock to Caps_Lock](https://superuser.com/a/1471357)

**Learn how to make sample config files from scratch from below link of arch docs:** [Click here](https://wiki.archlinux.org/title/Xorg/Keyboard_configuration#Using_X_configuration_files)

Source: [Using config files of x11 @ ArchWiki](https://wiki.archlinux.org/title/Xorg#Using_.conf_files)

**tldr;**

```bash
sudoCode /etc/X11/xorg.conf.d/00-keyboard.conf
```

and add below code in the tripple backticks:

```txt
Section "InputClass"
        Identifier "system-keyboard"
        MatchIsKeyboard "on"
#        Option "XkbLayout" "cz,us"
#        Option "XkbModel" "pc104"
#        Option "XkbVariant" ",dvorak"
#        Option "XkbOptions" "grp:win_space_toggle"
	Option "XkbOptions" "terminate:ctrl_alt_bksp,caps:escape"
# Currently, I am completely disabling capslock      ^----------^
EndSection
```

My useful notes:

```txt
# FYI: Read all available optinos via: cat /usr/share/X11/xkb/rules/base.lst
# FYI: The options should be separated by comma as you can see above^^^^^
# FYI: ctrl+alt+backspace will simly logout.

# Usefult options to see:
# terminate:ctrl_alt_bksp Ctrl+Alt+Backspace (( ~Sahil, this will logout in superfast manner without any confirmation.
# caps:escape_shifted_capslock Make Caps Lock an additional Esc, but Shift + Caps Lock is the regular Caps Lock
# caps:none            Caps Lock is disabled
# caps:escape          Make Caps Lock an additional Esc
```

## Sending a notification with `notify-send`

```bash
notify-send Hello "More text here"
```

## Enabling hibernation in archlinux

1. LEARN: ::About What all needs to be done in order to make hibernation work when you already have a swap partition and have a entry for it in the `/etc/fstab` file::

One thing I remember, I needed to point the kernel to the swap partition on the kernel command line. This is described somewhere in the ArchWiki article about hibernation. There might also be changes needed in the HOOKS= line in /etc/mkinitcpio.conf, but I don't quite remember. This will also be mentioned somewhere in the wiki article.

I occasionally have problems with hibernation depending on the kernel version. Some versions don't work right for my PC here. I don't think that's the problem for you from the way you describe what's happening, but I guess you could still try a different kernel version to check. There's an alternative one in the package named linux-lts. You can install it in parallel to the normal linux package. You need to look up how to add a second boot menu entry for it with the boot loader you are using.

src: https://www.reddit.com/r/linuxquestions/comments/7swvyb/cannot_restore_session_after_hibernation/?utm_source=reddit-android

2. LEARN ::About adding entry in the `/etc/default/grub` file::
   https://wiki.archlinux.org/title/GRUB
   ^^ search for hibernation keyword and you'll get the necessary things you need to do in file - `/etc/default/grub` in variable - `GRUB_CMDLINE_LINUX_DEFAULT`.

3. LEARN :: Reference from video:
   src: https://www.youtube.com/watch?v=Xek3TGKzLWw&list=PLBfwD_NnDB3p4rM53ZxU2K6o5YZMzr6qc&index=7&t=270s
