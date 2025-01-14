# Learn Google Auth

- Google Auth Library: [npm](https://www.npmjs.com/package/google-auth-library): This is Google's officially supported node.js client library for using OAuth 2.0 authorization and authentication with Google APIs.
- GoogleApis: [npm](https://www.npmjs.com/package/googleapis): [Click here](https://developers.google.com/apis-explorer)
- `@react-oauth/google`: [npm](https://www.npmjs.com/package/@react-oauth/google), [github](https://github.com/MomenSherif/react-oauth) (used in [sahilrajput03/react-google-oauth](https://github.com/sahilrajput03/react-google-oauth))
- `react-google-login`: [npm](https://www.npmjs.com/package/react-google-login), [github](https://github.com/anthonyjgrove/react-google-login) **(package is no longer maintained as mentioed on its github repo)**


## Login with google with svelte + expressjs (latest)

❤️ [svelte-express-google-login](https://github.com/sahilrajput03/svelte-express-google-login)

## Login with google with svelte (backend + frontend)

*Deployed at vercel.com and render.com (tested and working well on both platforms).*

[https://github.com/sahilrajput03/lucia-example-sveltekit-google-oauth](https://github.com/sahilrajput03/lucia-example-sveltekit-google-oauth)

## 😇 Some links related to Google Login

Date: 11 Jan 2025 - [Google Doc - Some Links for Login with google](https://docs.google.com/document/d/17OOuj1H5YP176FP_xbkgIeGFQHfdgwNKbBq35ojVHxM/edit?pli=1&tab=t.0)

## Authorization issue - 13 Dec 2023

**UPDATE: 13 Dec 2023 - This happens only when pushed to vercel site (subdomain) and I am hoping that the issue will be gone after the app is switched to "production" as suggested by an answerer in the above stackoverflow question.**

- Google query to explore more: [Click here](https://www.google.com/search?q=vercel+domain+the+current+origin+isn%27t+registered+with+the+google+oauth+client)
- Stackoverflow question from above google search: [Click here](https://stackoverflow.com/questions/42566296/google-api-authentication-not-valid-origin-for-the-client)

## Implementing google signin (Totel Scam Project)

**Quick Links:**
- My Github Repo: [sahilrajput03/react-google-oauth](https://github.com/sahilrajput03/react-google-oauth)
  - Deploye at: https://example-react-google-oauth.vercel.app/
  - Source (original Totel project notes): [Click here](https://github.com/sahilrajput03/learn-websockets/blob/main/making-totel-chat.md)
  - OTHER SIMILAR PROJECT (might be helpful) found on GITHUB via search:
    - (react+java) [spring-boot-react-oauth2-social-login-demo](https://github.com/callicoder/spring-boot-react-oauth2-social-login-demo)
- Google APIs console: [Click here](https://console.developers.google.com/apis)
  - Source: [Official google signin docs](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)
  - Follow along video by an amazing person: [@youtube](https://youtu.be/XjOEKbHkAeo)

<img src="https://github.com/sahilrajput03/learn-websockets/assets/31458531/e9d9da04-9f80-4a54-bfa3-3dad9f6c62d4" width="800" />

<img src="https://user-images.githubusercontent.com/31458531/186201499-bef2e6a9-ceae-41f3-961c-01a0efb8b953.png" width="800" />

<img src="https://user-images.githubusercontent.com/31458531/186201852-f076c164-71b5-4fe8-ad4f-a5dcf7e77e65.png" width="800" />

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/c13e6404-4ed5-4b31-a8d3-9b684602677b" width="800" />

On Oauth Consent Screen you need to fill it like this:

<img src="https://user-images.githubusercontent.com/31458531/186205305-553349f3-f2ad-4bc9-8121-2b8a080260c1.png" width="800" />

By default we get general details of the user who is logging-in in our app but we want more details from the user, we can get it by selecting some desired scopes from the list (point 2):

<img src="https://user-images.githubusercontent.com/31458531/186206119-43b589ed-a651-4aba-a219-3922d7331f50.png" width="800" />

We don't want any test users so we can click save and continue:

<img src="https://user-images.githubusercontent.com/31458531/186206697-bbfbbaee-63a5-4146-ad14-e17e99886180.png" width="800" />

In the end it shows the summary and you can simply click "BACK TO DASHBOARD" now:

<img src="https://user-images.githubusercontent.com/31458531/186206901-06f6d58e-7b0a-472f-9a77-95f97d88bcbe.png" width="800" />

Out consent screen is ready now we can create the OAuth credentials:

<img src="https://user-images.githubusercontent.com/31458531/186210444-4a8cfe3f-0f56-4f5f-b03f-9077e6ccbfa2.png" width="800" />

<img src="https://user-images.githubusercontent.com/31458531/186210730-e1035082-ffd3-4c65-8cc7-d75a198c4086.png" width="800" />

<img src="https://user-images.githubusercontent.com/31458531/186211290-fc96998f-1b7e-4ad7-bfcb-dcc9566ecc8a.png" width="800" />

And finally you get the `clientId` and `clientSecret` like that:

<img src="https://user-images.githubusercontent.com/31458531/186211473-0f5a0abc-ecd6-4731-8dd7-78d4f61a5f55.png" width="800" />

**NOTE: for nextjs's nextauth we change the redirect url like that, (Since I am running on port 3001, I need make the port as 3001)** 

<img src="https://user-images.githubusercontent.com/31458531/186216312-3785d189-9dce-4def-af69-89207505a047.png" width="800" />

<img src="https://user-images.githubusercontent.com/31458531/186219381-50050c52-9a74-4ca7-ad37-b1e7fcc16191.png" width="800" />
