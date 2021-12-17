# arch-notes

## Installed Watchexec ( a program watch execution on modification, written with rust!

```
sudo pacman -S watchexec
# Usage: watchexec -c ./fly.sh    # -c is option for clearning screen on each run.
```

FYI: The problem with `nodmeon -x "bash $@"` was that it seemed to supress some message like when have a script like:

```bash
read -p "Enter your name" name #So with nodemon it does print ""Enter your name"" which get printed when you run wihtout nodemon. So watchexec rocks!
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

## Mounting my kindle on linux

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
