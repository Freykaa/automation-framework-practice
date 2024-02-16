import page from "../../po/pages/index.js";

describe("Board actions", () => {
    beforeEach(async () => {
        await page('promo').open();
        await page('promo').goToLoginPage();
        await page('login').login('motay64399@anawalls.com', '&mDXtUkEiiF$97&'); //steps for authorising user
      });

    it("Create a board", async () => {
        await page('home').createBoard('creation');
        await expect(browser).toHaveUrlContaining('creation');
        });
});

//add aftereach section to delete created artifacts