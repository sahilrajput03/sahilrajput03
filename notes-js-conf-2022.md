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

![image](https://user-images.githubusercontent.com/31458531/173996672-21622eb5-b5d6-4796-9fbe-05fd6551237b.png), color contrast thing in chrome (also available in firefox): ![image](https://user-images.githubusercontent.com/31458531/174000230-0d547409-ce7d-4b16-b727-0a50412d626c.png)



**crypto currencty, web3.0?**

- ethereum: solidity language
- solana: rust langauge

 - 7±2 Reasons Psychology Will Help You Write Better Code: [Click here](https://www.youtube.com/watch?v=z4JnSGupxUs&t=16559s) ![image](https://user-images.githubusercontent.com/31458531/174287089-c2ff8b19-a122-4396-83a5-39428e9d5c45.png)

Chunking can help in code readability and code debugging: ![image](https://user-images.githubusercontent.com/31458531/174288314-f0b7f507-3b0d-4cc9-8d7a-cc00e887fa68.png)

Code reviews should be colde: ![image](https://user-images.githubusercontent.com/31458531/174290041-965d591b-096f-4e7f-8bef-80766b4fd36f.png)
![image](https://user-images.githubusercontent.com/31458531/174290103-5f37ee84-6165-4ca9-8e27-fe9e99fc1ae3.png)
![image](https://user-images.githubusercontent.com/31458531/174290446-8250f18a-00f6-4fa3-b765-a8b1a5346211.png)

- Doctors will see you now (video call conference with background changing feature): [click here](https://www.youtube.com/watch?v=z4JnSGupxUs&t=18340s)



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


