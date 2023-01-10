# Learn Vite

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
