# Readme

_**Why do i make notes when i can use the same video _source/ article source_ to install in the same manner the way I did it in the first place ?**_ _Ans._ Bcoz textual information can be divided into precise points in the way I understand the intention of what I need to do. And though video content has high bandwidth in terms of absorbing content but textual content can be very much helpful and text notes are irreplacably good in my experience when it comes to 2-3 years of down the line when i need to do solve the same problem again.

## Setting up bootable pendrive

1. `dd if=pathToArchLinuxOS.iso of /dev/sda` : Here if option means input file path. (TIP: You can use `lsblk` _<stands for::listBlockDevices>_ to list all the devices plugged in at the moment.)
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
  # Installting archlinux, base packages and vim for now. We can include as many packages as we want from arch package repo here IMO.
  pacstrap /mnt/ linux linux-firmware base vim
  ######## ^^^^^^^^^^^^^^^ This command might take couple of minutes so BE PATIENT.
  ```
  10. 
