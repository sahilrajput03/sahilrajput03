# Learn Luxon

**Quick Links:**
- ❤️moment vs. luxon on npmtrends.com: https://npmtrends.com/luxon-vs-moment-vs-moment-timezone
- Luxon - Full Sheet: [Click here](https://moment.github.io/luxon/demo/global.html)

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

**Weekday:**

```
// Get the day of the week. 1 is Monday and 7 is Sunday
DateTime.(...)
            .weekday
// OUTPUT: 1,2,3,4,5,6,7
```

**Time zone, plus, endOf:**

```
// Others
DateTime.(...)
            .setZone("Europe/Berlin") // to get time in a particular timezone
            .plus({month: 1}) // to add certain days
            .endOf('month') // to get end of that month
```
