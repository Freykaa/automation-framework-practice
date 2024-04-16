import page from '../../po/pages/index.js';

describe('Edit workspace', () => {
  beforeEach(async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.USERNAMETRELLO, process.env.PASSWORDTRELLO); // steps for authorising user
  });

  it('Change workspace name', async () => {
    await page('home').leftSidebar.homeWorkspaceSettingsBtn.click();
    await page('workspaceSettings').changeWorkspaceDetails(
      'testingtesting space',
    );
    await expect(
      page('workspaceSettings').workspaceNavigation.workspaceDetailName,
    ).toHaveText('testingtesting space');
  });
});
