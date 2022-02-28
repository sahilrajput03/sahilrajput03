# Readme

_**Why do i make notes when i can use the same video _source/ article source_ to install in the same manner the way I did it in the first place ?**_ _Ans._ Bcoz textual information can be divided into precise points in the way I understand the intention of what I need to do. And though video content has high bandwidth in terms of absorbing content but textual content can be very much helpful and text notes are irreplacably good in my experience when it comes to 2-3 years of down the line when i need to do solve the same problem again.

## Setting up bootable pendrive

1. `dd if=pathToArchLinuxOS.iso of /dev/sda` : Here if option means input file path. (TIP: You can use `lsblk` _<stands for::listBlockDevices>_ to list all the devices plugged in at the moment.)
2. Become root via `sudo su`.
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
  
  6. 
