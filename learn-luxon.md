# Learn Luxon

Tip: You can run below commands in browser console on site: https://moment.github.io/luxon/

```javascript
luxon.DateTime.fromISO('2022-10-17T00:00:00Z').toJSDate().toISOString()
// '2022-10-17T00:00:00.000Z'
```

**Duration:**

```js
// const { Duration } = require('luxon');

// Create a Duration from a number of seconds
const numberOfSeconds = 3600; // 1 hour
const duration = luxon.Duration.fromObject({ seconds: numberOfSeconds });

console.log(duration.toFormat("h 'hours,' m 'minutes,' s 'seconds'"));
// OUTPUT: 1 hours, 0 minutes, 0 seconds
```
