import { test } from "../POM/fixture.ts";


test("Home  page test", async ({ homePage }) => {
  homePage.goto();
});

test("Login test", async ({ loginPage }) => {
  loginPage.gotoLoginPage()
  loginPage.login("katetest22009@gmail.com", "Test123");
});

test("Log out test", async ({ loginPage }) => {
    loginPage.gotoLoginPage()
    loginPage.login("katetest22009@gmail.com", "Test123");
    loginPage.logout()
  });

