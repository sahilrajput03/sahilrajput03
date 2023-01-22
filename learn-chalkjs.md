# Learn chalkjs

## Struck at `chalk - Error [ERR_REQUIRE_ESM]: require() of ES Module` ?

Source: https://stackoverflow.com/a/70748594/10012446

```bash
npm uninstall chalk
npm i chalk@4.1.2
```

now you can use:

```js
const chalk = require('chalk');
console.log(chalk.blue('Hello world!')); 
```
