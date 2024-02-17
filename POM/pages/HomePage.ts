import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  // readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async goto() {
    await this.page.goto('https://account.next.ua/uk/');
  }
}