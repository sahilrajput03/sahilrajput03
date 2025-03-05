# Jest and expect

**Quick Links:**
- ❤️ with-jest-supertest-axios: [learn-express/with-jest-supertest-axios](https://github.com/sahilrajput03/learn-express/tree/main/with-jest-supertest-axios)
- **Jest Cheatsheet:** [Click here](https://devhints.io/jest)
- **react testing:** [Click here](https://github.com/sahilrajput03/learn-react/tree/main/jest-testing)


## Bare setup with just `expect` and typescript setup:

  - `mkdir my-jest-app; cd my-jest-app; npm init -y; mkdir __tests__ && echo "test('simple', () => expect(1).toBe(1))" > __tests__/a.ts && npm i -D expect jest @types/jest`
  - Add script to `package.json` file: `"test": "jest --watchAll"`
  - Now you can run below command to start testing without even jest: `npm run test`
  - IMPORTANT: For typescript support: [docs](https://jestjs.io/docs/getting-started#using-typescript), you need to install deps: `npm i -D ts-jest @babel/preset-env @babel/preset-typescript` and create a file in root project i.e, `babel.config.js` with below contents:

	```js
	module.exports = {
		presets: [
		  ['@babel/preset-env', {targets: {node: 'current'}}],
		  '@babel/preset-typescript',
		],
	  };
	```

## Remove default console.log format of jest

Check this issue on jest's github: [Click here](https://github.com/jestjs/jest/issues/10322#issuecomment-1304375267)

## ❤️ `.toEqual` Use this as much as possible (or even better `.toStrictEqual`)

My Luxon Notes: Learn Luxon: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/master/learn-luxon.md)

```ts
// For services:
expect(...).toEqual({
	_id: expect.any(mongoose.Types.ObjectId),
	createdAt: expect.any(Date),
	updatedAt: expect.any(Date),
})

// For e2e:
expect(...).toEqual({
	_id: expect.stringMatching(SIMPLE_MONGODB_ID_REGEX),
	createdAt: expect.any(String),
	updatedAt: expect.any(String),
	startDate: '2022-10-24T00:00:00.000Z', // using dates with `luxon.DateTime.fromISO('2022-10-17T00:00:00Z').toJSDate().toISOString()`
	endDate: '2022-10-25T23:59:59.000Z', // using dates with `luxon.DateTime.fromISO('2022-10-25T23:59:59Z').toJSDate().toISOString()`
	// NOTE the difference of extra .000 before Z
})
```

### Difference between `toEqual` and `toStrictEqual` (ChatGPT)

[Click here](https://chatgpt.com/c/67a678bf-6134-8007-8b12-23a754d77be1)

**`toEqual`**

```js
test('toEqual ignores undefined properties', () => {
  expect({ a: 1, b: undefined }).toEqual({ a: 1 });
});
✅ Test passes because toEqual ignores undefined properties.
```

**`toStrictEqual`**

Example 1:

```js
test('toStrictEqual does not ignore undefined properties', () => {
  expect({ a: 1, b: undefined }).toStrictEqual({ a: 1 });
});
❌ Test fails because b: undefined is explicitly different.
```

Example 2:

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

test('toStrictEqual checks class instances', () => {
  expect(new Person('Alice')).toStrictEqual({ name: 'Alice' });
});
❌ Test fails because { name: 'Alice' } is a plain object, while new Person('Alice') is an instance of Person.
```

**Summary:** *Use toStrictEqual when you want precise comparisons, including class instances and undefined properties. Use toEqual when you need looser deep equality.*

## Summary: When NOT to Use `toMatchObject`

Source: [ChatGPT](https://chatgpt.com/c/67a678bf-6134-8007-8b12-23a754d77be1)

![image](https://github.com/user-attachments/assets/1bef115c-356c-47e9-8f41-eb8192858fdd)

## File deletion and exists check with jest

```ts
it.only('if given path is exists then it will return that same path', async () => {
  function runTest() {
    const tempFilePath = path.join(os.tmpdir(), 'myfile.jpg');
    const fh = fs.openSync(tempFilePath, 'w');
    fs.writeSync(fh, '.', 3);
    fs.closeSync(fh);
    expect(existsSync(tempFilePath)).toBe(true);
    unlinkSync(tempFilePath);
    expect(existsSync(tempFilePath)).toBe(false);
  }
  for (let i = 0; i < 10_000; i += 1) {
    console.log('iter:', i);
    runTest();
  }
});
```

## What's the difference between “foo.spec.ts” and “foo.test.ts"?

Source: [Click here](https://softwareengineering.stackexchange.com/a/373367)

It is just a "matter of taste" as you describe it. Just a way to group your test files, so that the test runners know what files to load / look in for test methods.

(If you look at the documentation for runner like Jasmine and mocha. You configure "file globs" to tell them how to find the files to run. Some thing like `/**/*.test.ts`)

In your projects, you could configure anything you want. (Or even just move all your test code to a "test" folder, and not have any special file name conventions)

The `*.test.ts` and `*.spec.ts` are just common conventions recommended by the different testing frameworks.

## How to check multiple arguments on multiple calls for jest spies

- Inspiration: [Click here](https://stackoverflow.com/a/50600842/10012446) (includes the link to below referred `expect` docs.
- Source of below text - `expect` Docs: [Click here](https://jestjs.io/docs/expect#tohavebeennthcalledwithnthcall-arg1-arg2-)

**`.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)`** *[Also under the alias: `.nthCalledWith(nthCall, arg1, arg2, ...)`]*

If you have a mock function, you can use .toHaveBeenNthCalledWith to test what arguments it was nth called with. For example, let's say you have a drinkEach(drink, Array<flavor>) function that applies f to a bunch of flavors, and you want to ensure that when you call it, the first flavor it operates on is 'lemon' and the second one is 'octopus'. You can write:

```ts
test('drinkEach drinks each drink', () => {
  const drink = jest.fn();
  drinkEach(drink, ['lemon', 'octopus']);
  expect(drink).toHaveBeenNthCalledWith(1, 'lemon');
  expect(drink).toHaveBeenNthCalledWith(2, 'octopus');
});
```

*Note: The nth argument must be positive integer starting from 1.*

## 1/2 mock

Source (Jest Docs): [Click here](https://jestjs.io/docs/mock-functions#mock-implementations)

```ts
const myMockFn = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'
```

## Learn about mock functions and using `jest.spyOn(..., ...).mockImplementation(() => Promise.resolve(undefined))` along with `toHaveBeenCalledWith` assertions

(check: `Why use mock testing functions` in telegram slasher-private-channel to know specifics learned)

*Medium Article suggested by Eric's Suggested Article: [Click here](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)*

![image](https://user-images.githubusercontent.com/31458531/216039957-fc6e61a6-49df-4579-9676-07789174d52c.png)
	
## For bettter testing use `expect().toEqual(...)`

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

## Testing asynch operation with jest

  ```js
  describe.only('something', () => {
    it.only('shoudl it be?', (done) => {
      console.log('hello');
      done() // if done is not called then the test will not pass at all. In fact the setTimeout warning is thrown.
    });
  });
  ```
## Socket.io Testing with jest:

Click here: Official Docs - [Click here](https://socket.io/docs/v4/testing/)

## Amazingly defined funcion to wait for a callback function but reject after 2 seconds if didn't receive the event, YO!!

Inspiratin: `slas***-web-new/test/helpers/gateway-test-helpers.ts`

```ts
export async function waitForAuthSuccessMessage(client: Socket) {
  return new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Did not receive authSuccess message in a reasonable amount of time'));
    }, AUTH_SUCCESS_WAIT_TIMEOUT);

    client.once('authSuccess', (payload) => {
      expect(payload).toEqual({ success: true });
      clearTimeout(timeout);
      resolve();
    });
  });
}
```

## Jest debugging command from official docs:

`node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]`

## Define test timeout for a individual test like that

  ```js
  it('does a lot of stuff exceeding default 5 sec timeout', async () => {
    // ...
  }, 10000)
  ```

## **You can define jest config (e.g., test timeout for paricular file) for a single file basis by that**

```bash
jest.setTimeout(20_000)
```
