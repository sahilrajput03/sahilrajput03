# Learn Luxon

Tip: You can run below commands in browser console on site: https://moment.github.io/luxon/

```js
// creating date from luxon
const now = luxon.DateTime.now();

// creating ISO string from luxon date
console.log(now.toJSDate().toISOString())
// OUTPUT: '2023-10-24T16:34:17.155Z'

// Creating date from ISO string
luxon.DateTime.fromISO('2022-10-17T00:00:00Z')
```

**Duration:**

```js
// const { Duration } = require('luxon');

// Create a Duration from a number of seconds
const numberOfSeconds = 3600; // 1 hour
const duration1 = luxon.Duration.fromObject({ seconds: numberOfSeconds });
console.log(duration1.toFormat("h 'hours,' m 'minutes,' s 'seconds'"));
// OUTPUT: 1 hours, 0 minutes, 0 seconds


// Create a Duration from difference b/w two dates
const startTime = luxon.DateTime.now();
// Do some computations....
const now = luxon.DateTime.now();
const duration2 = now.diff(startTime);
console.log(duration2.toFormat("h 'hours,' m 'minutes,' s 'seconds'"));
// OUTPUT: 0 hours, 0 minutes, 7 seconds
```
