# Deployment - Todo: move this doc to a new google doc

**Quick Links:**

- Learn Vercel Deployment: [Click here](learn-vercel.md)
- Learn Heroku Deployment: [Click here](./learn-heroku.md)
- ❤️ Google Doc - Hosting Charges - Backend & Databases (mongodb, etc): [Click here](https://docs.google.com/document/d/1Mzfe1j8GS4IQZRjzDZeDW4pMV8zX6ysj2wK7oteEJjQ/edit?usp=sharing)
- [fly.io](https://fly.io/)

## Managing live traffic handling in akamai or any other linux

Make use of two cloned repos and run the server in one directory --- and when you need to update the code to new code you can simply pull code in the second repo try running the second server and if that runs without issues (e.g, not yet installed new dependencies, or any other compiling issues). When you're ready and confident that new code works in the second folder you can simply stop the server from first folder and start from second folder. That's it!

You can also check "NGINX Failover with Backup Server" from ChatGPT: [Click here](https://chatgpt.com/c/67ab3cf5-4d44-8007-8a2e-e9e0a20e543a)

## ❤️ Monorepo vs. Polyrepo, Why to have separate backend-frontend npm projects instead of a single npm project for frontend-backend

⭐⭐ Google Document - [Click here](https://docs.google.com/document/d/15PieWH56pzC5Uh7WlCZit4nGOqfetmGi1aNqlmLymh4/edit?tab=t.0)

## ❤️ Monolith vs. Microservice architecture

### What is monolith architecture? Be concise and give ex. (ChatGPT)

Monolith architecture is a software design where all components (UI, business logic, and database access) are integrated into a single, unified application. It operates as one cohesive unit, making it simpler to develop and deploy initially but harder to scale and modify over time.

**Example:** A traditional e-commerce application where user authentication, product catalog, payment processing, and order management are all part of a single codebase and deployed together.

### What is Microservice architecture? (ChatGPT)

Microservice architecture is a software design pattern where an application is broken into small, independent services, each responsible for a specific function. These services communicate through APIs, enabling flexibility, scalability, and independent deployment.

**Example:** An e-commerce system where:

- Authentication Service handles user login.
- Product Service manages the catalog.
- Payment Service processes payments.
- Order Service handles order placement.
- Each service operates independently and can be developed or scaled separately.

## Alibabacloud's own website is not working well LOL

<img src="https://github.com/user-attachments/assets/9f5e116d-bc03-4658-bfec-a2bb422ae156" alt="drawing" width="600"/>

## Cloudflare

- cloudflare american company that serves google, microsoft.
- Cloudflare for backend server?
  - tldr; **No**
    <img src="https://github.com/user-attachments/assets/e5470430-012a-405c-a304-4f26b7a37ca3" alt="drawing" width="600"/>

## What is ttl and should i set lower ttl value so my domain update dns record values faster? Be concise.

TTL (Time-to-Live) in DNS specifies how long a DNS record is cached by a resolver before refreshing. It's measured in seconds.

Setting a lower TTL (e.g., 300 seconds) allows DNS updates to propagate faster, which is useful for dynamic changes. However, it can increase DNS query traffic and load on your server.

**Recommendation:**

Use low TTL (e.g., 300s) temporarily when planning updates.
Switch back to higher TTL (e.g., 3600s or more) for stability and efficiency after the changes are complete.

## Listing my website sahilrajput.com on Google Search Engine

Tags: #sahilrajput.com, #search, #google search console

[Click here](https://docs.google.com/document/d/18ci6kbQse3vwl3OoIXLee1ACkHNwN1Bj03l3Zs2PVtI/edit#heading=h.tic0f082m2l9)

## Noip, tunnel, etc - Jio Fiber

Reddit Post: [Click here](https://www.reddit.com/r/india/comments/dwrn33/port_forwarding_in_jio_fiber_router/)

## Slas\*er is delpoyed on cloudflare Pages

[Click here](https://pages.cloudflare.com/)

## Port forward with router

Thats how I have configured some port and port ranges on my system.

![image](https://user-images.githubusercontent.com/31458531/187068589-0e04dab6-ad22-4410-b7aa-6a05704fc292.png)

## Github Pages

Add below `A records` for your custom domain dns setting in your domain provider panel.

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### github pages A records for `namecheap`

- **Docs - How can I set up an A (address) record for my domain?: [Click here](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/)**

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/12213b15-88e9-487d-8d2a-e3f1028ff6fe)

# Dns Settings

I have ports 80, 8080, 3000-to-3010 mapped to my linux machine currently. Also for pi I have mapped port 22.

FYI: Every ddns [domain expires in 30 days](https://www.noip.com/support/knowledgebase/why-is-my-hostname-missing-or-deleted-what-do-i-do/).

http://master61.ddns.net points to my `public ip` using https://www.noip.com/ service.

**_I registered http://master61.ddns.net on 26 April, 2022 most probably or on next day._**

DDNS is only available for `A records` not `CNAME records`.

For domains:

http://wwww.servicelife.ml, http://wwww.fixedlife.ml, http://wwww.lostlife.ml I DNS settings as:

| Name | Type  | TTL  | Target            |
| ---- | ----- | ---- | ----------------- |
| www  | CNAME | 3600 | master61.ddns.net |

And that maps all ports, i.e., if I have port mapped 80, 3001, 3002 and so on.., on via my router to some local machine then I would be able to access all these ports via each of these sites i.e., @ http://wwww.servicelife.ml:3001, http://wwww.fixedlife.ml:3001, http://wwww.lostlife.ml:3001. For port 80 we don't need to specify the port at all. [Source](https://webmasters.stackexchange.com/a/27013).

**NOTE:** You won't be able to acces via root level domain though, coz thats not possbile. For more info read "You cannot set cname for root level domain i.e., ..." from "Oher DNS records related information" section.

## Oher DNS records related information

- You cannot set cname for root level domain, i.e., youcan only set for some subdomain only i.e., `www`. [Src 1](https://superuser.com/a/264914/776589), [Src 2](https://serverfault.com/a/55545).
- what is dns cname - i.e., https://www.cloudflare.com/en-in/learning/dns/dns-records/dns-cname-record/

- **For https, make sure you have opened 443 port via your browser.**
  - For http protocol, port 80 is default port.
  - For https protocol, port 443 is default port.

## Getting ssl certificate setup with express

❤️For working example of below generated certificated, [you can check here](https://github.com/sahilrajput03/https-using-certbot).

Quick Links:

- Certbot is powered by [LetsEncrypt](https://letsencrypt.org/getting-started/).
- Another fee ssl provider for lifetime is [sslforfree.com](https://www.sslforfree.com/)
- **Q. How many ssl certificates can I produce using `certbot`:**
  - _Ans:_ No Limit (or atleast enough for [personal use](<https://letsencrypt.org/docs/rate-limits/#:~:text=The%20main%20limit%20is%20Certificates,Domain%20(50%20per%20week).>))
- **Q. Why doesn't my domain doesn’t work without ‘www.’?**
  - _Ans:_ You can't use `CNAME` record but `A` record to resolve the issue. [Reference from FREENOM Docs - Click here](https://my.freenom.com/knowledgebase.php?action=displayarticle&id=40)

**Generating SSL Certificates:**

**Note: Below generated certificate is valid for 90 days and you can renew the certificate manually or you can set it to auto update using [their own solution for that as guided here](https://certbot.org/renewal-setup). Check above src in the code to find how to setup autonew ssl certificates.**

```bash
# src: https://archlinux.org/packages/community/any/certbot/
pacman -S certbot

# ⚠️ ⚠️ Before following any of the following ways:
#    1. Make sure you stop nginx before running certbot because
#           certbot needs to host files momentarily on port 80 to verify the
#           domain and you can do this by running - `systemctl stop nginx`.
#           Also, ensure that no other app is listening on port 80 as well.
#     2. Make sure you have mapped your desired domains to this machine,
#           either using a DDNS domain or (although untested) by setting a
#           direct A record pointing to your public IP.

# ******* USAGE *******
# ✅ WAY 1: Non interactive way:
#     1. In below command `--no-eff-email` is to supress confirmation
#           of this prompt - https://github.com/certbot/certbot/issues/9462
sudo certbot certonly --standalone --email sahilrajput03@gmail.com --agree-tos --no-eff-email -d api.mypot.in -d api-staging.mypot.in
# Note: I included more domains to existing ssl certificate files simply by running below command:
sudo certbot certonly --standalone --email sahilrajput03@gmail.com --agree-tos --no-eff-email -d api.mypot.in -d api-staging.mypot.in -d mypot.in -d staging.mypot.in -d webhook.mypot.in -d dev.mypot.in -d api-dev.mypot.in -d chii.mypot.in -d ai.mypot.in
# 🎉 Note: I tried to generate wildcard domains handling but failed -- though I instantly reliased this is not what I actually want because I might want to utilise certain subdomains for other usage in future.


# ✅ WAY 2: Use interactive way:
sudo certbot certonly --standalone
# src: Official certbot Docs: https://certbot.eff.org/instructions?ws=other&os=arch

##### Generating combined files for multipe domains: When asked for multiple domains you can enter below line(without hash obviously):
# www.servicelife.ml www.fixedlife.ml www.lostlife.ml
# Now all below should have valid certificates coz above generated files will have certificates for all these domains:
# https://www.servicelife.ml/
# https://www.lostlife.ml/
# https://www.fixedlife.ml/
```

Sample Usage with screenshot 1:
![image](https://user-images.githubusercontent.com/31458531/165331369-51cf0fee-7195-4fda-8998-6b314325885f.png)

Sample Usage with screenshot 2:
![image](https://github.com/user-attachments/assets/7c0b2181-04ae-4174-b24a-e451babafab8)


## What is DDNS ?

DDNS: Dynamic DNS for updating public ip via router's firmware feature or using some software on system that updates the ip for the domain. Read from [Google's support article](https://support.google.com/domains/answer/6147083?hl=en).

I can setup my noip's domain account to be in sync with my current public ip via DDNS (Dynamic DNS) settion via router settings and its available via my router. Yo!

**FYI: I tracked the http requests via browser to change the `A record` and pruned them (works 100%) and [saved them in a repository - Freenom DDNS](https://github.com/sahilrajput03/freenom-ddns).**

Amazing video, below screenshot is from by no-ip's: https://youtu.be/EH8wJt81bqg

![image](https://user-images.githubusercontent.com/31458531/165350198-cc90362c-b29f-4263-ac13-72b4fb5df0fb.png)

Amazing(This way of updating works really awesome i.e., the ip address is updated on the start of the router i.e., whenever the ip changes).

## DDNS function works AWESOME!!

_From my current router firmware vvv_

- Step1:

![image](https://user-images.githubusercontent.com/31458531/165350301-4819b341-4e3a-4653-9429-cf559d50ab1f.png)

- Step2:

![image](https://user-images.githubusercontent.com/31458531/187069595-d8a1fbd2-cea8-44de-bd6e-f8165ca0941d.png)

## Setup free dns service with [http://www.cloudns.net](http://www.cloudns.net)

- Credentials in keypass
- Important: Cloudns **one account allows for one domain management only** but its real good dns service!
- **_Accounts:domains list: sr03:pintak22.ml, sr03+1:wastelife.ml and sr03+2:servicelife.ml_**

**Source (Please check if the nameservers have changed? It took me complete day to find out that it has been changed recently):** https://www.cloudns.net/wiki/article/355/

Amazing guy helped: Using cloudns and attaching domain with nameservers(time-stamped): [@youtube-hatsoff](https://youtu.be/yMMCxdQHQDo?t=189)

```
# Add below ns (nameserver) records to BOTH YOUR FREENOM nameservers and to cloudns's zone nameservers(they are there by default at the time of creation of MASTER DNS zone, you must have consistent nameservers in both the places else the domain records **won't work**):
ns41.cloudns.net
ns42.cloudns.net
ns43.cloudns.net
ns44.cloudns.net

### (^^ above should work for newer accounts though) FYI: For my older account (sr03@gmail.com on cloudns) having dns for domain `pintak22.ml`, ^^ above new nameservers are not available so I have to use old nameservers only that are available for that account which are shown as below. I came to know about this after talking to "Live Chat" service from cloudns.net agent only (the service and experience is really great for free accounts as well as I observerd).
ns101.cloudns.net
ns102.cloudns.net
ns103.cloudns.net
ns104.cloudns.net
```

**Chat to cloudns service suppport?**

Simply go to this url @ [https://www.cloudns.net/livechat/](https://www.cloudns.net/livechat/). You can go to this page by clicking on "Online - Live Chat" box in the bottom right of the cloudns website easily.

- https://cdnify.com/blog/10-best-free-dns-hosting-providers/

- An ideal dns records for any site (coz this will work for all the dynamic subdomain handling as well) :

**In the below screenshot dns settings we can use see the wildcard subdomain of `CNAME record` type (i.e. `*.fixedlife.ml`) BUT you may use an `A record` (_also shown how to do that in later screenshots and we'll also setup DDNS url to get the IP address updated automatically using cron_) instead if you want to map an ip to the domain instead of `master61.ddns.net`.**

BELOW IMAGE DNS RECORDS WORKS 100% AS EXPECTED.

**For freenom nameserver-**

![image](https://user-images.githubusercontent.com/31458531/165990542-2101937b-8b0e-496d-adbd-6d5328b82b93.png)

**For dns records @ `cloudns.net`-**

![image](https://user-images.githubusercontent.com/31458531/165983580-80185d4a-a2d7-46de-9116-9b5eaa0fe754.png)

**In above screenshot, 4 nameserver should only be created like shown below. They are only required for root domain only.**

![image](https://user-images.githubusercontent.com/31458531/165983634-73126e55-f973-4226-a1ba-08a5011751b7.png)

**A redirect for root level domain so it always goes to www path along with path supplied -**

![image](https://user-images.githubusercontent.com/31458531/165983951-12ea3503-8a2d-418e-ab73-9095b7d8857a.png)

**A wildcard `CNAME record` to handle all the subdomains by ourself in the server -**

![image](https://user-images.githubusercontent.com/31458531/165984065-edd3712e-e42b-4f8c-9c9d-89ea07e29acc.png)

**ALSO: We can use `A record` for wildcard entry to handle all the subdomains by ourself in the server (DIRECT IP ADDRESS, we'll update this using cloudns's ddns url service) -**

**_ALERT: Use only one of `A record` or `CNAME record` to handle the wildcard subdomain entry._**

![image](https://user-images.githubusercontent.com/31458531/165985364-8dedf83e-d62f-4643-9ac9-dd2f92f3ac5e.png)

**Q. But how would we ensure that public ip is always in sync with my real public ip ?**

> **Ans. We can do setup ddns service by clicking that button to get the DDNS url which we can call each hour using crontab to update our public ip address to the `A record`-**

![image](https://user-images.githubusercontent.com/31458531/165985124-765453ad-e761-41b2-aa62-c6230b92f92f.png)

## For direct freenom domain to CNAME (master61.ddns.net)

You can use `CNAME` like below \*\*(disadvantage is we can't redirect top level domain and we can't use wildcard subdomains for redirection as well as we used with `cloudns`).

![image](https://user-images.githubusercontent.com/31458531/165908790-4f8b28f7-ae5e-4dea-935e-7e270e34e168.png)

**This is great site for checking current dns setting of a domain:** https://www.dns.computer/check/pintak22.ml .

**Dynamic dns for cloudns**: To be done so that i may update my `A record` to point to my public ip directly using their ddns service (INSTEAD of current setup i.e, using cloudns's domain as cname for each of the domain I have) leveragin @ https://www.cloudns.net/wiki/article/36/

## Fyi freenom domains work good with pwa install popups ?

Yes, absolutely. The key thing is that you must know how to debug pwa Installer Popup with lighthouse and fulfill those requirements. The thing I was haivng issue on this day(1 June, 2022) is that I was not adding a service worker to the app and that was necessary to get Installer Popup work as informed by the Lighthouse debugging in chrome devtools.
![image](https://user-images.githubusercontent.com/31458531/171352768-5a66dea9-270e-4056-b4b6-481c937eb510.png)
