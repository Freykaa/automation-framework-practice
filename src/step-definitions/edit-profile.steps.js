import { Given, When, Then } from '@wdio/cucumber-framework';
import page from '../po/pages/index.js';

Given(/^user is logged in$/, async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD);
});

When(/^user navigates to the account profile$/, async () => {
    await page('home').goToAccountProfile();
});

When(/^user attempts to change the account username to "([^"]*)"$/, async (newUsername) => {
    await page('account').changeAccountUsername(newUsername);
});

Then(/^user should see an error indicating that the username is already taken$/, async () => {
    await expect(page('account').profileTab.saveProfileErrorUsername).toBeDisplayed();
});
