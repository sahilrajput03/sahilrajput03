# Send in blue for custom email domain

- Where did I find sendinblue? [Click here](https://www.wpoven.com/blog/free-smtp-servers-sending-emails/)

- Adding Domain: https://youtu.be/b1a6lN2UwCY

- **Api looks cool as well:**

![image](https://user-images.githubusercontent.com/31458531/194028795-b37ca069-cc3c-43c2-9b32-e43b8856afb3.png)

- Checking if you are receiving request on pi server?

```bash
telnet mailer.sahilrajput.ml 25
# To close the request use: ctrl+] quit 
```

- How do I create a new user `hi` so that I can receive mails at `hi@sahilrajput.ml` ?

[Source1](https://stackoverflow.com/a/29737950/10012446), [Source2](https://www.serverwatch.com/guides/adding-users-and-aliases-for-postfix/)

tldr; Simply add a new user to linux system and postfix will handle rest. yo!!
