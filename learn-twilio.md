# Learn Twilio

**Quick Links:**
- Messaging Pricing - Twilio: [Click here](https://www.twilio.com/en-us/pricing/messaging)

## Use Your Fingerprint with 1Password to Authenticate the Twilio CLI

Official Docs: [Click here](https://www.twilio.com/blog/use-your-fingerprint-with-1password-to-authenticate-twilio-cli)

[Click here](https://www.twilio.com/blog/use-your-fingerprint-with-1password-to-authenticate-twilio-cli)

## Sending messgae

### with typescript

```js
// Recepient info and message
const phoneNumber = "+919999999999"
const message = "Hello world!"

const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`
// Application/x-www-form-urlencoded is a content type used to submit data through HTML forms on the web. It is the default format for HTML forms. 
const formUrlEncodedPayload = new URLSearchParams({
    To: phoneNumber,
    From: TWILIO_FROM!,
    Body: message
})
const config = {
    auth: {
        username: TWILIO_ACCOUNT_SID!,
        password: TWILIO_AUTH_TOKEN!
    }
}
const response = await axios.post(url, formUrlEncodedPayload, config);
// console.log('response?', response.data);
```

### with bash script

```sh
#!/bin/bash

# Account Credentials
ACCOUNT_SID=""
AUTH_TOKEN=""
FROM=""

# Send message
PHONE_NUMBER="+919999999999"
MESSAGE="Helloworld!"

curl "https://api.twilio.com/2010-04-01/Accounts/$ACCOUNT_SID/Messages.json" \
	-X POST \
	--data-urlencode "To=$PHONE_NUMBER" \
	--data-urlencode "From=$FROM" \
	--data-urlencode "Body=$MESSAGE" \
	-u $ACCOUNT_SID:$AUTH_TOKEN
```

### with Postman

Image - 1/2

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/0461d513-ea8c-47c0-aba9-befd8b1dcb34)

Image - 2/2

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/00a00c26-1ca1-4187-9180-057a15ba6390)


# Learn Sending OTP's with twilio

```js
const dotenv = require('dotenv');
dotenv.config({path: '.env.local'});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
// (no use to me~Sahil) FULLSTACK EXAMPEL(with serverless deployment) @ https://github.com/twilio-labs/function-templates/tree/main/verify

const serviceId = process.env.TWILIO_VERIFY_SERVICE_SID || '';
console.log({accountSid, authToken, serviceId});

// E.164 Numbers; https://www.twilio.com/docs/glossary/what-e164
// const to = '+15017122661';
const to = '+918360267243';
// const to = '+15005550001'; // magic no.

const isValidPhoneNumber = /^\+[1-9]\d{1,14}$/.test(to);
if (!isValidPhoneNumber) {
	console.log('Invalid phone number');
	process.exit(1);
}

// VERIFY API Docs: https://www.twilio.com/docs/verify/api

//! I DON'T NEED TO CREATE A TWILIO SERVICE coz I ALREAY CREATED A SERVICE, and I can use the SID of the service instead. Visit this link to check the service: https://www.twilio.com/console/verify/services ~Sahil
// Step 1: Create a Verification Service
// client.verify.v2.services
// 	.create({friendlyName: 'My First Verify Service'})
// 	.then((service) => console.log(service.sid))
// 	.catch((e) => console.log('CREATE A VERIFICATION:', e));

// Step 2: SEND A VERIFICATION TOKEN
const sendVerifyToken = () =>
	client.verify.v2
		.services(serviceId) // .services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
		.verifications.create({to, channel: 'sms'})
		.then((verification) => console.log(verification.status)) // OUTPUT: "pending"
		.catch((e) => console.log('START VERIFICATION - FAILED:', e));

sendVerifyToken();

// return;
// console.log('here');

// Step 3: CHECK THE VERIFICATION TOKEN
const checkVerifyToken = () =>
	client.verify.v2
		.services(serviceId) // .services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
		.verificationChecks.create({to, code: '3584'})
		.then((verification_check) => console.log(verification_check.status)) // OUTPUT: "approved"
		.catch((e) => console.log(() => console.log('CHECK VERIFICATION - FAILED:', e)));
		
checkVerifyToken();

// *******************************************************
// PARAMETER FOR start-verify.js
// const to =  // REQUIRED (email/phone number)
// const channel = 'sms' // OPTIONAL, default: 'sms', Other Values: 'call', or 'email'.
// const locale =  'en' // OPTIONAL, default: 'env

// PARAMETER FOR check-verify.js
// const to = // REQUIRED (email/phone number)
// const verification_code = // REQUIRED (Collected from user input)

/**
 * # TEST CREDENTIALS BELOW (Section: Auth tokens & API keys)
 * Only a handful of services are available to test with twilio at the moment. See this to know what all services are available to test so far: https://www.twilio.com/docs/iam/test-credentials
 */
// *******************************************************
```
