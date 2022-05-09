# Learning bash

*RTFM, Basic instinct to figure out somthing with a cli tool is to have a basic instinct to do `man cli-name` and read through it.*

**Popular blogs:**
- https://linuxize.com/ (5*)
- https://linuxjournal.com (5*)
- https://linuxhint.com/ (3*)

**Unit tests**: [Click here](https://github.com/sahilrajput03/learning-bash)

## Learn Makefile

Sample 1: https://github.com/kubernetes-hy/material-example/blob/master/app10-go/controller/Makefile

Sample 2: https://github.com/sahilrajput03/sahilrajput03/blob/master/missing-semester/make-lecture8/Makefile

Why even use `makefile` instead of some script file say `makefile.sh`?

Amazing complete answer @ [Stackoverflow](https://stackoverflow.com/a/3798609/10012446).

**tldr**

> The general idea is that make supports (reasonably) minimal rebuilds -- i.e., you tell it what parts of your program depend on what other parts. When you update some part of the program, it only rebuilds the parts that depend on that. While you could do this with a shell script, it would be a lot more work (explicitly checking the last-modified dates on all the files, etc.) The only obvious alternative with a shell script is to rebuild everything every time. 


## Start a openvpn server in 5 minutes - TODO

Source: https://www.cyberciti.biz/faq/ubuntu-22-04-lts-set-up-openvpn-server-in-5-minutes/?utm_source=Social_Media&utm_medium=Twitter&utm_campaign=May_06_2022

## Create a systemd service which you can setup to be run on system boot as well

[Motivation -  Autostarting ~ Arch Docs](https://wiki.archlinux.org/title/autostarting)

Src: [One](https://medium.com/@benmorel/creating-a-linux-service-with-systemd-611b5c8b91d6), [Two](https://tecadmin.net/run-shell-script-as-systemd-service/).

1. Create a script

```bash
vi ~/test/nf.sh
sudo chmod +x ~/test/nf.sh
```

*Now paste below text to that file*

```bash
while true; do
	echo "Hello $(date)" >> /tmp/tmp
	sleep 2
done
```

2. Create a service file, by

```bash
sudo nvim /etc/systemd/system/nf.service
```

*Now paste below text to that file*

```
[Unit]
Description=This is fun service description, sahil.

[Service]
User=array
# WorkingDirectory=/home/array/test
ExecStart=bash /home/array/test/nf.sh
Restart=always
# Restart defines no. consistent attempts to be done by systemd anytime to start the service anytime the service is killed by some external action(i.e., `systemctl stop` will not trigger restart actions).

[Install]
WantedBy=multi-user.target
```

**or run a npm command:**
```
[Unit]
Description=This is fun service description, sahil.

[Service]
User=array
WorkingDirectory=/home/array/test/LemonJamsBot
ExecStart=npm run dev
Restart=always
# Restart defines no. consistent attempts to be done by systemd anytime to start the service anytime the service is killed by some external action(i.e., `systemctl stop` will not trigger restart actions).

[Install]
WantedBy=multi-user.target
```


3. Now we need to reload service by `systemd` so it loads our new service and then we can start our service:

```bash
# we need to reload systemd files
sudo systemctl daemon-reload
sudo systemctl start nf
# or we can use `sudo systemctl start nf.service`

# Fyi: you can setup this service to run on system startup as well
sudo systemctl enable nf
```

Now we can check if the dates are added in the `/tmp/tmp` file by

```bash
cat /tmp/tmp
```

## Want to know your disk usage and free disk space

```bash
diskUsage
# Output:
# Filesystem      Size  Used Avail Use% Mounted on
# dev             3.9G     0  3.9G   0% /dev
# run             3.9G  1.8M  3.9G   1% /run
# /dev/sdb3        90G   66G   20G  78% /
# tmpfs           3.9G  104M  3.8G   3% /dev/shm
# tmpfs           3.9G   26M  3.9G   1% /tmp
# /dev/sdb4       133G  120G  6.0G  96% /home
# /dev/sdb1       197M  142K  197M   1% /boot/EFI
# /dev/sda4       120G   32K  120G   1% /mnt/sda4
# /dev/sda3       113G   65G   43G  61% /mnt/sda3
# /dev/sda2       434G  1.2G  433G   1% /mnt/sda2
# /dev/sda5       252G  8.9G  243G   4% /mnt/sda5
# tmpfs           785M   28K  785M   1% /run/user/1000

type diskUsage
# diskUsage is aliased to `df -h'
```

## Q. Why vim freezes when I press `ctrl+s` in some versions of debian/ubuntu/rapberryos ?

Ans. Because by default `ctrl+s` is a signal to freeze terminal, yes its vim independent. Source: https://blog.marcinchwedczuk.pl/how-to-fix-vim-freezes#:~:text=To%20unfreeze%20program%20you%20must%20press%20Ctrl%2BQ%20.&text=It%20still%20happens%20from%20time,Q%20and%20continue%20my%20work.

```bash
for i in {1..100}; do echo "$i"; sleep 0.3; done
# now if you press ctrl+s, the terminal will freeze ASAP, to get it back you need to press ctrl+q.

# SO basically in vim's freeze (which is basically complete terminal freeze) you just need to press ctrl+q to get back.
```

## softlink vs. hardlink

Source: https://stackoverflow.com/a/185915/10012446

I would point you to Wikipedia:

[Symbolic link](http://en.wikipedia.org/wiki/Symbolic_link)
[Hard link](http://en.wikipedia.org/wiki/Hard_link)

A few points:

- Symlinks, unlike hard links, can cross filesystems (most of the time).
- Symlinks can point to directories.
- Hard links point to a file and enable you to refer to the same file with more than one name.
- As long as there is at least one link, the data is still available.

```bash
ln -s myfile newLinkNameHere

ls -l myFile newLinkNameHere
# Output:
# .rw-r--r-- 0 array 30 Apr 15:52 myFile
# lrwxrwxrwx 6 array 30 Apr 15:52 newLinkNameHere -> myFile

# FYI:
# myFile can be folder as well.
# newLinkNameHere will be created automatically.
```

## Want a random temp file in `/tmp/` directory?

```bash
mktemp
# Output: /tmp/tmp.VVmWziFwYh

# Usage in scripts:
cache=$(mktemp)

# Set trap to clean up file
trap 'rm -f -- "$TMP_FILE"' EXIT

# You may use this newly created file now.
#### after work done use below command to remove the file
rm -f ${cookie_file}

# motivation: https://www.cyberciti.biz/tips/shell-scripting-bash-how-to-create-temporary-random-file-name.html?utm_source=Social_Media&utm_medium=Twitter&utm_campaign=May_06_2022
```

## Some GNU core utils like `uname`, `hostname`, `basename`, `dirname` and `logname`

Source: [https://www.youtube.com/watch?v=2zT37cVNR1w](https://www.youtube.com/watch?v=2zT37cVNR1w)

GNU Core utils - Comes preinstalled on all GNU/Linux System

`uname`, `hostname`, `basename`, `dirname` and `logname`.

```bash
##################### uname
uname
# Output (kernel name): Linux 

uname -a
# Output (all infor about kernel): 
# Linux arch-os 5.16.16-arch1-1 #1 SMP PREEMPT Mon, 21 Mar 2022 22:59:40 +0000 x86_64 GNU/Linux
# Here:
# "Linux" is kernel name
# "arch-os" is hostname
# "5.16.16-arch1-1" is kernel version number
# "#1 SMP PREEMPT Mon, 21 Mar 2022 22:59:40" is time/date infor about this kernel release
# "x86_64" is architecture of cpu
# "GNU/Linux" is the type of OS we are running


uname -r
# Output (kernel version): 5.16.16-arch1-1

##################### hostnam

hostname
# Output:  <command not found> in archlinux

cat /etc/hostname
# Output: arch-os

hostnamectl
# Output:
#  Static hostname: arch-os
#        Icon name: computer-laptop
#          Chassis: laptop 💻
#       Machine ID: 2a33fcd86a7c4d46b6a9b387c8ac6c4d
#          Boot ID: 6753fe42405642cd8619be9a330ebeb8
# Operating System: Arch Linux
#           Kernel: Linux 5.16.16-arch1-1
#     Architecture: x86-64
#  Hardware Vendor: HP
#   Hardware Model: HP Notebook



##################### basename

basename ~/Documents/
Documents

basename ~/test/a.js
a.js

basename ~/test/a.js .js
a



##################### dirname


dirname ~/test/a.js
/home/array/test

dirname ~/test/
/home/array

dirname ~/test
/home/array



##################### logname


logname
array

echo $USER
array

# Key difference between logname and $USER is that $USER might change based on user you have logged into or you are using ssh to some pc.
```

## user ?

#user permission, #user create, #create user, #login as user, #login for different user, #different user login

Source: [Click here](learn-user-management-and-permissions.md)

## Never use quote/s around possble exapansions coz it prevents that!

```bash
echo "Life is good" > ~/myFile
f1='~/myFile' #BAD
f2="~/myFile" #BAD
f3=~/myFile   #GOOD

cat $f1
# Output: cat: '~/myFile': No such file or directory
cat $f2
# Output: cat: '~/myFile': No such file or directory
cat $f3
# Output: Life is good


## HEY BUT WHY DOES THE QUOTES ONES DOESN'T WORK?
# BCOZ THEY ARE EXECUTED LIKE:
cat '~/myFile'
# Output:
# cat: '~/myFile': No such file or directory

cat "~/myFile"
# Output:
# cat: '~/myFile': No such file or directory
```

## weird ?

```bash
a=10=20
echo $a

# Output:
10=20
```
## What is the user `${myVariable}` when we can achieve `$myVariable` ?

NO YOU are wrong, they `${` is helpful in cases where `$myVariable` fails, for e.g., 

```bash
name="john doe"
echo "The name of the person is $name_"
# Output:
# The name of the person is
#FYI: Can't get variable bcoz bash is trying to fetch variable name_ variable instead of name

### SO WE CAN FIX THIS VIA: ${ syntax
echo "The name of the person is ${name}_"
# Output:
The name of the person is john doe_
# WORKS AS EXPECTED!

# Source (Amazing article): https://linuxhint.com/use_expansions_shell_script/

#### OTHER INTERESTING AND USERFUL CASES FROM ${ syntax is:
${variable}		This command substitutes the value of the variable.
${variable:-word}	If a variable is null or if it is not set, word is substituted for variable. The value of the variable does not change.
${variable:=word}	If a variable is null or if it is not set, the value of the variable is set to word.
${variable:?message}	If a variable is null or if it is not set, the message is printed to the standard bash error.
${variable:+word}	If variable is set, word is substituted for variable. However, the value of the variable itself does not change.
```

## What does shift do in bash?

```bash
# shift/unshift, pop/push are general terms across all programming languages
# This will remove the first argument and will move all to the top:
shift 1
```

```bash
cat t
echo $1
shift 1
echo $1

# Output:
./t one two three
#Output:
# one
# two

```

```bash
cat t
echo $@
shift 1
echo $@

# Testing:
./t one two three
#Output:
# one two three
# two three

```

```js
a = [10, 20, 30]

a.shift()
log(a)
# Output: [20, 30]

a.shift()
log(a)
# Output: 20
```

## Rewrite existing line with carriage return character (get help from: https://unix.stackexchange.com/questions/26576/how-to-delete-line-with-echo)

```bash
# Way1
echo -n "Sahil is cool and creative."
sleep 1
echo -ne '\rEveryone rocks.'


# Way2 ( this works but some tab is echoed out so if way1 works for you then use that)
echo -n Bash;sleep 1;echo -ne "\033[2K"; echo -n Rocks
echo -n Bash;sleep 1;echo -ne "\033[1K"; echo -n Rocks
```

## Deleting letters in bash

```bash
echo -n abcXYZ; echo -ne '\b\b\b'
# Output:
abc
```

## Know what architecture do you have!

Src: https://stackoverflow.com/a/48679640/10012446

```bash
architecture=""
case $(uname -m) in
    i386)   architecture="386" ;;
    i686)   architecture="386" ;;
    x86_64) architecture="amd64" ;;
    arm)    dpkg --print-architecture | grep -q "arm64" && architecture="arm64" || architecture="arm" ;;
esac

echo Your architecture is: $architecture
```

## What is `/proc/` directory in linux?

You can find all the resources in use by any process (say pid 1034) by going to `/proc/1034/` directory. Also there are bunch of things there, ong interesting is the `fd` directory that manages the stdin (0), stdout(1), stderr(2) and more other file desriptiors for that process there.

## Echo to stderr

```
# src: https://stackoverflow.com/a/2990533/10012446
echoerr() { echo "$@" 1>&2; }

echoerr I am error message!
```

## Check if program exists

```bash
[ "$(type workrave 2> /dev/null)" ]; echo $?
# Output: 0

[ "$(type bad_program_name 2> /dev/null)" ]; echo $?
# Output: 1

# exit code 0 means TRUE (program exists)
# exit code 1 means FALSE (program doesn't exists)

###USAGE:
# Running workrave (if installed)
[ "$(type workrave 2> /dev/null)" ] && (workrave &)

# Bad program test (should not cause login execution error)
[ "$(type bad_program 2> /dev/null)" ] && (bad_program &)
```

## What does this do?

```bash
t=${*%???}
```

## Debug bash scripts sipmle?

```bash
set -x
```

## What's the difference between `[` and `[[` in Bash?

Source: [https://stackoverflow.com/a/3427931/10012446](https://stackoverflow.com/a/3427931/10012446)

## Search for text in all files recursively blazingly fast

```bash
searchTextInFilesRecursively sops
# Output:
./manifestsORIGINAL/secret.enc.yaml:sops:
./manifests/secret.enc.yaml:sops:

# fyi:
type searchTextInFilesRecursively
# Output:
searchTextInFilesRecursively is a function
searchTextInFilesRecursively ()
{
    grep --color=auto -r --exclude-dir={node_modules,.idea,.git} "$@" .
}
```

## `test` in bash 

Manual pages: [Click here](test-manual-pages.txt)

```bash
# source: from above `man test` command
       -n STRING
              the length of STRING is nonzero

       STRING equivalent to -n STRING

       -z STRING
              the length of STRING is zero
	      
### WOW, INTERESTING FACT here...
# -n STRING and STRING are equivalent, that means you can simply use 
test "$USER"
echo $?
# Output: 0 (exit code is 0 (TRUE), bocz user string exists in system environment variables)

test "$NON_EXISTENT"
echo $?
# Output: 1 (exit code is 1 (FALSE), bcoz NON_EXISTENT variable doesn't exist)
```

## What exactly is `<()` in bash (`=()` in zsh)?

tldp docs: https://tldp.org/LDP/abs/html/process-sub.html

This is called process substitution.

The <(list) syntax is supported by both, bash and zsh. It provides a way to pass the output of a command (list) to another command when using a pipe (|) is not possible. For example when a command just does not support input from STDIN or you need the output of multiple commands:

```bash
diff <(ls dirA) <(ls dirB)
```
<(list) connects the output of list with a file in /dev/fd, if supported by the system, otherwise a named pipe (FIFO) is used (which also depends on support by the system; neither manual says what happens if both mechanisms are not supported, presumably it aborts with an error). The name of the file is then passed as argument on the command line.

## Network utility is awesome

source: https://linuxize.com/post/netcat-nc-command-with-examples/

Use case 1: Chat app

```bash
# terminal 1 (listener)
nc -l 8080

# terminal 2 (sender)
nc localhost 8080

#### now you can send messages to and from each other, yo!!
```

Use case 2: Sending file (this can be usefult to send .tar or any encrypted+archived file easily)

Source: https://linuxize.com/post/netcat-nc-command-with-examples/

```bash
# Receiver starts a server which listens on 1337
nc -l 1337 > what.txt

# Snder send a file to some remote host(in our case its our localhost, yo!!)
nc localhost 1337 < .gitconfig
```

**This can be used to test curl request locally as well:**

```bash
# terminal 1(receiver)
nc -l 8080

# terminal 2 (sender)
curl localhost:8080 -d '{"message": "life is amazing"}'

### terminal 1's output
# POST / HTTP/1.1
# Host: localhost:8080
# User-Agent: curl/7.82.0
# Accept: */*
# Content-Length: 30
# Content-Type: application/x-www-form-urlencoded
# 
# {"message": "life is amazing"}
```

## to instantly install a executable binary to a path directory

```bash
install dothis ~/.local/bin/
# now you can start using dothis binary (without bash restart)
# NOTE: If you edit the file present in current directory, it won't change the file at ~/.local/bin so BEAWARE OF THAT!


dothis
# Output: works as expected!
```

## get last n number of lines from `$HISTFILE` along with line number

This is helpful to execute a particular command using the number of that command.

```bash
fc -l -1000
```

## Write your own autocompletion scripts

Source: [https://iridakos.com/programming/2018/03/01/bash-programmable-completion-tutorial](https://iridakos.com/programming/2018/03/01/bash-programmable-completion-tutorial)

## Learn curl

**[Learn curl](learn-curl.md)**

## base64 encode/decode from cli

Source: https://linuxhint.com/bash_base64_encode_decode/

```bash
# Encoding
echo -n sahil | base64
# fyi: in javascript, btoa() is used to encode

# Decoding (-d short for --decode)
echo -n sahil | base64 | base64 -d
# Output: sahil
# fyi: in javascript, atob() is used to decode

# Encoding file
base64 myFile.txt

# Decoding file
base64 myFile.txt | base64 -d
# Output: <contents of the file>
```

## Read input from user is super cool!

```bash
#!/bin/sh
echo "your age?"
read age < /dev/tty
echo "Your age $age"
#Works as expected!
```

## Using select menus in bash

Source: [https://linuxize.com/post/bash-select/](https://linuxize.com/post/bash-select/)

This simply rocks!

My implementation usage: [https://github.com/sahilrajput03/learning_sql/blob/main/fso-part13/curls/select.sh](https://github.com/sahilrajput03/learning_sql/blob/main/fso-part13/curls/select.sh)

## `mv` learnings:

- Consider you are moving 10 gb of data from your drive to hdd or ssd, and say you cancel the command in the middle so you don't loose anything in the source place though because mv only first copies all files to target and only delete the source files if the all copying process is completed, yikes!
- Always delete nested `node_modules` before copying any project to extenal hard disk, using my below aliases:

```
# amazing: https://stackoverflow.com/a/43561012/10012446
alias findNodeModules='find . -name 'node_modules' -type d -prune'
alias deleteNestedNodeModules="find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +"
```

## `help` command on linux

```bash
help
# GNU bash, version 5.1.16(1)-release (x86_64-pc-linux-gnu)
# These shell commands are defined internally.  Type `help' to see this list.
# Type `help name' to find out more about the function `name'.
# Use `info bash' to find out more about the shell in general.
# Use `man -k' or `info' to find out more about commands not in this list.
# 
# A star (*) next to a name means that the command is disabled.
# 
#  job_spec [&]                                                                                  history [-c] [-d offset] [n] or history -anrw [filename] or history -ps arg [arg...]
#  (( expression ))                                                                              if COMMANDS; then COMMANDS; [ elif COMMANDS; then COMMANDS; ]... [ else COMMANDS; ] fi
#  . filename [arguments]                                                                        jobs [-lnprs] [jobspec ...] or jobs -x command [args]
#  :                                                                                             kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... or kill -l [sigspec]
#  [ arg... ]                                                                                    let arg [arg ...]
#  [[ expression ]]                                                                              local [option] name[=value] ...
#  alias [-p] [name[=value] ... ]                                                                logout [n]
#  bg [job_spec ...]                                                                             mapfile [-d delim] [-n count] [-O origin] [-s count] [-t] [-u fd] [-C callback] [-c quantu>
#  bind [-lpsvPSVX] [-m keymap] [-f filename] [-q name] [-u name] [-r keyseq] [-x keyseq:shell>  popd [-n] [+N | -N]
#  break [n]                                                                                     printf [-v var] format [arguments]
#  builtin [shell-builtin [arg ...]]                                                             pushd [-n] [+N | -N | dir]
#  caller [expr]                                                                                 pwd [-LP]
#  case WORD in [PATTERN [| PATTERN]...) COMMANDS ;;]... esac                                    read [-ers] [-a array] [-d delim] [-i text] [-n nchars] [-N nchars] [-p prompt] [-t timeou>
#  cd [-L|[-P [-e]] [-@]] [dir]                                                                  readarray [-d delim] [-n count] [-O origin] [-s count] [-t] [-u fd] [-C callback] [-c quan>
#  command [-pVv] command [arg ...]                                                              readonly [-aAf] [name[=value] ...] or readonly -p
#  compgen [-abcdefgjksuv] [-o option] [-A action] [-G globpat] [-W wordlist] [-F function] [->  return [n]
#  complete [-abcdefgjksuv] [-pr] [-DEI] [-o option] [-A action] [-G globpat] [-W wordlist] [->  select NAME [in WORDS ... ;] do COMMANDS; done
#  compopt [-o|+o option] [-DEI] [name ...]                                                      set [-abefhkmnptuvxBCHP] [-o option-name] [--] [arg ...]
#  continue [n]                                                                                  shift [n]
#  coproc [NAME] command [redirections]                                                          shopt [-pqsu] [-o] [optname ...]
#  declare [-aAfFgiIlnrtux] [-p] [name[=value] ...]                                              source filename [arguments]
#  dirs [-clpv] [+N] [-N]                                                                        suspend [-f]
#  disown [-h] [-ar] [jobspec ... | pid ...]                                                     test [expr]
#  echo [-neE] [arg ...]                                                                         time [-p] pipeline
#  enable [-a] [-dnps] [-f filename] [name ...]                                                  times
#  eval [arg ...]                                                                                trap [-lp] [[arg] signal_spec ...]
#  exec [-cl] [-a name] [command [argument ...]] [redirection ...]                               true
#  exit [n]                                                                                      type [-afptP] name [name ...]
#  export [-fn] [name[=value] ...] or export -p                                                  typeset [-aAfFgiIlnrtux] [-p] name[=value] ...
#  false                                                                                         ulimit [-SHabcdefiklmnpqrstuvxPT] [limit]
#  fc [-e ename] [-lnr] [first] [last] or fc -s [pat=rep] [command]                              umask [-p] [-S] [mode]
#  fg [job_spec]                                                                                 unalias [-a] name [name ...]
#  for NAME [in WORDS ... ] ; do COMMANDS; done                                                  unset [-f] [-v] [-n] [name ...]
#  for (( exp1; exp2; exp3 )); do COMMANDS; done                                                 until COMMANDS; do COMMANDS; done
#  function name { COMMANDS ; } or name () { COMMANDS ; }                                        variables - Names and meanings of some shell variables
#  getopts optstring name [arg ...]                                                              wait [-fn] [-p var] [id ...]
#  hash [-lr] [-p pathname] [-dt] [name ...]                                                     while COMMANDS; do COMMANDS; done
#  help [-dms] [pattern ...]                                                                     { COMMANDS ; }
```

## Getting your cronjobs

```bash
sudo crontab -u $USER -l
25,55 * * * * for i in {1..5}; do ~/scripts-in-use/beepSound.sh; done
*/5 * * * * ~/scripts-in-use/beepSound.sh
* * * * * date >> ~/my-cron-task-log.txt
* * * * * DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus /home/array/Documents/github_repos/devopswithkubernetes/exercises/ex2-09/command_to_get_random_article.sh >> /tmp/cronlog-01.txt
# The reasony why I have put ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ is coz notifications send via cronjob aren't working without them!, SRC: https://askubuntu.com/a/1308769/702911
```

## Start and kill specific processes

Src: https://sahilrajput03.github.io/BashNotesForProfessionals.pdf

Probably the easiest way of killing a running process is by selecting it through the process name as in the following

example using pkill command as

```bash
# WAY 1:
pkill -ef test.py
# -f : to match full process name, AND -e : echo what is killed (i.e., verbose)

# WAY 2: A more fool-proof way using pgrep to search for the actual process-id
# Get process_id (-f option means to match full process name), source: https://stackoverflow.com/a/27684015/10012446
pgrep -f battery-status.sh

kill $(pgrep -f 'python test.py')
kill $(pgrep -f battery-status.sh)
```

Check if a process if running already?

```bash
pid=$(pgrep -f battery-status.sh)
echo $pid
# Check for non-empty string:
# RUNNING FALSE CHECKS
test -z "$pid" && echo Process is not running..
if [ -z "$pid" ]; then echo Process is not running..; fi
test -z "$pid"; echo $?
#FYI: Outputs 1 when pid has some value(i.e, process is running) coz -z checks for empty sting.

# RUNNING TRUE CHECKS
test ! -z "$pid" && echo Process is running..
if ! [ -z "$pid" ]; then echo Process is running..; fi

# (FYI: using -z with ! operator)
# (FYI: using -z will make program exit with 0 if string is empty)
```
## Expand your alias in shell lively before your eyes ?

```bash
myAlias<ctrl+alt+e>
```

## Make script's realative path work even when the script is executed from different path

You can make use of:

```
lines=$(wc -l $(dirname $0)/must-can |  awk '{print $1}')
# src: vi ~/scripts-in-use/td/s.sh

# Here $dirname $0 will get the path of the script and then we append the relative path for any path relative to the script we are executing.
# It works good!!
```

## print commands automatically before running them:

**way0-BEST**

Use manual echo logs to do it!

**way1**

```
myFun(){
trap 'echo "+ $BASH_COMMAND"' DEBUG
# my commands here..
# my commands here..

trap - DEBUG
}

# THIS WORKS GOOD THOUGH!
# trap - DEBUG is to reset the environment.
# DRAWBACK: trap - DEBUG is printed as well.
```

**way2**

```
set -x;
command1;
command2;
set +x;

# FYI: THIS IS NOT WORKING GOOD(prints clutters as well) ACCORDING TO MY ENVIONMENT! ~Sahil
# set +x is to reset the environment.
# DRAWBACK: set +x is printed as well.
```

**way3**

`-v` is move verbose as compared to `-x`

```
set -v;
command1;
command2;
set +v;

# FYI: THIS IS NOT WORKING GOOD(prints clutters as well) ACCORDING TO MY ENVIONMENT! ~Sahil
# set +v is to reset the environment.
# DRAWBACK: set +v is printed as well.
```

**way4**

We can use `-x` or `-v` when calling the shebang in any script as well:

```bash
#!/bin/bash -x
# or
#!/bin/bash -v
```

## record your terminal sessions the right way

source: https://asciinema.org/

## using `column` to tool

This can be helpful to align unaligned column from some file

```bash
cat data.dat
1 3 3
3    5 44

column -t data.dat
1  3  3
3  5  44
```

## Avail all your aliases and funcion in bash scripts

You need to use below commands. **FYI: You can use place these commands before the interactive shell return statement in your .bashrc file as well for ONE TIME SOLUTION.**

Source: https://unix.stackexchange.com/a/1498/504112

```bash
#!/bin/bash
# file myscript.sh
source ~/.bash_aliases
source ~/.bash_functions
shopt -s expand_aliases

### now you can access all your aliaes and funcions below:
...
```

## Running any bash script interactively

```bash
#!/bin/bash -i
nf
# Aliases are not expanded when the shell is not interactive, unless the expand_aliases shell option is set using shopt (see the description of shopt under SHELL BUILTIN COMMANDS below).
## source: https://unix.stackexchange.com/a/1498/504112
```

## `tac` 

Prints the content of a file exactly like cat but in reverse order of lines.

```bash
tac file
```

## `sha1sum`

Source: https://askubuntu.com/a/61828/702911

```bash
# Generating sha256 for some text: source: https://stackoverflow.com/a/3358428/10012446
echo -n foobar | sha256sum
```

FYI: `SHA-1` is less secure than `SHA-256` and `SHA-3`. Source: click [here](https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html) and [here](https://shattered.it/).

***Any sha1 `digest` is 40 chars long in length.***

```
echo Hello > file.txt
sha1sum  file.txt > sha-verify
# check files
ls
# Output:
file.txt  sha-verify

# view contents of `sha-verify`
cat sha-verify
f572d396fae9206628714fb2ce00f72e94f2258f  file.txt

sha1sum -c sha-verify
# Output:
file.txt: OK
```

E.g.2:

```
echo hello > 1
echo hello > 2

sha 1 2 > sha-verify

ls
1  2  sha-verify

cat sha-verify
# Output:
f572d396fae9206628714fb2ce00f72e94f2258f  1
f572d396fae9206628714fb2ce00f72e94f2258f  2

sha1sum -c sha-verify
# Output:
1: OK
2: OK
```

**Also from the man pages of `sha1sum`:**

```txt
BUGS
       Do  not use the SHA-1 algorithm for security related purposes.  Instead,
       use an  SHA-2  algorithm,  implemented  in  the  programs  sha224sum(1),
       sha256sum(1),  sha384sum(1),  sha512sum(1), or the BLAKE2 algorithm, im‐
       plemented in b2sum(1)
```

**Other available: `sha**` programs in linux**: 

```bash
sha<tab><tab>

sha        sha1sum    sha224sum  sha256sum  sha384sum  sha512sum  shasum
```
## random with `shuf`

```
# print two random files (pass `-r` option if you want lines can be repeated as well)
shuf -n 2 myFile.txt

# print random order of input numbers from 1 to 10.
shuf -i 1-10

# print a single random number from 1 to 10
shuf -i 1-10 -n 1

# print a two random number from 1 to 10
shuf -i 1-10 -n 2

# Shuf manual:
#       -i, --input-range=LO-HI
#              treat each number LO through HI as an input line
#       -n, --head-count=COUNT
#              output at most COUNT lines
```

## Copy file/folder from remote server using `scp` (via `ssh`)

```bash
scp tsp:copy.png .
```

## Using sed using `missing-semester`

Source: https://missing.csail.mit.edu/2020/data-wrangling/

Video Lecture soure: https://www.youtube.com/watch?v=sz_dsktIjt4 

```bash

##### Using sed, its used for string substitution #######

# What does .* means in regex pattern?
# Answer: https://stackoverflow.com/a/21197429/10012446

# pipe to sed from a file:
cat my_file | sed -E '...'

# From johnhoo:
cat ssh.log | sed 's/.*Disconnected from//' | head -n5


# For regex reference 1: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
# For regex reference 2: https://github.com/sahilrajput03/sahilrajput03/blob/master/learn-regex.md

# COOL: If you need to match `(` or `[` or `{` you must escape them using `\` when you are using `-E` option with sed.

# From missin-semester:
echo aba | sed 's/[ab]//'
# ba

echo bba | sed 's/[ab]//'
# ba

echo bba | sed 's/[ab]//g'
# <no_output>

echo bbac | sed 's/[ab]//g'
# c

echo bcbzac | sed 's/[ab]//g'
# czc

#### Here ( and ) are treated as literals
echo "abc(ab)a" | sed 's/(ab)//g'
# abca

#### Here ( and ) are treated as meta characters(that helps to define
groups in regex)
echo "abc(ab)a" | sed -E 's/(ab)//g'
# c()a


#### Here again ( and ) are treated as meta characters (not literals)
echo abcaba | sed -E 's/(ab)*//g'
# ca


echo abcababc | sed -E 's/(ab|bc)*//g'
# cc

echo abcabbc | sed -E 's/(ab|bc)*//g'
# c

# Print file content omitting/deleting first line with sed:
cat myFile.txt | sed '1d'
# Source: https://unix.stackexchange.com/a/55757/504112

# Delete any line that starts with //
# cat file.txt | sed '/^\/\/.*/d'


#  regex match check with if in bash
# Source: [Click here](https://riptutorial.com/bash/example/2134/check-if-a-string-matches-a-regular-expression)
date=20150624
[[ $date =~ ^[0-9]{8}$ ]] && echo "yes" || echo "no"
# Output: yes

date=hello
[[ $date =~ ^[0-9]{8}$ ]] && echo "yes" || echo "no"
# Output: no
```

## Using rg's flags to define functions

```bash
# To diable .git and node_module folders everywhere, I have below line in my .bashrc file. WARN: Dont forget to source the .bashrc file after adding this:
export FZF_DEFAULT_COMMAND="rg --files --follow --no-ignore-vcs --hidden -g '!{**/node_modules/*,**/.git/*}'"


## From man pages of rg:

       --no-ignore-vcs
           Don’t respect version control ignore files (.gitignore, etc.). This implies --no-ignore-parent for VCS files. Note
           that .ignore files will continue to be respected.


       --files
           Print each file that would be searched without actually performing the search. This is useful to determine whether a
           particular file is being searched or not.


       -L, --follow
           When this flag is enabled, ripgrep will follow symbolic links while traversing directories. This is disabled by
           default. Note that ripgrep will check for symbolic link loops and report errors if it finds one.

           This flag can be disabled with --no-follow.



       -., --hidden
           Search hidden files and directories. By default, hidden files and directories are skipped. Note that if a hidden file
           or a directory is whitelisted in an ignore file, then it will be searched even if this flag isn’t provided.

           A file or directory is considered hidden if its base name starts with a dot character (.). On operating systems which
           support a hidden file attribute, like Windows, files with this attribute are also considered hidden.

           This flag can be disabled with --no-hidden.




       -g, --glob GLOB ...
           Include or exclude files and directories for searching that match the given glob. This always overrides any other
           ignore logic. Multiple glob flags may be used. Globbing rules match .gitignore globs. Precede a glob with a ! to
           exclude it. If multiple globs match a file or directory, the glob given later in the command line takes precedence.

           As an extension, globs support specifying alternatives: -g ab{c,d} is equivalet to -g abc -g abd. Empty alternatives
           like -g ab{,c} are not currently supported. Note that this syntax extension is also currently enabled in gitignore
           files, even though this syntax isn’t supported by git itself. ripgrep may disable this syntax extension in gitignore
           files, but it will always remain available via the -g/--glob flag.

           When this flag is set, every file and directory is applied to it to test for a match. So for example, if you only want
           to search in a particular directory foo, then -g foo is incorrect because foo/bar does not match the glob foo.
           Instead, you should use -g 'foo/**'.
```

## Using `wc`

```bash
wc myFile.txt
# Output:
  653  2809 23209 myFile.txt
  ^Line ^words ^chars ^myFile.txt

wc -l
# Output: #Tells only about total number of lines
23209 myFile.txt

wc -w #Tells only about words
23209 myFile.txt


wc -c m #Tells only about characters
# Output:
23209 myFile.txt
```

## Useful linux commands

![](https://pbs.twimg.com/media/DeGNDzqX0AAow7z?format=jpg&name=small)

Pic credits: https://twitter.com/b0rk/status/1000235694118395904

## Bash shortcuts

Source: https://ss64.com/bash/syntax-keyboard.html

## Usage of xargs

```bash
$ cat file.txt
I am Sahil.
You are foo.
He is bar.

# With xargs we can pass any stdout or file's content to any command we want like this:
$ cat file.txt | xargs echo
I am Sahil. You are foo. He is bar.

# FYI: This will NOT work at all:
$ cat file.txt | echo
# Output: NO OUTPUT.
```

## making use of `bc` - a command line calculator

```bash
# bc is berkely calculator cli too:
$ echo "2+3" | bc -l
5

$ cat file.txt
5
3
2

$ paste -sd+ file.txt
5+3+2

$ paste -sd+ file.txt | bc -l
10
```

## Using `paste` to join multiple lines to a single line

```bash
$ cat file.txt
line1
line2
line3

# With s option we are saying to join lines to single line, and 
# with option d we are saying to use , as delimiter for joining.
$ paste -s -d, file.txt
line1,line2,line3
```

## head / tail 

```bash
#usage:
head -n10 #Gets first 10 lines
tail -n10 #Gets last 10 lines
```

## `sort` and `uniq` tool is linux

```bash
$ cat test.txt
z
y
x
b
a

# Simple sorting with sort cli:
$ sort test.txt
a
b
x
y
z
```

```bash
$ cat test.txt
z
y
y
y
y
x
b
a
a
a
a
a

$ sort test.txt | uniq
a
b
x
y
z

# Count the duplicate occurences as well with -c option in uniq cli:
$ sort test.txt | uniq -c
      5 a
      1 b
      1 x
      4 y
      1 z
      

# We can sort these entries by their count nubmers as well:
# FYI: I modified the duplicate entries so thats why the duplicate count has changed like that:
$ sort test.txt | uniq -c | sort
      1 x
      2 a
      3 z
      4 y
      6 b
```

## Playing with commands to represent directiory

```bash
$ pwd
/home/array/test/learning-find-grep-sed-xarg
$ tree
.
├── barcelona
│   └── pinky
│       └── tommy
│           ├── app.js
│           ├── bad name.txt
│           └── carl.txt
├── file.txt
└── mello.txt

3 directories, 5 files
$ ls -R
barcelona  file.txt  mello.txt

./barcelona:
pinky

./barcelona/pinky:
tommy

./barcelona/pinky/tommy:
app.js  bad name.txt  carl.txt
$ find
.
./.folder
./.folder/myfile.txt
./mello.txt
./barcelona
./barcelona/pinky
./barcelona/pinky/tommy
./barcelona/pinky/tommy/app.js
./barcelona/pinky/tommy/bad name.txt
./barcelona/pinky/tommy/carl.txt
./file.txt
```

## `sed` with `find`, `grep` and `xargs`

`sed` vs. `awk` both are stream editors but `awk` is mostly valuable in times when you want to work with data in terms of columns(you can manage dynamic no. of column size in it usiing if/else loops coz its full programming language though). And in general `sed` is used with regex patterns inscribed in it for string substitution(replace) and get specific details from it using the group thing (which is pretty complex though, lean this group technique to get partial data from the record [here](https://www.youtube.com/watch?v=sz_dsktIjt4)).

`Awk` is abbreviated from the names of the developers – Aho, Weinberger, and Kernighan.

`sed` stands *stream editor*, yes that means find, modify or replace text or do all together with the use of pipe interface(though we can use files directly to operate on them too).

```bash
sed -i 's/\b[0-9]\{3\}\b/number/g' file.txt
# In above you need to learn that (you can run below regex test in browser though):
# /[0-9]{3}/.test('my text 12') // false (coz we are testing three numeric digits with {3} pattern in there.! Yikes!
# /[0-9]{3}/.test('my 789 text') // true
```

All the options discussed are [from this arcticle - How to Use sed to Find and Replace String in Files](https://linuxize.com/post/how-to-use-sed-to-find-and-replace-string-in-files/#disqus_thread).

```bash
$ pwd
/home/array/test/learning-find-grep-sed-xarg
$ tree
.
├── barcelona
│   └── pinky
│       └── tommy
│           └── carl.txt
├── file.txt
└── mello.txt

3 directories, 3 files

$ man find #Searching for `-exec` option help section:
# Output:
#        -exec command {} +
#               This  variant of the -exec action runs the specified command on the selected
#               files, but the command line is built by appending each selected file name at
#               the  end;  the  total number of invocations of the command will be much less
#               than the number of matched files.  The command line is  built  in  much  the
#               same  way that xargs builds its command lines.  Only one instance of `{}' is
#               allowed within the command, and it must appear at the end,  immediately  be‐
#               fore  the  `+';  it needs to be escaped (with a `\') or quoted to protect it
#               from interpretation by the shell.  The command is executed in  the  starting
#               directory.   If any invocation with the `+' form returns a non-zero value as
#               exit status, then find returns a non-zero exit status.  If  find  encounters
#               an  error,  this can sometimes cause an immediate exit, so some pending com‐
#               mands  may  not  be   run   at   all.    For   this   reason   -exec my-com‐
#               mand ... {} + -quit  may  not result in my-command actually being run.  This
#               variant of -exec always returns true.


# ~Sahil ? What is ```-exec``` option used for??
# Also `-exec` is used to execute any command which we pass as arguments to -exec option and
# we can reaplace the filename with {} symboly and end the command by + symbol. ALL THIS IS
# WRITTEN IN ABOVE find docs very well.


# Passing d in -type option says that print only directory paths in pwd recursively (not files):
find . -type d

# Passing f in -type option says that print only file paths in pwd recursively(not directoryies):
find . -type f -exec sed 's/sahil/array/g' {} +
find -type f -not -path '*/.*' -exec sed 's/sahil/array/g' {} +

# Prints filepaths of all .js files in pwd recursively.
find . -name '*.js'

# Prints all files in pwd recursively except the any folder that starts with . (i.e., don't
# search in hidden folders):
find -type f -not -path '*/.*'

# Prints all file paths in pwd recursively except for files in any folder that has its name
# matched to pattern like shown below in each case, all below cases work but its litreally
# visually understandable how each of them is different in specific edge cases but every
# below case skis any folder name tommy for sure:
find . -type f -not -path '*/tomm*/*'
find . -type f -not -path '*tomm*/*'
find . -type f -not -path '*tomm*'




# Using grep

$ man grep
# Output: (for -r, -l and -Z options)

#       -r, --recursive
#              Read all files under each directory, recursively, following  symbolic  links
#              only  if  they  are  on  the  command line.  Note that if no file operand is
#              given, B<grep> searches the working directory.  This is equivalent to the -d
#              recurse option.
#              
#       -l, --files-with-matches
#              Suppress normal output; instead print the name of each input file from which
#              output would normally have been printed.  Scanning  each  input  file  stops
#              upon first match.
#              
#       -Z, --null
#              Output  a  zero byte (the ASCII NUL character) instead of the character that
#              normally follows a file name.  For example, grep -lZ  outputs  a  zero  byte
#              after  each  file  name instead of the usual newline.  This option makes the
#              output unambiguous, even in the presence of file  names  containing  unusual
#              characters  like  newlines.  This option can be used with commands like find
#              -print0, perl -0, sort -z, and xargs -0 to  process  arbitrary  file  names,
#              even those that contain newline characters.
#       -n, --line-number
#              Prefix  each  line  of output with the 1-based line number
#              within its input file.
#
#

# Prints all the lines with matching text(--colors flag) with linenumbers (-n flag) in the file `myFile.txt`
grep --color -n 'myText' myFile.txt


# Print all the lines of all the files that have text sahil in them in cwd recursively.
grep -r 'sahil' .

# Print the names of all the files that have text sahil in them.
grep -rl 'sahil' .

# Separate the filename with a ascii nul character which we can easily use in different
# program to understand in case files have weird names as talked in above manual of grep.
grep -rlZ 'sahil' .

# FIRST OF ALL LEARN sed via article @
# https://linuxize.com/post/how-to-use-sed-to-find-and-replace-string-in-files/
# and then read below example. DO READ THE COMMENTS I MADE ON THE SAME ARTICLE TOO!

# FYI: We can pipe the file name to sed simply for any of our usecase like:
grep -rlZ 'foo' . | xargs -0 sed -i.bak 's/foo/bar/g'
# FYI: WE MUST USE xargs ^^^ here to make it work with grep else it won't work at all.

# -i option for case Insensitive search
grep -ri 'searchText' .
```

## `awk` rocks hard!!

```bash
ls
# Output: my_awk_madeups.sh  print_squares_upto_5.awk  teams.txt

# Contents of my_awk_madeups.sh file:
cat my_awk_madeups.sh

set -ex
awk '{ print $1 "_" $2 }' teams.txt
echo
echo
awk '{ print $1, $2 }' teams.txt
echo
echo
awk '{ print NR, $1}' teams.txt

# Contents of print_squalres_upto_5.awk file(a simple program):
cat print_squares_upto_5.awk
#!/usr/bin/awk -f
BEGIN {
  i = 1
  while (i < 6) {
    print "Square of", i, "is", i*i;
    ++i
  }
}

# Content of teams.txt file:
cat teams.txt
Bucks Milwaukee    60 22 0.732
Raptors Toronto    58 24 0.707
76ers Philadelphia 51 31 0.622
Celtics Boston     49 33 0.598
Pacers Indiana     48 34 0.585
```

Read this amazing article from [linuxize.com](https://linuxize.com/post/awk-command/) and you can refer official docs of awk [here(but its not very clean as all docs)](https://www.gnu.org/software/gawk/manual/gawk.html).

## `stat fileHere` ?

```bash
stat fileHere
# Output:
# File: test.js
#  Size: 95              Blocks: 8          IO Block: 4096   regular file
# Device: 8,20    Inode: 1053942     Links: 1
# Access: (0644/-rw-r--r--)  Uid: ( 1000/   array)   Gid: ( 1000/   array)
# Access: 2022-02-16 02:38:31.825293178 +0530   ##NOTE THIS IS LAST ACESS TIME IN EPOCH TIME IMO..~Sahil.
# Modify: 2022-02-16 02:38:31.771957980 +0530   ##NOTE THIS IS LAST MODIFY TIME IN EPOCH TIME IMO..~Sahil.
# Change: 2022-02-16 02:38:31.771957980 +0530   ##NOTE THIS IS LAST EDITED TIME IN EPOCH TIME IMO..~Sahil.
# Birth: 2022-02-16 02:38:31.771957980 +0530    ## IDK WHAT IS THIS...~sahil

# Source of this stat command?
# https://stackoverflow.com/a/22425359/10012446
```

## Screen blanking ?

Source: https://wiki.archlinux.org/title/Display_Power_Management_Signaling

```bash
# To query the current settings:
xset q
# FYI: Below output from above command suggests since timeout is 0, thus screenblanking is disabled.
# Screen Saver:
#  timeout:  0


#Turn screen off now
xset dpms force standby

#Disale screen blanking
xset s off

#Disable DPMS and prevent screen from blanking (The setting won't persist after reboot).
xset s off -dpms

#Set screen blanking to 10 seconds
xset s 10
```

## Using rtcwake

Inspiration rtcwake: https://www.howtogeek.com/121241/how-to-make-your-linux-pc-wake-from-sleep-automatically/

Archlinux docs: https://man.archlinux.org/man/rtcwake.8.en.

```bash
#IMPORTANT: `-n` or `--dry-run` means don't actually run but just run for testing.

sudo rtcwake -n -m disk -t '@epochTime'
sudo rtcwake -n -m disk -s secondsAfterWhichSystemWillWake

# HELP: You are allowed to use either one of `-t` or `-s` to define the time for the system to wake up on.

# HELP: -m means to which place the current to store:
m can have values like:
mem  : suspend to ram
disk : suspend to disk (HIBERNATE)
no   : don't suspend at all






# Setting wake time to 4 Feb, 2022 @ 3:30pm IST.
sudo rtcwake -n -m disk -t $(date +\%s -d '2022-02-04 15:30:00')                     #TIME#1
#Output: rtcwake: wakeup from "disk" using /dev/rtc0 at Fri Feb  4 10:00:00 2022     #OUTTIME#1
#FYI: Here "Fri Feb  4 10:00:00 2022" is utc time.


# Setting wake time to 5 Feb, 2022 @ 1:02:03am IST.
sudo rtcwake -n -m disk -t $(date +\%s -d '2022-02-05 01:02:03 AM')                   #TIME#2
#OUTPUT: rtcwake: wakeup from "disk" using /dev/rtc0 at Fri Feb  4 19:32:03 2022      #OUTTIME#2


# -n means its a dry run only.
# REMOVE -n to actually run it.

#You can VERIFY INPUT times in local time zones directly via:
date -d '2022-02-04 15:30:00'                                                         #TIME#1
#Output: Fri Feb  4 03:30:00 PM IST 2022

date -d '2022-02-05 01:02:03 AM'                                                      #TIME#2
#Output: Sat Feb  5 01:02:03 AM IST 2022

date -d 'Fri Feb  4 10:00:00 UTC 2022'                                                #OUTTIME#1
#Output: Fri Feb  4 03:30:00 PM IST 2022

date -d 'Fri Feb  4 19:32:03 UTC 2022'                                                #OUTTIME#2
#Output: Sat Feb  5 01:02:03 AM IST 2022
```

## Play with time ?

***Whats epoch time ?*** Ans. *Time in seconds sice `1/1/1970 @ 00:00:00 UTC`*. Also known as *Unix time* or *Posix time*.

***IST ?*** Ans. *Indian Standard Time*.

***`@` is prefixed before epoch time.***

TIMEZONES:

```bash
# Docs of date: https://man.archlinux.org/man/date.1.en

#Shows list of timezones
timedatectl list-timezones

#Find
timedatectl list-timezones | grep -i Kolkata
# Output: Asia/Kolkata

# Find complete list of tz database with their gmt and timezone code @
https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

#Amazing converter site
https://www.epochconverter.com/
```


```bash
#>>> CURRENT TIME
date       #Get current date/time stamp in local time
#OUTPUT: Fri Feb  4 01:32:02 PM IST 2022

date -u    #Get current date/time stamp utc
#OUTPUT: Fri Feb  4 08:02:02 AM UTC 2022

date +\%s  #Current date/time in Epoch time


#>>> CONVERSIONS
#NOTE: @ is prefixed before epoch time.
#NOTE: All below times are returned in local time using timezone set in my machine unless you specify `-u` to return in UTC time.

### Convert Epoch time to human readable format.
date -d @0
#OUTPUT: Thu Jan  1 05:30:00 AM IST 1970         #Output is local time. (IST stands for Indian Standard Time)

date -d @1643960274
#OUTPUT: Fri Feb  4 01:07:54 PM IST 2022         #Output is local time. (IST stands for Indian Standard Time)

date -d @$(date +\%s)
#OUTPUT: Fri Feb  4 01:16:02 PM IST 2022 #FYI: THIS IS THE SAME OUTPUT WE GET FROM 'date' command directly.



### GET CURRENT TIME IN A DIFFERENT TIME ZONE
TZ=Asia/Kolkata date      #This would be redundant coz just `date` would give me time in IST by default.
#OUTPUT: Fri Feb  4 02:14:49 PM IST 2022

TZ=US/Alaska date
#OUTPUT: Thu Feb  3 11:17:11 PM AKST 2022

TZ=Canada/Central date
#OUTPUT: Fri Feb  4 02:16:16 AM CST 2022

$TZ=Asia/Karachi date
#OUTPUT: Fri Feb  4 01:42:36 PM PKT 2022


### CONVERT DIFFERNT TIME ZONE TO LOCAL TIME ZONE
date -d 'Thu Feb  3 11:18:45 PM AKST 2022'
#OUTPUT: Fri Feb  4 01:48:45 PM IST 2022 
#OUTPUT is local time (IST stands for Indian Standard Time)



### CONVERT DIFFERNT TIMZE ZONE TO DIFFERENT TIME ZONE
TZ="US/Alaska" date -d 'Fri Feb  4 01:51:28 PM IST 2022'    #Converting IST TO AKST timezone.
#OUTPUT: Thu Feb  3 11:21:28 PM AKST 2022



#>>> GET PARTICULAR TIME IN EPOCH
date +\%s -d '2022-02-04 13:00'     #Epoch time of give date/time stamp              (LOCAL TIME::4 feb, 2022 @ 1pm)
date +\%s -d '2022-02-04 13:05:30'  #Epoch time of give date/time stamp with seconds (LOCAL TIME:: 4 feb, 2022 @ 1pm 5min 30 seconds)

date -d '2022-02-04 13:00'               #Source is local time (IST stands for Indian Standard Time)
#OUTPUT: Fri Feb  4 01:00:00 PM IST 2022 #Output is local time (IST stands for Indian Standard Time)
```

## hackkerrank bash questions

Refer this repository: https://github.com/sahilrajput03/hacker_rank_shell

## Copy some text to clipboard via echo or file?

```
echo carl | xclip -selection clipboard
cat myFile.txt | xclip -selection clipboard
```

## you don't know all shortcuts of bash shell?

[Source](https://www.howtogeek.com/howto/ubuntu/keyboard-shortcuts-for-bash-command-shell-for-ubuntu-debian-suse-redhat-linux-etc/).

## Rua a command/script `n` number of time

Source: https://www.cyberciti.biz/faq/bsd-appleosx-linux-bash-shell-run-command-n-times/

```bash
## run command 10 times 
for i in {1..10}; do commandNameHere; done
 
## run script 10 times
for i in {1..10}; do /path/to/cache.script.sh; done
```

TODO: Lean/Make some example for commands like: `exit` (`exit 1`), `trap`, `shift`, `wait`. Src: [here](https://github.com/denilsonsa/small_scripts/blob/master/sleep_until_modified.sh).

## Run command as other user:

```bash
sudo -u <user> <command>
```

## Get a file path in linux:

```
readlink -f file.txt
Source: https://stackoverflow.com/a/5265775/10012446

# OR
realpath file.txt
```

## wget command

Amazing blog article: https://www.tecmint.com/10-wget-command-examples-in-linux/

## Play sound in linux using pulseaudio from comandline

```bash
paplay ~/my-file.extension

# to know supported audio extensions, use below commadn:
paplay --list-file-formats
```

## Using commands cat, tac, less, more, head, tail ?**

Source1: https://www.tecmint.com/linux-more-command-and-less-command-examples

Source2: https://www.tecmint.com/view-contents-of-file-in-linux/

Source3: Archlinux's [cron docs](https://wiki.archlinux.org/title/cron).

## Using crontab

Source: https://www.tecmint.com/11-cron-scheduling-task-examples-in-linux/, Source: https://www.tecmint.com/online-cron-job-generator-and-tester-for-linux/

```bash
# Use below command to access crontab:
crontab -l #List current user's crontab jobs. (or you can use: cat /var/spool/cron/array)
crontab -e #Edt crontab entries of current user.

# My example crontab jobs!! ~Sahil [below jobs will run every single minute].
* * * * * ~/scripts-in-use/beepSound.sh
* * * * * date >> ~/my-cron-task-log.txt
# ^^ these commands will execute in every 60 seconds and actually it ticks on 0th second of every minute of the system clock.

## FYI: WOW:: You can check with ```date``` to check the current time with current seconds to know when text in cc.text file will be appended coz command gets executed on 0th second in every minute! Yikes!!
```

#### Debug crontab's command when your jobs aren't running at all or something else is not working as expected ?? ~Sahil

Source: https://serverfault.com/a/449652

```bash
Capture the output yourself
You can redirect stdout and stderr to a file. The exact syntax for capturing output may vary depending on what shell cron is using. Here are two examples which save all output to a file at /tmp/mycommand.log:

1 2 * * * /path/to/your/command &>/tmp/mycommand.log
1 2 * * * /path/to/your/command >/tmp/mycommand.log 2>&1
```

**Usage of `xargs`: [Source](https://www.tecmint.com/xargs-command-examples/).**

**FYI: Process ids are assingned sequential basis. [Source](https://stackoverflow.com/a/20540553/10012446)**

**FYI: You can use `printf sahil\\n` to print something to bash shell as well!** [Source](https://linuxize.com/post/bash-read/).

## Using arrays in bash

[Wow source!](https://opensource.com/article/18/5/you-dont-know-bash-intro-bash-arrays)

```bash
# Syntax        # Result
arr=()          # Create an empty array
arr=(1 2 3)     # Initialize array
${arr[2]}       # Retrieve third element
${arr[@]}       # Retrieve all elements
${!arr[@]}      # Retrieve array indices
${#arr[@]}      # Calculate array size
arr[0]=3        # Overwrite 1st element
arr+=(4)        # Append value(s)
str=$(ls)       # Save ls output as a string
arr=( $(ls) )   # Save ls output as an array of files       #Didn't work in my case ~ Sahil
${arr[@]:s:n}   # Retrieve n elements starting at index s   #Didn't work in my case ~ Sahil

# ::LOOP OVER ARRAY ITEMS::
# TAGS: #foreach, #forin, #for each, #for loop

# Eg.0: Range example
for t in {1..3}; do
	echo hello $t
done
# OUTPUT:
# hello 1
# hello 2
# hello 3

# Eg.1: Learn: Ranges in bash (array)
for t in 1 2; do
	echo hello $t
done
# OUTPUT:
# hello 1
# hello 2


# Eg.2: Learn: Simple looping over array
arr=(1 10 100)
for t in ${arr[@]}; do
	echo $t
done
# OUTPUT:
# 1
# 10
# 100

# Eg.3: Looping over array of strings with spaces, src: https://stackoverflow.com/a/18383346/10012446
a="I am foo"
b="I am bar"
all=("$a" "$b")
for t in "${all[@]}"; do
	echo Message: $t
done
# OUTPUT: 
# Message: I am foo
# Message: I am bar

# Eg.4: Looping over array of strings with spaces (DUPLICATE of above) You can also define the strings with spaces in array by:
all=("a b" "c d")
for t in "${all[@]}" ; do
  echo "What $t"
done
# OUTPUT:
# What a b
# What c d
```



**Amazing cli tool with bash**

```bash
#!/bin/bash
# Source: Amazing article: https://linuxconfig.org/how-to-use-getopts-to-parse-a-script-options
set -e
set -u
set -o pipefail

while getopts 'lha:' OPTION; do
  case "$OPTION" in
    l)
      echo "linuxconfig"
      ;;

    h)
      echo "h stands for h"
      ;;

    a)
      avalue="$OPTARG"
      echo "The value provided is $OPTARG"
      ;;
    ?)
      echo "script usage: $(basename \$0) [-l] [-h] [-a somevalue]" >&2
      exit 1
      ;;
  esac
