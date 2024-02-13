import page from "../../po/pages/index.js";

describe("Edit Profile", () => {
    beforeEach(async () => {
        await page('home').open();
        await page('home').goToLoginPage();
        await page('login').login('motay64399@anawalls.com', '&mDXtUkEiiF$97&'); //steps for authorising user
      });

    it("Get error when changing to existing username", async () => {
        await page('boards').header.memberMenuBtn.click();
        await page('boards').accountMenu.accountMenuProfileBtn.click();
        await page('account').profileTab.input('username').setValue('testingtester');
        await page('account').profileTab.profileSbmtBtn.click();
        await expect(page('account').profileTab.saveProfileErrorUsername).toBeDisplayed();
    });
});