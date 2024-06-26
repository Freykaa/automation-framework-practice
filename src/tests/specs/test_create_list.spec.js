import page from '../../po/pages/index.js';

describe('List actions', () => {
  beforeEach(async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD); // steps for authorising user
    await page('home').goToHomeBoardTab();
    await page('home').goToTestBoard();
  });

  it('Create a list', async () => {
    await page('board').createList('animal');
    // await expect(page('board').getListName()).toHaveText('testing');
    await expect(page('board').getListName()).toHaveText('animal');
  });
});

// TODO add aftereach section to delete created artifacts
