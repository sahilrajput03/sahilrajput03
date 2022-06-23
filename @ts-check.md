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