done
shift "$(($OPTIND -1))"
# LEARN: OPTARG, OPTIND, $*
```

**Generate random number in bash**

```
echo $RANDOM

#if you want a bigger random number you can use this multiple times as well:
echo $RANDOM$RANDOM

src: https://stackoverflow.com/a/1194890/10012446
```

**Usage of `COPROC` **

[Source](https://www.linuxjournal.com/content/bash-co-processes). Inspiration: [here](https://github.com/denilsonsa/small_scripts/blob/master/sleep_until_modified.sh).

**Graceful exit**

> A graceful exit (or graceful handling) is a simple programming idiom wherein a program detects a serious error condition and "exits gracefully" in a controlled manner as a result. Often the program prints a descriptive error message to a terminal or log as part of the graceful exit.
Wikipedia - [Source](https://en.wikipedia.org/wiki/Graceful_exit).

**Using tee command**

```bash
man tee
# Ouput: tee - read from standard input and write to standard output and files
# The tee command reads from standard input and writes it to standard output and one ore more files.
# src: https://linuxize.com/post/linux-tee-command


echo Hello I am Sahil > log
#Write to file log

echo Hello I am Sahil > log1 > log2
# Clears content of file log1 and overwrite content of log2 with text "Hello I am Sahil".
# But actually I wanted to overwrite to both log1 and log2 file with text "Hello I am Sahil".
# FYI: echo Hello I am Sahil > log2 log3 #This would be no good at all coz it'll write "Hello I am Sahil log3" to log2 file simply.


