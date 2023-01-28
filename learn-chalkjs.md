# Learn chalkjs

## Create a logger with chalkjs

```ts
import logger from './logger'

logger.success('hello', 'world')
logger.error('hello', 'world')
logger.info('hello', 'world')
```

```ts
// file: logger.ts
import chalk from 'chalk'

export default {
	success: (...args: string[]) => console.log(chalk.bold.greenBright(...args)),
	error: (...args: string[]) => console.log(chalk.bold.redBright(...args)),
	info: (...args: string[]) => console.log(chalk.bold.yellowBright(...args)),
}
```

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

## Code?

```js
// ********* USEFULT COLOR OPTIONS FOR CHALK **********
// src: FROM CHALK NPM DOCS: https://www.npmjs.com/package/chalk

let {log} = console;

// DEFINING THEMES FROM CHALK DOCS ONLY.
let redBold = chalk.bold.red;
log(redBold("home..."));

let redBoldUnderline = chalk.bold.underline.red;
log(redBoldUnderline("testing.."));

let redItalics = chalk.red.italic;
log(redItalics("home..."));

// MORE TESTING...
let red = chalk.red;
let yellow = chalk.yellow;
let green = chalk.green;
let redBright_bgBlue = chalk.redBright.bgBlue;
let blue_bgRed_bold = chalk.blue.bgRed.bold;

log(red("error:"));
log(yellow("stderr:"));
log(green("stdout:"));
log(redBright_bgBlue("boom....."));
log(blue_bgRed_bold("Hello world"));

// ***************** MORE OPTION FROM CHALK DOCS
// Text colors
//     black
//     red
//     green
//     yellow
//     blue
//     magenta
//     cyan
//     white
//     blackBright (alias: gray, grey)
//     redBright
//     greenBright
//     yellowBright
//     blueBright
//     magentaBright
//     cyanBright
//     whiteBright

// Background colors
//     bgBlack
//     bgRed
//     bgGreen
//     bgYellow
//     bgBlue
//     bgMagenta
//     bgCyan
//     bgWhite
//     bgBlackBright (alias: bgGray, bgGrey)
//     bgRedBright
//     bgGreenBright
//     bgYellowBright
//     bgBlueBright
//     bgMagentaBright
//     bgCyanBright
//     bgWhiteBright

// Modifiers
//     reset - Resets the current color chain.
//     bold - Make text bold.
//     dim - Emitting only a small amount of light.
//     italic - Make text italic. (Not widely supported)
//     underline - Make text underline. (Not widely supported)
//     inverse- Inverse background and foreground colors.
//     hidden - Prints the text, but makes it invisible.
//     strikethrough - Puts a horizontal line through the center of the text. (Not widely supported)
//     visible- Prints the text only when Chalk has a color level > 0. Can be useful for things that are purely cosmetic.
```
