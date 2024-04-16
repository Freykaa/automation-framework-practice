import page from '../../po/pages/index.js';

describe('Search actions', () => {
  beforeEach(async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.USERNAMETRELLO, process.env.PASSWORDTRELLO); // steps for authorising user
  });

  it('Search for a board', async () => {
    await page('home').searchBoard('filter');
    await expect(page('home').searchResults()).toBeClickable();
  });
});
