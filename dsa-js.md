# DSA problem solving in JS

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