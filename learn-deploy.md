# Deployment

## Github Pages

Add below `A records` for your custom domain dns setting in your domain provider panel.

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## Heroku

Why heroku?

Heroku provides https enabled backend server in no time which is too good for no-budget apps testing.

You can serve a nested folder project in heroku using a custom `build-pack` as well. Find it working @ [video-chat-app-webrtc](https://github.com/sahilrajput03/video-chat-app-webrtc/tree/hash-router#guide-to-publish-a-nested-project-folder-serving-to-heroku)

Heroku has database as a service as well. [Check here](https://www.heroku.com/postgres).

See my command list @ [Gist](https://gist.github.com/sahilrajput03/c44778f281e5f9856827e7c0f264ffa5).

# Dns Settings

I have ports 80, 8080, 3000-to-3010 mapped to my linux machine currently. Also for pi I have mapped port 22.

http://master61.ddns.net points to my `public ip` using https://www.noip.com/ service.

For domains:

http://servicelife.ml, http://fixedlife.ml, http://lostlife.ml I DNS settings as:

| Name | Type | TTL | Target |
| ---- | ---- | --- | ------ |
| www | CNAME | 3600 | master61.ddns.net |

And that maps all ports, i.e., if I have port mapped 80, 3001, 3002 and so on.., on via my router to some local machine then I would be able to access all these ports via each of these sites i.e., @ http://servicelife.ml:3001, http://fixedlife.ml:3001, http://lostlife.ml:3001. For port 80 we don't need to specify the port at all. [Source](https://webmasters.stackexchange.com/a/27013).