# So, we need tee for that:
echo Hello I am Sahil | tee log2 log3
# Overwrites text "Hello I am Sahil" to both log2 and log3 files.


# By default tee overwrite the target files, instead if u want to append to content of the files, you can use:
echo Hello I am Sahil | tee -a log2 log3


# Beauty of tee command is that we can repipe stdout (i.e., tee doesn't eat up the stdout or stderr at all):
echo Hello I am Sahil | tee -i log2 log3 | cat
# "Hello I am Sahil" is written to log2, log3 and on terminal as well.


# Using tee in Conjunction with sudo, src: https://linuxize.com/post/linux-tee-command/#using-tee-in-conjunction-with-sudo
sudo echo "newline" > /etc/file.conf
# Output: bash: /etc/file.conf: Permission denied
# Instead: we can do..
echo "newline" | sudo tee -a /etc/file.conf
# Using tee in conjunction with sudo allows you to write to files owned by other users.
```

**Know the filesystem usage and free space**

```bash
df -h
src: https://linuxize.com/post/linux-tee-command/

man df
# Output:
# NAME: df - report file system space usage
```


**Usage of `test` command**

To know if you are piping 

```
if test -t 1; then
    # Stdout(file description 1) is a terminal i.e., you are not doing something like `./script.sh | cat` or `./script.sh | grep someText`
    echo stdout is a terminal"
