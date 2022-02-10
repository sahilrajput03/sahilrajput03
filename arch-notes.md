# archlinux-notes

**FYI: `config` files : [sahilrajput03/config](https://github.com/sahilrajput03/config)**

## See default applications settings in archlinux

Archlinux: https://man.archlinux.org/man/xdg-settings.1

Archlinux: https://wiki.archlinux.org/title/Default_applications

Changing default browser issue: https://bbs.archlinux.org/viewtopic.php?id=140028

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

***fzf love***

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

```bash
sudo pacman -S nginx
sudo systemctl status ngingx # Shoudl show not active
sudo systemctl start nginx # To start the server

#Now you can access server via browsing: 
http://localhost/ or http://127.0.0.1

# FYI: You can browse old working configs and your own docs @
- https://github.com/sahilrajput03/vanilla-clustering-with-fastify/tree/main/nginx
- https://github.com/sahilrajput03/dockerHelsinki (search for `nginx.conf` files)
```

```bash
#Important files and config file paths:
vi /usr/share/nginx/html/index.html
sudo nvim /etc/nginx/nginx.conf
```

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
# neovim uses your .vimrc file 
```

## Installed tmux:

```bash
sudo pacman -S tmux
# Get tmux config file from: https://github.com/sahilrajput03/arch_os/blob/main/.tmux.conf

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
```

Also, `screen` is another multi terminal managing utility but it isn't as good and popular as tmux:

```
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
```

## Installed pdf opening utility

```
sudo pacman -S llpp

#or you can use:
sudo pacman -S mupdf #mupdf doesn't allow continuous page scrolling so llpp is a better alternative.

#Usage:
llpp/mupdf myfile.pdf
```

## Installed xorg-xprop in archlinux

```bash
sudo pacman -S xorg-xprop

#Now you can use:
xprop
# Now use cross-hair cursor to click any window and get all the details of that window!! Its good for doing stuff (like making certain windows always float in i3 tiling manager or other similar stuff).
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

## Installed mutt - a cli email client utility

```
sudo pacman -S mutt
```
Configuring your email client [help here](https://linuxconfig.org/how-to-install-configure-and-use-mutt-with-a-gmail-account-on-linux).

Using mutt from cli form this [blog post](https://www.tecmint.com/send-mail-from-command-line-using-mutt-command/).

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

```bash
sudo pacman -Syu cronie
systemctl enable --now cronie.service

# Test status of service now:
systemctl status --now cronie.service

# Now you can use cli-tool i.e, ```crontab```
# IMPORTANT: Add ```export EDITOR=/usr/bin/vim``` in your ```~/.bashrc``` file so ```crontab -e``` would work as it uses ```/bin/vim``` for editing cron files.
```

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

-  You can use `ctrl+j`/`ctrl+k`(same as vim) to go up/down in the command list. 
-  `Esc`/`ctrl+c` to exit the search dialog.


Also `mcfly` seems another fascinating solution for this as well, i.e., [source](https://stackoverflow.com/a/64895550/10012446) and it [github](https://github.com/cantino/mcfly) (3.5k stars WOW).

## installed zip in archlinux:

```
sudo pacman -S zip
```

## Unzip/zip the files with password

```bash
zip -e targetFile.zip sourceFolder
# source: https://www.tecmint.com/create-password-protected-zip-file-in-linux/

# Unzipping:
unzip ccat-command.zip
```

## Install yarn on archlinux

```
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

```bash
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
```

## Setting up android environment with vscode

Arch's article: https://wiki.archlinux.org/title/android#SDK_packages

##### Permission of certificates permission denied ISSUE FIXED !! :

Installed sdkmanager in archos

Fixed as: https://stackoverflow.com/a/54273442/10012446

Vscode Extension: *Android full Support* helps to create fresh projects and also facilitates sdkmanager from command pallete in android studio.

https://developer.android.com/guide/topics/resources/providing-resources

[Build your app from the command line @ Android Studio Docs](https://developer.android.com/studio/build/building-cmdline)

#### 1. java

```
#install java/javac in system.
sudo pacman -S jre11-openjdk
java --version

sudo pacman -S jdk11-openjdk
javac --version
```

#### 2. install platform-tools

```
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
```

Platform-tools installed @ `/opt/android-sdk/platform-tools/`

#### 3. Android sdk

Installing `Android 10 (API 29)` from the *Open SDK Manager* in the vscode's extension.

In the Android 10(API 29): Choose `SDK Platform`, `Google APIs Intelx86 Atom_64 System Image` and `Sources for AndroidSDK`. Also, you can choose to install `Android SDK Platform-tools` or ignore if you installed that from *arch's AUR* before.

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

## Detect if a service i.e.,  services in `systemctl` is enabled (starts on boot) ?

```bash
systemctl is-enabled code-server@array
#src: https://unix.stackexchange.com/a/599587/504112

# when the service is enabled: sudo systemctl enable code-server@array
#Output: enabled

# when the service is disabled: sudo systemctl disable code-server@array
#Output: disabled
```
src: https://unix.stackexchange.com/a/599587/504112

read lots of below from: https://www.howtogeek.com/412055/37-important-linux-commands-you-should-know/

## Print processes of particular user

```bash
ps -u array
ps -u root
```

## Change password of a user:

```bash
sudo passwd       #Changes password of current user.
sudo passwd mary  #Changes password of different user, the reason you can change any other user's password is bcoz you are in sudoer group else you can't.
```

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

## groups

The groups command tells you which groups a user is a member of.

```bash
groups dave
groups mary
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

```bash
sudo pacman -S docker docker-compose

sudo systemctl enable docker.service #So that docker automatically starts on system boot.

# PLEASE REBOOT(reboot means reboot and not just logout and login) THE SYSTEM ONCE PLEASE TO BE ABLE TO GET DOCKER FUNCTIONING. src: https://stackoverflow.com/a/55911400/10012446

# Test if docker is running GOOD via:
sudo systemctl status docker
# or
docker info # OR
docker ps -aux

sudo chmod 666 /var/run/docker.sock
#    ^^^^^ This might be needed if you get some permission issue for socket i.e., ```/var/run/docker.sock```
# src: https://www.digitalocean.com/community/questions/how-to-fix-docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket#)
```

## Switching to different user:

```bash
src: https://wiki.archlinux.org/title/PostgreSQL

# If you have sudo and are in sudoers:
$ sudo -iu someUser
echo $USER                        #Prints currently logged in user.


# Otherwise using su:
$ su    #Enter the root's password, then you'll be logged in as root user(i.e., #)
# su -l someUser
echo $USER                        #Prints currently logged in user.
```

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

```
sudo pacman -Syu
sudo pacman -S pgadmin4
# src: https://archlinux.org/packages/community/x86_64/pgadmin4/
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

***Also if you can't access* `jupyter` cli binary from terminal make sure you add `export PATH=$PATH:~/.local/bin` to your `~/.bashrc` file.**

[Source](https://hub.gke2.mybinder.org/user/ipython-ipython-in-depth-7y35qkm4/notebooks/binder/Index.ipynb)

## Mounting my kindle/portable hdd on linux

```
sudo mount /dev/sdc sdc1/

sudo umount /dev/sdc #To un mount.
```

## change root password

```
sudo -i passwd
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

## Installing nvm:

src: [AUR](https://aur.archlinux.org/packages/nvm/)

```bash
git clone https://aur.archlinux.org/nvm.git
cd nvm
makepkg -s
sudo pacman -U nvm-*******-any.pkg.tar.zst
echo 'source /usr/share/nvm/init-nvm.sh' >> ~/.bashrc
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
sudo vim /etc/environment
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

## Become root user

`sudo su`

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

Installed code-server via below commands

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

```
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

##  Configuring`ranger` and setting `google-chrome-stable` as defautl pdf viewwer:

```
ranger --copy-config=rifle #Copies default config file of ranger to .config/ranger/rifle.conf path, so we can customise it on user basis.
vi .config/ranger/rifle.conf
```

and now add below line where you have other pdf extension openers defined in there:

```
ext pdf, has google-chrome-stable,     X, flag f = google-chrome-stable "$@"
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

## Setting up capslock to esc and shift+capslock to actual capslock:

**FYI: The file /etc/X11/xorg.conf.d/00-keyboard.conf is backuped at ``backupFiles`` folder as well!! So you can directly copy that file to its needed location whenever you need to set esc-capslock-shift settings as you have right now.**

Amazing answer here: https://superuser.com/a/1471357

**Learn how to make sample config files from scratch from below link of arch docs:**

https://wiki.archlinux.org/title/Xorg/Keyboard_configuration#Using_X_configuration_files
 
Source: https://wiki.archlinux.org/title/Xorg#Using_.conf_files

**tldr;**

```bash
sudo vim /etc/X11/xorg.conf.d/00-keyboard.conf
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
	Option "XkbOptions" "terminate:ctrl_alt_bksp,caps:escape_shifted_capslock"
EndSection
```

## Sending a notification with `notify-send`

```bash
notify-send Hello "More text here"
```

## Permission

ls -l --->>> gives

```txt
1234567890
1: file/directory significance.
234: read write execution permission for the user owner of the file.
567: read write execution permission for the user owner's group of the file.
890: read write execution permission for all other users.
```

```bash
# user of the file:
$ chmod +rwx filename

# all the users in the group of the  
chmod g+w filename
chmod g-wx filename

# others
chmod o+w filename
chmod o-rwx foldername
```

**Permission numbers**

```txt
0 = ---
1 = --x
2 = -w-
3 = -wx
4 = r-
5 = r-x
6 = rw-
7 = rwx
```

For example:

```
chmod 777 foldername will give read, write, and execute permissions for everyone.
chmod 700 foldername will give read, write, and execute permissions for the user only.
chmod 327 foldername will give write and execute (3) permission for the user, w (2) for the group, and read, write, and execute for the users.
```

## Enabling hibernation in archlinux

1. LEARN: ::About What all needs to be done in order to make hibernation work when you already have a swap partition and have a entry for it in the ``/etc/fstab`` file::
 
One thing I remember, I needed to point the kernel to the swap partition on the kernel command line. This is described somewhere in the ArchWiki article about hibernation. There might also be changes needed in the HOOKS= line in /etc/mkinitcpio.conf, but I don't quite remember. This will also be mentioned somewhere in the wiki article.

I occasionally have problems with hibernation depending on the kernel version. Some versions don't work right for my PC here. I don't think that's the problem for you from the way you describe what's happening, but I guess you could still try a different kernel version to check. There's an alternative one in the package named linux-lts. You can install it in parallel to the normal linux package. You need to look up how to add a second boot menu entry for it with the boot loader you are using.

src: https://www.reddit.com/r/linuxquestions/comments/7swvyb/cannot_restore_session_after_hibernation/?utm_source=reddit-android

2. LEARN ::About adding entry in the ```/etc/default/grub``` file::
https://wiki.archlinux.org/title/GRUB
^^ search for hibernation keyword and you'll get the necessary things you need to do in file - ```/etc/default/grub``` in variable - ```GRUB_CMDLINE_LINUX_DEFAULT```.

3. LEARN :: Reference from video: 
src: https://www.youtube.com/watch?v=Xek3TGKzLWw&list=PLBfwD_NnDB3p4rM53ZxU2K6o5YZMzr6qc&index=7&t=270s
