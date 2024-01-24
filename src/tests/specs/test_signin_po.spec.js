import { pages } from '/Users/inna/projects/automation-framework-practice/src/po/index.js';

describe("Sign in", () => {
    beforeEach(async () => {
        await pages.page('home').open();
      });
    
    it("Sign in using email", async () => {
        await pages.page('home').headerComponent.loginBtn.click();
        await pages.page('login').loginComponent.loginSubmitBtn.click();
        await pages.page('login').loginComponent.input('username').setValue('motay64399@anawalls.com');
        await pages.page('login').loginComponent.loginSubmitBtn.click();
        await pages.page('login').loginComponent.input('password').waitForDisplayed({ timeout: 10000 });
        await pages.page('login').loginComponent.input('password').setValue('&mDXtUkEiiF$97&');
        await pages.page('login').loginComponent.loginSubmitBtn.click();
        await expect(browser).toHaveUrl('https://trello.com/u/motay64399/boards');
    } )
})