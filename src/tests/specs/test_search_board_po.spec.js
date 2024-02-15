import page from '../../po/pages/index.js';

describe("Sign in", () => {
    beforeEach(async () => {
        await page('home').open();
        await page('home').goToLoginPage();
        await page('login').login('motay64399@anawalls.com', '&mDXtUkEiiF$97&');
      });

    it("Search for a board", async () => {
        await page('boards').searchBoard('filter');
        await expect(page('boards').searchResults()).toBeClickable();
    });
});