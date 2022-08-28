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


########## PERMISSION MANAGEMENT

ls -l
# Output: (Each file/folder has this type of code in front of them)
# xxxxxxxxxx
# 1234567890
# 1: file/directory significance.
# 234: read write execution permission for the user owner of the file.
# 567: read write execution permission for the user owner's group of the file.
# 890: read write execution permission for all other users.


# user of the file:
$ chmod +rwx filename

# all the users in the group of the
chmod g+w filename
chmod g-wx filename

# others
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

```
