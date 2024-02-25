import { test, expect, chromium, firefox } from "@playwright/test";

test("Multi tabbing", async ({ page, context }) => {
  await page.goto("https://makeup.com.ua/");

  const newTab = await context.newPage();
  await newTab.goto("https://www.bing.com/");
  await newTab.fill("#sb_form_q", "Automation testing"); // you an search any other text here
  await newTab.press("#sb_form_q", "Enter");

  const link = await page.waitForSelector(
    "//a[@title='MAKEUP: интернет-магазин косметики и ароматов']"
  );
  const titleAttribute = await link.getAttribute("title");

  await newTab.fill("#sb_form_q", titleAttribute);
  await newTab.press("#sb_form_q", "Enter");
});

test("Multiple browsers", async ({ page, context }) => {
  const browser1 = await chromium.launch();
  const newPage1 = await browser1.newPage();
  await newPage1.goto("https://www.google.com");
  const browser2 = await firefox.launch();
  const newPage2 = await browser2.newPage();
  await newPage2.goto("https://makeup.com.ua/");
  await browser1.close();
  await browser2.close();
});
