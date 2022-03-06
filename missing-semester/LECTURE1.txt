# Lecture 1

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
