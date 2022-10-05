# LEARN MAIL SERVER HOSTING

- TODO: https://www.wpoven.com/blog/free-smtp-servers-sending-emails/

## Using sendinblue

Adding Domain: https://youtu.be/b1a6lN2UwCY

- **Api looks cool as well:**

![image](https://user-images.githubusercontent.com/31458531/194028795-b37ca069-cc3c-43c2-9b32-e43b8856afb3.png)


## others

- Q. Does changingn DNS(like using google dns or other avaialble dns) will unblock my outbound 25?

  tldr: no, [source](https://qr.ae/pvekBP): , [proof](https://www.mailenable.com/forum/viewtopic.php?t=43533)

- Why does ISP's block outbound 25?

Visit: https://www.quora.com/Why-does-the-ISP-block-port-25

- **IMPORTANT: CONNECT BROADBAND:**
To open your outbound port you need to have static ip address ~ Connect Broadband Service Provider. FYI: Static ip costs (500Rs + 18%GST) per month.

**Services from mxtoolbox.com:**

- Check if your ip is blacklisted: [Click here](https://mxtoolbox.com/SuperTool.aspx?action=blacklist:124.253.37.214&run=problempage)
- Check if you ip is blocklisted: [Click here](https://mxtoolbox.com/SuperTool.aspx?action=blacklist:124.253.37.214&run=problempage)
- Arn Lookup: [Click here](https://mxtoolbox.com/SuperTool.aspx?action=arin%3a124.253.206.231&run=toolpage)
- MX Lookup: [Click here](https://mxtoolbox.com/SuperTool.aspx?action=mx%3a124.253.38.125&run=toolpage)
- Whats my ip: [Click here](https://mxtoolbox.com/whatismyip/)

**from tutorial:**

![image](https://user-images.githubusercontent.com/31458531/191476048-e6f945da-d749-4c1f-a94e-c3b1688f54b2.png)

- using cname:

![image](https://user-images.githubusercontent.com/31458531/191708520-65487d3c-c44a-4b64-9e10-7efaef487615.png)

- usng A record:

![image](https://user-images.githubusercontent.com/31458531/191493007-38608462-79ef-4303-8008-f2a22f2da42d.png)

- Edit file `/etc/hosts` and later check if updated via `hostname -f` f stands for full FQDN

![image](https://user-images.githubusercontent.com/31458531/191476943-4752e747-ba93-4235-80a7-e9e55ab05ab3.png)

- Edit file `/etc/hostname` and later check if updatd via `hostname`

![image](https://user-images.githubusercontent.com/31458531/191477125-3f72be38-15f5-4869-96d4-46c3af23f359.png)


- telnet

```bash
sudo postfix reload
# escaping?
ctrl+]quit
```


- Connection Timeouts (end of hard working hours):

[QUESTION SEARCH @ google](https://www.google.com/search?q=postfix+gmail+connection+timeout&newwindow=1&biw=745&bih=935&sxsrf=ALiCzsbK2ObC9O97ELOSmTk-I7cP8G2fMA%3A1663796169436&ei=yYMrY52lGriO3LUP58aAkAM&ved=0ahUKEwjdraHd66b6AhU4B7cAHWcjADIQ4dUDCA4&uact=5&oq=postfix+gmail+connection+timeout&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEB4QFjIFCAAQhgM6BAgAEEc6BQghEKABSgQIQRgASgQIRhgAUMsEWMUGYI8IaABwAngAgAGGAogBlwWSAQUwLjEuMpgBAKABAcgBCMABAQ&sclient=gws-wiz)


Source: https://serverfault.com/questions/585503/postfix-connection-timed-out-on-all-outbound-email

```bash
# compare outpus of below two commands:
sudo traceroute -n -T -p 25 gmail-smtp-in.l.google.com
sudo traceroute -n -T -p 80 gmail-smtp-in.l.google.com

## other way - get all mx addresses of gmail
host -t mx gmail.com
# OUTPUT:
# gmail.com mail is handled by 40 alt4.gmail-smtp-in.l.google.com.
# gmail.com mail is handled by 20 alt2.gmail-smtp-in.l.google.com.
# gmail.com mail is handled by 30 alt3.gmail-smtp-in.l.google.com.
# gmail.com mail is handled by 5 gmail-smtp-in.l.google.com.
# gmail.com mail is handled by 10 alt1.gmail-smtp-in.l.google.com.
##### AND NOW TRY CONNECTING TO EACH OF THEM: (source: https://unix.stackexchange.com/a/615982)
telnet gmail-smtp-in.l.google.com 25
telnet alt2.gmail-smtp-in.l.google.com 25
telnet alt3.gmail-smtp-in.l.google.com 25
telnet alt4.gmail-smtp-in.l.google.com 25
telnet alt1.gmail-smtp-in.l.google.com 25
-
telnet gmail-smtp-in.l.google.com 25
telnet smtp-mail.outlook.com 25
```



- LEARN records and zones in linux only

![image](https://user-images.githubusercontent.com/31458531/191730102-63ccb7f6-fa78-44df-b67a-5aa3e0a9cac4.png)

we include above file in below file:

![image](https://user-images.githubusercontent.com/31458531/191729935-c7d1d5c2-8891-4e07-8af7-99849286252e.png)


- thunderbird: connection example

![image](https://user-images.githubusercontent.com/31458531/191748166-3036c471-6410-4d0b-be0d-ffc1f7511eae.png)

![image](https://user-images.githubusercontent.com/31458531/191748483-62e7e418-cdcb-4d67-8174-e1878c09a885.png)


- why outbound port is blocked by isp's?

![image](https://user-images.githubusercontent.com/31458531/191831981-3690261e-eace-4aea-9490-679f8452097c.png)


## ZOHO doens't support freenom domains

![image](https://user-images.githubusercontent.com/31458531/191964908-9ec5acab-a576-446c-8162-5322cd843603.png)


## MORE TEXT NOTES:

```txt
# FILE: sahil.txt
# AWESME BEST GUY ON EARTH FOR THIS WORK:
https://youtu.be/HPV1hJsRud0
# FROM POSTFIX's INSTALLATION:

If you need to make changes, edit /etc/postfix/main.cf (and others) as
needed.  To view Postfix configuration values, see postconf(1).

After modifying main.cf, be sure to run 'service postfix reload'.


# POSTFIX SETUP
sudo apt install postfix
systemctl restart postfix
systemctl enable postfix

# FYI: Using below command install postfix as well as other useful utils:
sudo apt-get install mailutils

# CONFIGURATION: Internet Site: mailer.pinlife.ml
# In case you want to reconfigure postfix, you can run command: dpkg-reconfigure postfix

# TO REMOVE POSTFIX COMPLETELY:
sudo apt purge postfix


# INSTALL DOVECOT; https://tecadmin.net/install-dovecot-on-debian-10/
sudo apt install dovecot-core dovecot-imapd dovecot-pop3d
# EDITING CONFIG FILE
sudo vi /etc/dovecot/dovecot.conf # AND WE UNCOMENT AND EDIT BELOW LINES IN THE FILE
# listen = *
# NOW EDITING AUTH IN DOVECOT CONFIG
sudo vi /etc/dovecot/conf.d/10-auth.conf # AND UNCOMMENT AND EDIT BELOW LINES IN THE FILE
# disable_plaintext_auth = no
# auth_mechanisms = plain login
# NOW EDIT MAIL IN DOVECOT CONFIG
sudo vi /etc/dovecot/conf.d/10-mail.conf # AND EDIT BELOW LINE IN THE FILE (add /spool/ path in the mid of mail_location path): 
# mail_location = mbox:~/mail:INBOX=/var/spool/mail/%u
# mail_privileged_group = mail


# CHECK IF DOVECOT SERVICES ARE RUNNNING I.E, AT PORT 110 AND PORT 143
netstat -antp | grep -e 110 -e 143
# SINCE I AM USING SECURED WITH TLS SO 143 -> 993 AND 110 -> 995
netstat -antp | grep -e 993 -e 995
# FROM FILE: /etc/dovecot/conf.d/10-master.conf
# 995: POP3S listener
# 993: IMAPS (secure)
# LEARN: POP is a simple protocol that only allows downloading messages from your Inbox to your local computer. IMAP is much more advanced and allows the user to see all the folders on the mail server. 

# RESTART DOVECOT
sudo dovecot reload

# INSTALL SUIRELLMAIL
sudo apt-get install squirrelmail
# CONFIGURING SQUIRRELMAIL (TIMESTAMPED): https://youtu.be/HPV1hJsRud0?t=2779 

sudo vi /etc/mailname
# set it to `pinlife.ml`


# should i check alias option while addedin email to gmail??
https://support.google.com/a/answer/1710338?ctx=gmail&hl=en&authuser=0&visit_id=637993718093237247-1516550618&rd=1

# THIS PACKAGE IN NECESSARY to fix issue: `SASL authentication failure: No worthy mechs found`
sudo apt-get -y install libsasl2-modules


# DAY 3 LEARNING: # LEARN PORT 143 is necessary to open from the router to be able to use *imap*

## Installed squirrelmail on rasbian: https://askubuntu.com/a/1058945

# Install php and restart apache2
sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql
sudo a2enmod php5
sudo service apache2 restart 


### view your opened port and the respective process who have opnened them
sudo netstat -plant


#### interesting thing

# ON JIO'S HOTSTOP
$ cat /etc/resolv.conf
# Generated by NetworkManager
nameserver 192.168.43.213
nameserver 2409:4055:2:1272::c5

# ON CONNECT BROADBAND:
$ cat /etc/resolv.conf
# Generated by NetworkManager
nameserver 192.168.18.1
```

```txt
# FILE: setting-up-smtp.txt
sudo hostname postal.mynotifyservice.ddns.net
# hostname --help
# -f, --fqdn, --long         DNS host name or FQDN


# INSTALLING DOCKER ON raspberrypi
# SRC 1: https://www.simplilearn.com/tutorials/docker-tutorial/raspberry-pi-docker
# SRC 2: https://phoenixnap.com/kb/docker-on-raspberry-pi
# SRC 3: https://www.jfrog.com/connect/post/install-docker-compose-on-raspberry-pi/

# Update system
sudo apt-get update && sudo apt-get upgrade

# Download and run the docker installattion script
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Append a non-root user on the Docker group
sudo usermod -aG docker pi

# Check docker version
docker version
docker info
### FYI: docker version command didn't work as it said failed to connect to /var/.... socker, so i ran those commands => systemctl restart systemd-networkd.service; systemctl start docker.service; sudo systemctl reboot

# Run sample hello-world in docker
docker run hello-world

# Remove hello world
docker image rm hello-world

# enable to be docker service to be run start
sudo systemctl enable docker


# Install docker-compose
sudo pip3 install docker-compose


## install some utils
sudo apt install git curl jq

#### install `postal`
# clone to /opt/postal/install
git clone https://postalserver.io/start/install /opt/postal/install
# link the binary `postal` to /usr/bin
sudo ln -s /opt/postal/install/bin/postal /usr/bin/postal

# now you can use `postal` as cli tool though.


#  INSATLL DOCKER-COMPOSE
ARCH=$(uname -m) && [[ "${ARCH}" == "armv7l" ]] && ARCH="armv7"
sudo mkdir -p /usr/local/lib/docker/cli-plugins
sudo curl -SL "https://github.com/docker/compose/releases/latest/download/docker-compose-linux-${ARCH}" -o /usr/local/lib/docker/cli-plugins/docker-compose
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
# Make a soft link of `docker-compose` to /usr/bin directory
sudo ln -s /usr/local/lib/docker/cli-plugins/docker-compose /usr/bin/docker-compose
# verify installation
docker compose version


## run mariadb and rabbitmq containers ##


##### setting domain with postal
postal bootstrap postal.mynotifyservice.ddns.net

# Setup
postal initialize
postal make-user

# credentials to login to postal
admin@sahilrajput.ml
Sahil Rajput
postalpostal

# start postal (it will start a number of containers, which you can check via command: `postal status`)
postal start
```
