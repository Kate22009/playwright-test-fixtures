import { test, expect, chromium } from '@playwright/test';

test('Without fixtures', async ({  }) => {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto("https://www.next.ua/uk")

  console.log(await context.cookies());
  console.log("after clearing cookies")
  await context.clearCookies();
  console.log(await context.cookies());

  await page.pause()

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto("https://www.google.com/")

});

test.only('With fixtures', async ({ page, context, browser, request, browserName}) => {
  await page.goto("https://www.next.ua/uk")

  console.log(await context.cookies());
  console.log("after clearing cookies")
  await context.clearCookies();
  console.log(await context.cookies());

  await page.pause()

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto("https://www.google.com/")

  const req = await request.get("https://reqres.in/api/users/2")

  const res = await req.json();
  console.log(res)

  console.log(await browserName)

});