fi
```

**Usage of `exec` command**

```bash
 exec >log 2>&1
 # Will redirect stdout and stderr to a file `log` in current folder.
 # Useful when you need tract all ouput to a file forever. Src: https://www.linuxjournal.com/content/bash-redirections-using-exec
```


**Usage of `trap COMMAND SIGNAL`**

Source: [AMMAAZZIINGG guide](https://www.linuxjournal.com/content/bash-trap-command) to full usage of `trap` command..

```bash
#!/bin/bash
trap 'rm abc.txt' exit
# 1. Will remove abc.txt file on pressing ctrl+c. 
touch abc.txt
echo Created a file abc.txt
sleep 5
echo Bye
# 2. After exiting the program the file abc.txt will be deleted anyway.

# Set a function to be executed in the trap commands ?
# Source: https://stackoverflow.com/a/3338302/10012446

# Reset trap command:
# Source: https://stackoverflow.com/a/31202968/10012446
# Source2: https://bash.cyberciti.biz/guide/How_to_clear_trap#:~:text=Enter%20number%20(%2D9999%20to%20exit)%20%3A%20999%20999%20is%20an,exit)%20%3A%20%2D9999%20Bye!
```


**Usage of `dirname` and `basename`:**

```
# Usage of basename and dirname in a script: src: https://github.com/denilsonsa/small_scripts/blob/master/sleep_until_modified.sh
FULLNAME="$1"
BASENAME=`basename "$FULLNAME"`
DIRNAME=`dirname "$FULLNAME"`



