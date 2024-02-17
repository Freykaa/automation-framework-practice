import page from "../../po/pages/index.js";

describe("List actions", () => {
    beforeEach(async () => {
        await page('promo').open();
        await page('promo').goToLoginPage();
        await page('login').login('motay64399@anawalls.com', '&mDXtUkEiiF$97&'); //steps for authorising user
        await page('home').goToHomeBoardTab();
        await page('home').goToTestBoard();
      });

    it("Create a list", async () => {
        await page('board').createList('testing');
        await expect(page('board').getListName()).toHaveText('testing');
        });
});

//TODO add aftereach section to delete created artifacts