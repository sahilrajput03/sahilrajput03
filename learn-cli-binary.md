# Learn Cli Binary Making with bash

Thats how you can start making a cli binary with bash which applies help command when any of below commands are run:

FYI: `wi` stands for **what is** and I have this cli in use, you can view if full code @ [here](https://github.com/sahilrajput03/config/blob/main/scripts-in-use/wi).

```bash
# Running any of below three commands should yield a help message from the program:
wi
wi -h
wi --help
```

```bash
ti () {
	_help () {
		echo "Help:
====
  You can get help this help by either of below commands:
  $ wi
  $ wi -h
  $ wi --help

Usage:
======
  You can use wi with any commands like wget, tar or more.
  $ wi wget
  $ wi tar

Bypass cache
============
  By providing - in the end of the command
  $ wi wget -
"
}

	if [ -z $1 ] || [ $1 = "-h" ] || [ $1 = "--help" ]; then
		_help
		return
	fi

	## Use your binary instructions here...
	echo i am here
	echo i am here
	echo i am here
}
```
