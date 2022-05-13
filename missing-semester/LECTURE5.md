# Lecture 5

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

# tmux

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

```
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
ssh-copy-id array@arch-os
# ssh-copy-id -i .ssh/id_ed25519 foobar@remote
# other way manually copying via `tee` command:
cat ~/.ssh/id_ed25519.pub | ssh user@hostname_or_ip tee .ssh/authorized_keys
# Here we are saying that take the standard input from cat command and dump it to .ssh/authorized keys file.

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


# local and remote port forwarding

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
