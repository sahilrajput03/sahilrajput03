# JS conf 2022

Source: [JSConf Budapest 2022 - Day One, Morning](https://youtu.be/z4JnSGupxUs)

Add to tasks: 

## JS Conf 2021

Kyle Simpson:
- Calculating hypotenuse:

```js
// Get hypotenuse
Math.sqrt(3**2 + 4**2) // 5

// returns either a positive or negative +/- 1 or 0
// Note that if the number is positive, an explicit (+) will not be returned.
console.log(Math.sign(3)); // expected output: 1
console.log(Math.sign(-3)); // expected output: -1
console.log(Math.sign(0)); // expected output: 0
console.log(Math.sign('-3')); // expected output: -1

// Absolute value
Math.abs(-21.2) // 21.2

// Diagonal Distance
function distance(x1,y1,x2,y2){
  return Math.sqrt(((x2-x1)**2) + ((y2-y1)**2))
}
```

```js
// return the arc sine of a number, with the result expressed in radians
Math.asin(1) // 1.5707963267948966

// ^^ Getting this angle in degree (it has to be 90 degrees)
function radians_to_degrees(radians){
  var pi = Math.PI;
  return radians * (180/pi);
}
```
