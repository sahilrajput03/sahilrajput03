# Learn Capacitor

**Quick Links:**
- **Learn Android:** [Click here](https://github.com/sahilrajput03/learning_android/blob/main/Readme.md)
- **Learn Google Play Console:** [Click here](learn-playconsole.md)

**Capacitor Docs, Issues:**
- TODO: PWA - Capacitor First Class Support: [Click here](https://capacitorjs.com/docs/web/progressive-web-apps)
- Helpful Youtube video for capacitor: Creating Capacitor Local Notifications with Sound, Icons & Action Buttons: [Click here](https://www.youtube.com/watch?v=bww4a4B43tM)

## Auto signing after app install issue?

Resource: [1](https://stackoverflow.com/questions/33169618/an-android-app-remembers-its-data-after-uninstall-and-reinstall/33176898#33176898), [2](https://stackoverflow.com/questions/35517239/sharedpreferences-are-not-being-cleared-when-i-uninstall/35517411#35517411)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/9c80d769-e397-49fe-8e36-2d82f789bc8a)

## Is `deviceToken` change on each firebase setup for e.g., on login event on client app?

ANOTHER Noting: My phone remembers the `deviceToken` no matter how many times logout/login is performed and each time `deviceToken` is accessible when signin is performed.

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/64feaf2e-7d34-4287-8efc-fc9f706181ff)

## SharedPreferences vs. `Cookies` usage in capacitor app

- Should we use `Cookies` in capacitor native app OR
- Should we use `SharedPrefernces` when we want to maintain persistent data for apps?

**Issue faced in xxxxx-capacitor-app?**

Q. Why logged-in session is persisted after signout action (clearing Cookies and SharedPreferences?

So what I came up with some 6+ hours of testing and debugging this loggedin-session persists issue is this -
that, the browser session used by capacitor environment in the mobile isn’t woring the way actualy browser work with Cookies api (or may be Capacitor team has tweaked that on purpose). And this resulted in Cookies being persisted in some cases like 1 in 7 cases further resulting in persisted user-session. So the only solution left was to opt out of using Cookies for native platform and using SharedPreferences without caching layer of Cookies like we were using before. This fixed the issue completely. **Cons?** Is SharedPrefernces slower now as compared to previousl approach? I personally think it has no effect on performace and to dig out deeper I found this StackOverflow answer talking about the read speed of same -  Read speed of SharedPreferences . The accepted answer says like that:

They are in memory, after the first reference. The first time you retrieve a specific SharedPreferences (e.g., PreferenceManager.getDefaultSharedPreferences()), the data is loaded from disk, and kept around.

## WORKING ❤️ WAY ❤️ OF producing the signed apk

NOTE: Why to use android studio and **not** capacitor CLI to build a signed APK? Because - It gives error when the APK is installed on android - "App is not installed." 

1. Run `npm run build` in project
2. Run `Build > Clean Project`.
3. Run `Build > Signed Bundle / APK...` and continue with as required.
4. APK/AAB will be generated at `/home/array/test/slasher/slasher-web-frontend/android/app/release`.

## Give developer permission to change app description and app screenshots

`Settings menu, select "Users & permissions" > Select the developer > Users & permissions > Store Listing > Edit store listing`

## Change countries access to the app

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/7cf42c8d-4930-4d34-83ff-c004e1978578)

## Updating Testers and allowing testers

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/7beac1fa-6610-406d-998d-37e0123aa643)

## Capacitor - Publishing to play console versions

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/90da8afc-3354-4af4-bf7e-b37c50f22eb1)

## Run capacitor app on a target device

```bash
npx cap run android --list
# INFO: Using static build for capacitor
# Name                                API      Target ID
# -------------------------------------------------------------------
# Redmi M2010J19SI                    API 29   192.168.18.4:5555
# Pixel 3 XL API 33 (emulator)        API 33   Pixel_3_XL_API_33
# Pixel_3a_API_33_x86_64 (emulator)   API 33   Pixel_3a_API_33_x86_64
# Pixel 4 API 33 (emulator)           API 33   Pixel_4_API_33

# Run on a target device
npx cap run android --target 192.168.18.4:5555

# For ease with live-reload or production build you can use below aliases in ~/.bashrc file:
capLiveReload_RedmiNote5
capProd_RedmiNote5
```

## Learn android studio - `emulator` cli

```bash
##### LEARN `emulator` cli
# List available AVDs
emulator -list-avds
# OUTPUT:
# Pixel_3_XL_API_33
# Pixel_3a_API_33_x86_64
# Pixel_4_API_33

# Run avd
emulator -avd Pixel_3a_API_33_x86_64
```

## Android 12+ splash screen

Youtube - [Click here](https://www.youtube.com/watch?v=4Dh09c_iWFU)

## Generate signed apks from capcitor commadn line

Source: Docs - `Capacitor CLI - cap build`: [Click here](https://capacitorjs.com/docs/cli/commands/build)

```bash
npx cap build [options] <platform>

# E.g, 
npx cap build android
# UNFORTUNATE OUTPUT IS -
# [error] Missing options. Please supply all options for android signing.
#         (Keystore Path, Keystore Password, Keystore Key Alias, Keystore Key, Password)
```

## Scripts to generate and install apk via gradle

```bash
# Get generated apk by capacitor's live-reload and static-build FROM ROOT DIRECTORY OF CAPACITOR PROJECT
alias cd.apkCapacitor='cd android/app/build/outputs/apk/debug/'
# You'll see file with name `app-debug.apk`
```

## You can view the running devices in android studio from here

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/54aae504-0c49-4f53-957f-1b74a9d5d4ba)

## Safe area take aways from slasher work

1. Safe area is by default shown in android (i.e,. no need to add more area to conver for the sideareas of the top notch).

```ts
import { StatusBar } from '@capacitor/status-bar';
// Display content under transparent status bar (Android only)
StatusBar.setOverlaysWebView({ overlay: false });
const topStatuBarBackgroundColorAndroidOnly = '000000';
StatusBar.setBackgroundColor({ color: topStatuBarBackgroundColorAndroidOnly });
```

  
2. Safe area in ios can be added by uisng options

```ts
// file: capacitor.config.ts
backgroundColor: '000000',
ios: {
  contentInset: 'automatic',
},
```

Capacitor config API Docs: [Click here](https://capacitorjs.com/docs/config)

## Deeplinking not working on ios OR subdomain deeplinking not working in IOS

- [1 - Deeplinking not working?](https://stackoverflow.com/questions/39181728/universal-links-deep-linking-not-working-on-iphone-but-works-on-ipad)
- [2 - Deeplinking not working on subdomain](https://stackoverflow.com/a/70975020)

## For deeplinking to work in android 12 and android 13 you must enabled the selected link if you are testing the app from non-playstore builds (i.e., development builds)

Source: [Click here](https://stackoverflow.com/a/72260741)

Also, "the apps installed from Google app store automatically has all the links selected."

## What to ensure before publishing app to android store or ios store?

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/a2facfd6-1c79-4360-a1ed-f2dd3f042507)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/cbadddcd-c33f-4cc7-93a2-18c9c069ae38)

## Get sample androidmanifest.xml files

[Click here](https://github.com/search?q=androidmanifest.xml+lang%3Axml+default_notification_icon&type=code)

## Setting up Deep Links

- Note: Deep Links works with both `live-reload` and `static-apk` build with capacitor cli usage.

**Capacitor Deep Link Docs:** [Click here](https://capacitorjs.com/docs/guides/deep-links#android-configuration)

Andoid Configuration: [Click here](https://capacitorjs.com/docs/guides/deep-links#android-configuration)

**Generating RSA using Android certificate:**

```bash
# NOTE: When generating the certificate it asks for 6-digit password (123456), person name, state, country, country-code.
# create a certificate
keytool -genkey -v -keystore my-release-key.keystore -alias ALIAS -keyalg RSA -keysize 2048 -validity 10000
# Output: Generates a file `my-release-key.keystore`
# NOTE You would need following details to generate the certificate:
# 1. Password - At least 6 digit
# 2. First name and last name
# 3. Name of organization Unit
# 4. Name of organization
# 5. Name of City or Locality
# 6. State or Province
# 7. Two letter country code


# get keystore details (sample password = 123456)
keytool -list -v -keystore my-release-key.keystore

# SHA256 Fingerprint:
B0:01:D7:CE:4C:FE:91:FF:B9:DE:96:36:22:01:44:49:A2:D3:78:F9:C7:0D:DC:BA:56:1E:8A:B7:AF:A2:78:27
```

1. Statement List Generator: https://developers.google.com/digital-asset-links/tools/generator
Use following details:
```txt
###### for testing ->> Hosting site domain: slasher-web-frontend.vercel.app
>>>> Hosting site domain: 
Package Name: cart.mywebsite.com
App package fingerprint (SHA256): ___

### IMPORTANT ### -> Save the generated statement in file `public/.well-known/assetlinks.json`.
# Note (wow!): hosting-site-domain is *not* used to generate `assetlinks.json` file data at all.
# So that means you never need to regenerate `assetlinks.json` data unless you change the app package name.
```
2. Update domain in `android/app/src/main/AndroidManifest.xml` file.

## Usnig custom notification icon and understanding mipmap, drawable, strings, colors, androidmanifest.xml

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/f7811d61-ca4b-4d8b-b4cc-588b7cd8cdda)

mipmap vs. drawabled:

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/e7d52682-58ca-4d7b-80e1-8f6e0154e549)

You can send notification to devices by:

- Firebase Console > Engage > Messaging > New campaign > Notifications. Now you need to add "Notification Title, Notification Text, Notification Image, Notification Name, etc" and then use `Send test message` to send the notification.

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/d488b7c1-19fe-48c1-ab8f-9a50cf14042a)

- Generating the notification icon:

Source: [Online servcie](https://romannurik.github.io/AndroidAssetStudio/icons-notification.html)

and then you can place the folder of the output the respective `res` directory in the android project. And now you just need to add below lines to `androidmanifest.xml` file:

```xml
<!-- Push Notification Icon -->
<meta-data android:name="com.google.firebase.messaging.default_notification_icon" android:resource="@drawable/ic_notification" />
<meta-data android:name="com.google.firebase.messaging.default_notification_color" android:resource="@color/primaryColor" />,
```

and also define the color in `colors.xml` file like that:

```xml
<?xml version='1.0' encoding='utf-8'?>
<resources>
    <color name="primaryColor">#ff1800</color>
</resources>
```

## Can we run a Capacitor PWA app offline?

Source: [Click here](https://stackoverflow.com/a/64215322)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/6e70a061-0d38-46df-b30b-13d7cc308b95)


## You can view Device Manager in Android Studio via this

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/b749dbbc-cefe-468f-9f3b-817f263d84e0)

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

