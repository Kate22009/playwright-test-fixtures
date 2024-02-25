import { Page, test as baseTest,  expect, chromium } from "@playwright/test";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

type basePage = {

    homePage: HomePage,
    loginPage : LoginPage,
    userPage : Page

}

export const test = baseTest.extend<basePage>({

    homePage: async({page},use)=>{

        let homePage = new HomePage(page)

        await use(homePage)

    },

    loginPage: async({page},use)=>{

        let loginPage = new LoginPage(page)

        await use(loginPage)
        const Login = new LoginPage(page);

        await Login.gotoLoginPage();

        await Login.login("katetest22009@gmail.com", "Test123");

        await Login.accountPage("Мій обліковий запис");

        await Login.logout();

        await use(loginPage)
    }
})