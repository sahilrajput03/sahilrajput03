# Jest and expect

**Jest Cheatsheet:** [Click here](https://devhints.io/jest)

- **react testing:** [Click here](https://github.com/sahilrajput03/learn-react/tree/main/jest-testing)

- **Testing asynch operation with jest**

```js
describe.only('something', () => {
  it.only('shoudl it be?', (done) => {
    console.log('hello');
    done() // if done is not called then the test will not pass at all. In fact the setTimeout warning is thrown.
  });
});
```
