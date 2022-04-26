# Deployment

## Github Pages

Add below `A records` for your custom domain dns setting in your domain provider panel.

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## Heroku

Why heroku?

Heroku provides https enabled backend server in no time which is too good for no-budget apps testing. You can create as many applications as you want with the condition that you can have only 5 apps in one account and you can create infinite heroku accounts with `emailId+1@email.com` hack. Yo!

You can serve a nested folder project in heroku using a custom `build-pack` as well. Find it working @ [video-chat-app-webrtc](https://github.com/sahilrajput03/video-chat-app-webrtc/tree/hash-router#guide-to-publish-a-nested-project-folder-serving-to-heroku)

Heroku has database as a service as well. [Check here](https://www.heroku.com/postgres).

See my command list @ [Gist](https://gist.github.com/sahilrajput03/c44778f281e5f9856827e7c0f264ffa5).

# Dns Settings

I have ports 80, 8080, 3000-to-3010 mapped to my linux machine currently. Also for pi I have mapped port 22.

http://master61.ddns.net points to my `public ip` using https://www.noip.com/ service.

For domains:

http://wwww.servicelife.ml, http://wwww.fixedlife.ml, http://wwww.lostlife.ml I DNS settings as:

| Name | Type | TTL | Target |
| ---- | ---- | --- | ------ |
| www | CNAME | 3600 | master61.ddns.net |

And that maps all ports, i.e., if I have port mapped 80, 3001, 3002 and so on.., on via my router to some local machine then I would be able to access all these ports via each of these sites i.e., @ http://wwww.servicelife.ml:3001, http://wwww.fixedlife.ml:3001, http://wwww.lostlife.ml:3001. For port 80 we don't need to specify the port at all. [Source](https://webmasters.stackexchange.com/a/27013).

**NOTE:** You won't be able to acces via root level domain though, coz thats not possbile. For more info read "You cannot set cname for root level domain i.e., ..." from "Oher DNS records related information" section.



## Oher DNS records related information

- You cannot set cname for root level domain, i.e., youcan only set for some subdomain only i.e., www. src: https://superuser.com/a/264914/776589
- what is dns cname - i.e., https://www.cloudflare.com/en-in/learning/dns/dns-records/dns-cname-record/

- **For https, make sure you have opened 443 port via your browser.**
  - For http protocol, port 80 is default port.
  - For https protocol, port 443 is default port.

## Getting ssl certificate setup with express

For working example of below generated certificated, [you can check here](https://github.com/sahilrajput03/https-using-certbot).

```bash
# src: https://archlinux.org/packages/community/any/certbot/
pacman -S certbot

# Usage
# NOTE1: Make sure that you have mapped your desired domains to current machine via ddns domain (or <have'n tried this way though> direct A record to your public ip)
# NOTE2: Make sure no app is running at port 80 till the below certificate generation process is complete.
sudo certbot certonly --standalone
# src: Official certbot Docs: https://certbot.eff.org/instructions?ws=other&os=arch

##### Generating combined files for multipe domains: When asked for multiple domains you can enter below line(without hash obviously):
# www.servicelife.ml www.fixedlife.ml www.lostlife.ml
# Now all below should have valid certificates coz above generated files will have certificates for all these domains:
# https://www.servicelife.ml/
# https://www.lostlife.ml/
# https://www.fixedlife.ml/
```

![image](https://user-images.githubusercontent.com/31458531/165331369-51cf0fee-7195-4fda-8998-6b314325885f.png)

Above certificate is valid for 90 days and you can renew the certificate manually or you can set it to auto update using their own solution for that. Check above src in the code to find how to setup autonew ssl certificates.

Fyi: Certbot is powered by [LetsEncrypt](https://letsencrypt.org/getting-started/).

Another fee ssl provider for lifetime is [sslforfree.com](https://www.sslforfree.com/)

**How many ssl certificates can I produce:** Short Answer: No Limit (or atleast enough for [personal use](https://letsencrypt.org/docs/rate-limits/#:~:text=The%20main%20limit%20is%20Certificates,Domain%20(50%20per%20week).))
