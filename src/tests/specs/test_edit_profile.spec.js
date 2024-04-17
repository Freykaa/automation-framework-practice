import page from '../../po/pages/index.js';
// TODO -- move all actions to page object
describe('Edit Profile', () => {
  beforeEach(async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD); // steps for authorising user
  });

  it('Get error when changing to existing username', async () => {
    await page('home').goToAccountProfile();
    await page('account').changeAccountUsername('testingtester');
    await expect(
      page('account').profileTab.saveProfileErrorUsername,
    ).toBeDisplayed();
  });
});
