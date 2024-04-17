import page from '../../po/pages/index.js';

describe('Search actions', () => {
  beforeEach(async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD); // steps for authorising user
  });

  it('Search for a board', async () => {
    await page('home').searchBoard('filter');
    await expect(page('home').searchResults()).toBeClickable();
  });
});
