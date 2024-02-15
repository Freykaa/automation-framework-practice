import page from "../../po/pages/index.js";

describe("Board actions", () => {
    beforeEach(async () => {
        await page('home').open();
        await page('home').goToLoginPage();
        await page('login').login('motay64399@anawalls.com', '&mDXtUkEiiF$97&'); //steps for authorising user
      });

    it("Create a board", async () => {
        await page('boards').createBoard('creation');
        await expect(browser).toHaveUrlContaining('creation');
        });
});