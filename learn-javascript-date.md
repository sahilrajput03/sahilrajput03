# Epoch time (or Unix timestamp in milliseconds) made simple

Q. What is epoch time? Ans. **Basically the number of milliseconds since midnight, 1970-01-01.**

```js
// Unix timestamp in milliseconds
k = Date.now() // 1674254700963

// making 
dateObject = new Date(k)

// date object to epoch time
l = dateObject.getTime() // 1674254700963

// testing
l === k
true
```


# Testing with quokkajs

```js
// get month name, src: https://stackoverflow.com/a/18648314/10012446
const date = new Date(2009, 4, 20);// 20 May 2009
const month = date.toLocaleString('default', { month: 'long' }); // May
// or simply do
const month = new Date().toLocaleString('default', { month: 'long' }); // May

// get number of days in a month in javascript
const getDaysInaMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate() // 28
  // inspiration: https://bobbyhadz.com/blog/javascript-get-number-of-days-in-current-month
}
// For february(month=1 bcoz months start by jan=0 in javascript) 2022
console.log(getDaysInaMonth(2022, 1)) // 28


// for date: 24/may(05)/2022, Day: Tuesday=2 (sunday=0), year=122+1900=2022 (1900 is a constant)
new Date().getDay()
// 2
new Date().getDate()
// 24
new Date().getMonth()
// 4
new Date().getYear()
// 122



let k = new Date()
// Thu Aug 26 2021 15:46:20 GMT+0530 (India Standard Time)
k.toLocaleDateString()
// "8/26/2021"
k.toLocaleTimeString()
// "3:46:20 PM"
k.toLocaleString()
// "8/26/2021, 3:46:20 PM"

// get timezone:
k.getTimezoneOffset()
// -330 bcoz: [0 - +5:30] =>  [0 - (5*60 + 30)] => [0 - (300 + 30)] => [-330].

// or simply
k.getTimezoneOffset()/-60
// 5.5 i.e., +5:30 gmt.

// create a json string from date object:
k.toJSON()
// '2021-10-04T08:44:27.140Z'


////////

// Tip: Use quokkajs to see inline values.
// `Date.now` returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
let dateNumericValue = Date.now() // 1674254700963
// Find the detailed api of Date @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let someday = Date() // Best way to create date(coz by default it creates dates in string format 🤹︎🤹︎)
console.log(typeof someday) // "string"
console.log(new Date(someday)) // (Date Object) Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)
console.log(typeof new Date(someday)) // "object"

let today = new Date()
console.log(typeof today) // "object"
console.log(today) // (Date Object) Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)

console.log(today.toString()) // "Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)"
console.log(String(today)) // "Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)"

// Getting Date object back from string format of date.
console.log(new Date(today.toString())) // (Date Object) Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)
console.log(new Date(String(today))) // (Date Object) Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)

console.log(typeof today.toString()) // "Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)"
console.log(typeof String(today)) // "Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)"

console.log(new Date()) // (Date Object) Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)
console.log(new Date(Date.parse(new Date().toString()))) // (Date Object) Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)
console.log(Date()) // "Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)"
console.log(new Date(Date.parse(Date()))) // (Date Object) Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)

console.log(Date.parse(today.toString())) // 1621153266400
console.log(Date.parse(String(today))) // 1621153266400

// --------------------------------------------------------

let myFunction = (a, b) => a + b // If we use syntax function keyword syntax to create function, it would produce same result.
console.log(myFunction)
console.log(typeof myFunction)

let myFunction_badStringify = JSON.stringify(myFunction)
console.log(myFunction_badStringify)
console.log(typeof myFunction_badStringify)

// --------------------------------------------------------

let tomorrow = new Date()
console.log(tomorrow)

// --------------------------------------------------------

// ? Testing with .toUTCString method to convert a date object to stirng object.
console.log(new Date().toUTCString())
// expected output: "Wed, 14 Jun 2017 07:00:00 GMT"
// * The output is just '5 hours and 30 minutes' behind the indian time bcoz india time is 5 hours and 30 minutes of utc(Cordinate Universal Time (it is a 🏇︎reverse acronym)) time

console.log(new Date(new Date().toUTCString())) // (Date Object) Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)

// ? Testing with methods like getDate, getMonth, getHours, getMinutes and getSeconds.
let currentdate = new Date()
let datetime =
  'Magic: ' +
  currentdate.getDate() +
  '/' +
  (currentdate.getMonth() + 1) +
  '/' +
  currentdate.getFullYear() +
  ', Time:' +
  currentdate.getHours() +
  ':' +
  currentdate.getMinutes() +
  ':' +
  currentdate.getSeconds()

console.log(datetime)
// ────────────────────────────────────────────────────────
// ? Testing with String method::
console.log(String([2, 3, 4, 5, 5, {a: 20}]))
//Output: "2,3,4,5,5,'[object Object]';

console.log(String({a: 20}) === '[object Object]') // true

// Output: "Magic: 16/5/2021, Time:13:41:15"

// Footnotes: 🏇︎🏇︎🏇︎🏇︎🏇︎
// Output: "[object Object]";
// Src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
//
// Also, you can refer utc for dates too.
// src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC

// ? Some shit💩︎ 💩︎ coz I wanted shit with json.stringify and json.parse(You never need shit, but simply use ``new Date().toUTCString()`` to store any date and later use Date.parse to parse the string into date object.🙂︎🙂︎)
let today_badDateObject = JSON.parse(JSON.stringify(today))
console.log(typeof today_badDateObject) // "string"
console.log(today_badDateObject) // "2021-05-16T08:22:31.140Z"
console.log(Date.parse(today_badDateObject)) // 1621153525610

let today_DateObject = JSON.parse(JSON.stringify(today.toString())) // Or you could String(Date) too.
console.log(typeof today_DateObject) // "string"
console.log(today_DateObject) // "Sun May 16 2021 14:44:24 GMT+0530 (Indian Standard Time)"
console.log(Date.parse(today_DateObject)) // 1621153592000
```
