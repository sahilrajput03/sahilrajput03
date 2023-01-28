# Learn Colors

## Get colors on screen on nodejs

- NPM: `npm i colors`
- Docs/Github: [Click here](https://github.com/Marak/colors.js) 

```js
require('colors')

const str = 'Hello this is Sahil!'
const object = JSON.stringify({a: 10, b: 20}, null, 2)

console.log(str.red)
console.log(str.red.bold)
console.log(str.bold.red) // Order doesn't matter.
console.log(str.bold.red.bgRed) // Order doesn't matter.
console.log(str.blue.italic.bold.bgYellow)
console.log(object.black.magenta.bgWhite)
console.log(object.white.bgYellow)
```

BUT, you should create some theme:

```js
// FILE: colorConfig.js
const colors = require('colors')

colors.setTheme({
	info: 'bgGreen',
	help: 'cyan',
	warn: 'yellow',
	success: 'bgBlue',
	error: 'red',
	m: 'magenta', // myString.m.b Fox chaining.: for chaining.
	b: 'bold',
	bm: ['bold', 'magenta'],
	by: ['bold', 'yellow'],
})

// Usage: Simply put below line in your server file:
// require('./colorsConfig')


myString.m.b // works good!
myString.mb // works good!
```
