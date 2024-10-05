# Learn Vercel Deployment

**Quick Links:**
- Learn Deployment: [Click here](./learn-deploy.md)
- Learn Heroku Depoyment: [Click here](learn-heroku.md)

## TODO: Deploy ExpressJs Application with Vercel

- Using Express.js with Vercel | Docs: [Click here](https://vercel.com/guides/using-express-with-vercel)
- Google Search (very helpful): [Click here](https://www.google.com/search?q=deployh+nodejs+to+vercel&oq=deployh+nodejs+to+vercel)

## Route all paths to `index.html` page for a vite application by updating `vercel.json` file

Source: [Click here](https://stackoverflow.com/a/73752429/10012446)

File: `vercel.json`

```
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Vercel recommends [pusher.com](https://pusher.com/channels) for deployment of realtime apps(i.e, requiring websockets (socket.io)

Source: A comment on this [stackoverflow answer](https://stackoverflow.com/a/62547135)

https://vercel.com/guides/deploying-pusher-channels-with-vercel

## Direct domain to vercel hosting

```txt
NS1.VERCEL-DNS.COM
NS2.VERCEL-DNS.COM
```

<img src="https://user-images.githubusercontent.com/31458531/192787365-6c3c392c-af1b-4564-a509-1a406d107e73.png" alt="drawing" width="700"/>

## we can change the connected git repository of in a vercel project

You need to first disconnect the connected repo and then you need to connect another git repo there, its very simply. Vercel is amazing.

<img src="https://user-images.githubusercontent.com/31458531/197267914-a6428018-289d-45c1-9d5c-01a758db355d.png" alt="drawing" width="700"/>

## vercel uses yarn by default

So to use npm instead of yarn you can specify the build and run command like that:

<img src="https://user-images.githubusercontent.com/31458531/196443722-ab84dc7f-7779-4fa3-be10-2096c04f29fc.png" alt="drawing" width="700"/>


## Nested vitejs folder deployment commadns to be used

Way1:

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/eaba7aee-6bf3-41a9-9662-504c2847ba9e)


Way2:

- Github Project: [react-google-oauth](https://github.com/sahilrajput03/react-google-oauth)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/d9985c63-d2c2-4b87-ad01-2a13117b8e34)
