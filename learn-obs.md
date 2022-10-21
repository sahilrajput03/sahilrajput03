# Readme

## mic working in obs but not in chrome? 🥰 ❣ 💓

Date: 21 Oct, 2022

The problem is your mic can only be used by one service a a time i.e, if you are using your mic in obs(i.e., you can see the spickes of meter) you need to free the mic from the obs and you can do it by exiting obs.

Also, if you are in situation that your mic is used by chrome and you are not able to use mic in obs, then you need to free the mic from chrome first. There are two ways to do this, i.e, either you change the mic in google meet in the settings of meet itself of you can simply close and the meet and restart obs and then you can re-open your google meet again.

## You need to connect obs to your google meet or any other video meeting?

***Note: Please use virtual camera with firefox only becoz virtual camera device doesn't show up in chrome/chromium browsers when connecting to list of camera devices for some reason you [can check here](https://github.com/umlaeute/v4l2loopback/issues/183).***

[Source](https://jonathanbossenger.com/2020/12/17/obs-studio-linux-virtual-camera/)

You can do it via virtucal camera, and its builtin obs itself you just need to presst that button:

**note: in case you press the button but it doesn't do anything then you simply need to execute this command: `obs.activateModprobeV4l2loopback` (which exectes `sudo modprobe v4l2loopback`)**

![image](https://user-images.githubusercontent.com/31458531/197187061-1de9775f-80bb-4741-8665-1a43f6bfc331.png)


## Noise Supression filter

Using multiple simple filters: [my youtube video](https://www.youtube.com/watch?v=jjRvPKiSyks&feature=youtu.be)

![image](https://user-images.githubusercontent.com/31458531/192278208-2733e422-19c9-4438-b0c6-7150a4e3be58.png)


## Video Settings

![image](https://user-images.githubusercontent.com/31458531/174532597-0fe33a0a-5fdc-4c53-961c-ee017f5f792a.png)

![image](https://user-images.githubusercontent.com/31458531/174532723-99a041cb-9db1-4b21-8cb6-7a816680a4c9.png)

## Using browser window in OBS directly

My Way (works good enough): Go to **Sources** section and add **Window Capture (X Composite)** and choose the browse window's name from there. Now that window will be tracked for updates. TIP: You can use `alt` as a modified while shrinking the edges and corners to actually crop the window. Yo!!

![image](https://user-images.githubusercontent.com/31458531/176380867-ade00787-fc98-400b-8602-0dad0c3a057d.png)

*Another way: Viewing Browser in window: https://youtu.be/ceHqlHBTI4w*
