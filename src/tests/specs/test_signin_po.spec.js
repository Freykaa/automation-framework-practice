import { page } from '../../po/index.js';

describe("Sign in", () => {
    beforeEach(async () => {
        await page('home').open();
      });

    it("Sign in using email", async () => {
        await page('home').header.loginBtn.click();
        await page('login').loginForm.loginSubmitBtn.click();
        await page('login').loginForm.input('username').setValue('motay64399@anawalls.com');
        await page('login').loginForm.loginSubmitBtn.click();
        await page('login').loginForm.input('password').waitForDisplayed({ timeout: 10000 });
        await page('login').loginForm.input('password').setValue('&mDXtUkEiiF$97&');
        await page('login').loginForm.loginSubmitBtn.click();
        await expect(browser).toHaveUrl('https://trello.com/u/motay64399/boards');
    } )
})