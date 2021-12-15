# Learning bash

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




[[ true ]] && echo It is truthy value.
# Output: It is truthy value.

[[ false ]] && echo It is truthy value.
# Output*: It is truthy value.



[[ false = true ]] || echo Condition did not pass.
# Output: Condition did not pass.



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

