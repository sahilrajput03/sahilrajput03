# Learning bash

```bash
while [ condition ]
do
   command1
   command2
   command3
done

# E.g, 
$ while true; do echo I am cool; sleep 1; done

```

```bash
$ ((0)) && echo truthy value
# Ouput: nothing...

$ ((1)) && echo truthy value
# Ouput: truthy value

# Doing simple maths in bash:
echo $((5-2))
# Ouput: 3

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

Equality operators:

if (( 1 > 0 )); then echo one is greater than zero; fi
# ouput: one is greater than zero

if (( 1 > 10 )); then echo one is greater than ten; fi
# ouput: -no-output-

if ! (( 2 > 2 )); then echo two is not greater than two; fi
# output: two is not greater than two

if ! (( 0 > 0 )); then echo zero is not greater than zero; fi
# ouput: zero is not greater than zero


FOOTNOTES:
**output means its an exception.
```
Comparining numbers in bash: https://stackoverflow.com/a/18668580


#### fun with variables

Must checkout: https://linuxize.com/post/bash-increment-decrement-variable/

```
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

