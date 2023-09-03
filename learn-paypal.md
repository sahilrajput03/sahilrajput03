# PayPal

***PayPal Docs are just awesome to read. ~Sahil***

**Quick Links:**
- **My Notes - Learn Paypal Subscription And Database Schema: [Click here](./learn-paypal-subscription-and-database-schema.md)**
- PayPal Developer Apps and Credentials: [Click here](https://developer.paypal.com/dashboard/applications/sandbox)
  - Sandbox Test Account: [Click here](https://developer.paypal.com/dashboard/accounts)
- Official Live Demo's of Paypal Buttons: [Click here](https://developer.paypal.com/demo/checkout/#/pattern/client)
- HATEOS Links: [Click here](https://developer.paypal.com/api/rest/responses/#link-hateoaslinks)
	- Link Relations: [Click here](https://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1)
- Paypal Story Components: [Click here](https://paypal.github.io/react-paypal-js/) (Tip: Go to Docs Tab to get code for the active story)
- Official Paypal React `@paypal/react-paypal-js`: [Github](https://github.com/paypal/react-paypal-js)
- Javasript SDK Reference: [Click here](https://developer.paypal.com/sdk/js/reference/#onapprove)
- **Official Postman collection by PayPal:** [Click here](https://developer.paypal.com/docs/subscriptions/integrate/) and press Run in postman button.
- Sandbox Accounts: [Click here](https://developer.paypal.com/tools/sandbox/accounts/)
- My Apps and Credential: [Click here](https://developer.paypal.com/dashboard/applications/sandbox)
- Subscriptions: [Click here](https://developer.paypal.com/docs/subscriptions/)
  - Start a subscription for a future date: [Click here](https://developer.paypal.com/docs/multiparty/subscriptions/customize/future-date/)
  - **Integrate Subscritpions: [Click here](https://developer.paypal.com/docs/subscriptions/integrate/)**
  - Customize Subscriptions to fit into your product UI: [Click here](Customize Subscriptions to fit into your product UI)
  - Manage Subscriptions on your account dashboard: [Click here](https://www.paypal.com/merchantapps/appcenter/acceptpayments/subscriptions)
  - Billing Cycles: [Click here](https://developer.paypal.com/docs/multiparty/subscriptions/customize/billing-cycles/)
  - Starting a subscription in a future date (and charge when billing cycle actually starts): [Click here](https://developer.paypal.com/docs/multiparty/subscriptions/customize/future-date/)
  - Upgrade or downgrade a subscription (Change subscription plan for a subscription): [Click here](https://developer.paypal.com/docs/subscriptions/customize/revise-subscriptions/)
- Card Testing: [Click here](https://developer.paypal.com/tools/sandbox/card-testing/), Card Used in Postman for testing: `"card": {"number": "4012888888881881", "expiry": "2028-03"`
- For testing with webui:  *Sample Card:*
  ```txt
  Card: 4012888888881881
  Expiry 03/28
  CSC: 888
  ZipCode: 95833
  City: Sacramento
  State: California
  ```
- **How do I accept cards with Checkout using the Guest Checkout option?: [Click here](https://www.paypal.com/us/cshelp/article/how-do-i-accept-cards-with-checkout-using-the-guest-checkout-option--help307)**

## To get all the transactions of a subscription

We can set start_date and end_date like that -

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/e0cb17d7-2e1f-4258-b835-6e83da3f142b)

## Monthly edge case subscription charge and end date guidance from `Eric` (Thanks Eric)

Link that may be helpful if you haven't seen it (about a monthly renewal timing edge case):

- https://developer.paypal.com/api/nvp-soap/paypal-payments-standard/integration-guide/subscription-billing-cycles/#link-monthlybillingcycles
- "Recurring payments are collected on the same day of the month. If the initial recurring payment falls on the 31st, PayPal eventually adjusts the billing cycle to the last of the month. If the initial recurring payment falls on the 29th or 30th, PayPal adjusts the billing cycle to the first of the month on the following February."

## Learn Paypal Subscription And Database Schema

[Click here](./learn-paypal-subscription-and-database-schema.md)

## Does paypal changes the subscriptionId when a subsciption is renewed?

No. It keeps the `subscriptionId` same always (chatGPT).

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/6dd6d685-eef4-42fb-8821-89ae18331453)


## PayPal integration with 1. APIs OR PayPal SDK

We can choose from two options for the PayPal integration i.e, 

1. using a SDK from PayPal i.e, 

- Npm (94k weekly downloads) - https://www.npmjs.com/package/@paypal/react-paypal-js
- Github - https://github.com/paypal/react-paypal-js

**OR**

2. Using HTTP API via our backend.
This basically works because PayPal provides a way to redirect the user to a specific "return-url" for e.g., slasher.tv along with subscriptionId, and thus we can make use of that page to help show the user the status of his payment.
How does this work?
1. User initiates a subscription which is also known as subscription-activation, there are two types:
- a.) using PaPpal login
- b.) using Card Details

Users do this by hitting our slasher api, for e.g, /api/v1/podcast/activate-subscription and behind the scenes we'll call activate-subscription api on paypal server.

2. We get an "approve-url" as result of the "activate-subscription" request and then we return that url to the user.

3. Utilising "approve-url" -
- a.) User navigates to that url and finishes the payment by his PayPal login credentials.
- b) If the user wants to make payment via card user can send card-details as payload for the API call we did in the 1st step, thus the payment will be done right away! (wow!).

4. (Note: This step is only for PayPal login payment type only): When user visit the "approve-url", he/she will be prompted to do the txn and will be redirected to a url like below -

`https://example.com/app/podcasts/SUBSCRIPTION-RETURN-URL/return?subscription_id=I-VDA50T7LKCFY&ba_token=BA-1Y6871089W3522241&token=1MM66374W7146800L`

Thus we can collect subscription_id and check for that subscription status after every 5 seconds while the user is still on this page (it is generally successful instantly though). And we can let the user know the txn is successful by calling a simple txn status or subscription status API on our backend. That's all.

Let me know what your and Damon's preferences are, if possible please try communicating with Damon as these are minute details and don't make much difference after the process is complete.

What are actual differences though in my view in the above two ways?
1. (API > SDK) I think with controlled API requests, we would have more control.
2.  (SDK > API) The npm library seems to be from official PayPal so it can be trusted too.
3. (SDK > API) If we go with API requests then we would need to manage card details handling in frontend and which may be a one time thing but it would be reusable for future dating subscriptions too. (high effort task)
4. (API > SDK) We would have more control on our frontend UI if we follow the API requests way.

- More or less, I am equally biased on each way of implementation. Thanks.

- Also, I tested both ways thoroughly it works fine either way.

## PayPal personal (buyer) vs. business account (seller)

Login @ https://www.sandbox.paypal.com/signin

- Seller/Business (note the @business) - `sb-xxxxxxxxxxxxx@business.example.com`
- Personal/Buyer (note the @personal) - `sb-xxxxxxxxxxxxx@personal.example.com`

## return url with PayPal

- **Website payment preferences Page in PayPal Dashboard: [Click here](https://www.sandbox.paypal.com/businessmanage/preferences/website)**

**Note - You should:**
1. Go to `Account Settings` > `Website payments` > `Website Preferences` and enable both `Auto return` and `Payment data transfer`. For return url you may give `https://slasher.tv/app/paypal/return-url` but it isn't useful as you **must** definte the return url in each `create-subscription` (POST /v1//billing/subscriptions) API call.
2. You may also definte `cancel_url` as well as that would be helpful to know when the payment is failed.

```txt
- return url = https://example.com/return
https://example.com/return?subscription_id=I-VDA50T7LKCFY&ba_token=BA-1Y6871089W3522241&token=1MM66374W7146800L
- cancel_url =https://example.com/cancel
https://example.com/cancel?subscription_id=I-7M0U6C9DWEL3&ba_token=BA-0WY1453654212191G&token=4CJ88294AB124721F

- return url = https://example.com/page/subpage
https://example.com/page/subpage?subscription_id=I-7M0U6C9DWEL3&ba_token=BA-0WY1453654212191G&token=8Y12132035380693N
- "cancel_url": "https://example.com/page/subpage"
https://example.com/page/subpage?subscription_id=I-7M0U6C9DWEL3&ba_token=BA-0WY1453654212191G&token=4CJ88294AB124721F
```

## Payment Data Transfer

Docs - Payment Data Transfer: [Click here](https://developer.paypal.com/api/nvp-soap/payment-data-transfer/)

## We get nextBillingTime on showSubscription api

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/952664ea-59be-4331-8152-63061b102ccd)

## `onApprove` on paypal-react compponent function is only called when txn is approved (i.e., successful)

So, we have either of two options:
1. use `Transaction Search > List Transaction` in postman PayPal api collection.
2. use `Subscriptions > Show subscriptions details` in postman PayPal api collection.

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/d0599c26-0415-44f9-8389-ca4e9179dd6c)

## You can browser `subscriptions` and `plans` in Selller Account (sandbox) like that

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/a9604787-3ba1-418f-8d5f-e2ceb3bfbef7)

Now, you can use that button to toggle b/w group by product or group by plan view

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/94188d61-12b2-4147-90ae-1755416b1fca)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/8969cf66-debc-4c8c-8e4d-7bfb870ee809)


## I added slasher related clientId and clientSecret values here

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/020b1850-9bc8-40e6-b284-bd94b27e5d2a)

## ClientId and ClientSecret by Postman's Public API Collection

Date: 29 August, 2023

```txt
Clientid:
AUv8rrc_P-EbP2E0mpb49BV7rFt3Usr-vdUZO8VGOnjRehGHBXkSzchr37SYF2GNdQFYSp72jh5QUhzG

ClientSecret:
EMnAWe06ioGtouJs7gLYT9chK9-2jJ--7MKRXpI8FesmY_2Kp-d_7aCqff7M9moEJBvuXoBO4clKtY0v
```


![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/29c9f440-d669-4aba-86d0-a53441a1ee82)

## Get subscription details

![image](https://user-images.githubusercontent.com/31458531/205932125-4e91ac6d-9e77-4c62-b97d-a6d3e96edb5c.png)

## Customize the PayPal Buttons

[Click here](https://developer.paypal.com/docs/regional/th/checkout/integration-features/customize-button)

## Tax Calcuation on items

- Calculate sales tax automatically: [Click here](https://developer.paypal.com/api/nvp-soap/paypal-payments-standard/integration-guide/ProfileAndTools/#link-calculatesalestaxautomatically)
- Auto-calculate sales tax: [Click here](https://developer.paypal.com/api/nvp-soap/paypal-payments-standard/admin/checkout-settings/#auto-calculate-sales-tax)

![image](https://user-images.githubusercontent.com/31458531/206914072-c30f324e-15bc-40cb-a2aa-a44021675141.png)

## Getting client id and secret

**Account Settings > Account access > API access > Update > Manage REST API apps credentials**

Image: 1/2

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/5c782e29-95df-42d4-880d-ee6af86762ef)

Image: 2/2

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/56340b5c-199a-484f-b143-4d560a83045a)


## Enable Fetch Transaction permission

To be able to fetch transaction from my seller account I had to change this setting using my `PayPal sandbox developer account`**

- *Paypal Developer Dashboard: [Click here](https://developer.paypal.com/dashboard/)*

![image](https://user-images.githubusercontent.com/31458531/207420625-4486ddc0-33a3-4d4e-a081-579d8fca69f8.png)

## Geting list of payments processed for a given `subscription_id`

We can get a list of transactions made for a given subscription by using `List transactions for subscription` API (we pass a `subscription_id` as param) in postman. We can use this showing all the payment history for a given person if we store a `subscription_id` for each user in the database.

## Fetching transactions and especially subscription txns?

**Getting the subscription txns and their respective ids from the list of transactions we get by `List transactions` REST API of postman collection**

Source - API DOCS: [Click here](https://developer.paypal.com/docs/api/transaction-search/v1/)

![image](https://user-images.githubusercontent.com/31458531/207430752-bf4f77e7-728f-41ec-990b-248eb16bb91a.png)

![image](https://user-images.githubusercontent.com/31458531/207435541-d89a8873-747f-48da-90e3-c88af380655a.png)

![image](https://user-images.githubusercontent.com/31458531/207430163-5c5d3fa6-7c33-46cc-823f-196d36886a8f.png)

## **Paypal Doesn't support proration automatically**

Source - Docs: [Click here](https://developer.paypal.com/docs/subscriptions/customize/revise-subscriptions/#link-billingchanges)

Other links to help you prorate:
- Stackoverflow Answer: [Click here](https://stackoverflow.com/questions/71974648/how-to-charge-prorated-rate-on-paypal-subscription)
- Another beautifully written article on Proration and how to do it: [Click here](https://gocardless.com/guides/posts/what-is-proration/)

![image](https://user-images.githubusercontent.com/31458531/207431204-1bf92dac-9248-4f7b-b1b5-1a22b99e9d13.png)

## When creating a subscription

When creating a subscription you can give the `start_date` to set the start date and time for this subscription. Also, if you just want the subscription to start immeditely you can simply delete that field from the payload of the request and in the response you'll see the current time automatically set by the paypal server.

![image](https://user-images.githubusercontent.com/31458531/207449005-9554b18d-2246-4653-99f5-0a7bfa844afd.png)

## There is no way to un-cancel a request

- You can update different different fields on a subscription **but updating `status` field is not allowed at all. ~IMO Sahil(well tested).**
- Also, one the plan has been activated you cannot change the `start_date`

![image](https://user-images.githubusercontent.com/31458531/207453681-28f2840d-55f6-4171-96d9-ea7e437cf3be.png)

## PayPal Webhook Simulator

Please use this site to generate a free url which you can use to test webhook on paypal.

- Webhooks simulator | Paypal: [Click here](https://developer.paypal.com/dashboard/webhooksSimulator)
- Free Webhook testing Tool: [Click here](https://webhook.site/)

## More on cards

[Credit Card Generator](https://developer.paypal.com/api/rest/sandbox/card-testing/#link-creditcardgeneratorfortesting), [How to use Failed Cards](https://developer.paypal.com/tools/sandbox/card-testing/), [More 3DS Payments](https://developer.paypal.com/docs/checkout/advanced/customize/3d-secure/test/) and [More Test Accounts](https://developer.paypal.com/dashboard/accounts/).

![image](https://user-images.githubusercontent.com/31458531/207940976-ec890948-fa5f-4d12-b50d-6155284fd07b.png)


![image](https://user-images.githubusercontent.com/31458531/207941002-677b567f-1dca-4540-a045-341413a1b2a8.png)

![image](https://user-images.githubusercontent.com/31458531/207941018-8c80e01f-f226-4797-b280-999ad491eb9b.png)

![image](https://user-images.githubusercontent.com/31458531/207941058-d65d498a-f7fe-46ae-8c3b-136aa0ea9178.png)

## Sandbox Details

```txt
// Sahil Personal Account (Sandbox Details)
// const clientId =  'AZxr-cT_Indgclkxvqr_yUgFqWiYUJpHLmOKwrucdOseQsFzSrfsCRLaBNZKH9rT5RGCAFK4QgppxKGS'
// const planIds = {
// 	one: 'P-1U585596S70968643MONXJHI',
// 	three: 'P-3J697311GS257702PMONXJIQ',
// 	six: 'P-81C6483981287853TMONXJJQ',
// }
```

## Error: `Things don't appear to be working at the moment. Please try again later.`

[Click here](https://www.paypal.com/us/smarthelp/article/ts2067)
