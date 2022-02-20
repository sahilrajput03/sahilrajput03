## Logical OR assignment:

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment

```js
const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);
// expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// expected output: "title is empty"
```

## Nullish coalescing operator

**Tip: This is different than Logical OR assignment.*

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

```js
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42
```

## Numeric separators

Source: https://v8.dev/features/numeric-separators

```
1_000_000_000_000
1_019_436_871.42
```

## `replace.all` string method

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

## `string.matchAll` - amaz

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll

```js
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]
```

## optional chaining

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

```js
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
```

## top level await

Source: https://v8.dev/features/top-level-await

Source2: https://opensource.com/article/20/11/top-level-await-javascript#:~:text=Top%2Dlevel%20await%20is%20supported,has%20been%20added%20in%20Node.

```js
await Promise.resolve(console.log('🎉'));
// → SyntaxError: await is only valid in async function

(async function() {
  await Promise.resolve(console.log('🎉'));
  // → 🎉
}());
```

In `nodejs` you can use (`top-level await` and `ecma modules` by doing it like:

```js
// file: test.js
const asyncMsg = await Promise.resolve('WORKS')
console.log(asyncMsg)
```

and running command like below ways:

```bash
node --input-type=module --eval "$(cat test.js)"
cat test.js | node --input-type=module

//! Important:
node --input-type=module test.js
// THIS WOULD THROW ERROR AS CURRENTLY nodejs only allows `top-level await` and `esm modules`
// to be run via pipe operator or through command line argument i.e., eval flag only.
```

Better alternate is to use do:

- Change file exntension to `.mjs` instead of `.js` and then you can simply run like `node test.mjs`. LOVE.
- Specify `"type": "module"` in `package.json` file of the project.
