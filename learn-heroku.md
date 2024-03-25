# Learn Heroku Deployment

**Quick Links:**
- Learn deployment: [Click here](learn-deploy.md)

## Heroku Pricing

Plan | Eco | Basic
-|-|-|
RAM | 512 MB | 512 MB
**Price** | 5$/month (₹420) | **7$/month (₹580)**
**Remarks** | Offers 1000 Eco Dyno Hours i.e, if you have one app that can easily run for 31 days i.e, 31days * 24h = 744h. | No Limits


Others:
- DOCS: The Process Model: [Click here](https://devcenter.heroku.com/articles/process-model)
- StackOverflow: What is the difference between Process Types and Dynos in Heroku: [Click here](https://stackoverflow.com/questions/46546275/what-is-the-difference-between-process-types-and-dynos-in-heroku)


## 🚀🚀 Process type in `Procfile`?

**What is process type in heroku?**

(Source of below image - **📖 Article - Procfile**: [Click here](https://devcenter.heroku.com/articles/procfile))

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/5bc9c149-8a8e-448a-a53f-67fa46d69017" />

## Scaling

(Source of below image - 📖 Article - **Dyno Types:** [Click here](https://devcenter.heroku.com/articles/dyno-types))

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/c1693531-11a3-4f3e-9f8c-cd6944254d07)

## Why Heroku?

**Sample `Procfile`s:**
- [learn-websockets/chat-app](https://github.com/sahilrajput03/learn-websockets/blob/main/learn-socket.io/chat-app/Procfile)
- [video-chat-app-webrtc](https://github.com/sahilrajput03/video-chat-app-webrtc/blob/hash-router/Procfile)

Heroku provides https enabled backend server in no time which is too good for no-budget apps testing. You can create as many applications as you want with the condition that you can have only 5 apps in one account and you can create infinite heroku accounts with `emailId+1@email.com` hack. Yo!

You can serve a nested folder project in heroku using a custom `build-pack` as well. Find it working @ [video-chat-app-webrtc](https://github.com/sahilrajput03/video-chat-app-webrtc/tree/hash-router#guide-to-publish-a-nested-project-folder-serving-to-heroku) and also @ [sahilrajput03/learn-websockets](https://github.com/sahilrajput03/learn-websockets/tree/main)
- simply use your bash function:
  ```bash
  heroku.setSubDirectoryBuildpack mySubdirectoryHere
  # It is an alias, find about it @ https://github.com/sahilrajput03/config/blob/main/.bash_functions#L319-L325
  ```

Heroku has database as a service as well. [Check here](https://www.heroku.com/postgres).

See my command list @ [Gist](https://gist.github.com/sahilrajput03/c44778f281e5f9856827e7c0f264ffa5).

TEKENA's way of deploying a nested folder: ![image](https://user-images.githubusercontent.com/31458531/183259528-7911885a-a66c-4432-9c0d-de0a7a4d68d9.png)

- Why you should use `heroku local` command to test `Procfile` command?

![image](https://user-images.githubusercontent.com/31458531/187038465-49871dd9-43a5-429f-bf53-88d8433234e5.png)
