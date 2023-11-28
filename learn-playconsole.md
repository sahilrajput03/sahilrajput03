# Learn Google Play Console

**Quick Links:**
- **Learn Android:** [Click here](https://github.com/sahilrajput03/learning_android/blob/main/Readme.md)
- **Learn Capacitor:** [Click here](learn-capacitor.md)

**Play Console Docs, Issues:**
- Set up an open, closed, or internal test \| **PlayConsole**: [Click here](https://support.google.com/googleplay/android-developer/answer/9845334) Amazing youtube video explanation about these three: [Click here](https://www.youtube.com/watch?v=AqFocbUV810&t=31s)
- Distribute app releases to specific countries: [Click here](https://support.google.com/googleplay/android-developer/answer/7550024?hl=en)
- Issue - **Google Play Alpha: App not available for this account:** [Click here](https://stackoverflow.com/questions/59090859/google-play-alpha-app-not-available-for-this-account)

**PlayStore notes:**
- Country availability is changed across all tracks.
- There are some monetization and country availability exceptions for internal tests. For details, go to the section on setting up an internal test.
- Paid apps: If you’re testing a paid app using an open or closed test, testers still need to purchase it. If you’re testing a paid app using an internal test, testers can install your app for free.

## Initial Play Console App publishing to *Production*

**First time review time taken by Play Console?**

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/81390e04-a327-4e71-8c22-d19b76971a2b" width="600" ></img>

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/5b6fed9c-2639-4f01-b3df-26231f468002" width="300" ></img>

- **User Data Collection - Play Console:** [Click here](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en#types&zippy=%2Cdata-types)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/257cac4f-b4d6-42f2-8e74-983b973fd574)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/8f627f9a-6dd6-41d0-bb7f-d763adc550aa)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/77f35ab8-1ccb-4118-ac0a-8cce11cde112)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/7f9e8c93-de97-4c61-8a75-ba92f78f5a07)

**Publishing Overview:**

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/81bc4d20-7c11-48bf-9c7d-be60415aa324)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/f4ba3f51-78ec-41e2-bdbb-3df6b51cefb0)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/8944b7a3-1c14-4f59-9515-7eefca5538ec)

## Choose signing key

```bash
# Note: The `pepk.jar` file is from https://stackoverflow.com/a/52472918/10012446
# Note: I am using pepk.jar from above source because google's official `pepk-src.jar` file is not working and throws error when tried to use.
java -jar ./pepk.jar \
--keystore=./play-console-android-06-oct-2023.keystore \
--alias=$KEYSTORE_ALIAS \
--output=output.zip \
--include-cert --rsa-aes-encryption \
--encryption-key-path=./encryption_public_key.pem
```

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/66a1123c-1a22-4bb4-a525-a117a7c97974)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/53b81b68-966a-4729-b837-c1138a589f6a)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/4d41fba5-7448-4a9b-9601-9db8dc9aef5c)

## ISSUE - Advertising id permission is not inlcuded in this build

- Issue - **A manifest file in one of your active artifacts doesn't include the AD_ID permission:** [Click here](https://support.google.com/googleplay/android-developer/thread/235388030/a-manifest-file-in-one-of-your-active-artifacts-doesn-t-include-the-ad-id-permission?hl=en)

The issue while publishing the app to any track, I was getting error that AdvertisingId permissino is not included in this build. The issue is described better here -

**The solution of this error is that it was complaining on behalf of older build in other tracks which didn't have this permission in their `manifest.json` file. I did add the permission in current build but didn't have in other testing tracks i.e, open testing and internal testing tracks. So releasing the same build to all tracks did fix this warning instantly.**

## We need to send for review for google after you submit an AAB/APK?

Tasg: publishing to play console, publish to play console, publish

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/227028bc-9cf1-4350-8913-1b9a38c02dab" alt="drawing" width="700"/>


## Google is now removing releases for any android version whose android version hasn't been released in last 1 year

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/ffcded5a-b9f0-450d-b4c0-c88b50af781b)

## Promoting `Internal Testing` release to `Production` release

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/b073acf1-edbe-4e8f-830e-aef56764a741)

## Publishing to PlayStore Android

Article - [Click here](https://appinventiv.com/blog/how-to-submit-app-to-google-play-store/)

## Generating and submitting apk to playstore | Capacitor Docs

[Clickh here](https://ionic.io/blog/building-and-releasing-your-capacitor-android-app)

## `LEARNING OF THE BAD DAY` Super learning about adding tester email to "Internal Testing"

Source:  [StackOverflow](https://stackoverflow.com/questions/63253254/google-play-blank-screen-loading-forever-internal-testing-and-public-alpha-track)

It takes 3-4 hours or may be 1-2 days so that any new tester email added to `tester-email-list` to take into effect (before that it will show white screen when you try to browse the internal testing playstore link). 