# Learn basename:
basename ../../.myfile.sh
# Output: .myfile.sh

basename ./.myfile.sh
# Output: .myfile.sh




# Learn dirname:
dirname ../../my-folder/myfile.sh
# Output: ../../my-folder


dirname folder1/folder2/myfile.sh
# Output: folder1/folder2
```

***


```
# Recommened: Read original posters' full answer: https://superuser.com/a/247131/776589
$#    Stores the number of command-line arguments that 
      were passed to the shell program.
$?    Stores the exit value of the last command that was 
      executed.
$0    Stores the first word of the entered command (the 
      name of the shell program).
$*    Stores all the arguments that were entered on the
      command line ($1 $2 ...).
"$@"  Stores all the arguments that were entered
      on the command line, individually quoted ("$1" "$2" ...).


./command -yes -no /home/username
$# = 3
$* = -yes -no /home/username
$@ = array: {"-yes", "-no", "/home/username"}
$0 = ./command, $1 = -yes etc.

```

***

```bash
# Lucky things:

echo "Today is $(date)"     #executes the date command and it prints the whole sentence, it works like template literal in javascript.



# Checking if service is enabled:
[[ $(systemctl is-enabled code-server@array) = enabled ]] && echo Yes its enabled!    # FYI: code-server is enabled
# Output: Yes its enabled!

