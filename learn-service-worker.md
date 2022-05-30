# Learn service worker

- Helper article: https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/background-syncs
- Article coverint `workbox` as well: [Click here](https://blog.bitsrc.io/using-service-workers-with-react-27a4c5e2d1a9)
- Intro To Service Workers & Caching @ youtube By traversy media: [Click here](https://www.youtube.com/watch?v=ksXwaWHCW6k), [Code here](https://github.com/sahilrajput03/simple_service_worker)

- [Push Notifications Using Node.js & Service Worker](https://www.youtube.com/watch?v=HlYFW2zaYQM)


```txt
First thing to say is this depends somewhat on the platform. My understanding of chrome is:

On desktop platforms like windows and Mac OS X the browser needs to have some background process running for a service worker to be able to run. On Mac OS X this is quite easy to detect as the browser can have no windows open but the browser still has the glowing dot beneath it.

On mobile platforms it's easier to listen for events and handle them in an efficient manner, so in these cases the platform can wake up the browser which will then handle any corresponding events.

The above applies to any service worker api's.

On Desktop: If the browser is completely closed then service workers can not run and will not dispatch any events (i.e. no push or background sync events)

On Mobile: The events will still be dispatched (i.e. background sync will trigger when the users device comes online and push will be received and cause a push event).
```

Source : [https://stackoverflow.com/a/39208140/10012446](https://stackoverflow.com/a/39208140/10012446)
