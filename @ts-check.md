# Readme

Source: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

- Learn how jsdoc is used to generate docs: https://github.com/sahilrajput03/learn-jsdoc

## Code Examples

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

## TODO

- Learn `importing types` with jsdoc : SEEMS VERY PROMISING AND GOOD FOR LONG LIFE DEVELOPMENT

https://stackoverflow.com/questions/49836644/how-to-import-a-typedef-from-one-file-to-another-in-jsdoc-using-node-js