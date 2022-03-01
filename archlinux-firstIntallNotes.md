# Readme

**Official archlinux installation guide**: [Click here](https://wiki.archlinux.org/title/installation_guide).

_**Why do i make notes when i can use the same video _source/ article source_ to install in the same manner the way I did it in the first place ?**_ _Ans._ Bcoz textual information can be divided into precise points in the way I understand the intention of what I need to do. And though video content has high bandwidth in terms of absorbing content but textual content can be very much helpful and text notes are irreplacably good in my experience when it comes to 2-3 years of down the line when i need to do solve the same problem again.

## Installing from scratch

1. `dd if=pathToArchLinuxOS.iso of /dev/sda` : Setting up bootable pendrive. (if option means input file path). TIP: You can use `lsblk` _<stands for::listBlockDevices>_ to list all the devices plugged in at the moment.
2. `sudo su` to become root.
TIP: Please ensure that you have ***disabled*** `legacy mode` and `secure boot` features in your boot menu as it can cause problems in installation of the os.
3. `wifi-menu` to access wifi targets and connect to them (it is highly recommened).
4. `timedatectl set-ntp true` to set the time.
5. Now, we need to create partitions:
  
  ```
  # List all drives
  fdisk -l
  
  # Select your target device (hard drive)
  fdisk /dev/sdb # Considering sdb is your device.
  
  # Now you are in subshell of fdisk (use q to quit without saving any changes)
  
  # Common commands you can make use
  p : print the state of drive
  n : add a new partition
  d : delete a partition
  t : change partition type ## THIS MIGHT BE USEFUL LATER IF YOU CHOOSE UEFI INSTALLATION MODE to change the partition type of sdb1 to EFI.
  # FYI: UEFI IS BETTER THAN LEGACY
  
  # For fresh way of setting up(you may ensure that there are no current partition in the drive using `p` to print the partitions).
  # Make partition with `n` and press 1 to make it primary. Press <Enter> key for "First Sector", and type +200M for "Last Sector" to create a 200Mb partition. And type `y` to remove "Signature" then. Now use `p` to check if you got the partition there which you just made (this would show up as partition `sdb1`).
  
  ### /// now make another partition in similar way for the (SWAP partition for system hibernation purpose):
  # `n<Enter>p<Enter> +12G<Enter>   and now verify the same with p<Enter> (this would show up as partition `sdb2`)
  
  ### /// now create a partition for archlinux installation i.e., system partition:
  n<Enter>p<Enter>+25G<Enter>y<Enter>   and now verify the same with p<Enter> (this would show up as partition `sdb3`)
  
  ### /// now create a user data partition
  n<Enter>p<Enter><Enter>Y and now verify the same with p<Enter> (this would show up as partition `sdb4`)
  # FYI: We're using end block as end of the drive for the user data partition now.
  
  ####### Above process would make a partition table like below (You may use p<Enter> to print partition table)
                  type
  /dev/sdb1 200M  linux
  /dev/sdb2 12G   linux
  /dev/sdb3 25G   linux
  /dev/sdb4 260G  linux
  
  
  ### FINISHING??
  # Press w<Enter> to write the all new partition table to the drive at once.
  
  # Since its written now, you may verify the partition table simply with `lsblk` command now.
  ```
  
  6. Making file system for our _boot partition_, _system partition_ and _user data partition_ (We don't need to define filesystem for swap partition).
  
  ```
  # For UEFI: We need to make /dev/sdb1 of type EFI instead of ext4
  mkfs.ext4 /dev/sdb1 # IMPORTANT: READ ABOVE COMMENT
  mkfs.ext4 /dev/sdb3
  mkfs.ext4 /dev/sdb4
  ```
  
  7. Setting up swap partition
  ```
  mkswap /dev/sdb2
  swapon /dev/sdb2
  ```
  8. Mount partitions
  ```
  mount /dev/sdb3 /mnt
  # Check its content with `ls /mnt`. Also, `lsblk` would show the mount point in for our system partition too.
  
  # Create two directories i.e., home and boot
  mkdir /mnt/home /mnt/boot
  
  # mount boot and user data partitions
  mount /dev/sdb1 /mnt/boot #ALERT: Don't use this command in UEFI mode of installation.
  mount /dev/sdb4 /mnt/home
  
  #FYI: To unmount you can use `umount pathToPartition` or `umount mountedDirectoryPath`
  
  ### Verify the mounted paths by
  lsblk
  ```
  
  9. Install archlinux to target partition using pacstrap, refer `pacstrap -h` for help on it.
  ```
  pacstrap /mnt/ linux linux-firmware base vim
  ######## Installting archlinux, base packages and vim for now. We can include as many packages as we want from arch package repo here IMO. This command might take couple of minutes so BE PATIENT.
  ```
  
    FYI: With base we means this [package](https://archlinux.org/packages/core/any/base/), tldr; these packages: `bash, bzip2, coreutils, file, filesystem, findutils, gawk, gcc-libs, gettext, glibc, grep, gzip, iproute2, iputils, licenses, pacman, pciutils, procps-ng, psmisc, sed, shadow, systemd, systemd-sysvcompat, tar, util-linux, xz, linux (optional) - bare metal support`, I got this list from the dependencies section [here](https://archlinux.org/packages/core/any/base/).
  
  FYI: We don't need base-devel anymore. See [this](https://bbs.archlinux.org/viewtopic.php?id=227602) issue and [this diff](https://wiki.archlinux.org/index.php?title=Installation_Guide&diff=253744&oldid=250715) in installation guide.
  
  10. Setting up auto mount all partitions to desired paths using file `/etc/fstab`. Recommendattion: Always use UUID's for making the entries coz they are not gonna change even if you plug-out and plug-in multiple hard drives later. We generate the fstab file using:
  ```
  # Print all the current mounted file systems
  genfstab -U /mnt
  
  # To write the same table to fstab file we do:
  genfstab -U /mnt >> /mnt/etc/fstab
  
  #### Verif by checking the /mnt/etc/fstab file, edit the file according to your wish like you want some partitions to be mounted or not on boot time.
  ```
  
  11. Making archlinux bootable,
  ```
  arch-chroot /mnt
  # You get in a subshell now
  # FYI: You are logged in your newly installed system partition right now (before this we were in the usb os instance)
  # We verify that we are inside of newly installed system partitin by doing:
  cat /etc/fstab
  # This will output your fstab that you generated moments ago.
  ```
    - Now if we do `ls` then it'll show you your `home` folder ***here*** which you created at `/mnt/home` earlier.
    - Also, `lsblk` will show your _sdb3_ and _sdb4_ mounted at _/_ and _/home_.
  
  12. Installing packages
  ```
  pacman -S networkmanager
  
  # We want systemd to automatically start the networkmanager on startup, so we do it:
  systemctl enable NetworkManager
  ```
  
  13. (IGNORE THIS STEP COMPLETELY IF YOU ARE DOING UEFI though) _**UEFI > Legacy Boot**_  But if you are using Legacy Boot follow below code (else you can follow the later part where i install grub for uefi later in this post):
  ```
  grup-install --target=i386-pc /dev/sda
  #YES PROBABLY ITS sda only (not sdb or sdc).
  # MAKE SURE THAT YOU USE CORRECT ^^^^^ device here(its sda here coz i am currently logged into my current system if you are following the tutorial in order.
  
  # Make config file for grub-
  grub-mkconfig -o /boot/grub/grub.cfg
  ```
  14. Set password for root user-
  ```
  passwd
  # for ease set it to toor which is classical value of root user password
  ```
  15. Setting up locale (compulsory), you simply need to uncomment below two lines and save the file. i.e.,
  ```bash
  vim /etc/locale.gen
  en_US.UTF-8 UTF-8
  en_US ISO-8859-1
  ```
  
  and generate the locals from `/etc/locale.gen` file using command:
  
  ```
  locale-gen
  ```
  
  16. Setting Language variable
  
  ```
  vim /etc/locale.conf
  # and enter below line and save the file
  LANG=en-US.UTF-8
  ```
  
  17. Setting up timzezone
  
  ```
  # List all the zone info details, and choose your country from below entries:
  ln -sf /usr/share/zoneinfo/<TAB>
  
  # for India it should look like
  ln -sf /usr/share/zoneinfo/Asia/Kolkata /etc/localtime
  ```
  
  18. Setting up hostname, (this is basically what it look in terminal i.e., `array@myHostName`.
  
  ```
  vim /etc/hostname
  # and type the hostname there, tip: use `arch-os` as hostname.
  ```
  
  19. Now you can get back to your usb archlinux environment back-
  
  ```
  exit
  ```
  
  20. Unmount all mounts we did earlier in `/mnt` directory-
  
  ```
  umount -R /mnt
  
  #If above command says: "Resource busy" then use below command instead, (-l is for lazy unmount option)-
  umount -l /mnt
  ```
  
  NOW REBOOT with `reboot` command and remove the USB and the system should boot from your newly installed system partition now. _**CONGRATS**_

  
# Post install processes
- Add a user to archlinux -
  ```
  useradd -m sahil
  
  # Set a password for user sahil
  passwd sahil
  
  # Add users to important groups so it can do things with sudo privilidges (you can apped lib-virt to the below list of groups if you want to use virtual machies with the user):
  usermod -aG wheel,audio,video,optical,storage sahil
  
  # TIP: You can use below command to delete a user
  userdel sahil
  ```

- If sudo is not installed, install it via
  ```
  pacman -S sudo
  ```
- Enabling sudo command for all wheel group users-
  ```
  visudo
  #And uncomment the line which looks like and save the file.
  %wheel ALL=(ALL) ALL
  ```
  
- **Installing GRUB for UEFI**-
  ```
  pacman -S grub
  pacman -S efibootmgr dosfstools os-prober mtools

  # Mount boot partition
  mkdir /boot/EFI
  mount /dev/sda1 /boot/EFI
  grub-install --target=x86_64-efi --bootloader-id=grub-uefi --efi-directory=/boot/EFI
  #FYI: If grub-install says /boot/EFI is not efi partition:: then you need to change partition type{by `mkfs.fat -F32 /dev/sdb1`} and partition file system{by `fdisk /dev/sdb` and then using t<Enter>1<Enter>} of a partition only after unmounting the partition first , otherwise it won't actually work.
  ```
- Generate grub config file-
  ```
  grub-mkconfig -o /boot/grub/grub.cfg
  ```
  
- Updating existing Archlinux
  
  ```
  pacman -Syu
  ```
  
- Test if you have internet after booting to your archlinux via:
  
  ```
  ping google.com
  ```
  
- Extra: Mounting ntfs pendrive
  ```
  sudo pacman -S ntfs-3g
  
  #Usage:
  sudo mount -t ntfs-3g /dev/sdc1

  #Unmounting:
  sudo umount <pathToPartition/mountPath>
  #e.g, either of below should work:
  sudo umount /dev/sdc1
  sudo umount /mnt/sdc1
  #There is nothing like unmounting disk but partition ~ IMO ~SAHIL
  ```

- Know the filesystems of all your device partitions:
  
  ```
  df -T
  # and look for column "Type"
  ```
  
- Mimic windows formatted NTFS ? ~IMO~SAHIL
  ```
  disklabel               => DOS Partition Table
  partition type          => 07 -> HPFS/NTFS/exFAT
  filesystem of partition => fuseblk (you can do it somhow using mkfs though ~ SAHIL)
  ```

- Get uuid of all partitions:
  ```
  sudo blkid
  # Get UUID of a single partition:
  sudo blkid /dev/sdb1
  ```
- Enable network time synchronization:
  ```
  timedatectl set-ntp true
  ```
  
- Enable system-hardware synchronization:
  ```
  sudo hwclock --systohc
  ```
  
- Jumping to tty's
  ```
  ctrl+alt+F1 ....
  ```

- Installing more functionalities:
  ```
  # Install wallpaper manager:
  sudo pacman -S nitrogen

  # Install themes, icon-themes, etc
  sudo pacman -S picom lxappearance pcmanfm material-gtk-theme papirus-icon-theme
  
  #lxapperance is for setting themes
  #pcmanfm is gui filemanager
  # Now, open lxappearance from cli and set "Theme as Material-dark" and "IconTheme as Papirus
  
  # Install fonts:
  sudo pacman -S ttf-dejavu ttf-liberation noto-fonts

  # Install wallpapers
  sudo pacman -S archlinux-wallpaper
  # It copies wallpapers in /usr/share/background/archlinux directory
  
  # Install firefox
  sudo pacman -S firefox
  
  # Install graphics card drivers (AMD)
  sudo pacman -S xf86-video-amdgpu
  
  # Install more??
  ```
  
- Building packages from AUR in archlinux:
  ```
  # For help you can always do-
  makepkg -h
  
  makepkg -s <pkg_name>
  # -s means sync dependencies
  sudo pacman -U ./my-newly-made-package.tar.zst
  ```
  
- Installl `google-chrome`
  ```
  git clone google-chrome-from-AUR
  cd google-chrome
  makepkg -s
  sudo pacman -U google-chrome..tar.zst # You can omit this step if you use above command like ```makepkg -si```
  
  #FYI: -U option means install from a file/URL
  ```
  
- Add transparency ability to terminal by-
  
  ```
  sudo vim /etc/xdg/picom.conf
  # and set the value of vsync as false. By default it is set true in here.
  ```
  
- Add transparency to terminals
  ```
  #Keyboard
  exec setxkbmap ch &
  
  #Nitrogen
  exec nitrogen --restore
  
  #Picom (adds transparency ability to terminals)
  exec picom -f
  ```
  
- Setting i3 gaps to our i3. Find code [here](https://github.com/Airblader/i3/wiki/Example-Configuration) and add it to the end of `.config/i3/config` file. Now you can use `SUPER+SHIFT+g` and press `i` and then use `SHIFT++` or `SHIFT+-` to increase or decrease the inner gaps.

- `nmtui` to connect to wifi.

- 
