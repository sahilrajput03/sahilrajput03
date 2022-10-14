# Serial and parallel execution in javascript/nodejs

- **Parallel execution:**

	You can use `Promise.all` or `Promise.allSettled` way. See it on mdn docs.

- **Serial Execution (works in nodejs as well)**

	```js
	const tokens = ['dai', 'bat', 'rep', 'zrx']
	const traders = ['trader1', 'trader2', 'trader3', 'trader4']

	async function main() {
		console.log('----- Using simple for loops')
		for (let i = 0; i < tokens.length; i++) {
			const tk = tokens[i]
			for (let j = 0; j < traders.length; j++) {
				const tr = traders[j]
				const v = await new Promise((res) => res(tk + '+' + tr))
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
				const v = await new Promise((res) => res(tk + '+' + tr))
				console.log(v)
				j++
			}
			i++
		}
		console.log('----- Using for loops')
		for (const tk of tokens) {
			for (const tr of traders) {
				const v = await new Promise((res) => res(tk + '+' + tr))
				console.log(v)
			}
		}
		console.log('----- Using for await (unnecessary')
		for await (const tk of tokens) {
			for await (const tr of traders) {
				const v = await new Promise((res) => res(tk + '+' + tr))
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

- **Resources:**
	- HOW TO RUN ASYNC JAVASCRIPT FUNCTIONS IN SEQUENCE OR PARALLEL: [Click here](https://jrsinclair.com/articles/2019/how-to-run-async-js-in-parallel-or-sequential/). Tip: You can put the results of each promise in some array say myArray.push(item) sequence execution.
	- For await of - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
	- forEach on using async callbacks? [Click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#description)
		> Note: forEach expects a synchronous function.
		> forEach does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callback.
	- 
