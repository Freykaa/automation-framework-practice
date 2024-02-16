import page from '../../po/pages/index.js';

describe("Sign in", () => {
    beforeEach(async () => {
        await page('promo').open();
        await page('promo').goToLoginPage();
      });

    it("Sign in using email", async () => {
        await page('login').login('motay64399@anawalls.com', '&mDXtUkEiiF$97&');
        await expect(browser).toHaveUrl('https://trello.com/u/motay64399/boards');
    });
});