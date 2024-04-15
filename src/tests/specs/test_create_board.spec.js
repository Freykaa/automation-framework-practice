import page from '../../po/pages/index.js';

describe('Board actions', () => {
  beforeEach(async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.USERNAME, process.env.PASSWORD); // steps for authorising user
    await page('home').goToHomeBoardTab();
  });

  it('Create a board', async () => {
    await page('home').createBoard('creation');
    await expect(browser).toHaveUrlContaining('creation');
  });
});

// TODO add aftereach section to delete created artifacts