[[ $(systemctl is-enabled code-server@array) = disabled ]] || echo Yes its enabled!   # FYI: code-server is enabled
# Output: Yes its enabled!



cat words
# Ouput:
car
bar
mat
pat
zat
air

sort words # or sort < words
# Output:
air
bar
car
mat
pat
zat

cat words2 
car bar mat pat zat air

sort words2 # or sort < words2
# Output:
car bar mat pat zat air   #LOL: this isn't sorted.

```
## Use switch cases in bash:

Eg1.

```bash
#!/bin/bash
# src: https://linuxize.com/post/bash-case-statement/
echo "Enter 1 or 2 or something else..."
read choice
echo You chose $choice
echo
echo

case $choice in

  1)
  echo "case 1 executed."
    ;;

  2)
  echo "case 2 executed."
    ;;

  *)
  # This executes if none of above mathces any choice.
  echo "Default case executed."
    ;;
esac
```

Eg2.

```bash
#!/bin/bash
while [ true ]
do
    echo "Enter your choice (1/2/3):"
    read choice

    greet="Great! You chose $choice"
    case $choice in
        1)
            echo $greet, One is master number.
        ;;

        2)
            echo $greet, All phenomenal things are dualistic in nature, say masculine and feminine.
        ;;

        3)
            echo $greet, Its best to have three options so that you always feel rich in anything you choose. Yo!!
        ;;

        *)
            echo Please try again, you messed with the choice.
        ;;
    esac
    echo
    echo

