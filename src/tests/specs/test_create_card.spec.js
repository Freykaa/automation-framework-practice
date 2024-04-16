import page from '../../po/pages/index.js';

describe('Card actions', () => {
  beforeEach(async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.USERNAMETRELLO, process.env.PASSWORDTRELLO); // steps for authorising user
    await page('home').goToHomeBoardTab();
    await page('home').goToTestBoard();
  });

  it('Create a card', async () => {
    await page('board').createCard('penguin');
    await expect(page('board').getCardName()).toHaveText('penguin');
  });
});

// TODO add aftereach section to delete created artifacts
