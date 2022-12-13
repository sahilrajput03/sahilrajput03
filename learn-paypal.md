# PayPal

***PayPal Docs are just awesome to read. ~Sahil***

**Quick Links:**
- Paypal Story Components: [Click here](https://paypal.github.io/react-paypal-js/) (Tip: Go to Docs Tab to get code for the active story)
- Official Paypal React `@paypal/react-paypal-js`: [Github](https://github.com/paypal/react-paypal-js)
- Javasript SDK Reference: [Click here](https://developer.paypal.com/sdk/js/reference/#onapprove)
- **Official Postman collection by PayPal:** [Click here](https://developer.paypal.com/docs/subscriptions/integrate/) and press Run in postman button.
- Sandbox Accounts: [Click here](https://developer.paypal.com/tools/sandbox/accounts/)
- My Apps and Credential: [Click here](https://developer.paypal.com/dashboard/applications/sandbox)
- Subscriptions: [Click here](https://developer.paypal.com/docs/subscriptions/)
  - Start a subscription for a future date: [Click here](https://developer.paypal.com/docs/multiparty/subscriptions/customize/future-date/)
  - Integrate Subscritpions: [Click here](https://developer.paypal.com/docs/subscriptions/integrate/)
  - Customize Subscriptions to fit into your product UI: [Click here](Customize Subscriptions to fit into your product UI)
  - Manage Subscriptions on your account dashboard: [Click here](https://www.paypal.com/merchantapps/appcenter/acceptpayments/subscriptions)
  - Billing Cycles: [Click here](https://developer.paypal.com/docs/multiparty/subscriptions/customize/billing-cycles/)
  - Starting a subscription in a future date (and charge when billing cycle actually starts): [Click here](https://developer.paypal.com/docs/multiparty/subscriptions/customize/future-date/)
- Card Testing: [Click here](https://developer.paypal.com/tools/sandbox/card-testing/)

![image](https://user-images.githubusercontent.com/31458531/205932125-4e91ac6d-9e77-4c62-b97d-a6d3e96edb5c.png)

## Tax Calcuation on items

- Calculate sales tax automatically: [Click here](https://developer.paypal.com/api/nvp-soap/paypal-payments-standard/integration-guide/ProfileAndTools/#link-calculatesalestaxautomatically)
- Auto-calculate sales tax: [Click here](https://developer.paypal.com/api/nvp-soap/paypal-payments-standard/admin/checkout-settings/#auto-calculate-sales-tax)

![image](https://user-images.githubusercontent.com/31458531/206914072-c30f324e-15bc-40cb-a2aa-a44021675141.png)

## Getting client id and secret

**Account Settings > Account access > API access > Update > Manage REST API apps credentials**

## Enable Fetch Transaction permission

To be able to fetch transaction from my seller account I had to change this setting using my `PayPal sandbox developer account`**

- *Paypal Developer Dashboard: [Click here](https://developer.paypal.com/dashboard/)*

![image](https://user-images.githubusercontent.com/31458531/207420625-4486ddc0-33a3-4d4e-a081-579d8fca69f8.png)

## Fetching transactions and especially subscription txns?

**Getting the subscription txns and their respective ids from the list of transactions we get by `List transactions` REST API of postman collection**

Source - API DOCS: [Click here](https://developer.paypal.com/docs/api/transaction-search/v1/)

![image](https://user-images.githubusercontent.com/31458531/207430752-bf4f77e7-728f-41ec-990b-248eb16bb91a.png)

![image](https://user-images.githubusercontent.com/31458531/207430163-5c5d3fa6-7c33-46cc-823f-196d36886a8f.png)

## **Paypal Doesn't support proration automatically**

Source - Docs: [Click here](https://developer.paypal.com/docs/subscriptions/customize/revise-subscriptions/#link-billingchanges)

Other links to help you prorate:
- Stackoverflow Answer: [Click here](https://stackoverflow.com/questions/71974648/how-to-charge-prorated-rate-on-paypal-subscription)
- Another beautifully written article on Proration and how to do it: [Click here](https://gocardless.com/guides/posts/what-is-proration/)

![image](https://user-images.githubusercontent.com/31458531/207431204-1bf92dac-9248-4f7b-b1b5-1a22b99e9d13.png)

