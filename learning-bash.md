# Learning bash

**Know the filesystem usage and free space**

```bash
df -h
src: https://linuxize.com/post/linux-tee-command/
```

TODO: Lean/Make some example for commands like: `exit` (`exit 1`), `trap`, `shift`, `wait`. Src: [here](https://github.com/denilsonsa/small_scripts/blob/master/sleep_until_modified.sh).

**Usage of `xargs`: [Source](https://www.tecmint.com/xargs-command-examples/).**


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

Equality operators and && and || operator:

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

