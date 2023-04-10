# Learn Playwright

Tutorials:
- Playwright Beginner Tutorial 3 | How to run tests: [Click here](https://www.youtube.com/watch?v=LTwg0kqdK4I)

Quick Links:
- Locator: [Click here](https://playwright.dev/docs/api/class-locator)
- Locators: [Click here](https://playwright.dev/docs/locators)
- Test-timeouts: [Click here](https://playwright.dev/docs/test-timeouts)
- Test configuration: [Click here](https://playwright.dev/docs/test-configuration)e

A testing tool.

## Playwright Cheatsheet

Source: [Click here](https://www.youtube.com/watch?v=LTwg0kqdK4I)

![image](https://user-images.githubusercontent.com/31458531/230945015-2520e77a-a3ab-4a8c-8b5b-7b10174e6d07.png)


## Playwright Text Notes

```txt
Date Last Updated: 9/April/2023
================================
TODO: MAKE NOTES OUT OF ALL THESE
=================================


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


THINGS WHICH FIXED THE ISSUE!
================================
// Improve test timeout to support slow systems.
test.setTimeout(180_000); // Default = 10_000
test.describe(pagePath, () => {...})
// Make browser ready for testing
setupMockResponses(page);
// Increase navigation timeout to support slow systems.
page.context().setDefaultNavigationTimeout(180_000); // Default = 10_000


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


`setDefaultNavigationTimeout()` change navigation timeout for following methods
======================================================================
// page.goBack(), page.goForward(), page.goto(url[, options]),
// page.reload(), page.setContent(), page.waitForNavigation()


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
