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
}
main()

# OUTPUT:
# bat+trader2
# bat+trader3
# bat+trader4
# rep+trader1
# rep+trader2
# rep+trader3
# rep+trader4
# zrx+trader1
# zrx+trader2
# zrx+trader3
# zrx+trader4
```
