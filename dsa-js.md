# DSA problem solving in JS

Input reading libraries: [inquirer](https://github.com/SBoudrias/Inquirer.js), [readline-sync](https://www.npmjs.com/package/readline-sync)

[Source: nodejs docs - Accept-input-from-the-command-line-in-nodejs](https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs)

- Using native readline via async code:

	```js
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	})

	const read = () => new Promise((resolve) => readline.question(``, resolve))

	const main = async () => {
		console.log(await read())
		readline.close() // This is not redundant!

		// do your programming stuff here!
		console.log('program code here....')
	}
	main()
	```

## Problem 1

```txt
You are given Q queries. In each query, determine whether there exists an array A of size N such that:

1. All the elements are positive integers.

2. The number of subarrays such that their XOR-sum is 0 is exactly K. In other words, there are exactly K pairs of integers (l, r) such that 1 ≤ l ≤ r ≤ N and Al ⊕ Al+1 ⊕ ... Ar = 0.

If there exists such an array, print "YES", otherwise print "NO".
Input
The first line of the input contains a single integer Q — the number of queries (1 ≤ Q ≤ 105).
Q lines follow, each line containing two space separated integers N (1 ≤ N ≤ 1000) and K (1 ≤ K ≤ N(N+1)/2).
Output
For each test case, print "YES", if there exists such an array, otherwise print "NO" (without the quotes).

Note that the output is case sensitive.
Example
Sample Input
3
2 2
3 2
2 1

Sample Output
NO
YES
YES
```

Solution:

*For same solution using `prompt-sync` you may [click here](using-prompt-sync.md).*

```
// `readline` is native module in nodejs
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})
const read = () => new Promise((resolve) => readline.question(``, resolve))

async function main() {
	// DYNAMIC INPUT CASE :
	let q = []
	let length = Number(await read())
	for (let i = 0; i < length; i++) {
		q[i] = []
		let items = (await read()).split(' ')
		for (let j = 0; j < items.length; j++) {
			q[i].push(items[j])
		}
	}
	readline.close() // THIS IS IMPORTANT!

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
}

main()
```