done
```
## Use grep to get only the matched patter only with `-o` flag

```
$ echo I am Sahil | grep Sahil
# Output: I am Sahil
$ echo I am Sahil | grep -o Sahil
# Output: Sahil
```

## Search process without using something like `ps -aux | grep myOldHabits` ...

```
pgrep -f battery-status   #Returns all pid's of services with text battery-status in its name.
src: https://askubuntu.com/a/612318/702911

# e.g., we can use it like 1:
kill `pgrep 1.sh` # Notice the backticks.

# e.g., we can use it like 2:
kill $(pgrep -f battery-status)     #This will kill all the returning proceses via there process ids.
```

## Get process id of commnand run in background:

[Source](https://www.cyberciti.biz/faq/how-to-return-pid-of-a-last-command-in-linux-unix/)

```
echo $!
# Ouput: Prints the pid of the last process you ran (i.e., only the commands which you ran in background by suffixing wiht & in the end. I.e., ```echo Sahil &```.
```


## Using ps -aux and dont' show grep entry in that:

```
# FYI:
echo $!
# Ouput: Prints the pid of the last process you ran (i.e., only the commands which you ran in background by suffixing wiht & in the end. I.e., ```echo Sahil &```.

ps -aux | grep -v grep | grep $!
# or
ps -aux | grep $! | grep -v grep
```

## Get path of the script file that we are executing

```
MY_PATH=$(dirname "$0")
echo "$MY_PATH"
```
[source](https://stackoverflow.com/a/630387/10012446) and it worked in my pomodoro script to be run from anywhere using an alias like below in `~/.bashrc` file:

```
alias pomodoro='/home/array/scripts-in-use/pomodoro/pomodoro.sh'
```

## While loop

```bash
while [ condition ]; do
   command1
   command2
   command3
