- Creating new users: [Linuxize's Article](https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command/)

```bash
########## FIND NAME OF YOUR USER
whoami
# Output: array

echo $USER
# Output: array

# List all users
alias listAllUsers="awk -F: '{ print $1}' /etc/passwd | xargs"
listAlUsers
# Output:
# root bin daemon mail ftp http nobody dbus systemd-journal-remote systemd-network systemd-oom systemd-resolve systemd-timesync systemd-coredump uuidd polkitd array avahi lightdm git rtkit named postgres mongodb usbmux tss dnsmasq libvirt-qemu asterisk



########## RUN A LOGIN SHELL
su -l


########## CHANGE PASSWORD
# Changes password of current user
sudo passwd

# Changes password of a specific user (possible only if you are in sudoer group)
sudo passwd mary  




########## FIND THE GROUPS A USER IS A MEMBER OF
groups dave




########## SWITCHING USER
# source: https://wiki.archlinux.org/title/PostgreSQL

sudo -iu root whoami
# Output: root
# -i means run a login shell, what is login shell? Ans. https://unix.stackexchange.com/questions/38175/difference-between-login-shell-and-non-login-shell
# -u neabs run command as a specific user

# Get currently logged in user
echo $USER

# Login as root user (root password needed for this and $ will be changed to #)
su
# or
su root

# Login as root user with current user password (only works if current user is in sudoers group)
sudo su


########## OWNERSHIP AND PERMISSION MANAGEMENT
Every Linux system have three types of owner:
=============================================
1. User: A user is the one who created the file. By default, whosoever, creates the file becomes the owner of the file. A user can create, delete, or modify the file.
2. Group: A group can contain multiple users. All the users belonging to a group have same access permission for a file.
3. Other: Any one who has access to the file other than user and group comes in the category of other. Other has neither created the file nor is a group member.


IMPORTANT: For command `chown` use -R or --recursive (operate on files and directories recursively)

# Change user owner and group owner of the file:
chown -R USERNAME:GROUPNAME /PATH/TO/FILE

# (*Most commonly used)
# Usually a user owner is same name as the group owner of the file/folder, so we can omit group name and use : instead as well as syntatic sugar
chown -R USERNAME: /PATH/TO/FILE

# To only change the user and leave the group as it is, just specify USERNAME and no group name and no colon:
chown -R USERNAME /PATH/TO/FILE

# Checking permissoin and ownership with `ls -l` command
========================================================

ls -l
# Output: (Each file/folder has this type of code in front of them)
# xxxxxxxxxx
# 1234567890
# 1: file/directory significance.
# 234: read write execution permission for the user owner of the file.
# 567: read write execution permission for the user owner's group of the file.
# 890: read write execution permission for all other users.


# change permissions for the user owner of file/folder:
$ chmod +rwx filename

# change permission for all the users in the group owner of file/folder:
chmod g+w filename
chmod g-wx filename

# change permission for all other users
chmod o+w filename
chmod o-rwx foldername

# Using permission numbers
# 0 = ---
# 1 = --x
# 2 = -w-
# 3 = -wx
# 4 = r-
# 5 = r-x
# 6 = rw-
# 7 = rwx

chmod 777 foldername will give read, write, and execute permissions for everyone.
chmod 700 foldername will give read, write, and execute permissions for the user only.
chmod 327 foldername will give write and execute (3) permission for the user, w (2) for the group, and read, write, and execute for the users.


########## PRINT PROCESSES OF A USER
ps -u array
ps -u root


##### Create user
sudo useradd username
# To create appropriate home directory for the user as well(by default its home directory for a new user is not created). Fyi: This creates a `username` directory as well @ path: /home/username
sudo useradd -m username


# Change password of a user
sudo passwd username

# Delete user
sudo userdel username
```
