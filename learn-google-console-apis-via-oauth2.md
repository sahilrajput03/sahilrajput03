# Learn Google Console APIs via Oauth2

- ❤️ Learn Google Cloud Console: [Click here](learn-google-cloud.md)
- ❤️ Google Api Nodejs Client @ Github (npm): [Click here](https://github.com/googleapis/google-api-nodejs-client)
- Official Postman \| Authorize Google APIs Using OAuth 2.0 @ YouTube: [Click here](https://www.youtube.com/watch?v=e-hOP3P-cW8)
  - Official Postman Article \| How to access Google APIs using OAuth 2.0 in Postman: [Click here](https://blog.postman.com/how-to-access-google-apis-using-oauth-in-postman/)

FYI: The only step missing in above video is this one as suugested by one user in the comment section in the above article - 

<img width="600" src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/036813f5-53fe-4c9f-958e-17c00d21a3ea" />

<img width="600" src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/2e18e008-1de0-40fc-881b-f835b0b9f7a0" />

## Calendar List API

- **Calendar API Reference: [Click here](https://developers.google.com/calendar/api/v3/reference?apix=true)**
- CalendarList: list: [Click here](https://developers.google.com/calendar/api/v3/reference/calendarList/list) (APIs in **google's API playground**)
- Oauth PlayGround: [Click here](https://developers.google.com/oauthplayground/) (never used it though)
- Choose Scopes: [Click here](https://developers.google.com/calendar/api/auth)
- **Scopes:**

```js
// NOTE: All below scopes can be used together as well by using space as delimiter:
https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly
```

## Using credentials - OAuth 2 on collection itself (current usage)

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/12d0dba7-2473-4316-8654-edd7fd71b59a" width="600" />

## When I click on "Get New Access Token" button, where is the token stored?

screenshot: 1/2

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/d69a3f57-fda1-429b-acd4-6ba764393702" width="600" />

screenshot: 2/2

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/5c9b1b30-30a5-4df5-9edb-a3f85228f777" width="600" />
