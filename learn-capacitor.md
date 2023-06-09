# Learn capacitor

Quick Links:
- Helpful Youtube video for capacitor: Creating Capacitor Local Notifications with Sound, Icons & Action Buttons: [Click here](https://www.youtube.com/watch?v=bww4a4B43tM)

## Deeplinking not working on ios OR subdomain deeplinking not working in IOS

[Click here](https://www.donotreact.ml/jfolschinsky/about)

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

