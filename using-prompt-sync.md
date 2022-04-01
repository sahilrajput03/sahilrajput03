# Using `prompt-sync`
- ***You need to do `npm i prompt-sync` to install the dependency.***

```js
// DYNAMIC INPUT CASE :
const prompt = require('prompt-sync')({sigint: true})
let q = []

let length = Number(prompt())
for (let i = 0; i < length; i++) {
	q[i] = []
	let items = prompt().split(' ')
	for (let j = 0; j < items.length; j++) {
		q[i].push(items[j])
	}
}

// STATIC INPUT CASE (FOR TESTING):
// let q = [
// 	[2, 2],
// 	[3, 2],
// 	[2, 1],
// ] // check if this query has array A of size N such that..., condition apply!
// EXPECTED OUTPUT:
// NO
// YES
// YES

solve(q)

function solve(q) {
	let sol = []

	q.forEach((arr) => {
		// codition 1 DONE!
		let c1 = arr.every((el) => {
			let isPositive = el > 0
			let isInteger = el % 1 == 0
			return isPositive && isInteger
		})

		// codition 2 ?
		let sum = arr.reduce((previousValue, currentValue) => previousValue ^ currentValue)
		let c2 = sum === 0

		if (c1 && c2) {
			sol.push('NO')
		} else {
			sol.push('YES')
		}
	})

	// printing solution
	sol.forEach((s) => console.log(s))
}
```