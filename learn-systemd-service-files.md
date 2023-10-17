# Learn Systemd Service Files

## Get all services via systemd

```bash
# List all loaded services on your system (whether active; running, exited, or failed)
systemctl --type=service | cat
# Note: I made a alias as well - ```alias listServices='systemctl --type=service | cat'```

# List active
systemctl --type=service --state=active

# List running
systemctl --type=service --state=running



# Display a list of all loaded systemd units (read the systemd documentation for more information about systemd units) including services, showing their status (whether active or not).
systemctl | cat
```

## Create a systemd service which you can setup to be run on system boot as well

***NOTE: You don't need to reboot or logout/login to make the services take into effect.***

[Motivation -  Autostarting ~ Arch Docs](https://wiki.archlinux.org/title/autostarting)

Src: [One](https://medium.com/@benmorel/creating-a-linux-service-with-systemd-611b5c8b91d6), [Two](https://tecadmin.net/run-shell-script-as-systemd-service/).

```bash
# Tip: You can use these commands to see services you created:
alias listServices='systemctl --type=service | cat'
alias listServicesFiles='ls -l /etc/systemd/system/'


##### Tip: DO NOT TRY TO CREATE FILES UNDER CUSTOM DIRECTORY INSIDE /etc/systemd/system/sahil-services because it didn't work, (time wasted 2h).


# My current services with some info
$ ls -l /etc/systemd/system/sahil--*
# -rw-r--r-- 1 root root 434 Oct 17 17:17 /etc/systemd/system/sahil--google-calendar-node.service
# -rw-r--r-- 1 root root 418 Oct 17 16:43 /etc/systemd/system/sahil--slasher-frontend-dev.service
```

1. Create a script

```bash
vi ~/test/nf.sh
sudo chmod +x ~/test/nf.sh
```

*Now paste below text to that file*

```bash
while true; do
	echo "Hello $(date)" >> /tmp/tmp
	sleep 2
done
```

2. Create a service file, by

```bash
sudo nvim /etc/systemd/system/nf.service
```

*Now paste below text to that file*

```
[Unit]
Description=This is fun service description, sahil.

[Service]
User=array
# WorkingDirectory=/home/array/test
ExecStart=bash /home/array/test/nf.sh
# Restart defines no. consistent attempts to be done by systemd anytime to start the service anytime the service is killed by some external action(i.e., `systemctl stop` will not trigger restart actions).
Restart=always

[Install]
WantedBy=multi-user.target
```

**or run a npm command:**
```
[Unit]
Description=This is fun service description, sahil.

[Service]
User=array
WorkingDirectory=/home/array/test/LemonJamsBot
ExecStart=npm run dev
# Restart defines no. consistent attempts to be done by systemd anytime to start the service anytime the service is killed by some external action(i.e., `systemctl stop` will not trigger restart actions).
Restart=always

[Install]
WantedBy=multi-user.target
```


3. Now we need to reload service by `systemd` so it loads our new service and then we can start our service:

```bash
# we need to reload systemd files
sudo systemctl daemon-reload
sudo systemctl start nf # or `sudo systemctl start nf.service`
# Enable service so it runs on system startup
sudo systemctl enable nf

# Verify 1: See status, logs from the program, age of the process (since last start), and more:
sudo systemctl status nf

# Verify 2: You can follow live logs for the service via (node: order of options i.e, -fu is important), src: https://superuser.com/a/1292767/776589
# Note: Log output from `journalctl` show logs even when you restart the service via: `sudo systemctl restart nf`
journalctl -fu nf
```

Now we can check if the dates are added in the `/tmp/tmp` file by

```bash
cat /tmp/tmp
```
