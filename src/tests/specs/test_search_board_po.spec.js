import page from '../../po/pages/index.js';

describe("Search actions", () => {
    beforeEach(async () => {
        await page('promo').open();
        await page('promo').goToLoginPage();
        await page('login').login('motay64399@anawalls.com', '&mDXtUkEiiF$97&');
      });

    it("Search for a board", async () => {
        await page('home').searchBoard('filter');
        await expect(page('home').searchResults()).toBeClickable();
    });
});