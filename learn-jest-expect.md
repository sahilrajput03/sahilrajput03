# Jest and expect

**Jest Cheatsheet:** [Click here](https://devhints.io/jest)

- **react testing:** [Click here](https://github.com/sahilrajput03/learn-react/tree/main/jest-testing)

- **You can increase timeout for a single test like that:**

Source: [Click here](https://stackoverflow.com/a/68812335/10012446)

![image](https://user-images.githubusercontent.com/31458531/210116688-d0532a2e-c8ca-4434-b4c4-5c23c7b12cbf.png)


- **Testing asynch operation with jest**

```js
describe.only('something', () => {
  it.only('shoudl it be?', (done) => {
    console.log('hello');
    done() // if done is not called then the test will not pass at all. In fact the setTimeout warning is thrown.
  });
});
```

- Socket.io Testing with jest:  Click here: Official Docs - [Click here](https://socket.io/docs/v4/testing/)

- Amazingly defined funcion to wait for a callback function but reject after 2 seconds if didn't receive the event, YO!!

![image](https://user-images.githubusercontent.com/31458531/203509895-cc71e1db-36c1-4f62-be6b-d1e55a211d8f.png)


- **Jest debugging command from official docs:** `node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]`

- **Define test timeout for a individual test like that:**

```js
it('does a lot of stuff exceeding default 5 sec timeout', async () => {
  ...
}, 10000)
```

- **You can define jest config for a single file basis by that**

![image](https://user-images.githubusercontent.com/31458531/203556828-7bfd2f7b-1886-4982-b35a-ccd68e476e29.png)
