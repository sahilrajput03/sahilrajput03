# missing-semester

- [LECTURE 1 - Shell](#lecture-1---shell)
- [LECTURE 2 - Shell Tools and Scripting](#lecture-2---shell-tools-and-scripting)
- [LECTURE 3 - Editors (Vim)](#lecture-3---editors-vim)
- [LECTURE 4 - Data Wrangling](#lecture-4---data-wrangling)
- [LECTURE 5 - Command-line Environment (Deep dive into `ssh`)](#lecture-5---command-line-environment-deep-dive-into-ssh)
- [LECTURE 6 - Version Control (Git)](#lecture-6---version-control-git)
- [LECTURE 7 - Debugging and Profiling](#lecture-7---debugging-and-profiling)
- [LECTURE 8 - Metaprogramming](#lecture-8---metaprogramming)
- [LECTURE 9 - Security and Cryptography](#lecture-9---security-and-cryptography)
- [LECTURE 10 - Q&A](#lecture-10---qa)

# Quick Notes:

## Run a script over ssh on a remote computer

File `a.sh`

```bash
cat a.sh
# Output
#!/bin/bash
echo $(date) >> /tmp/a
```

**Executing**

```bash
ssh pi 'bash' < a.sh
# src: https://stackoverflow.com/a/2732991/10012446
```

# LECTURE 1 - Shell

The tripple dots in the manua pages means the there could be zero or
more options. [] defines optional options.

- `cat > hello.txt > hello2.txt` this command copies the content of file
hello.txt and paste it into hello2.txt file.


- `echo hello world | cut -d ' ' -f2` this prints second word only i.e.,
  'world'.

-  Case when you must be launch the terminal as root only(coz sudo
   command won't work it all):

   Say, `cd /sys/class/backlight/intel_backlight/` and then do 
   `sudo echo 500 > brightness`, so this command will fail coz we are
   echoing 500 with sudo power but shell is responsible for doing
   putting the content into brightness file and the current shell has
   no sudo permission so it still says "permission denied".
   But, what we can do instead is, `sudo su` to login to shell as
   `superuser`, and then we can simply run `echo 500 > brightness` and
   it will work simply without any permission denied error.

	We can do this same task without going into superuser shell as well
	by using command `echo 1060 | sudo tee brightness`. FYI:IMPORTANT:
	This way of doing `tee` to write to file `brightness` still throws
	Permission denied error on my archlinux though. FYI: `tee`
	command is helpful when we need to write some input fed to `tee` to
	a file but also write the input to the std output as well. For e.g.,

	```bash
	$ echo Hello world, tee. | tee helloFromTee.txt
	Hello world, tee.
	$ cat helloFromTee.txt
	Hello world, tee.
	```

- Using `open`(in arch, its already aliased as xdg-open): 

	```bash
	$ type open
	open is aliased to `xdg-open'
	$ open --help
	   xdg-open -- opens a file or URL in the user's preferred
	   application

	Synopsis

	   xdg-open { file | URL }

	   xdg-open { --help | --manual | --version }

	Use 'man xdg-open' or 'xdg-open --manual' for additional info.
	```



# LECTURE 2 - Shell Tools and Scripting

Source: https://missing.csail.mit.edu/2020/shell-tools/

```bash
$0 - Name of the script
$1 to $9 - Arguments to the script. $1 is the first argument and so on.
$@ - All the arguments
$# - Number of arguments
$? - Return code of the previous command
$$ - Process identification number (PID) for the current script
!! - Entire last command, including arguments. A common pattern is to execute a command only for it to fail due to missing permissions; you can quickly re-execute the command with sudo by doing sudo !!
$_ - Last argument from the last command. If you are in an interactive shell, you can also quickly get this value by typing Esc followed by . or Alt+.
```

- Using vars in bash:

```bash
foo=bar
echo $foo
```

Spaces are reserved in bash to separte arguments, thats the reason
spaces are critical in bash.

- Strings:

	```bash
	# Hello string can be made using single quotes or double quotes.
	echo "Hello"
	echo 'Hello'
	```

	```bash
	# BUT, when using variables you MUST USE double quotes
	foo=bar
	echo "Hello $foo"
	# Output: Hello bar
	echo 'Hello $foo'
	# Output: Hello $foo
	```
- functions
```bash
mcd(){
	mkdir -p "$1"
	cd "$1"
}
```

- Using, $1, $2 .. $9 and $_ to get arguments:

```bash
echo car
car
echo $_ #We can use any command to get the arguments of last command though.
car
```

- We can use `$?` to get the exit command of last command run in shell:
  0 means all went good(without any error) whereas 1 (or any other number) 
  suggests that some error happened.

```bash
cat myFile.txt
Hello, world

grep foo myFile.txt
echo $?
1


echo Hello, Bot.
Hello, Bot.

echo $?
0


true
echo $?
# Output: 0

false
echo $?
# Output: 1
```

- Using `&&` and `||` in bash:

```bash
false || echo "Oops fail"
Oops fail

true && echo "Thing went well"
Thing went well


# FYI:
false; echo "This will always run"
```

- Getting output of a command:

```bash
foo=$(pwd)
echo $foo

# Command substitution:
echo "We are in $(pwd)"
```

- Redirecting std input from two sources (commands) to a single command:

	```bash
	# SYNTAX: cat [<(CMD3)]...

	$ cat <(ls jonhoo-config/) <(ls learning-solidjs/)
	bins
	editor
	env
	gui
	mail
	server
	shell
	README.md
	solid-todomvc
	solidjs-myapp
	ts-solidjs-project



  
	# This would work fine as expected as well:
	cat <(cat amazing.txt) <(cat otherFile.txt)
	```
- 

```bash
# Redirect both stdout and stderr in case you want by:
my_command > /dev/null 2> /dev/null
```

- What is `test` command(FYI: `[]` is alias of test) ?
  It is actually same as `[ expression ]` what we use in bash if
  conditions. You can see the `[]` syntax of `test` binary in its
  manual pages as well `man test`.

  ```bash
  type [
  [ is a shell builtin
  
  type [[
  [[ is a shell keyword
  
  type test
  test is a shell builtin
  ```

  Using test to check if string is empty:

  ```bash
  # You may read about -z option via ```man test``` pages.
  # Since [] is an alias of test binray, so this is same as doing with test
  command as we do in next code block:
  [ -z "test" ]
  echo $?
  1
  [ -z "" ]
  echo $?
  0
  ```
  
  ```bash
  test -z "test"
  echo $?
  1
  test -z ""
  echo $?
  0
  ```

  You can refer the manual pages of `test` [here](manual_pages_test.md).
  `type [` is a command as well.

- Curious about why we use `[[ ]]` in bash scripting ??
	tl;dr

	```bash
	# test is bad in doing comparison if we use < > operators for arithmetic comparison, i.e., 
	[ 2 > 1 ] && echo 2 is greater than 1.
	# Output:
	2 is greater than 1.

	[ 2 < 1 ] && echo FAILED UNEXPECTED BEHAVIOUR FROM [] expression.
	# Output:
	FAILED UNEXPECTED BEHAVIOUR FROM [] expression.

	# But we can fix this behaviour by using double [[ expression:
	[[ 2 > 1 ]] && echo 2 is greater than 1.
	# Output:
	2 is greater than 1.

	[[ 2 < 1 ]] && echo WORKS EXPECTED BEHAVIOUR FROM [[ NOW..
	# NO OUPUT coz 2 is not smaller than 1 in real.

	```
	tl;dr Read [here form the official tldp documentation](http://tldp.org/LDP/abs/html/testconstructs.html#EX11).
	FYI: **tldp** stands for **the linux documentation project**.

  Source: https://stackoverflow.com/a/669458/10012446 .

  tl;dr;
  You must read "Advance bash scripting" from tldp @ https://tldp.org/LDP/abs/html/ for serious bash scripting.

- Getting process id current shell (you can execute this any bash script
  ot know its process id too):

  ```bash
  echo $$
  # Kill the process using 
  kill -9 $$
  ```

```txt
Source: https://en.wikipedia.org/wiki/Signal_(IPC)
SIGINT
"Signal interrupt"
The SIGINT signal is sent to a process by its controlling terminal when a user wishes to interrupt the process. This is typically initiated by pressing Ctrl+C, but on some systems, the "delete" character or "break" key can be used.[12]


#For ```kill -9```
SIGKILL
"Signal kill"
The SIGKILL signal is sent to a process to cause it to terminate immediately (kill). In contrast to SIGTERM and SIGINT, this signal cannot be caught or ignored, and the receiving process cannot perform any clean-up upon receiving this signal. The following exceptions apply:
Zombie processes cannot be killed since they are already dead and waiting for their parent processes to reap them.
Processes that are in the blocked state will not die until they wake up again.
The init process is special: It does not get signals that it does not want to handle, and thus it can ignore SIGKILL.[13] An exception from this rule is while init is ptraced on Linux.[14][15]
An uninterruptibly sleeping process may not terminate (and free its resources) even when sent SIGKILL. This is one of the few cases in which a UNIX system may have to be rebooted to solve a temporary software problem.
SIGKILL is used as a last resort when terminating processes in most system shutdown procedures if it does not voluntarily exit in response to SIGTERM. To speed the computer shutdown procedure, Mac OS X 10.6, aka Snow Leopard, will send SIGKILL to applications that have marked themselves "clean" resulting in faster shutdown times with, presumably, no ill effects.[16] The command killall -9 has a similar, while dangerous effect, when executed e.g. in Linux; it doesn't let programs save unsaved data. It has other options, and with none, uses the safer SIGTERM signal.
```

```bash
a() { echo "$@"; }

type a
a is a function
a ()
{
    echo "$@"
}

a 1 2 3
1 2 3
```

```
a() { for x in "$@"; do echo $x; done }
a 1 2 3
1
2
3
```

```bash
#!/bin/bash

echo "Starting program at $(date)" # Date will be substituted

echo "Running program $0 with $# arguments with pid $$"

for file in "$@"; do
    grep foobar "$file" > /dev/null 2> /dev/null
    # When pattern is not found, grep has exit status 1
    # We redirect STDOUT and STDERR to a null register since we do not care about them
    if [[ $? -ne 0 ]]; then
	# Note here $? is 0 means there was no error(i.e., grep found the
	# the pattern, but it would be 1 if grep finds the pattern).
        echo "File $file does not have any foobar, adding one"
        echo "# foobar" >> "$file"
    fi
done
```

```
# This for loop will simply append Hello, to all the files in the
# current folder.
for x in $(ls); do echo Hello, $x; done
```


```
# We can use globbing in bash very well, like * and ? mark operators:
ls *.sh
# Output: <<Lists all sh extension files in current dir>>


touch file1
touch file2
touch file33

ls file?
# Output:
file1 file2
#NOTICE: File 33 is not listed coz ? means exactly any one character.

touch a b c d
ls ?
# Output: a b c d
rm ?
# Output: <<Removes all one character files>>


echo car{1,2,5}
# Output: car1 car2 car5
echo car{,1,2,5}
# Output: car car1 car2 car5


echo id_{1,2,3}
# Output: id_1 id_2 id_3

# Using ranges: src: https://superuser.com/a/1315669/776589
echo id_{5..10}
# Output: id_5 id_6 id_7 id_8 id_9 id_10

# Similar example:
touch unit_test_{0..10}

ls
unit_test_0  unit_test_2  unit_test_4  unit_test_6  unit_test_8  unit_test_10
unit_test_1  unit_test_3  unit_test_5  unit_test_7  unit_test_9

# Using range for character set:
echo {foo,bar}/{a..d}
# Output: foo/a foo/b foo/c foo/d bar/a bar/b bar/c bar/d



# Compare two directories using diff command:
diff <(ls dir1) <(dir2)
```

- Using shebang in a compatible way for nearly every other linux os:

  ```bash
  #!/bin/env python
  // A good way to understand how env can find path of python and use
  python to run this file is by running ```env``` python or ```env bash``` in your shell directly.

  // A python program below..
  // ...
  // ...
  ```

- A good way to lint the shell scripts and check for possible errors is
  by using `shellcheck` program.

  ```bash
  shellcheck fileName.sh
  # Install in archlinux by: `sudo pacman -S shellcheck`
  ```

- Important learning from shellcheck program

```bash
a=*
echo $a
# Output: 
amazing.txt a.out echo-with-colors.sh git-test-fix-hitory helloFromTee.txt jonhoo-config learning-solidjs manual_pages_test.md missing-semester myFile.txt new.sh output.zip rg-notes.txt test.js with-dhanur


# As you can see above that * expanded as glob pattern, so inorder to
# ensure the variable doesn't get intepreted as glob pattern, you must
# wrap them in "" as I do below: (shellcheck is AWESOME!!)
echo "$a"
# Output:
*
```

```bash
mv -i myFile alreadyExistingFile.sh
# This would ask you that if you wanna rewrite the target file ?
# You can check to overwrite by typing `y` in the prompt then.
```


- Using love of documentation readers?

  ```bash
  tldr ls
  tldr cat
  tldr cp
  tldr mv
  tldr tar # Could be very useful to me i guess.
  # .. and many more commands
  ```


```bash
# Search file in pacman db
pacman -F convert
# Output: 
	extra/bash-completion 2.11-2
		usr/share/bash-completion/completions/convert
	extra/imagemagick 7.1.0.16-1
		usr/bin/convert

# Now i know that convert binary is available in imagemagick package.
sudo pacman -S imagemagick

# Now I can use convert
convert -v
# Output: 
```

```bash
# todo, combine below find examples to my originanl bash notes page only
# find finds the files/folders paths in a given directory recursively.

find . -name src -type d
# ^^ here type is directory.
find . -path '**/test/*.py' -type f
# ^^ here type is file.
find . -mtime -1
# ^^ prints all the files which are modified in last day.

# do checkout more subtle things by
tldr find


# We can execute commands on matching items with find too:
find . -name "*.tmp"
# Print the list of items that we'll target afterwards
find . -name "*.tmp" -exec rm {} \

# Good examples from tldr is:
  - Find files modified in the last 7 days and delete them:
    find root_path -daystart -mtime -7 -delete


  - Find files matching a given size range:
    find root_path -size +500k -size -10M

  - Run a command for each file (use `{}` within the command to access the filename):
    find root_path -name '*.ext' -exec wc -l {} \;
```

```bash
find -name "*.out"
./e.out
./a.out
./c.out
./d.out
./b.out

find -name "*.out" -exec rm {} \
> ^C

find -name "*.out" -exec rm {} \;
# FYI: The semicolon in the end is important.

echo $?
0

find -name "*.out"
# Outputs nothing coz all files are deleted.

### AMAZING ####: You can do like same kind of stuff with fd tool as well:
# Find files with glob pattern recursively:
fd "*.sh"
# Outputs all files with sh extension in all the nested directories
recursively.
```

```bash
# THOUGH ABOVE approaches search for files/folders on demand but if
# there could be some database like approach to find stuff i.e,
# files/folders it would have saved lots of efforts of machines on
# each search attempt by the use of indexing. INFACT in linux there is
# one approach like this using locate(mlocate in archlinux) and using a
db which you would need to create once for a system using command `sudo
createdb`.

# Install locate in archlinux: src: https://wiki.archlinux.org/title/locate
sudo pacman -S mlocate

# find all the file/folders:
locate someFileOrFolderName
# And it'll use a database approach i.e., using an index to filter data
easily.
# FYI: `updatedb` command is run by `crontab` each day to update its database which we created with `createdb` command. src: https://man.archlinux.org/man/updatedb.8
```


```bash
grep -R searchTerm .
# This will search for the term searchTerm in all the files recursively in the current
folder.
```


```bash
rg "searchTerm" -t py .
# This will search for searchTerm in all the .py files in the current
folder. (-t means fileType).


rg -C 5 # Using -C will give you 5 lines around(i.e., 5 lines up and 5
lines down) the search found in the file.

```

```bash
# You can use to search file/folders in a pretty interactive manner as
well using broot tool, install it via:
sudo pacman -S broot

#Usage:
broot


# Another useful tool to quickly get used to directory structure is by
# using a tool i.e., nnn
# install
sudo pamcan -S nnn

#Usage:
nnn
```

# LECTURE 3 - Editors (Vim)

Refer [here](https://github.com/sahilrajput03/sahilrajput03/blob/master/vim.md).


# LECTURE 4 - Data Wrangling

All content moved @ https://github.com/sahilrajput03/sahilrajput03/blob/master/learn-bash.md#using-sed-using-missing-semester

```
# Read data from pipe via stdin in R compiler
# The point is that you can pipe ouput from other command to R compiler
cat file | R --slave -e 'x <- scan(file="stdin", quiet=TRUE); summary(x)'
```

**Learning R language**

Src: https://www.r-project.org/about.html


# LECTURE 5 - Command-line Environment (Deep dive into `ssh`)

## Javascript and signals

```js
console.log("hello")

process.on('SIGINT', function() {
	// We are actually capturing the SIGNINT signal
	// with this callback
	
	// This cb will be executed on ctrl+c

  console.log('I got a SIGINT(i.e., ctrl+c), but I am not stopping..');
	// we can handle to exit the program simply via
	// Leveraging benefit of this callback we can save the current state of the application to a file and which we may want to recover later when we want to start the program later.
	

	// Below line can be used to trigger exit behaviour
	// though:
	// process.exit(0)
	// exit code 0 is on error, 1 or other says error codes in bash.
});

process.on('SIGQUIT', function() {
	// this cb will be executed on ctrl+\
	
	console.log("I got SIGQUIT (i.e., ctrl+\).. ~ SAHIL")
	process.exit(0)
	
});


setTimeout(() => {}, 5*60*1000)
```

## Signals and jobs control

You can get list of all signal with `kill -L`.

Syntax: `SIGNALNAME(SIGNAL CODE)`

- SIGINT(2): This stands for signal interrupt.

- SIGQUIT(3): This quits the program, we can send this signal via `ctrl+\` hotkey.

- SIGKILL(9) can be harmful (i.e., kill no matter what)  to use when we kill some program to kill coz it might cause orphanel children as the process we're killing might have child processes and sich sigkill can't be captured by any program so its child processes (which wont have any parent process then) might remain alive and will then known as orphaned processes.

- SIGSTOP(19): When we do `ctrl+z` it send a SIGSTOP signal which suspends the current program. This is very useful in vim though.

What are bg and fg?
Ans. When we have a background process which is suspended(PAUSED) then we can use `bg` command (i.e., sending a SIGNCONT(18) signal) to start that process in background. Equivalent kill command would be `kill -SIGNCONT %myJobId`.

Wherease if want to start that process and reattach to the standard output (forgrounding) we can use `fg` command.

```bash
nohup sleep 2000 &
# FYI: We also get a process identifying number as well.

# FYI: I can see all the processes that I have with suspended with SIGSTOP signal.
jobs

# I can resume those suspended jobs with command
fg

############################
# Direct examples from missing semester:

sleep 1000
# Sent ctrl+z (^Z)
# (for sending signal: SIGSTOP i.e., suspending/pausing)
[1]+  Stopped                 sleep 1000

nohup sleep 2000 &
# Output:
[2] 321894
# This program runs in background now only.

nohup: ignoring input and appending output to 'nohup.out'
jobs
[1]+  Stopped                 sleep 1000
[2]-  Running                 nohup sleep 2000 &

### NOW I can resume my job suspended via below command:
bg %1
# Output:
[1]+ sleep 1000 &

jobs
# Output:
[1]-  Running                 sleep 1000 &
[2]+  Running                 nohup sleep 2000 &


### Now again I am gonna suspend (PAUSE) 1st
# process with manual -STOP signal via kill command:
kill -STOP %1
# Output:
[1]+  Stopped                 sleep 1000

jobs
[1]+  Stopped                 sleep 1000
[2]-  Running                 nohup sleep 2000 &


# Sending SIGHUP(1) signal:
kill -HUP %1
[1]-  Hangup                  sleep 1000

# OBSERVATION: it killed that process
jobs
[2]+  Running                 nohup sleep 2000 &



### tl;dr: You should use nohup command to run any server on you remote machine when connected via ssh coz then it'll ignore all the SIGHUP signals when you quit the  shell (ssh session).
### LEARN: When shell is closed, it sends SIGHUP signal to all its processes.
kill -HUP %2

# OBSERVATION: It didn't kill that, why?
jobs
[2]+  Running                 nohup sleep 2000 &

## Its not terminated bcoz `nohup` is encapsulating all SIGHUP signals and then ignoring those SIGHUP signals thus not killing the process.


# Killing jobs started with nohup
jobs
# Output:
[2]+  Running                 nohup sleep 2000 &

kill -KILL %2
# Output: 
[2]+  Killed                  nohup sleep 2000
```

## tmux

- `screen` is an very older alternative of `tmux`, but tmux rocks!


  **Tmux concepts**

  ```bash
  # One great usage of tmux: 
  # Say u r connected to remote machine with ssh, and you start a tmux session and there you have bunch of windows and panes opened, then you can use DETACH (prefix d) to detach from tmux and then close the ssh connection. SO CLOSING THE TERMINAL CLOSING (i.e., on disconnecting the ssh connection) would send SIGHUP signal which would get IGNORED BY TMUX, so all our session's temirnals would be secured!



  # session > windows > panes
  # We can say windows are like tabs in a browser.

  # IMPORTANT: detach from a session(read FYI):
   prefix + d
  #  FYI: If you detach from this session and exit the terminal, the terminal send SIGHUP signal which would be ignored by tmux's session. YO!!

  # Create new session (session name would be number then):
  tmux
  # FOR EASINESS I HAVE ALIS FOR tmux AS tx. YO!!

  # create new session with name foobar
  tmux new -t foobar

  # list tmux sessions with
  tmux ls

  # Reattach to last active session im my experience ~Sahil. But reading from docs: it says if no target is supplied tmux tries to connect to session cureently in use:
  tmux a
  # a is alias for attach by default from tmux.
  # To attach to a particular session:
  tmux a -t foobar

  # creating new tab(window) inside a session:
  prefix n

  # switching back to older tab(window)
  prefix p

  # renaming current tab(this is according to my settings)
  prefix ,

  # new pane horizontally in current tab(window)
  prefix "

  # new pane vertically in current tab(window)
  prefix %

  ```

## `ssh`

```bash
# for archlinux, check if service is up or not?
# Refer: https://github.com/sahilrajput03/sahilrajput03/blob/master/arch-notes.md#setting-up-ssh

# Then you can ssh your own user as well:
ssh array@array-os

## BEGIN HERE:
ssh user_name@domain_or_ip

# execute sigle commands via ssh:
ssh user_name@domain_or_ip myCommand
ssh user_name@domain_or_ip ls -lsa


###########################

###### WE CAN GIVE TARGET USER ANY SSH KEY SO THAT LATER ON WE CAN VERIFY OURSELVES USING OUR PRIVATE KEY WHEN CONNECTING TO THAT MACHINE ANYTIME LATER:
### create a ssh key pair:
ssh-keygen -o -a 100 -t ed25519
# PLEASE CREATE A PASSPHRASE, its important!
### WHY USE A PASSPHRASE?
# Bcoz if somebody got your priavte key they won't be able to use it unless they have the passphrase you have set, so its a good thing to set a passphrase!

### COPY OUR (NEW) GENERATED PUBLIC KEY TO TARGET REMOTE SERVER:
## FANCY COMMAND:
# ssh-copy-id array@arch-os # It will use the first valid public key it finds from these locations: ~/.ssh/id_rsa.pub, ~/.ssh/id_dsa.pub, ~/.ssh/id_ecdsa.pub, ~/.ssh/id_ed25519.pub, ~/.ssh/id_xmss.pub
ssh-copy-id -i .ssh/id_ed25519 foobar@remote # Appends the public key to the end of `.ssh/authorized_keys` on target machine.
# other way manually copying via `tee` command:
cat ~/.ssh/id_ed25519.pub | ssh user@hostname_or_ip "cat > .ssh/authorized_keys" # To overwrite the `authorized_keys` file on target machine with the public key
cat ~/.ssh/id_ed25519.pub | ssh user@hostname_or_ip "cat >> .ssh/authorized_keys" # To append the public key in the `authorized_keys` file on target machine
cat ~/.ssh/id_ed25519.pub | ssh user@hostname_or_ip tee .ssh/authorized_keys # To overwrite the `authorized_keys` file on target machine with the public key
cat ~/.ssh/id_ed25519.pub | ssh user@hostname_or_ip tee -a .ssh/authorized_keys # To append the public key in the end of `authorized_keys` file on target machine
# Here we are saying that take the standard input from cat command and dump it to .ssh/authorized keys file on target machine
#
# You can confirm the contents of file `.ssh/authorized_keys` on target machine and it should show something like this:
# cat .ssh/authorized_keys
# ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAJukbqVgN5JuBRxIl/1d7YRmr5lW9TuctR5Cgmhi3yO array@arch-os
# Note: This file can contain comments with by appenind any line with # just like bash. Also, using `ssh-copy-id -i ..` command does not deletes any comment in the `authorized_keys` file.


### AND NOW IF WE TRY TO SSH:
ssh array@arch-os
# we'll be prompted to enter the passphrase and we can login simply via that passphrase only(no need of password).

### Shoul i use logot or exit command to exit terminals and ssh connections ?
# ~Sahil: Use exit as it can be used both in scripts and shell (including ssh) shells.

# Source: https://www.soughttech.com/front/article/2195/viewArticle



#### FOR COPYING FILES #####
# Copy file to home directory of a target user
scp myFile pi:
# Learn: The semicolon in above command is necessary.

# Copy and rename file or copy to a target folder
cp myFile array@arch-os:myFile
# LEARN: 1: If myFile is a directory in folder in target user's home directory then our file `myFile` will be pasted inside that folder.
# LEARN: 2: If myFile doesn't exist in target users's home directory then file will be created there.
# LEARN: 3: If a file already exist in target user's home directory then that file will be overwritten with the content of our source file.

# Copy to a absolute path
scp 2.png pi:/tmp
# Learn: File will be created inside /tmp folder in targer user.

##USING rsync:
#>> You can install rsync to archlinux very easily with (sudo pacman -S rsync)
rsync -avP . user@hostname:cmd
#// SO it'll COPY ALL files(wow: including all hidden files that i.e., files starting with . as well) of current folder to cmd folder in remote machine.

## ALWAYS USE rsync instead of scp coz::
# Say you are copying a bunch of a bunch of files with scp and say the connection dropped so next time when you try to copy files `scp` will start copying the files from the very start WHEREAS `rsync` will only copy from where it stopped, thats really awesome!!

###### important observations:
rsync -avP my_folder array@arch-os
# this will cause undesirable copy of our my_folder to a new folder named array@arch-os in current folder.
rsync my_file my_ssh_alias:
# Works good too!

rsync -avP my_folder array@arch-os:
# This will copy my_folder to our home folder in array user in targer machine. WORKS GOOD!
```


```bash

# Usage of rsync:

       --archive, -a            archive mode; equals -rlptgoD (no -H,-A,-X)




       --verbose, -v
              This  option  increases the amount of information the daemon logs during its
              startup phase.  After the client connects, the daemon's verbosity level will
              be  controlled  by  the options that the client used and the "max verbosity"
              setting in the module's config section.
```

## Using ssh aliases with config file

```
# file: ~/.ssh/config
Host own
	User array
	HostName arch-os
	IdentityFile ~/.ssh/path_to_private_key_file
	RemoteForward 9999 localhost:8888
	# I HAVE NO IDEA WHAT THIS DOES?^^^

# Now we can simply use below command to connect to our target host via below command:
ssh own
# ^^^^^ The reason for using config files for ssh instead of creating alias for ssh command is that `scp` and `rsync` also recognizes the ssh config file pretty good.

##### HENCE BELOW commands WORK GOOD AS WELL:
scp MANUAL_TEST.md own:
rsync MANUAL_TEST.md own:

```

## important case story with tmux

```
ssh own
tmux #OR:  tmux new -t my-gold
# DO: detach from tmux via: prefix d
logout # or exit command to terminate ssh connection.
### SO ALL THE THINGS that you left executing in tmux will keep on executing after you logout and disconnect from server. Yo!!

####Now that you have closed the ssh conneciton you may still connect to ssh again and connec to earlier tmux session again and it'll remain as it was when detached via:

ssh own
tmux a # FYI: `tmux a` means to attach to last active tmux session.
```


## Really good problem: How do you manage tmux in for local machine and remote machine at the same time ?

Solution A: You can simply have the prefix key for the local machine and the remote machine different so they won't interefere at all. YOU CAN HAVE QUICK VISUAL FEEDBACK FOR THE STTAUS OF tmux when you are operating nested tmux sessions via the base visual indicator bar color very intutively. YO-missing-semester!! As you can see [here](https://github.com/jonhoo/configs/blob/master/server/.tmux.conf) that jon gjenset has set prefix for tmux as ctrl-s server but it would conflict with my save in vim so, i can better use it as `ctrl+b` though which is default, yo!!.

Solution B: You can send detach binding to remote ssh's tmux(when you have same prefix for both host and remote) by `prefix prefix d` so this will work good as well, but SOLUTION A is so good to work say when you want to use prefix for all other tasks say creating new windows and panes all the time. SO only use SOLUTION-B IN RARE TIMES ONLY.
TESTED: SOLUTION-B works good but as discussed it gets very weirder to use tmux this way!


## local and remote port forwarding

```bash
Host deb
	User array
	HostName 192.168.122.245
	RemoteForward 8081 localhost:81
	RemoteForward 8082 localhost:82
	LocalForward 8089 localhost:80
```

So with this on local computer you can access remote's 80 port @ 8089 on local system.
Also, you can access local's 81 and 82 port on remote's 8081 and 8082 ports respectively.
ALSO, YOU CAN FORWARD MULTIPLE PORTS without any issue.

Read more if you want to dive into commands for making thing remote and local portforwards via commands. [Amazing article @ linuxize here](https://linuxize.com/post/how-to-setup-ssh-tunneling/).

# Lecture 6 - Version Control (Git)

- It helps in collaboration.
- It captures snapshots of each version.
- commit means a snapshot
- Parent commit: A snapshot that precedes the current commit.
- Most commits have one parent, but a merge commit can have multiple commits as well.
- Git: A content address store where contents can be addressed by their hash.
- Git is mostly made up of c, bash, perl scripts.
- Git graphy data structure:

```bash
folders are trees
files are blobs

# These data structures are recursive so a tree can have multiple trees and blogs.


##### A simple git underlying structure:
type blog = array<byte>
type tree = map<string, tree | blob>
type commit = struct {
	parents array<commit-ids>
	author = string
	message = string
	snapshot = tree-id
}


###
type object = blob | tree | commit-id
objects = map<string, object>
def store(o):
	id = SHA1(o)
	object[id] = o

def load(id):
	return object[id]

references = map<string, string>
# references are human readable strings i.e., branchnames, HEAD, etc which points to SHA-1 ids of commits for easy usage.
```

```bash
## viewing the chain of sha's used to make a single commit:
git cat-file -p my-commit-sha
git cat-file -p tree-sha-we-get-from-above
git cat-file -p file-sha-we-get-from-above



git log
# Output:
* 733ae15 (HEAD -> main) First-commit.



git cat-file -p 733ae15
# Output:
tree 0f4d9ac6e6cdb94a954fcfd7809d2fede3d39646
author Sahil Rajput <sahilrajput03@gmail.com> 1646999422 +0530
committer Sahil Rajput <sahilrajput03@gmail.com> 1646999422 +0530

First-commit.
git cat-file -p 0f4d9a
100644 blob 2d832d9044c698081e59c322d5a2a459da546469    1.txt



git cat-file -p 2d832
# Output:
hello,world
```

Practical usage:

```bash

# add all content from the root of the git repo:
git add -A



## Get a diff since last commit:
git diff myFile.txt

## IF YOU ADDED THE CHANGES TO STAGE AREA, YOU MAY DO-
# FYI: --cached means show the changes in the cache/index (i.e. staged changes) against the current HEAD. --staged is a synonym for --cached.
git diff HEAD myFile.txt
git diff --cached myFile.txt  # OR git diff --staged myFile		### --staged is a synonym for --cached
git status -v													### (shows staged changes as well). FYI: -v is for verbose
# SOURCE FOR ALL ABOVE: https://stackoverflow.com/a/1587877/10012446


# Get a diff since source commit:
git diff sourceCommitId myFile.txt


############ colors in vim?
# green = local branches
# cyan = current HEAD
# red = remote branches


############ view branches with last commitid and commit-messages
git branch -v



### merging
git mergetool
# above command can be made to configure to launch `vimdiff` tool.
vimdiff


######## using --set-upstream is now autocompletable with fzf or autocomplete utitlity in bash IMO:
git branch --set-upstream-to=origin/master
# now you can simply do `git push` simply to do `git push origin master:master`


###### git pull
git pull # is same as `git fetch; git merge origin`

###### very verbose (-vv) with git branch
git branch -v
* master 1b769fd Update

git branch -vv
* master 1b769fd [origin/master] Update




###### clone only last n commits in a repo: (in below with --depth=1 we say to clone only last commit only):
git clone --depth=1 --single-branch --branch=master  https://github.com/sahilrajput03/sahilrajput03/
# we can say to clone only single branch with --single-branch flag as well:
git clone --depth=3 --single-branch https://github.com/sahilrajput03/sahilrajput03/
# we can say to clone a specific branch as well:
git clone --depth=3 --single-branch --branch=master  https://github.com/sahilrajput03/sahilrajput03/

#FYI: to read more on this, read @ https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/
```

## Dealing with remote branches in local direcotries with simple repo for testing(TESTED!), yo!

**_FiX: Actually we can push to non-bare repos as well but we must not be checked out on the branches on the remote repos which we are pushing to at the moment. So this is easy fix by checking out to a `rest` branch on remote repository. Yo! _**
**_ SO WE DON"T NEED A BARE REPO THOUGH_**

```bash
mkdir remote-repo && cd remote-repo && git init && git checkout -b rest # CHECKING OUT TO REST OR ANY OTHER BRANCH IS IMPORTANT.
# Now we can make above folder as our remote repo easily.
cd ..


mkdir my-repo && cd my-repo && git init
git remote add origin ../remote-repo/.git
echo hello >> file.txt
git add -A && git commmit -m "First commit" && git push origin main
# We are able to push main/master to remote-repo coz we have checked out rest branch there.
# To see changes in remote repo folder, you may do:
git checkout main

#### IF YOU AGAIN WANT TO PUSH TO THIS REMOTE REPO, YOU MUST CHECKOUT to rest branch first, else it'll fail.
git checkout -b rest
```

## Dealing with remote branches in local direcotries with `--bare` repo for testing, yo!

We can make a copy of github remote repository as bare repo as well with command:

```
git clone --bare <my-repo-url>
# FYI: This will clone .git folder of my repo to a folder named: `my-repo.git` YO!!
#TESTED!
```

```bash
mkdir remote-repo && cd remote-repo && git init --bare
# Now we can make above folder as our remote repo easily.
cd ..


mkdir my-repo && cd my-repo && git init
git remote add origin ../remote-repo
echo hello >> file.txt
git add -A && git commmit -m "First commit" && git push origin main
# Now this commit would be pushed to our remote-repo repository folder as well.
# LEARN: a bare repo has now checked out branch anytime.
```

##  To create a local bare repo

Any local reposotity can push to a remote-repository folder that has not checked out any branch (working directory) which is known as bare repo. You may create a bare repo with command

```bash
git init --bare
```

If its not bare you get error:

1. can't push to a non-bare repo
2. i.e., remote rejected: branch is currently checked on remote.)

Source: https://stackoverflow.com/a/11117928/10012446

## Interactive staging via `git add -p` in a helpful thing

```bash
git add -p .
# YOU may use, s (split), y (yes), n (no) and other for the case.
# interesting thing is we are only adding certain changes to cached area only(not discarding them from the files at all)
# AND after adding required changed to staged are and commmiting the changes, we may throw away the changes completely from files via:

git checkout myProgram
# or
git checkout .
```

## git blame and git show

```bash
git blame filename
# then using the information for eachline we can see which commit id is reponsible for the last change on that line and then we can do like:
git status commmit_id
# to get the contextural changes made when that line was last edited!
```

## `git stash` and `git pop`

```bash
git stash
# it saved the changes to a useful place.
git pop
```

## `git bisect`

This can be very helpful when we want to run some scipt or any command for all the commits in backward manner so we can check where is a commit is breaking a test which was actually passing successfully earlier at a time. So this can be really helpful in automating stuff over commits.

## FROM EXERCISE:

```
graph = log --all --graph --decorate --oneline
# added above line to .gitconfig file.




# define global ignore patterns in ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
### ^^^^ Actually this line added a line for exclude pattern in .gitconfig file though, so i don't need to do this anytime if I have my .gitconfig file.
# Do this, and set up your global gitignore file to ignore OS-specific or editor-specific temporary files, like .DS_Store.
```

# LECTURE 7 - Debugging and Profiling

```bash
ls /var/log

# lsof can detect any app using a particular port
sudo lsof | grep ':8083'
sudo lsof | grep ':8083 .LISTEN'

# du stands for disk usage:
du
```


# LECTURE 8 - Metaprogramming

- gradle, npm, etc

```
pipi - python packages
rubygems - for ruby
crates.io - for rust
keybase - cryptographic keys repositories
apt - packages repository for ubuntu
```

# LECTURE 9 - Security and Cryptography

Entropy - Measure of randomness.

Coin flip: log(2) = 1 bit
Dize roll: log(6) = 26 bit

## Hash functions

- They are non invertible, i.e., the digest can't be reversetd to text it was generated from. - Collision resistant
- Helps to make a commitment scheme
- Hash functions are deterministic i.e., A deterministic function always returns the same results if given the same input values.

## Key Derivation Functions(KDFs)

- They have a key generation function, which generates a random key.
- This concept is very similar to hash functios excepts the one property that it is 'SLOW TO COMPUTE'. This helps in against bruteforce attacks.
- E.g., hash derivation function PBKDF2(Password Based Key Derivation Function 2).
- They produce a fixed length output.
- They are used where we require a fixed length of input as a key to another cryptographic algorithm.

## Encryption/Description

### Symmetric Key Cryptography

These sytems have:

- Encrypt fn :

```bash
# Encryption
encryptFn(plain text, KEY{from KDFs}) -> cipher text

# Decryption
decryptFn(ciphertext, KEY) -> plaintext
```

- Given the cipher text, we can't figure out the plain text without the KEY.
- Obvious correctness property:

`decrypt (encrypt(plaintext,key),key) = plaintext`

## openssl

- To apply a symmetric cipher to some file.
- one symmetric cipher name: aes-256-cbc

```bash
# Encrypt
openssl aes-256-cbc -salt -in hello.txt -out hello.txt.enc
# You are prompted with password (passphrase) which is then passed to KDF to produce a key.
### REMEMBER THE passphrase though.


# Decrypt
openssl aes-256-cbc -d -in hello.txt.enc -out hello.txt.dec

# compare decrypted text and original text
cmp hello.txt hello.txt.dec; echo $?
##FYI: 0 return value means no error happened.
```

## AES256

- This has 256 bit of entropy in its generated key.

## Others

- A passphrase with 64 bit entropy is good for generating keys with hash functions.

- https://haveibeenpwned.com/ is site where you can check if some password has been compromised from any site that youused earlier. It used hashes to compare with your email addresses though.
- What is salted passwords and what are its benefit of salted passwords ?

Ans. You store two entities for any user i.e., random salt and password hash. So even if a user(whose password hash is exposed in a attack) is using same password in different sites, then the attacker won't have access to other sites coz the salt is used different in each site, thus password hash would be different.

```json
{
	"user": {
		"salt": "g35dirb",
		"passwdHash": "84bf83m3g58k"
	}
}
```

- Same salt or different salt for all users, i think the best is to use both i.e., src: https://stackoverflow.com/a/29786297/10012446.
- You may also use a static salt with your backend code and a random salt stored in the user table as well.
- passwdHash is generated by using a salt value.
- Every user has its own unique salt value generated randomly.

## Asymmetric Key cryptography

- Keygen() function generates (pubK, priateK)
- Thes pubK and privateK can be used to encrypt something similarly as we did in application of symmetric key cryptography but now we have roles for each of our privateK and pubK as:

```bash
encrpt(plaintext, publickey) -> ciphertext
decrypt(ciphertext, privateKey) -> plaintext
```

- now these two keys have different functionality and usages
- now anybody on internet can have my public key and encrypt any piece of data for me and I can decrypt it using my private key.
- As long as my privat key remains secret, anybody on internet can use it send data to me safely using my public key. This is where asymmetry keys comes from.
- Analogy with practical life:
  - Symmetric: A single key locks and unlocks the door, so you can't give your this key to anybody.
  - Asymmetric: You can give the key which lock to anybody and then only you can open the doors. Say there are 100 rooms in hotel and you give public keys to all 100 people and say them to store anything and lock with the locking key and then only I would be able to unlock each of those rooms.
- Usage in digital signing:

```bash
# Digital signatures:
sign(message, privateKey) -> signature
verify(message, signature, publicKey) -> OK
```

- Hard to forge (without private key)
- RSA is type of asymmetric key cryptography.

## git verify

```
git tag
# shows tags

git cat-file -p  vX.Y.Z
# shows raw data associated with this tag
git tag -v xX.Y.Z
# It'll show like:
# "Good signature from "Anish Athalye <me@email@.com>"
```

## hybrid encrpytion

In practical we use both symmetric and asymmetric key cryptography.

See @ https://youtu.be/tjwobAmnKTo?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J&t=3353


# LECTURE 10 - Q&A

- d stands for daemon i.e., `systemd`, `sshd` etc
-

```bash
#Show all services running in linux:
systemctl status
```

```bash
# Usage of -- in bash commands
#### -- in any command can tell that don not interpret anything following it as a flag or option, for e.g.,
# Say , we want to create a file name `-i`
touch -i
# Output
touch: invalid option -- 'i'
Try 'touch --help' for more information.
touch -- -i
# Output
ls
# Output (file created)
-i

### Say now we want to remove a file named `-i`
rm -i
# Output
rm: missing operand
Try 'rm --help' for more information.
rm -- -i
ls
# Output: (file removed!)
```

- Vagrant: A tool for creating virtual machines with config files (very similar to docker). It has 23.5k stars on github

```bash
https://www.vagrantup.com/
https://github.com/hashicorp/vagrant
```

docker vs. vagrant:

- https://www.vagrantup.com/intro/vs/docker
- https://stackoverflow.com/questions/16647069/should-i-use-vagrant-or-docker-for-creating-an-isolated-environment
