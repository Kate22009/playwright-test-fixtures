import { Page, test as baseTest, chromium as baseChromium, BrowserContext, Browser} from "@playwright/test";

import { HomePage } from "./pages/HomePage";

type basePage = {

    homePage: HomePage,

    page1: Page,

    page2: Page,

    browser: Browser

}

export const test = baseTest.extend<basePage>({

    browser:async({},use)=>{

        const browser = await chromium.launch({

            proxy: {

              server: 'http://myproxy.com:3128',

              username: process.env.username,

              password: process.env.password

            }

          });

        await use(browser)

    },

    page1:async({browser},use)=>{

        let page = await browser.newPage()

        await use(page)

    },

    page2:async({browser},use)=>{

        let page = await browser.newPage()

        await use(page)

    },



    homePage: async({page},use)=>{

        let homePage = new HomePage(page)

        await use(homePage)

    }

})

export const chromium = baseChromium