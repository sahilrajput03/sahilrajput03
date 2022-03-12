# Lecture 2 - Shell Tools and Scripting

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



