import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly approve_cookie_button: Locator;
  readonly username_field: Locator;
  readonly password_field: Locator;
  readonly submit_button: Locator;
  readonly log_out_button: Locator;



  constructor(page: Page) {
    this.page = page;
    this.approve_cookie_button = page.locator("//button[@id='onetrust-accept-btn-handler']");
    this.username_field = page.locator("//input[@id='EmailOrAccountNumber']");
    this.password_field = page.locator("//input[@id='Password']");
    this.submit_button = page.locator("//input[@id='SignInNow']");
    this.log_out_button = page.locator("//a[@id='btnlogout']");
  }

  async gotoLoginPage() {

    await this.page.goto("https://account.next.ua/uk/Login", { timeout: 10000 });
      // 1. Initiate event listener
      this.page.on('dialog', async dialog => {
        // 3. Do stuff with the dialog here (reject/accept etc.)
        console.log(dialog.message());
        await dialog.accept()
    });
    // 2. Press the delete button
    await this.approve_cookie_button.click();
    }

  async login(username, password) {
    await this.username_field .fill(username);
    await this.password_field.fill(password);
    await this.submit_button.click();
  }

  async accountPage(content) {

    const text = await this.page.locator('div.account-menu>h2').textContent();
    
    expect(text).toContain(content);
    
    }
  
  async logout() {
    
    await this.log_out_button.click();
    
    }

}