import page from "../../po/pages/index.js";

describe("Card actions", () => {
    beforeEach(async () => {
        await page('promo').open();
        await page('promo').goToLoginPage();
        await page('login').login('motay64399@anawalls.com', '&mDXtUkEiiF$97&'); //steps for authorising user
        await page('home').goToHomeBoardTab();
        await page('home').goToTestBoard();
      });

    it("Create a card", async () => {
        await page('board').createCard('penguin');
        await expect(page('board').getCardName()).toHaveText('penguin');
        });
});