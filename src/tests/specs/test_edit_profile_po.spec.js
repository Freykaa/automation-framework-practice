import page from "../../po/pages/index.js";
// refacto -- move all actions to page object
describe("Edit Profile", () => {
    beforeEach(async () => {
        await page('home').open();
        await page('home').goToLoginPage();
        await page('login').login('motay64399@anawalls.com', '&mDXtUkEiiF$97&'); //steps for authorising user
      });

    it("Get error when changing to existing username", async () => {
        await page('boards').goToAccountProfile();
        await page('account').changeAccountUsername('testingtester');
        await expect(page('account').profileTab.saveProfileErrorUsername).toBeDisplayed();
        });
});