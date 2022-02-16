# Learning bash

# Popular blogs: https://linuxize.com/, https://linuxjournal.com

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
$


```

## `sed` with `find`, `grep` and `xargs`

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
#

# Print all the lines of all the files that have text sahil in them in cwd recursively.
grep -r 'sahil' .

# Print the names of all the files that have text sahil in them.
grep -rl 'sahil' .

# Separate the filename with a ascii nul character which we can easily use in different
# program to understand in case files have weird names as talked in above manual of grep.
grep -rlZ 'sahil' .

# FYI: We can pipe the file name to sed simply for any of our usecase like:
grep -rlZ 'foo' . | xargs -0 sed -i.bak 's/foo/bar/g'
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

**Using do-while in bash(hack)**:

```bash
# Source: https://stackoverflow.com/a/16489942/10012446

actions() {
   check_if_file_present
   # Do other stuff
}

actions #1st execution
while [ current_time <= $cutoff ]; do
   actions # Loop execution
done
```

**Using arrays in bash**

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
while [ condition ]
do
   command1
   command2
   command3
done

# E.g, 
$ while true; do echo I am cool; sleep 1; done
$ while true; do dig jujn.ml; sleep 1; clear; done

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

