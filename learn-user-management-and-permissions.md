## Change password of a user:

```bash
sudo passwd       #Changes password of current user.
sudo passwd mary  #Changes password of different user, the reason you can change any other user's password is bcoz you are in sudoer group else you can't.
```

## groups

The groups command tells you which groups a user is a member of.

```bash
groups dave
groups mary
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

# Login as root user
sudo su
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

### Permission numbers

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

#### Print processes of particular user

```bash
ps -u array
ps -u root
```
