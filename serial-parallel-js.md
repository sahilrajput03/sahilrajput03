# Serial and parallel execution in javascript/nodejs

**Serial Execution (works in nodejs as well)**

```js
const tokens = ['dai', 'bat', 'rep', 'zrx']
const traders = ['trader1', 'trader2', 'trader3', 'trader4']

async function main() {
	for await (const tk of tokens) {
		for await (const tr of traders) {
			const v = await new Promise((res) => res(tk + '+' + tr))
			console.log(v)
		}
	}
	console.log('-----')
	for (const tk of tokens) {
		for (const tr of traders) {
			const v = await new Promise((res) => res(tk + '+' + tr))
			console.log(v)
		}
	}
	console.log('-----')
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
