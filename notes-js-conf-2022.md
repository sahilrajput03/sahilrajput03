# JS conf 2022

Source: [JSConf Budapest 2022 - Day One, Morning](https://youtu.be/z4JnSGupxUs)

- Web Performance, [click here](conf-web-performance.md)
- Making Voice Interfaces like alexa, [click here](https://youtu.be/z4JnSGupxUs?t=7774)
- Encryption, decryption, digitalsignature (signing and verifying). [Click here], amazing-rsa--demo site: https://rsa.sambego.tech/, Slides here: https://jose.sambego.tech, SHA256 Demo: https://sha256algorithm.com/, ![image](https://user-images.githubusercontent.com/31458531/173990306-d3fda291-4221-48d8-b4b8-ccfeeabfb854.png).

Presentations made easy with react: 

```txt
pkg used: https://www.npmjs.com/package/@sambego/diorama
github (pkg code): https://github.com/d/diorama

ppt1: https://jose.sambego.tech/
github1: https://github.com/Sambego/jose-presentation

ppt2: https://sambego.github.io/diorama-demo/
github2: https://github.com/Sambego/diorama-demo
```
- Assessibility: [Click here](https://youtu.be/z4JnSGupxUs?t=13691)

![image](https://user-images.githubusercontent.com/31458531/173996672-21622eb5-b5d6-4796-9fbe-05fd6551237b.png)



**crypto currencty, web3.0?**

- ethereum: solidity language
- solana: rust langauge

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

[Javascript Jabber - Podcast](https://javascriptjabber.com/)


