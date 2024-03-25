# Readme

# TODO - Output audio from obs to google meet

- **Google Search - VB CABLE For Linux:** [Click here](https://www.google.com/search?q=VB+CABLE+for+linux)
  - Reddit: Virtual Audio Cable For Ubuntu - [Click here](https://askubuntu.com/questions/633674/virtual-audio-cable-for-ubuntu)
  - Is there an alternative to having "virtual audio cables"?: [Click here](https://www.reddit.com/r/linux/comments/6fjo7k/is_there_an_alternative_to_having_virtual_audio/)
  - fuzzthepiguy: [Click here](https://fuzzthepiguy.tech/linux-cable/)
  - How to send audio from OBS to google meet?: [Click here](https://www.reddit.com/r/obs/comments/x4p6j6/how_to_send_audio_from_obs_to_google_meet/) (it is suggested to use [NDI](https://ndi.video/download-ndi-sdk/) ([for archlinux](https://www.google.com/search?q=ndi+archlinux)) - which sounds awesome as explained by the answerer)
    - Streaming phone's camera to OBS via NDI: [Click here](https://www.youtube.com/watch?v=cX8fo74m6nc)
  - FOR WINDOWS: Doing this in Windows | YouTube: [Click here](https://youtu.be/MT0ub3GUbds)

# Noise supression is awesome with USB Mic ❤️❤️

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/49b2b577-5ee3-427f-aa5b-ab8e87a9bcf9" width="700"/>

## Lastly I did on currentManjaro (9 July, 2023) in order to fix the Global Audio Device detection in OBS and sadly no result

[Click here](https://forum.manjaro.org/t/obs-studio-not-working-after-last-update/132445/27)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/440b3c66-0a93-4db1-81b0-5a6a548d7658)

## New video output bitrate set to 6000Kbps (original 2500Kbps)

Source: [Click here](https://youtu.be/wt-ac45JQaU)

Date: 9 March, 2023

![image](https://user-images.githubusercontent.com/31458531/224020169-4bec6fb4-787b-494a-8b44-80f33a056173.png)

## Weekend developers recording with alex

Learings:
- Make sure you have set maximum resolution for the output in obs for best quality recording.

## Capture from particular window for source in obs

tldr: Use Window Capture (Xcomposite) for adding sources.

[Click here](https://obsproject.com/kb/window-capture-sources)

## Seeing black screen in Skype when selected "Dummy Camera" i.e., virtual cam of obs?

Inspiration: [Click here](https://obsproject.com/forum/threads/solved-arch-linux-obs-virtual-camera-works-in-vlc-but-not-in-skype.152837/)

The problem is skype doesn't allow video resolution of 1920x1080 as you can [check here](https://learn.microsoft.com/en-us/skypeforbusiness/plan-your-deployment/clients-and-devices/video-resolutions). Thus you need to set the output resolution to **1080x720** in obs settings and boom it works now!

![image](https://user-images.githubusercontent.com/31458531/200127994-7b0c8907-062a-4d41-a583-80d69e2d065a.png)

![image](https://user-images.githubusercontent.com/31458531/200128854-8042447b-01ca-40e2-8d7c-c0d02c9026ab.png)

## Just in case when you click on "Start Virtual Camera" does't click at all?

**Simply:**
- try to run: `obs.activateModprobeV4l2loopback` command
- and if above doesn't fix then that means you need to logout and login and it shold work then for sure..

## Shortcuts for start/stop recording/virtual cam

![image](https://user-images.githubusercontent.com/31458531/200125597-54e2c11d-c9ac-4e11-a2b4-1bb166aeee5f.png)

Whats the size difference between two sizes? (tldr; the right one spans complete screen of my laptop) ??

![image](https://user-images.githubusercontent.com/31458531/200129159-f215e6df-c70a-4757-830a-fddb5ee1d544.png)


## Deactivating video (and audio?) source from obs

Source: [Click here](https://obsproject.com/forum/threads/disable-webcam-when-not-in-use.143110/post-582838)

Now I have three scene collections and switching between them is super amazing and the bug of mic detaching also works now.

![image](https://user-images.githubusercontent.com/31458531/200125057-3b0472a8-0a25-4df4-a840-a38048fdf523.png)

## Set Backlight Compensation to 2

![image](https://user-images.githubusercontent.com/31458531/200124332-ee2246a2-8574-4319-959b-49f11d1aa22b.png)

## Lock preview Option

This is helpful as it locks the elements in the preview, so it helps in accidentally moving elements accidentally in your preview area.

## Using zoom with obs virtual camera?

**NOTE - 🥰 ❣ 💓 ❥ 💑 💜 - IMPORTANT - IMPORTANT : "Switching scene collection" (see above topic: "Deactivating video (and audio?) source from obs") feature so its just easy to deactivate active camera and mic simply switching to "Empty" scene now.**

The thing you need to take care that zoom connects to mic first and then you open obs otherwise the zoom will not pick your mic. If for some reason the mic doesn't work in zoom you simply need to exit the meet, exit obs, re-enter the zoom meet, now start virtual camera of obs. Yikes! It works.!!

## Using google meet with virtual camera with firefox outputs a mirror image of your scrren image?

Problem: Google meet flips the camera video horizontally by default and when we use virtual camera of the obs-studio we see that the vidoe of the scren also suffers this., i.e., text is simply not readable.

**FIX:** You simply need to flip horizontally both your screen and the camera video (do it for both individually).

![image](https://user-images.githubusercontent.com/31458531/197192284-a82e843e-a6a7-4a89-abcd-939d15cb974f.png)

## mic working in obs but not in chrome? 🥰 ❣ 💓

Date: 21 Oct, 2022

The problem is your mic can only be used by one service a a time i.e, if you are using your mic in obs(i.e., you can see the spickes of meter) you need to free the mic from the obs and you can do it by exiting obs.

Also, if you are in situation that your mic is used by chrome and you are not able to use mic in obs, then you need to free the mic from chrome first. There are two ways to do this, i.e, either you change the mic in google meet in the settings of meet itself of you can simply close and the meet and restart obs and then you can re-open your google meet again.

## You need to connect obs to your google meet or any other video meeting? 🥰 ❣ 💓

![image](https://user-images.githubusercontent.com/31458531/197194173-61fb1603-b2ee-46df-8135-eea31c40e00e.png)

You have to use mic from the firefox directly and need to choose "dummy video" device for the camera, you!!

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
