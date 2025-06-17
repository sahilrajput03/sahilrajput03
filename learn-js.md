# Learn Javascript

**Quick Links:**
- Js-Conf-2022: [Click here](notes-js-conf-2022.md)
- A place to find the best open source projects related to the web platform: JS, HTML, CSS, but also TypeScript, Node.js, Deno, Bun: [bestofjs.org](https://bestofjs.org)
- Notes of learning Javascript from State of Javascript 2021: [Click here](./learn-state-of-javascript.md)
- [jsconsole.com](https://jsconsole.com) (by remy)


## Open debugger/inspector in nodejs process via code

- ✅Another way to open is via - `kill -SIGUSR1 32617`. (source: [official docs](https://nodejs.org/en/learn/getting-started/debugging))

```js
const inspector = require('inspector');

console.log('hello from:', process.pid);

// Start inspector after 1 second
setTimeout(() => {
    inspector.open(9229, '127.0.0.1', true);
    console.log('Debugger opened ✅.');
}, 1_000);

// After 5 seconds and stop-start the inspector again.
setTimeout(() => {
    inspector.close();
    console.log('Debugger closed 🛑.');
    inspector.open(9229, '127.0.0.1', true);
    console.log('Debugger opened again ✅ 🚀.');
}, 5_000);

// Keep the server for 100 seconds.
setTimeout(() => {
    console.log('heyyy');
}, 100_000);
```

## Symbol usage

[From ChatGPT](https://chatgpt.com/share/684bc505-4868-8007-a3ae-736110abf488), [source](https://github.com/vercel/ai/blob/main/packages/ai/errors/no-such-tool-error.ts).

## Start http file server

`npx http-server .`

Output:

![image](https://github.com/user-attachments/assets/44b2dc94-5413-4920-8d68-05d42b53c2b0)

## ❤️ Profiling in nodejs

Awesome short video on YouTube: [Click here](https://youtu.be/n31Lraf9sLw)

## namings (Tags: #name)

[Source](https://www.linkedin.com/posts/danielmoka_clean-code-tip-prefix-your-booleans-heres-activity-7317426180607950849-r5wh/?utm_source=share&utm_medium=member_android&rcm=ACoAACnjF3MBGCxXzo_PNOui5bJf0HrPBLfTN08), [Article](https://craftbettersoftware.com/p/use-booleans-like-a-pro)

![image](https://github.com/user-attachments/assets/832c87b6-2855-4873-97b2-7016fe7999c2)


## ❤️ what are glob imports in js?

❤️From Sahil: For e.g, how svelte uses +page.of each folder to register router for frontend application. Similarly how nextjs manage routes from project/file structure.

[From ChatGPT](https://chatgpt.com/c/680502d2-27c8-8007-b3d3-c82b4597c329)

In JavaScript (especially when using tools like Vite, Webpack, or Rollup), glob imports refer to importing multiple files at once using a file path pattern (glob pattern)—similar to wildcards in the terminal.

They are not part of native JavaScript, but are supported by build tools for convenience.

Example (Vite):

```js
const modules = import.meta.glob('./modules/*.js');
```

This will dynamically import all `.js` files inside the modules folder.

**🍎What `import.meta.glob()` returns:**
- It returns an object where:
- The keys are the file paths.
- The values are functions that return a dynamic import (i.e., Promise of the module).

**Example:**

```js
const modules = import.meta.glob('./modules/*.js');

for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(`Loaded ${path}`, mod);
  });
}
```

**🚀Why use glob imports?**
- Useful for loading many modules without manually importing each one.
- Great for auto-registering components, routes, etc.

## Why amazon.com uses `href="javascript:void(0)"`  on their rating links?

The javascript:void(0) serves as a placeholder URL that doesn't navigate to a new page when clicked. (ChatGPT)

## ❤️ Javascript Cheatsheet - Sahil

[Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/README.md#javascript-cheatsheet---sahil)

## Common Lodash functions

Lodash Docs: [Click here](https://lodash.com/docs/4.17.15)

```ts
import { isNil, isUndefined, isNull, pick, mapValues, fromPairs, toPairs, map, clone, cloneDeep } from 'lodash'

// Simple obvious functions - clone(..), cloneDeep(..)

// Example - isNil(..) [Checks if value is null or undefined.]
isNil(null); // => true
isNil(void 0); // => true
isNil(NaN); // => false

// Example - isUndefined(..)
isUndefined(void 0) // true
isUndefined(null) // false

// Example - isNull(..)
isNull(null); // true
isNull(void 0) // false

// Example - mapValues(..)
const obj = { a: 1, b: 2, c: 3 };
// mapValues - To transforms only values, not the keys (equivalent to `Object.entries(obj).map(fn)`)
console.log(mapValues(obj, (value, key) => value * 2));
// { a: 2, b: 4, c: 6 }

// Example - A custom function using fromPairs, map and toPairs from `lodash`
// objectMap - To transform both the keys and values
const objectMap = (obj, fn) => fromPairs(map(toPairs(obj), fn));
//
const obj = { a: 1, b: 2, c: 3 };
const result = objectMap(obj, ([key, value]) => [`new_${key}`, value * 2]);
console.log(result);
// Output: { new_a: 2, new_b: 4, new_c: 6 }
```

## ❤️ Class - `Objeck.keys(..)`, `Object.getOwnPropertyNames(..)`, etc

- Javascript Info - Class: [Click here](https://javascript.info/class)
- From ChatGPT: [Click here](https://chatgpt.com/c/67cb7040-a3a0-8007-bf5f-3fe13a9f77e9)
	-  objeck.keys and Object.getOwnPropertyNames same?
	-  explain enumerable properties usage.

## Geeter, Setters in Object

<img src="https://github.com/user-attachments/assets/62fb6146-2b84-430a-9796-41a57e6b86f7" alt="drawing" width="600"/>

## 😇 How is console.log and console.error different in nodejs? (ChatGPT)

[Click here (Google Doc)](https://docs.google.com/document/d/1iz7n75o82j_T_5J2PGPqz1ucKUune9fSjcMfpzsC9kI/edit?tab=t.0#heading=h.k6pynfy5tvsc)

##  Disadvantages of structuredClone? (ChatGPT)

*Note: I found about it in [svelte's docs here](https://svelte.dev/docs/svelte/$state)*

The structuredClone method, which deep-clones JavaScript objects, has several potential drawbacks, despite its convenience:

Limited Browser Support: While structuredClone is widely supported in modern browsers, older browsers (like some versions of Internet Explorer) do not support it, which could be an issue for applications needing compatibility with legacy systems.

Performance Overhead for Large Objects: structuredClone may be slower than alternatives (such as manual deep cloning) when handling very large or complex objects, as it has to replicate each property and handle circular references. For simple objects, the performance difference may not be noticeable, but with deeply nested or large objects, it could lead to noticeable delays.

Serialization Constraints: structuredClone only works with data types that are serializable in JavaScript. This means it cannot clone objects with:

- Functions
- Class instances (unless they have a defined serialization method)
- Proxies
- Some types of non-standard properties
- Attempting to clone such objects will result in errors, making structuredClone unsuitable for objects containing non-serializable elements.

Loss of Prototypes and Methods: The cloning process strips away prototypes, methods, and non-enumerable properties, meaning that if you rely on methods or class instances, they won't carry over to the cloned object. Only pure data objects (without methods) are fully compatible.

Potential for Silent Errors: Because it throws errors when encountering non-cloneable data types, developers need to catch these errors. Otherwise, structuredClone may fail silently if not handled, leading to debugging challenges.

Limited Support for Circular References: While it supports circular structures in arrays and objects, certain complex circular references may not clone as expected, requiring additional handling.

For cases that need method retention, prototype inheritance, or support for non-serializable values, alternative approaches, like libraries (e.g., Lodash's cloneDeep), custom cloning functions, or JSON serialization (if limited to simple objects), might be more suitable.

## Math.trunc(...)

[Source - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)

Unlike the other three Math methods: Math.floor(), Math.ceil() and Math.round(), the way Math.trunc() works is very simple. It truncates (cuts off) the dot and the digits to the right of it, no matter whether the argument is a positive or negative number.

```css
console.log(Math.trunc(13.37));
// Expected output: 13

console.log(Math.trunc(42.84));
// Expected output: 42

console.log(Math.trunc(0.123));
// Expected output: 0

console.log(Math.trunc(-0.123));
// Expected output: -0

Math.trunc(-Infinity); // -Infinity
Math.trunc("-1.123"); // -1
Math.trunc(-0.123); // -0
Math.trunc(-0); // -0
Math.trunc(0); // 0
Math.trunc(0.123); // 0
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(Infinity); // Infinity
```

## ChatGPT says its okay to mix `await` and `catch` keywords

**My tests works too:**

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/9cc87557-de4f-49ba-8c85-38f386585a86)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/f150e219-6633-44b9-8ae3-fec8552d8e42)

## Learn global error handling

```js
process.on("unhandledRejection", (err) => {
	console.log('caught rejection')
	console.log('error?', err)
})

async function main() {
	throw 'rock paper scissor'
}
main()
```

```js
# Output:
caught rejection
error? rock paper scissor
```

## `??=`, `||=` and `&&=` operators

```js
// assings only if the variable is null or undefined
??=

// assigns if null, undefined or any other falsy value
||=

// assigns only if the value already exists
&&=


# Examples:
let car
car ??= 'bar'
// car is now 'bar'

let bat = ''
bat ||= 'something'
// now bat is 'something'

let cat = '   some test with spaces on both sides   '
cat &&= cat.trim()
// now cat is just 'some test with spaces on both sides'
```

## Merge duplicates with `reduce` array method

Learn: **`reduce` method creates a item i.e, `accumulator` and does *not* mutate the original array at all.**

Source: A comment in this answer: [Click here](https://stackoverflow.com/a/38294831/10012446)

```js
let arr = [
  { name: 'John', contributions: 2 },
  { name: 'Mary', contributions: 4 },
  { name: 'John', contributions: 1 },
  { name: 'Mary', contributions: 1 }
];


// we reduce our `arr` array to get `reduced array` i.e., output
let output = arr.reduce(function(accumulator, cur) {
  let found = accumulator.find((elem) => elem.name == cur.name);
  if (found) found.contributions = found.contributions + cur.contributions;
  else accumulator.push(cur);
  return accumulator;
}, []);

console.log(output) // [{"name": "John","contributions": 3},{"name": "Mary","contributions": 5}]
```

# Why use `Object.is(a,b)` instead of `===` to check if values are equal?

Source: [Click here](https://dmitripavlutin.com/object-is-vs-strict-equality-operator/)

```txt
// pros of Object.is() method
Object.is(-0, +0); // => false
Object.is(NaN, NaN); // => true

// cons of tripple equality operator
-0 === +0; // => true
NaN === NaN; // => false
```

# Are indices/keys returned in `for..in` loop of string type?

Yes, they are! This is unexpected to most people though, but typescript will sail your boat for sure. Love typescript!

![image](https://user-images.githubusercontent.com/31458531/203392746-046eb09a-080a-49d1-84ba-6dedef15ea37.png)


# Are string objects?

No, but they can be explored using using object methods.

![image](https://user-images.githubusercontent.com/31458531/203335263-051e71ad-7ff0-4206-9274-44c08d827945.png)

String act as array with index and values like that:

![image](https://user-images.githubusercontent.com/31458531/203339880-9fa4cce1-f3b3-4cbb-8e39-a94efa92f8f1.png)



# `Object.assign()`

**TLDR: Its amazing.** Source: Comment on SO Question [Click here](https://stackoverflow.com/questions/66459300/better-syntax-for-assigning-a-same-name-value-to-object-key-javascript)

```js
const name = 'David'
const person = { name : 'sahil' }

// instead of doing
person.name = name

// ❤️ you can simply do
Object.assign(person, { name })
// Object.assign(window, { person }) // this is equivalent to `window.person = persons`

// ❤️
Object.assign(window, { person }).person // this prints updated value of `window.person`
```



# Modules

```js
import defaultExport, * as name from "module-name";
import defaultExport, { export1 } from "module-name";
const { default: myDefault, foo, bar } = await import('/modules/my-module.js');



// Anonymous
let myObject = {
  field1: value1,
  field2: value2
};
export {myObject as default};

// above export is equivalent to below:
export default {
  field1: value1,
  field2: value2
};
```

src: [Import in js | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports)

### Simple example usage of js modules from ST Answer

Source: [Click here](https://stackoverflow.com/a/38131639/10012446)

```js
// values/value.js
let a = 1;
let b = 2;
let c = 3;

export {a, b, c};
```

```js
// values/index.js
import * as values from './value';

export default values;
export * from './value';
```

```js
// index.js
import values, {a} from './values';

console.log(values, a); // {a: 1, b: 2, c: 3} 1
```

### Enable ecma modues with nodejs

Desirable way: `node --input-type=module test.js`. Refer here for all ways to do this: [Enabling ESM | Official Docs](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_enabling). Also, tho use `node test.mjs` if the former seems to much. And do read about the [awesomeness of convention of file extensions standard](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_mandatory_file_extensions) which is also followed in browsers as well and thus actualy good for real.

# Serial and parallel asynchronous execution in javascript/nodejs

- **Parallel execution:**

	You can use `Promise.all` or `Promise.allSettled` way. See it on mdn docs.

- **Serial Execution (works in nodejs as well)**

	```js
	const tokens = ['dai', 'bat', 'rep', 'zrx']
	const traders = ['trader1', 'trader2', 'trader3', 'trader4']

	const get = async (tr, tk) => await new Promise((res) => setTimeout(() => res(tk + '+' + tr), 300))

	async function main() {
		console.log('----- Using for-of loops')
		for (const tk of tokens) {
			for (const tr of traders) {
				const v = await get(tk, tr)
				console.log(v)
			}
		}
		console.log('----- Using simple for loops')
		for (let i = 0; i < tokens.length; i++) {
			const tk = tokens[i]
			for (let j = 0; j < traders.length; j++) {
				const tr = traders[j]
				const v = await get(tk, tr)
				console.log(v)
			}
		}
		console.log('----- Using while loops')
		let i = 0
		while (i < tokens.length) {
			const tk = tokens[i]

			let j = 0
			while (j < traders.length) {
				const tr = traders[j]
				const v = await get(tk, tr)
				console.log(v)
				j++
			}
			i++
		}
		console.log('----- Using for await (unnecessary')
		for await (const tk of tokens) {
			for await (const tr of traders) {
				const v = await get(tk, tr)
				console.log(v)
			}
		}
	}
	main()

	// All of above outputs like that:
	//
	// OUTPUT:
	// bat+trader2
	// bat+trader3
	// bat+trader4
	// rep+trader1
	// rep+trader2
	// rep+trader3
	// rep+trader4
	// zrx+trader1
	// zrx+trader2
	// zrx+trader3
	// zrx+trader4
	```

- **Make async/await cleaner with simple if checks**

	```js
	async function fetchData({isBad}) {
		try {
			if (isBad) throw 'The request is not good...'

			const data = 'result data...' // for e.g., `return await anyPromsieHere()`
			return [data, null]
		} catch (error) {
			return [null, error]
		}
	}

	async function main() {
		// src: https://youtu.be/ITogH7lJTyE
		const [data, error] = await fetchData({isBad: true}) //toggle isBad to toggle different behaviour of the api.
		if (data) {
			console.log('got data..')
		}
		if (error) {
			console.log('there is some error with the api...')
		}
	}

	main()
	```

	*This might look like a overkill for any simple api but if you have only two three api's and you need to check add try/catch for each of them in a single scope it all becomes whole messy to look at ... but if you use something like..*

	```js
	const [userData, userError] = await fetchUserData({ isBad: true });
	const [locationData, locationError] = await fetchLocationData({ isBad: true });
	const [friendsData, friendsError] = await fetchFriendsData({ isBad: true });
	```
	Now you can simly put 6 if checks to check for what is actually error and you code actually gets out of control (i.e., *program control) LITERALLY.

- **Resources:**
	- Articles and Videos:
		- Article: HOW TO RUN ASYNC JAVASCRIPT FUNCTIONS IN SEQUENCE OR PARALLEL: [Click here](https://jrsinclair.com/articles/2019/how-to-run-async-js-in-parallel-or-sequential/). Tip: You can put the results of each promise in some array say myArray.push(item) sequence execution.
		- Video: JavaScript Promises In 10 Minutes @YouTube: [Click here](https://www.youtube.com/watch?v=DHvZLI7Db8E)
		- Artice: A Simple Guide to Asynchronous JavaScript: Callbacks, Promises & async/await: [Click here](https://dev.to/koladev/a-simple-guide-to-asynchronous-javascript-callbacks-promises-async-await-4m03)
		- Video: Tips For Using Async/Await in JavaScript @ YouTube: [Click here](https://youtu.be/_9vgd9XKlDQ)

		![image](https://user-images.githubusercontent.com/31458531/195805422-a8bee887-c810-4825-9e77-6646d45c8ff5.png)
	-  MDN - [`For await of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
	-  MDN - [forEach on using async callbacks?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#description)
		> Note: forEach expects a synchronous function.
		> forEach does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callback.


## I love Promise.allSettled more that I hate `try{}catch(e){}` syntax

read more @ https://javascript.info/promise-api#summary

```
let b = () => Promise.reject(20)

await Promise.allSettled([b()])
// ouput: keyPoint: It never throws error(i.e., `reject("someErrorMessage")`. Yikes!
[
    {
        "status": "rejected",
        "reason": 20
    }
]
So, now you would be tempting to re-write all your previous `try{}catch(e){}` flavoured in a more if/else like manner, don't you .?

// I mean instead of writing:

try{
    const res = await fetch('ss')
    await res.json()
}catch(e){
    console.log('Caught program control thief :LOL: ~sahil~\n', e)
}
// ouput:
Caught program control thief :LOL: ~sahil~
 SyntaxError: Unexpected token < in JSON at position 0

// you can write more synchronouse looking code, e.g.,

let res = await fetch('ss')
let [settledRequest] = await Promise.allSettled([res.json()])
if(settledRequest.status === 'fulfilled') console.log('yikes, got value', settledRequest.value)
if(settledRequest.status === 'rejected') console.log('shit, got reason', settledRequest.reason)
// isn't that the way you wanted code to be written like from a long time...?
```

## `Promsise.all` vs. `Promise.allSettled` (i.e., either `resolved` or `rejected`)

```js
let a = () => Promise.resolve(10)
let b = () => Promise.reject(20)

// Promise.allSettled
await Promise.allSettled([a(), b()])
// output: keyPoint: It never throws error so we can use it without try and catch(what a godly thing, isn't it ?).
[
    {
        "status": "fulfilled",
        "value": 10
    },
    {
        "status": "rejected",
        "reason": 20
    }
]

// Promise.all
try{
    await Promise.all([a(), b()])
}catch(e){
    console.log('boom', e)
}

// output:
boom 20
```
