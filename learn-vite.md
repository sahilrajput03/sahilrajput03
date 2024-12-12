# Learn Vite, VitePress

## Env Variables and Modes

Source - [https://vite.dev/guide/env-and-mode.html#modes](https://vite.dev/guide/env-and-mode.html)

## To serve over `https` with vite dev server

Source: [Click here](https://stackoverflow.com/a/72998216/10012446)

```
// file: vite.config.js
import basicSsl from '@vitejs/plugin-basic-ssl'

export default {
  plugins: [
    basicSsl()
  ]
}
```

## Vitepress is Static Site Generator which power documentaiton sites for Vite, Vuejs, and many more

Docs: [https://vitepress.dev](https://vitepress.dev)

It is tremendously amazing for creating docs.

Try It Online: You can try VitePress directly in your browser on StackBlitz: [https://vitepress.new](https://vitepress.new)

## Vue.js and Vite? Are they related? (ChatGPT)

- https://github.com/vitejs/vite
- https://github.com/vuejs/core

Both Vue.js and Vite were created by Evan You, a well-known developer in the JavaScript ecosystem. Here's a bit more detail:

1. Vue.js:
- Created by Evan You in 2014.
- It started as a personal project, aiming to combine the best features of AngularJS and React while remaining lightweight and easy to use.
- Over time, Vue.js gained massive popularity and became one of the leading JavaScript frameworks.
2. Vite:
- Created by Evan You in 2020.
- The motivation for Vite came from the challenges of modern front-end development, particularly slow builds and hot module replacement (HMR) performance in tools like Webpack for large applications.
- Evan leveraged his experience from Vue.js to design Vite as a next-generation build tool that prioritizes speed and simplicity.

While Evan You created both projects, each has since grown into its own ecosystem with contributions from a broader community of developers.
