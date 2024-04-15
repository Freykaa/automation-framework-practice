import page from '../../po/pages/index.js';

describe('Filter actions', () => {
  beforeEach(async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.USERNAME, process.env.PASSWORD); // steps for authorising user
    await page('home').goToHomeBoardTab();
    await page('home').goToTestBoard();
  });

  it('Filter by keyword', async () => {
    await page('board').filterByKeyword('penguin');
    await expect(page('board').getFilterMatches()).toBeDisplayed();
  });
});

// TODO add aftereach section to delete created artifacts
