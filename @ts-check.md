# Readme

Source: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

```js
// /** @type {number} */
let k = 'sa'
/**
 * @param {string} testName This is the name of test.
 * @param {Function} fun This is test function.
 */
let m = (testName, fun) => undefined
m('Simple test', () => {})
```

```js
// Default
/** @type any */
let a 

// This is the easiest way to silent most of the errors
/** @type object */
let b
```

- Learn `importing types` with jsdoc : SEEMS VERY PROMISING AND GOOD FOR LONG LIFE DEVELOPMENT

https://stackoverflow.com/questions/49836644/how-to-import-a-typedef-from-one-file-to-another-in-jsdoc-using-node-js
