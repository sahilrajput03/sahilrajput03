# cool

from tutorial:

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
telnet alt4.gmail-smtp-in.l.google.com 25
telnet alt2.gmail-smtp-in.l.google.com 25
telnet alt3.gmail-smtp-in.l.google.com 25
telnet gmail-smtp-in.l.google.com 25
telnet alt1.gmail-smtp-in.l.google.com 25
```



- LEARN records and zones in linux only

![image](https://user-images.githubusercontent.com/31458531/191730102-63ccb7f6-fa78-44df-b67a-5aa3e0a9cac4.png)

we include above file in below file:

![image](https://user-images.githubusercontent.com/31458531/191729935-c7d1d5c2-8891-4e07-8af7-99849286252e.png)


- thunderbird: connection example

![image](https://user-images.githubusercontent.com/31458531/191748166-3036c471-6410-4d0b-be0d-ffc1f7511eae.png)
