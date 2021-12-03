# arch-notes

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
