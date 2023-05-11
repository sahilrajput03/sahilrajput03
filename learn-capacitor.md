# Learn capacitor

## Connect to adb over wifi

Source: [Click here](https://help.famoco.com/developers/dev-env/adb-over-wifi/)

```bash
# You need to open "adb wifi" application on mobile and mobile's ip address with
# port 5555 (you an find same address in "adb wifi" application too):
adb connect 192.168.18.4:5555
```

## Disable overscroll stretch/bouncy effect

[Click here](https://github.com/ionic-team/capacitor/issues/5384#issuecomment-1522580122)


## Build a debug apk

Open project in andoid studio by `npx open android` and run `Build` > Build Bundle(s) / APK(s) > Build APK(s). Then file will be generate @ path `./android/app/build/outputs/apk/debug/app-debug.apk`


## Security Best Practises - Capacitor

Official Docs: [Click here](https://capacitorjs.com/docs/guides/security)

## Capacitor does used PRIVATE_MODE while storing data for the application

Source: [Click here](https://github.com/ionic-team/capacitor-plugins/blob/main/preferences/android/src/main/java/com/capacitorjs/plugins/preferences/Preferences.java#L17)

![image](https://user-images.githubusercontent.com/31458531/236380156-b5912405-7451-4e73-85da-cc9642bc0dbb.png)


## Shared Preference
- Capacitor Docs - Data Storage in Capacitor: [Click here](https://capacitorjs.com/docs/guides/storage)
- Android Docs - [Click here](https://source.android.com/docs/security/app-sandbox) *(applications store data and have them owner by the process id)*
- Android Docs: Save simple data with SharedPreferences: [Click here](https://developer.android.com/training/data-storage/shared-preferences)
- A question posted by Eric - [Click here](https://github.com/ionic-team/capacitor/discussions/6565)

## How to store data in secure way in android application?

![image](https://user-images.githubusercontent.com/31458531/236354294-6f5aa505-cf49-4f21-a327-f6afce98c743.png)

