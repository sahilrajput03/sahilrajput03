# Jest and expect

**Quick Links:**
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

Also, added on stackoverflow: [Cilck here](https://stackoverflow.com/a/77337161/10012446)

Create file: `logger-utils.ts` with following code:

```ts
/**
 * Why use `jestLogger` in tests instead of regular console.log in our tests file?
 * > Because the default version of console.log in tests environment is manipulated by Jest
 * environment so that each log prints the line and filename of the log. This ends up in
 * lot of verbosity and thus hinders the debugging experience to some users.
 * Usage:
 * In any test file, use below code on top of file:

  import { jestLogger } from '../../utils/logger-utils';
  console.log = jestLogger;

  Note: We don't want to directly use `jestLogger` because we do not
  get eslint waring of no-console-log.
  So, we should override console.log so that we get eslint warnings and
  we don't end up getting log statements in our tests.

*/

// eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
export const jestLogger = require('console').log;
```

and now in your tests files, you can use:


```ts
// TOP OF THE FILE
import { jestLogger } from '../../utils/logger-utils';
console.log = jestLogger; // this thorws warning but let it be because we anyway we want to remove this after testing is complete.

// in your tets
console.log('hello');
```

***FYI: Other accepted solution from stackoverflow:***

Source (stackoverflow): [Click here](https://stackoverflow.com/a/68017229/10012446)

```ts
const jestConsole = console;

beforeEach(() => {
  global.console = require('console');
});

afterEach(() => {
  global.console = jestConsole;
});
```

## more assertion helpers for `.toEqual`

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

![image](https://user-images.githubusercontent.com/31458531/216784563-1f2bc4bd-530d-4f7e-8f03-40b45fb93a8c.png)


## How to check multiple arguments on multiple calls for jest spies

Source: [Click here](https://stackoverflow.com/a/50600842/10012446)

![image](https://user-images.githubusercontent.com/31458531/216117745-cbf22f17-a465-419b-948e-615ee0b78eae.png)

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

  ![image](https://user-images.githubusercontent.com/31458531/203509895-cc71e1db-36c1-4f62-be6b-d1e55a211d8f.png)

## Jest debugging command from official docs:

`node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]`

## Define test timeout for a individual test like that

  ```js
  it('does a lot of stuff exceeding default 5 sec timeout', async () => {
    // ...
  }, 10000)
  ```

## **You can define jest config for a single file basis by that**

  ![image](https://user-images.githubusercontent.com/31458531/211875277-0fa30c25-a9c0-4331-85ad-a32ac42fbb2f.png)

