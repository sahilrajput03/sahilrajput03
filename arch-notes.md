# arch-notes

Arch's article: https://wiki.archlinux.org/title/android#SDK_packages

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
# The problem with this solution is that when the file is in execution phase (i.e., 1.sh) the script doesn't kill the existing running process but instead for getting it completed/exited and then only the event of running the file starts. So in simple terms it does listen to file changes even when the file (1.sh) is in execution phase but the problem is it doesn't kill the existing process and thus all write events triggered actions are queued. So such mechanish is not good for cases like running a express's node server which runs indefinitely and one needs to kill the process and start it again on file write changes. Yikes!
inotifywait -q -m -e close_write 1.sh |
while read -r filename event; do
  ./1.sh
done


~sahil: Watch over current directory recursively and execute ```1.sh``` file. 
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

# r|--recursive
# Watch directories recursively.

# --format <fmt>
# Print using a specified printf-like format string; read the man page for more details.
```

## Setting up android environment with vscode

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
