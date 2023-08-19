# Deploy expressjs application

- Using Express.js with Vercel | Docs: [Click here](https://vercel.com/guides/using-express-with-vercel)https://vercel.com/guides/using-express-with-vercel
- Google Search (very helpful): [Click here](https://www.google.com/search?q=deployh+nodejs+to+vercel&oq=deployh+nodejs+to+vercel)

## Vercel recommends [pusher.com](https://pusher.com/channels) for deployment of realtime apps(i.e, requiring websockets (socket.io)

Source: A comment on this [stackoverflow answer](https://stackoverflow.com/a/62547135)

https://vercel.com/guides/deploying-pusher-channels-with-vercel

## Direct domain to vercel hosting

```txt
NS1.VERCEL-DNS.COM
NS2.VERCEL-DNS.COM
```

![image](https://user-images.githubusercontent.com/31458531/192787365-6c3c392c-af1b-4564-a509-1a406d107e73.png)


## we can change the connected git repository of in a vercel project

You need to first disconnect the connected repo and then you need to connect another git repo there, its very simply. Vercel is amazing.

![image](https://user-images.githubusercontent.com/31458531/197267914-a6428018-289d-45c1-9d5c-01a758db355d.png)

## vercel uses yarn by default

So to use npm instead of yarn you can specify the build and run command like that:

![](https://user-images.githubusercontent.com/31458531/196443722-ab84dc7f-7779-4fa3-be10-2096c04f29fc.png)
