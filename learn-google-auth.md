# Learn Google Auth

- Google Auth Library: [npm](https://www.npmjs.com/package/google-auth-library): This is Google's officially supported node.js client library for using OAuth 2.0 authorization and authentication with Google APIs.
- GoogleApis: [npm](https://www.npmjs.com/package/googleapis): [Click here](https://developers.google.com/apis-explorer)
- react-oauth: [npm](https://www.npmjs.com/package/@react-oauth/google), [github](https://github.com/MomenSherif/react-oauth)

  ## Implementing google signin (Totel Scam Project)

- Google APIs console: [Click here](https://console.developers.google.com/apis)
- Source: [Official google signin docs](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)
- Follow along video by an amazing person: [@youtube](https://youtu.be/XjOEKbHkAeo)

![image](https://github.com/sahilrajput03/learn-websockets/assets/31458531/e9d9da04-9f80-4a54-bfa3-3dad9f6c62d4)

![image](https://user-images.githubusercontent.com/31458531/186201499-bef2e6a9-ceae-41f3-961c-01a0efb8b953.png)

![image](https://user-images.githubusercontent.com/31458531/186201852-f076c164-71b5-4fe8-ad4f-a5dcf7e77e65.png)

![image](https://user-images.githubusercontent.com/31458531/186202731-2f8eb951-3636-4352-a944-d4a38080616e.png)

On Oauth Consent Screen you need to fill it like this:

![image](https://user-images.githubusercontent.com/31458531/186205305-553349f3-f2ad-4bc9-8121-2b8a080260c1.png)

By default we get general details of the user who is logging-in in our app but we want more details from the user, we can get it by selecting some desired scopes from the list (point 2):

![image](https://user-images.githubusercontent.com/31458531/186206119-43b589ed-a651-4aba-a219-3922d7331f50.png)

We don't want any test users so we can click save and continue:

![image](https://user-images.githubusercontent.com/31458531/186206697-bbfbbaee-63a5-4146-ad14-e17e99886180.png)

In the end it shows the summary and you can simply click "BACK TO DASHBOARD" now:

![image](https://user-images.githubusercontent.com/31458531/186206901-06f6d58e-7b0a-472f-9a77-95f97d88bcbe.png)

Out consent screen is ready now we can create the OAuth credentials:

![image](https://user-images.githubusercontent.com/31458531/186210444-4a8cfe3f-0f56-4f5f-b03f-9077e6ccbfa2.png)

![image](https://user-images.githubusercontent.com/31458531/186210730-e1035082-ffd3-4c65-8cc7-d75a198c4086.png)

![image](https://user-images.githubusercontent.com/31458531/186211290-fc96998f-1b7e-4ad7-bfcb-dcc9566ecc8a.png)

And finally you get the `clientId` and `clientSecret` like that:

![image](https://user-images.githubusercontent.com/31458531/186211473-0f5a0abc-ecd6-4731-8dd7-78d4f61a5f55.png)

**NOTE: for nextjs's nextauth we change the redirect url like that, (Since I am running on port 3001, I need make the port as 3001)** 

![image](https://user-images.githubusercontent.com/31458531/186216312-3785d189-9dce-4def-af69-89207505a047.png)

![image](https://user-images.githubusercontent.com/31458531/186219381-50050c52-9a74-4ca7-ad37-b1e7fcc16191.png)
