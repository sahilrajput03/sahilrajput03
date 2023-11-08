# Learn Playwright

**Tutorials:**
- **TODO:** Playwright Beginner Tutorials: [Click here](https://www.youtube.com/watch?v=4_m3HsaNwOE&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8) [6h]
  - **Test Generator and Generating Tests** (write tests with GUI):
    - How To Record Tests (❤️ 5th video from above playlist): [Click here](https://www.youtube.com/watch?v=-F0eCZK_vxE&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=5)
    - Official Docs:
      - Test generator: [Click here](https://playwright.dev/docs/codegen)
      - Generating tests: [Click here](https://playwright.dev/docs/codegen-intro)
- Amazing Article: [Click here](https://www.lambdatest.com/playwright) (March 17 2023)

Docs Links:
- **Running Tests:** [Click here](https://playwright.dev/docs/running-tests)
- **Debugging Tests:** [Click here](https://playwright.dev/docs/debug)
- Locator: [Click here](https://playwright.dev/docs/api/class-locator)
- Locators: [Click here](https://playwright.dev/docs/locators)
- Test-timeouts: [Click here](https://playwright.dev/docs/test-timeouts)
- Test configuration: [Click here](https://playwright.dev/docs/test-configuration)

A testing tool.

## Latest changes made by Eric in slasher?

[Commit](https://bitbucket.org/slasherapp/slasher-web-frontend/commits/da1ffcfe68c49f9c4d467aef397edac4880e0e95#Le2e/registration/security.test.tsF7T9)

## Slowmo might be very effective for testing

![image](https://user-images.githubusercontent.com/31458531/230953148-0b481449-9d93-4e1c-a01d-084142f7407e.png)

## Playwright Cheatsheet

Source: [Click here](https://www.youtube.com/watch?v=LTwg0kqdK4I)

![image](https://user-images.githubusercontent.com/31458531/230945947-ebd07c34-aaba-4e5a-8fcc-a9c4d3132921.png)

## Playwright Text Notes

**Timeouts (in order of my usage):**

```txt
1. Navigation Timeout
=====================
`config.use.navigationTimeout` in `playwright.config.ts`
(Default = 0 i.e., no timeout)

// USAGE: Increase navigation timeout to support slow systems (applies to: page.goBack(), page.goForward(), page.goto(url[, options]), page.reload(), page.setContent(), page.waitForNavigation())
page.context().setDefaultNavigationTimeout(180_000); // Default = 0 (or value set in `config.use.navigationTimeout` in `playwright.config.ts`)


2. `Test` and `beforeAll/afterAll` timeout
==========================================
`config.timeout` in `playwright.config.ts`

- For test: `test.setTimeout(180_000)` // DEFAULT = 30_000 (or value set in `config.timeout` in `playwright.config.ts`)
- For `beforeAll/afterAll` timeout: `test.setTimeout(180_000)` (this doesn't seem to be settable via `playwright.config.ts`)

3. Default Timeout
==================
`config.use.actionTimeout` in `playwright.config.ts`
(Default = 0 i.e., no timeout)

browserContext.setDefaultTimeout(180_000)
page.setDefaultTimeout(180_000)
locator.click({ timeout: 180_000 })
```

**Other:**

```txt
Date Last Updated: 9/April/2023
================================

WAIT UNTIL NETWORK IDLE
========================
await page.waitForURL(homeUrl, {
  waitUntil: 'networkidle',
});


WAIT FOR SOME TIME ON A PAGE
============================
await page.waitForTimeout(20_000);

TO WAIT FOR A SELECTOR
======================
await page.waitForSelector('main');


TO HELP WITH CHECKING URL AT ANY GIVEN TIME:
============================================
console.log(`Current URL-1: ${page.url()}`);
await page.goto(pagePath, { timeout: 180_000 });
console.log(`Current URL-2: ${page.url()}`);

await page.waitForLoadState('networkidle');
console.log(`Current URL-A: ${page.url()}`);

const expectedUrl = `${baseURL}/app/home`;
await page.waitForNavigation({ url: expectedUrl, timeout: 50_000 });
console.log(`Current URL-B: ${page.url()}`);



TO ENABLE UI FOR browser
========================
+  const browser = await chromium.launch({ headless: false });

Also, you can use --headed flag while running the test so that tests run in browser opened (headed/non-headless mode).


THINGS WHICH FIXED THE ISSUE!
================================
// Improve test timeout to support slow systems.
test.setTimeout(180_000); // Default = 10_000 or value set in file `playwright.config.ts` file i.e,. `config.timeout` value.
test.describe(pagePath, () => {...})
// Make browser ready for testing
setupMockResponses(page);


VIEW COMPLETE HTML OF PAGE
==========================
console.log('html?', await page.content());
console.log('innerHTML?', await page.innerHTML('main'));
console.log('innerText?', await page.innerText('main'));


SET NAVIGATION TIMEOUT FOR A SINGLE NAVIGATION
==============================================
await page.goto(str, {
  timeout: 180_000,
  waitUntil: 'load', // "load" |  | "networkidle" | "commit" | 'domcontentloaded' | undefined
});


playwrignt.config.ts
====================
{

  webServer: {
    command: process.env.CI
      ? `npm run serve-build -- -l ${port}`
      : `cross-env NODE_ENV=test PORT=${port} npm run start`,
    port,
    // TIP: Use below to test with `react-scripts` server.
    // Note: You would need to change the PORT value to 3000 as well.
    // reuseExistingServer: true,
  },
}


 DEBUGGING TIP
 ==============
 Use below instruction to pause chromium and then test on your own
 and without automation. Use either of below options:
 1. await page.waitForTimeout(10000 * 1000);
 2. page.pause()
```

## Thats how you run a single file with playwrigt

`npm run test:e2e -- e2e/home.test.ts`

## TODO URGENT: Remove text related to slasher's internal code business and folder structure by bluriing it!

Please do it ASAP!

## Awesome Debugging tip to debug chromium mock-api response issues

![image](https://user-images.githubusercontent.com/31458531/230744216-0ed2a8bf-4db5-4154-bf7c-527713b0ea4b.png)

## Playwright mock responses for api calls

Docs: [Click here](https://playwright.dev/docs/network)

![image](https://user-images.githubusercontent.com/31458531/230743178-0ab11038-a7c5-430d-b2d1-77bea3b01af7.png)

## Amazing 2

![image](https://user-images.githubusercontent.com/31458531/230742867-2062504f-0504-47f0-a284-0486fda56401.png)

## Amazing thing

![image](https://user-images.githubusercontent.com/31458531/230742192-e545df16-f168-4095-90b1-e008009a3a29.png)

## Vscod extension

![image](https://user-images.githubusercontent.com/31458531/208975375-054ee2ef-58d0-48f7-a444-3c7e4716b2fc.png)
