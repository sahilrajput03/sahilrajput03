# Learn Cli Binary Making with bash

Thats how you can start making a cli binary with bash which applies help command when any of below commands are run:

```bash
# Running any of below three commands should yield a help message from the program:
ti
ti -h
ti --help
```

```bash
ti () {
	_help () {
		echo "Help:
====
  You can get help this help by either of below commands:
  $ ti
  $ ti -h
  $ ti --help

Usage:
======
  You can use ti with any commands like wget, tar or more.
  $ ti wget
  $ ti tar

Bypass cache
============
  By providing - in the end of the command
  $ ti wget -
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