done

# E.g, 
while true; do echo I am cool; sleep 1; done
while true; do dig jujn.ml; sleep 1; clear; done
# FYI: for dig you can make use of `watch`, -n is option for time
watch -n1 dig

######
# #do-while, #do while, source: https://stackoverflow.com/a/16489942/10012446
actions() {
   check_if_file_present
   # Do other stuff
}

actions # 1st execution
while [ current_time <= $cutoff ]; do
   actions # Loop execution
done
```

```bash
((0)) && echo truthy value
# Ouput: nothing...

((1)) && echo truthy value
# Ouput: truthy value

# Doing simple maths in bash:
echo $((5-2))
# Ouput: 3


true && echo It is a truthy statement/value.
false || echo It is a falsy statement/value.

# fyi: man true and man false pages exists and they say: Do nothing, successfully and Do nothing, unsuccessfully.




[[ true ]] && echo It is truthy value.
# Output: It is truthy value.

[[ false ]] && echo It is truthy value.
# Output*: It is truthy value.




[[ false = true ]] || echo Condition did not pass.
# Output: Condition did not pass.



### Equality check in comparison:
[[ sahil = sahil ]] && echo Yes condition is true.
# Output: Yes condition is true.

name=sahil
[[ $name = sahil ]] && echo Yes condition is true.
# Output: Yes condition is true.




# Amazing article if you wanna know more of if/else in bash @ https://linuxize.com/post/bash-if-else-statement/

if [ -f nodemon.json ]; then echo Yes it is a file; fi
# output; Yes it is a file

if [ -d blulabs ]; then echo Yes it is a folder; fi
# output: Yes it is a folder

if [ -f blulabs ]; then echo yesss; else echo "its a folder"; fi
# output: its a folder

if [ -d blulabs ]; then echo yesss; echo we are still executing; fi
# output:
# yesss
# we are still executing


# src: https://www.tutorialspoint.com/unix/if-elif-statement.htm
a=10
b=20

if [ $a == $b ]
then
   echo "a is equal to b"
elif [ $a -gt $b ]
then
   echo "a is greater than b"
elif [ $a -lt $b ]
then
   echo "a is less than b"
else
   echo "None of the condition met"
fi




a=10
if [ $a ] ; then echo yes; fi
# Output: yes

a=          #Emptying the variable's value.
if [ $a ] ; then echo yes; fi
# Output: --no-ouput


if [ 0 ]; then echo its truthy value; fi
# **output: its truthy value

if [ 1 ]; then echo its truthy value; fi
# output: its truthy value

if [ "car" ]; then echo its truthy value; fi
# output: its truthy value

if [[ "car" ]]; then echo its truthy value; fi
# output: its truthy value

-------
NOT OPERATOR

if ! [  ]; then echo its falsy value; fi
# output: its falsy value

if ! [ "" ]; then echo its falsy value; fi
# output: its falsy value

if ! [ '' ]; then echo its falsy value; fi
# output: its falsy value

------

Equality operators, (#Comparison Operators) and && and || operator:

# What the heck is ge, le, lt, gt ?? 
# Refer this amazing source: https://tldp.org/LDP/abs/html/comparison-ops.html

if ((10>5 && 5>1 )); then echo cool; fi
# output: cool

if ((10>5 && 5>50 )); then echo cool; fi
# output: --no-output bcoz one of above condition failed i.e., 5>50 .
 
if (( 1 > 0 )); then echo one is greater than zero; fi
# ouput: one is greater than zero

if (( 1 > 10 )); then echo one is greater than ten; fi
# ouput: -no-output-

if ! (( 2 > 2 )); then echo two is not greater than two; fi
# output: two is not greater than two

if ! (( 0 > 0 )); then echo zero is not greater than zero; fi
# ouput: zero is not greater than zero


# Using multiple conditions/variables in if/while loops :: https://stackoverflow.com/a/16203126/10012446
if [ $my_error_flag -eq 1 ] || [ $my_error_flag_o -eq 2 ]; then .....

# or
if [ $my_error_flag -eq 1 ] && [ $my_error_flag_o -eq 2 ]; then .....


FOOTNOTES:
**output means its an exception.
```
Comparining numbers in bash: https://stackoverflow.com/a/18668580


### Fun with variables

Must checkout: https://linuxize.com/post/bash-increment-decrement-variable/

```bash
## Special local variabes in bash : https://tldp.org/LDP/abs/html/localvar.html

# Whats wrong?
a = 10
#Ouput: a: command not found.

a =10
#Ouput: a: command not found.

a= 10
#Ouput: a: command not found.

a=10
#Ouput: <variable assignment succeed without any ouput>
### LEARNING: Spaces are NOT allowed when you assign values to variables.


# What is the pupose of (), (()), [], [[]] in bash if/while conditions ?
# Answer: https://unix.stackexchange.com/a/306115/504112


# Ternary Operator
a=$([ 4 == 5 ] && echo 11 || echo 22)   #src: https://stackoverflow.com/a/3953712/10012446
# Now echo $a gives us: 22 bcoz the result of expression [ 4 == 5 ] is false.

# Other way:
[[ 4 = 5 ]] && a=11 || a=22            #src: https://stackoverflow.com/a/3953666/10012446
# Now echo $a gives us: 22 bcoz the result of expression [ 4 == 5 ] is false.




###

x=Sahil

echo $x
# Ouput: Sahil

echo $xyz
# Ouput: --no-ouput

echo $x yz
# Ouput: Sahil yz

echo ${x}yz       #Concatenation variables with other string or variable.
# Ouput: Sahilyz     [Cool enough. Isn't it ?]






#String splitting, #string split, #split string, #substring

var=01234
echo ${var:3}
# Output: 34    #I.e., from index 3(including) to the end.

var=01234
echo ${var:0:4}
0123

echo ${var:1:4}
1234

echo ${var:2:4}
234

echo ${var:3:4}
34

echo ${var:4:4}
4


# tldr; using ', " and \ works good to define a string with a space.
fullName=sahil\ kolkata; echo $fullName
fullName="sahil kolkata"; echo $fullName
fullName='sahil rajput'; echo $fullName


hasMoney=true                   # In bash there is nothing like boolean, so true is just a simple string.
if [ $hasMoney = true ] ; then
    echo 'I do have money.'
fi
# ouput: I do have mone.

# Concatenation is so easy in bash, i.e., you don't need any operator like + at all, coz it just happens.
if [ "$hasMoney"1 = true1 ];
then
    echo 'I do have money.';
fi
# ouput: I do have money.


c=1; echo $c
# ouput: 1

(( c=c+1 )); echo $c
# output; 2

(( c++ )); echo $c
# ouput: 3

if (( c < 4 )); then (( c++ )); echo Incremented and new value is $c; fi
# outputt: SPECIAL:: executing above statements MULTIPLE times will increment c's value till it gets 4.
```

