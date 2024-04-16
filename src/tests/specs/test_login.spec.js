import page from '../../po/pages/index.js';

describe('Sign in', () => {
  beforeEach(async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
  });

  it('Sign in using email', async () => {
    await page('login').login(process.env.USERNAMETRELLO, process.env.PASSWORDTRELLO); // steps for authorising user
    await expect(browser).toHaveUrl('https://trello.com/u/motay64399/boards');
  });
});
