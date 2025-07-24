# Learn Cloudflare

- Adding site to Cloudflare Docs: [Click here](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/)
- Manage DNS records: [Click here](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)

## Turnstile

Cloudflare bot prevention on signups/forms: [https://blog.cloudflare.com/turnstile-ga](https://blog.cloudflare.com/turnstile-ga)
   - Link from above article: [Community Resources](https://developers.cloudflare.com/turnstile/community-resources) (There is a svelte library)
     - Demo: [https://demo.turnstile.workers.dev](https://demo.turnstile.workers.dev)
       - Github: [Click here](https://github.com/cloudflare/turnstile-demo-workers)
     - For Svelte: [npm](https://www.npmjs.com/package/svelte-turnstile), [Demo](https://svelte-turnstile.willow.codes/)
     - For React:
       - @marsidev/react-turnstile: [npm](https://www.npmjs.com/package/@marsidev/react-turnstile), [github](https://github.com/marsidev/react-turnstile), [Demo](https://react-turnstile.vercel.app/basic)

## Sites using cloudflare

### 1. Openai uses cloudflare and it showed error like this on 23 Jan 2025**

<img src="https://github.com/user-attachments/assets/4efacb92-0ba0-495d-a4ad-13030e36a6aa" alt="drawing" width="700"/>

### 2. Deepseek site

As soon as sign up on google is clicked we are redirected to this page:

<img src="https://github.com/user-attachments/assets/cc41e7fb-8e0a-4d54-9971-29704853dcde" alt="drawing" width="300"/>

### 3. https://annas-archive.li

When we click on **"Option #1: Slow Partner Server #1 (slightly faster but with waitlist)"** on the download page.

<img width="700" height="1618" alt="image" src="https://github.com/user-attachments/assets/62e85bf0-8573-4d09-b139-bda5c8d170ec" />

### 4. 1337x.to

I experienced this in tor browser.

<img width="700" height="1264" alt="image" src="https://github.com/user-attachments/assets/7bd3b9a0-c22e-4a1d-a900-cac0e835957a" />


## Polish
  - Activate Polish Docs: [Click here](https://developers.cloudflare.com/images/polish/activate-polish/)

## Cloudflare Worker

- What is cloudflare worker? Example (ChatGPT): [Click here](https://chatgpt.com/c/67913584-e774-8007-a271-f0b22785efd6)
- Pricing: [Click here](https://developers.cloudflare.com/workers/platform/pricing/)
- Limits: [Click here](https://developers.cloudflare.com/workers/platform/limits/#worker-limits)

## Image Optimization and Polish

Docs: [Click here](https://developers.cloudflare.com/images/)

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/d03dc6b9-f742-47c8-a821-57011d460e2c" alt="drawing" width="600"/>

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/c9b1b6a7-adcc-4e72-ad9c-54e72b0f2be4" alt="drawing" width="600"/>

## Cloudflare Plan info

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/638fc0a9-902b-4a85-946f-451b7d0c0da1" alt="drawing" width="600"/>


## Connectinng S3 bucket to Cloudflare domain (or subdomain)

- **Cloudflare Docs:** [Click here](https://developers.cloudflare.com/support/third-party-software/others/configuring-an-amazon-web-services-static-site-to-use-cloudflare/#set-up-your-site-on-cloudflare)
- **Aweosome - Codecamp Tutorial | How to Point your Domain to an S3 Website Bucket:** [Click here](https://www.freecodecamp.org/news/cjn-how-to-point-your-domain-to-s3-website-bucket/)

You might need to rename the bucket -

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/647b594b-214d-48ed-bc85-8597cb333755)

**otherwse you'll see error like that:**

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/f924013e-1505-4308-a7d7-1a9332dc1949)

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/25c6ed41-7e5b-4d60-b647-76069432f5fb" alt="drawing" width="600"/>

**Image Resize Costs?**

- Image resize billing requests | Community Support Cloudflare: [Click here](https://community.cloudflare.com/t/image-resize-billing-requests/344619)

```txt
Q. What options do we have to optimize images and reduce bandwidth costs?

1. Polish
2. Mirage
3. Image Resizng

Q. What is the cost

No additional cost for Polish and Mirage.
For image resizing -

Pro, Business plan:
50,000 resizing requests included per month. After that, $9 per 50,000 uncached resizing requests per month.

Enterprise customers:
Up to 10 million images served per month, included.
```

**CloudFlare Images:**

Implementation: [Click here](https://blog.cloudflare.com/announcing-cloudflare-images-beta/)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/15eed7e3-472b-490d-8d09-746562d84c6f)
