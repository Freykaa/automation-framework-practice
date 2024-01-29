import { page } from "../../po/index.js";

describe("Edit Profile", () => {
    beforeEach(async () => {
        await page('home').open();
        await page('home').navigationBar.loginBtn.click();
        await page('login').loginForm.loginSubmitBtn.click();
        await page('login').loginForm.input('username').setValue('motay64399@anawalls.com');
        await page('login').loginForm.loginSubmitBtn.click();
        await page('login').loginForm.input('password').waitForDisplayed({ timeout: 10000 });
        await page('login').loginForm.input('password').setValue('&mDXtUkEiiF$97&');
        await page('login').loginForm.loginSubmitBtn.click();
      });

    it("Get error when changing to existing username", async () => {
        await page('boards').header.memberMenuBtn.click();
        await page('boards').accountMenu.accountMenuProfileBtn.click();
        await page('account').profileTab.input('username').setValue('testingtester');
        await page('account').profileTab.profileSbmtBtn.click();
        await expect(page('account').profileTab.saveProfileErrorUsername).toBeDisplayed();
    });
});