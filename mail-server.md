# cool

![image](https://user-images.githubusercontent.com/31458531/191476048-e6f945da-d749-4c1f-a94e-c3b1688f54b2.png)

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

Source: https://serverfault.com/questions/585503/postfix-connection-timed-out-on-all-outbound-email

```bash
# compare outpus of below two commands:
sudo traceroute -n -T -p 27 gmail-smtp-in.l.google.com
sudo traceroute -n -T -p 80 gmail-smtp-in.l.google.com

```
