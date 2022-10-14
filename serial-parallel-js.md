# Serial and parallel execution in javascript/nodejs

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

