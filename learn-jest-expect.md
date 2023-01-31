# Jest and expect

**Jest Cheatsheet:** [Click here](https://devhints.io/jest)

- **react testing:** [Click here](https://github.com/sahilrajput03/learn-react/tree/main/jest-testing)

- **Bare setup with just `expect` and typescript setup:**

  - `mkdir my-jest-app; cd my-jest-app; npm init -y; mkdir __tests__ && echo "test('simple', () => expect(1).toBe(1))" > __tests__/a.ts && npm i -D expect jest @types/jest`
  - Add script to `package.json` file: `"test": "jest --watchAll"`
  - Now you can run below command to start testing without even jest: `npm run test`
  - IMPORTANT: For typescript support: [docs](https://jestjs.io/docs/getting-started#using-typescript), you need to install deps: `npm i -D @babel/preset-env @babel/preset-typescript` and create a file in root project i.e, `babel.config.js` with below contents:

```js
module.exports = {
	presets: [
	  ['@babel/preset-env', {targets: {node: 'current'}}],
	  '@babel/preset-typescript',
	],
  };
```

- **learn about mock functions:**

By Eric's Suggested Article: [Click here](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)

- **For bettter testing use `expect().toEqual(...)`**

  **Tip:** If you don't have string matches you can use store sample date in `.json` file as well.

  	```js
  	import expect from 'expect'
	
	const SIMPLE_MONGODB_ID_REGEX = /^[a-f\d]{24}$/i // 24 characters ~Sahil
	
	const response = [
		{
			_id: '63ab12b2fa6c5356d22a298d',
			userName: 'yolo',
			firstName: 'Nelson Mandela',
			profilePic: 'http://localhost:4444/placeholders/default_user_icon.png',
		},
	]
	
	// Learn Usage of:
	// 1. .toEqual(...)
	// 2. expect.stringMatching(...)
	// 3. expect.not.stringContaining(...)
	
	expect(response).toEqual([
		{
			_id: expect.stringMatching(SIMPLE_MONGODB_ID_REGEX),
			userName: 'yolo',
			firstName: 'Nelson Mandela',
			profilePic: 'http://localhost:4444/placeholders/default_user_icon.png',
		},
	])
	expect([{name: 'sahil rajput'}]).toEqual([
		{
			name: expect.stringContaining('sahil'),
		},
	])
	expect([{name: 'sahil rajput'}]).toEqual([
		{
			name: expect.stringContaining('rajput'),
		},
	])
	expect([{name: 'sahil rajput'}]).toEqual([
		{
			name: expect.not.stringContaining('om'),
		},
	])
  	```

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
    // ...
  }, 10000)
  ```

- **You can define jest config for a single file basis by that**

  ![image](https://user-images.githubusercontent.com/31458531/211875277-0fa30c25-a9c0-4331-85ad-a32ac42fbb2f.png)

